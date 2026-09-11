#!/usr/bin/env python3
"""clip.mp4 (on disk) → marionet.pose/v0 + marionet.clip/v0.

This script never fetches. Acquisition is out of scope.

  python scripts/video_to_marionet.py --backend dummy -o data/clips/dummy.json
  python scripts/video_to_marionet.py clip.mp4 --backend dummy --lang eso --gloss KASS
  python scripts/video_to_marionet.py clip.mp4 --backend mediapipe -o data/clips/out.json
  python scripts/video_to_marionet.py --manifest data/corpus.jsonl --backend dummy
  python scripts/video_to_marionet.py --self-test

Backends:
  dummy         synthetic pose (no model, no video required)
  mediapipe     local Pose+Hands if mediapipe + opencv are installed
  dwpose_hamer  not in-process; prints the GPU contract and exits 2
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
if str(ROOT / "scripts") not in sys.path:
    sys.path.insert(0, str(ROOT / "scripts"))

from marionet_pose import (  # noqa: E402
    FAIL_BLUR,
    FAIL_EMPTY,
    FAIL_NO_HAND,
    FAIL_NO_VIDEO,
    FAIL_OK,
    FAIL_OUT_OF_FRAME,
    dummy_pose,
    retarget_pose,
    validate_clip,
    validate_pose,
    write_json,
)


def parse_args(argv: list[str] | None = None) -> argparse.Namespace:
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("video", nargs="?", help="isolated-sign video on disk")
    p.add_argument("--backend", default="dummy", choices=("dummy", "mediapipe", "dwpose_hamer"))
    p.add_argument("-o", "--output", help="MarionetClip JSON path")
    p.add_argument("--pose-out", help="optional marionet.pose/v0 JSON path")
    p.add_argument("--lang", default=None, help="ISO 639-3 language code")
    p.add_argument("--gloss", default=None)
    p.add_argument("--manifest", help="JSONL of ClipRecords (path, language, gloss, ...)")
    p.add_argument(
        "--phonology",
        nargs="?",
        const=str(ROOT / "data/runs/phonology.npz"),
        default=None,
        help="run pose→SignDesc heads; optional ckpt path (default data/runs/phonology.npz)",
    )
    p.add_argument("--self-test", action="store_true")
    return p.parse_args(argv)


def extract_dummy(video: Path | None, lang: str | None, gloss: str | None) -> dict:
    pose = dummy_pose(language=lang, gloss=gloss)
    if video is not None:
        pose["source_path"] = str(video)
    return pose


def _mp_xyz(landmark) -> list[float]:
    return [float(landmark.x), float(landmark.y), float(landmark.z)]


def _blur_var(gray) -> float:
    try:
        import cv2  # type: ignore

        return float(cv2.Laplacian(gray, cv2.CV_64F).var())
    except Exception:
        return 999.0


def extract_mediapipe(video: Path, lang: str | None, gloss: str | None) -> dict:
    try:
        import cv2  # type: ignore
        import mediapipe as mp  # type: ignore
    except ImportError as exc:
        raise SystemExit(
            "mediapipe backend needs opencv-python and mediapipe in this Python.\n"
            "Install locally, or use --backend dummy. "
            f"({exc})"
        ) from exc

    if not video.exists():
        return {
            "schema": "marionet.pose/v0",
            "fps": 30.0,
            "n_frames": 0,
            "status": FAIL_NO_VIDEO,
            "language": lang,
            "gloss": gloss,
            "body": [],
            "right": [],
            "left": [],
            "backend": "mediapipe",
        }

    cap = cv2.VideoCapture(str(video))
    fps = float(cap.get(cv2.CAP_PROP_FPS) or 30.0) or 30.0
    fps = min(fps, 30.0)
    pose_mod = mp.solutions.pose
    hands_mod = mp.solutions.hands
    body_frames = []
    right_frames = []
    left_frames = []
    blur_low = 0
    no_hand = 0
    n = 0
    with pose_mod.Pose(static_image_mode=False, model_complexity=1) as pose_net, hands_mod.Hands(
        static_image_mode=False, max_num_hands=2, model_complexity=1
    ) as hands_net:
        from marionet_pose import MP_POSE_INDEX

        while True:
            ok, frame = cap.read()
            if not ok:
                break
            n += 1
            t = (n - 1) / fps
            rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
            if _blur_var(gray) < 20:
                blur_low += 1
            pose_res = pose_net.process(rgb)
            hand_res = hands_net.process(rgb)
            kps = {}
            if pose_res.pose_world_landmarks:
                lms = pose_res.pose_world_landmarks.landmark
                for name, idx in MP_POSE_INDEX.items():
                    kps[name] = _mp_xyz(lms[idx])
            body_frames.append({"t": round(t, 4), "keypoints": kps})

            left_xyz = None
            right_xyz = None
            if hand_res.multi_hand_landmarks and hand_res.multi_handedness:
                for hand_lms, handed in zip(hand_res.multi_hand_landmarks, hand_res.multi_handedness):
                    label = handed.classification[0].label.lower()
                    xyz = [_mp_xyz(lm) for lm in hand_lms.landmark]
                    # Selfie-camera labels are mirrored; we still store as labeled.
                    if label == "left":
                        left_xyz = xyz
                    else:
                        right_xyz = xyz
            if left_xyz is None and right_xyz is None:
                no_hand += 1
            left_frames.append({"t": round(t, 4), "xyz": left_xyz} if left_xyz else {"t": round(t, 4)})
            right_frames.append({"t": round(t, 4), "xyz": right_xyz} if right_xyz else {"t": round(t, 4)})
    cap.release()

    status = FAIL_OK
    if n == 0:
        status = FAIL_EMPTY
    elif no_hand / max(n, 1) > 0.5:
        status = FAIL_NO_HAND
    elif blur_low / max(n, 1) > 0.5:
        status = FAIL_BLUR
    else:
        # wrist near image edge on many frames → out_of_frame
        edge = 0
        for fr in right_frames + left_frames:
            xyz = fr.get("xyz")
            if not xyz:
                continue
            x, y = xyz[0][0], xyz[0][1]
            if x < 0.05 or x > 0.95 or y < 0.05 or y > 0.95:
                edge += 1
        if edge / max(n, 1) > 0.4:
            status = FAIL_OUT_OF_FRAME

    return {
        "schema": "marionet.pose/v0",
        "fps": fps,
        "n_frames": n,
        "status": status,
        "language": lang,
        "gloss": gloss,
        "source_path": str(video),
        "body": body_frames,
        "right": right_frames,
        "left": left_frames,
        "camera": {"frame": "mediapipe", "note": "image-normalized hands; world-landmarks body"},
        "backend": "mediapipe",
        "e0": {"no_hand_frac": round(no_hand / max(n, 1), 3), "blur_frac": round(blur_low / max(n, 1), 3)},
    }


def extract(backend: str, video: Path | None, lang: str | None, gloss: str | None) -> dict:
    if backend == "dummy":
        return extract_dummy(video, lang, gloss)
    if backend == "dwpose_hamer":
        raise SystemExit(
            "dwpose_hamer is the rented-GPU contract (batch 1, 48GB, isolated clips), "
            "not an in-process backend yet. Emit the same marionet.pose/v0 schema. "
            "Use --backend mediapipe or dummy on this machine."
        )
    if backend == "mediapipe":
        if video is None:
            raise SystemExit("mediapipe backend requires a video path")
        return extract_mediapipe(video, lang, gloss)
    raise SystemExit(f"unknown backend {backend}")


def default_output(video: Path | None, gloss: str | None, lang: str | None) -> Path:
    stem = gloss or (video.stem if video else "dummy")
    lang_part = lang or "und"
    return ROOT / "data" / "clips" / lang_part / f"{stem}.json"


def run_one(args: argparse.Namespace, video: Path | None, lang: str | None, gloss: str | None, output: Path) -> dict:
    pose = extract(args.backend, video, lang, gloss)
    perr = validate_pose(pose)
    if perr:
        raise SystemExit("invalid pose: " + "; ".join(perr))
    clip = retarget_pose(pose)
    cerr = validate_clip(clip)
    if cerr:
        raise SystemExit("invalid clip: " + "; ".join(cerr))
    write_json(output, clip)
    if args.pose_out:
        pose_path = Path(args.pose_out)
        write_json(pose_path, pose)
    else:
        pose_path = output.with_suffix(".pose.json")
        write_json(pose_path, pose)
    info = {"clip": str(output), "pose": str(pose_path), "status": pose.get("status"), "n_frames": pose.get("n_frames")}
    if getattr(args, "phonology", None):
        ckpt = Path(args.phonology)
        if not ckpt.exists():
            info["phonology"] = f"skipped (missing {ckpt}; run scripts/phonology.py setup)"
        else:
            sys.path.insert(0, str(ROOT / "python"))
            from marionet.model import PhonologyHeads, predict_signdesc

            desc = predict_signdesc(pose, PhonologyHeads.load(ckpt), lang=lang, gloss=gloss)
            desc_path = output.with_suffix(".signdesc.json")
            write_json(desc_path, desc)
            info["signdesc"] = str(desc_path)
            info["handshape"] = desc["dominant"]["handshape"]
            info["location"] = desc["dominant"]["location"]
            info["compileReady"] = desc["compileReady"]
    return info


def self_test() -> int:
    pose = dummy_pose(language="eso", gloss="KASS")
    perr = validate_pose(pose)
    assert not perr, perr
    clip = retarget_pose(pose)
    cerr = validate_clip(clip)
    assert not cerr, cerr
    assert clip["source"] == "retargeted"
    assert clip["duration"] > 0
    assert "rightHand" in clip["bones"]
    assert any(k.startswith("rightIndex") for k in clip["bones"])
    out = ROOT / "data" / "clips" / "self-test.json"
    write_json(out, clip)
    print(f"self-test ok  {out}  duration={clip['duration']} bones={len(clip['bones'])}")
    return 0


def main(argv: list[str] | None = None) -> int:
    args = parse_args(argv)
    if args.self_test:
        return self_test()
    if args.manifest:
        n_ok = 0
        n_fail = 0
        for line in Path(args.manifest).read_text().splitlines():
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            rec = json.loads(line)
            video = Path(rec["path"])
            lang = rec.get("language") or args.lang
            gloss = rec.get("gloss") or args.gloss
            output = Path(rec["id"] + ".json") if rec.get("id") else default_output(video, gloss, lang)
            if args.output:
                output = Path(args.output) / output.name
            try:
                info = run_one(args, video, lang, gloss, output)
                print(json.dumps(info))
                n_ok += 1 if info["status"] == FAIL_OK else 0
                n_fail += 0 if info["status"] == FAIL_OK else 1
            except SystemExit as exc:
                print(json.dumps({"path": str(video), "error": str(exc)}))
                n_fail += 1
        print(json.dumps({"ok": n_ok, "fail": n_fail}))
        return 0 if n_fail == 0 else 1
    video = Path(args.video) if args.video else None
    if args.backend != "dummy" and video is None:
        raise SystemExit("video path required unless --backend dummy")
    output = Path(args.output) if args.output else default_output(video, args.gloss, args.lang)
    info = run_one(args, video, args.lang, args.gloss, output)
    print(json.dumps(info))
    return 0 if info["status"] == FAIL_OK else 1


if __name__ == "__main__":
    raise SystemExit(main())
