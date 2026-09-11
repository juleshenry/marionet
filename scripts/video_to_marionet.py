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
  rtmlib        production GPU/CPU wholebody via ONNX Runtime → marionet.pose/v0
  dwpose_hamer  rtmlib or MMPose wholebody + optional HaMeR hands
                prints the GPU contract and exits 2 if those packages are missing
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
    attach_canonical,
    dummy_pose,
    retarget_pose,
    validate_clip,
    validate_pose,
    write_json,
)


def parse_args(argv: list[str] | None = None) -> argparse.Namespace:
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("video", nargs="?", help="isolated-sign video on disk")
    p.add_argument("--backend", default="dummy", choices=("dummy", "mediapipe", "rtmlib", "dwpose_hamer"))
    p.add_argument(
        "--hands",
        default="auto",
        choices=("auto", "hamer", "none"),
        help="hand plugin for rtmlib/dwpose_hamer: auto tries HaMeR, none keeps wholebody 2D",
    )
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
    p.add_argument(
        "--smooth",
        default="none",
        choices=("none", "savgol", "oneeuro", "both"),
        help="savgol = pose xyz before features; oneeuro = finger eulers after retarget; both = both",
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


def _hand_conf(handed, lms) -> float:
    score = float(handed.classification[0].score)
    vis = []
    for lm in lms.landmark:
        v = getattr(lm, "visibility", None)
        if v is not None:
            vis.append(float(v))
    if vis:
        score = min(score, sum(vis) / len(vis))
    return max(0.0, min(1.0, score))


def _head_from_kps(kps: dict) -> dict:
    def g(name):
        v = kps.get(name)
        if not (isinstance(v, (list, tuple)) and len(v) >= 3):
            return None
        return [float(v[0]), float(v[1]), float(v[2])]

    le, re, nose = g("leftEar"), g("rightEar"), g("nose")
    ls, rs = g("leftShoulder"), g("rightShoulder")
    roll = float(le[1] - re[1]) if le and re else 0.0
    yaw = float(nose[0] - 0.5 * (ls[0] + rs[0])) if nose and ls and rs else 0.0
    pitch = float(nose[1] - 0.5 * (le[1] + re[1])) if nose and le and re else 0.0
    return {"yaw": round(yaw, 4), "pitch": round(pitch, 4), "roll": round(roll, 4)}


# MediaPipe Face Mesh (468). Used when the module loads; Pose face is the fallback.
_FM = {
    "nose": 1,
    "leftEye": 33,
    "rightEye": 263,
    "leftBrow": 105,
    "rightBrow": 334,
    "upperLip": 13,
    "lowerLip": 14,
    "mouthLeft": 61,
    "mouthRight": 291,
    "leftEar": 234,
    "rightEar": 454,
}


def _face_from_mesh(lms) -> dict:
    kps = {name: _mp_xyz(lms.landmark[idx]) for name, idx in _FM.items() if idx < len(lms.landmark)}
    return kps


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
    face_mod = getattr(mp.solutions, "face_mesh", None)
    body_frames = []
    right_frames = []
    left_frames = []
    face_frames = []
    blur_low = 0
    no_hand = 0
    n = 0
    face_net = None
    try:
        if face_mod is not None:
            face_net = face_mod.FaceMesh(static_image_mode=False, max_num_faces=1, refine_landmarks=False)
    except Exception:
        face_net = None
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
                    if idx < len(lms):
                        kps[name] = _mp_xyz(lms[idx])
            body_frames.append({"t": round(t, 4), "keypoints": kps})

            face_kps = {}
            if face_net is not None:
                try:
                    face_res = face_net.process(rgb)
                    if face_res.multi_face_landmarks:
                        face_kps = _face_from_mesh(face_res.multi_face_landmarks[0])
                except Exception:
                    face_kps = {}
            if not face_kps:
                for name in (
                    "nose",
                    "leftEye",
                    "rightEye",
                    "leftEar",
                    "rightEar",
                    "mouthLeft",
                    "mouthRight",
                ):
                    if name in kps:
                        face_kps[name] = kps[name]
            face_frames.append(
                {
                    "t": round(t, 4),
                    "keypoints": face_kps,
                    "head": _head_from_kps({**kps, **face_kps}),
                    "conf": 1.0 if face_kps else 0.0,
                }
            )

            left_xyz = None
            right_xyz = None
            left_conf = 0.0
            right_conf = 0.0
            if hand_res.multi_hand_landmarks and hand_res.multi_handedness:
                for hand_lms, handed in zip(hand_res.multi_hand_landmarks, hand_res.multi_handedness):
                    label = handed.classification[0].label.lower()
                    xyz = [_mp_xyz(lm) for lm in hand_lms.landmark]
                    conf = _hand_conf(handed, hand_lms)
                    # Selfie-camera labels are mirrored; we still store as labeled.
                    if label == "left":
                        left_xyz, left_conf = xyz, conf
                    else:
                        right_xyz, right_conf = xyz, conf
            if left_xyz is None and right_xyz is None:
                no_hand += 1
            left_occ = bool(left_xyz is not None and left_conf < 0.4)
            right_occ = bool(right_xyz is not None and right_conf < 0.4)
            if left_xyz and right_xyz:
                dx = left_xyz[0][0] - right_xyz[0][0]
                dy = left_xyz[0][1] - right_xyz[0][1]
                if dx * dx + dy * dy < 0.08 * 0.08:
                    if left_conf <= right_conf:
                        left_occ = True
                    else:
                        right_occ = True
            left_frames.append(
                {"t": round(t, 4), "xyz": left_xyz, "conf": round(left_conf, 3), "occluded": left_occ}
                if left_xyz
                else {"t": round(t, 4), "conf": 0.0}
            )
            right_frames.append(
                {"t": round(t, 4), "xyz": right_xyz, "conf": round(right_conf, 3), "occluded": right_occ}
                if right_xyz
                else {"t": round(t, 4), "conf": 0.0}
            )
    cap.release()
    if face_net is not None:
        face_net.close()

    status = FAIL_OK
    occ_n = sum(1 for fr in right_frames + left_frames if fr.get("occluded"))
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
        elif occ_n / max(n, 1) > 0.5:
            from marionet_pose import FAIL_OCCLUDED

            status = FAIL_OCCLUDED

    pose = {
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
        "face": face_frames,
        "camera": {"frame": "mediapipe", "note": "image-normalized hands; world-landmarks body; face mesh or pose face"},
        "backend": "mediapipe",
        "e0": {
            "no_hand_frac": round(no_hand / max(n, 1), 3),
            "blur_frac": round(blur_low / max(n, 1), 3),
            "occluded_frac": round(occ_n / max(n, 1), 3),
        },
    }
    return attach_canonical(pose)


def extract(
    backend: str,
    video: Path | None,
    lang: str | None,
    gloss: str | None,
    hands: str = "auto",
) -> dict:
    if backend == "dummy":
        return extract_dummy(video, lang, gloss)
    if backend in ("dwpose_hamer", "rtmlib"):
        sys.path.insert(0, str(ROOT / "python"))
        from marionet.extract_gpu import (
            contract_message,
            extract_dwpose_hamer,
            extract_rtmlib,
            missing_body_backend,
        )

        prefer = "rtmlib" if backend == "rtmlib" else "auto"
        if missing_body_backend(prefer):
            print(contract_message(f"requested --backend {backend}", prefer=prefer), file=sys.stderr)
            raise SystemExit(2)
        if video is None:
            raise SystemExit(f"{backend} backend requires a video path")
        if backend == "rtmlib":
            return extract_rtmlib(video, lang, gloss, hands=hands)
        return extract_dwpose_hamer(video, lang, gloss, hands=hands)
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
    pose = attach_canonical(extract(args.backend, video, lang, gloss, hands=getattr(args, "hands", "auto")))
    if getattr(args, "smooth", "none") in ("savgol", "both"):
        sys.path.insert(0, str(ROOT / "python"))
        from marionet.smooth import smooth_pose_xyz

        pose = attach_canonical(smooth_pose_xyz(pose))
    perr = validate_pose(pose)
    if perr:
        raise SystemExit("invalid pose: " + "; ".join(perr))
    clip = retarget_pose(pose)
    if getattr(args, "smooth", "none") in ("oneeuro", "both"):
        sys.path.insert(0, str(ROOT / "python"))
        from marionet.smooth import smooth_clip_fingers

        clip = smooth_clip_fingers(clip)
    try:
        sys.path.insert(0, str(ROOT / "python"))
        from marionet.nmf import expression_tracks, nmf_from_face

        clip["expressions"] = expression_tracks(nmf_from_face(pose), clip.get("duration") or 0.0)
    except Exception:
        clip.setdefault("expressions", {})
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
    assert pose.get("canonical") and pose["canonical"]["end"] > pose["canonical"]["start"]
    assert pose["right"][0].get("conf") == 1.0
    assert pose.get("face")
    clip = retarget_pose(pose)
    cerr = validate_clip(clip)
    assert not cerr, cerr
    assert clip["source"] == "retargeted"
    assert clip["duration"] > 0
    assert "rightHand" in clip["bones"]
    assert any(k.startswith("rightIndex") for k in clip["bones"])
    assert "spine" in clip["bones"] or "chest" in clip["bones"], "full-body retarget must emit axial bones"
    assert "spine" in clip["bones"] and "chest" in clip["bones"]
    out = ROOT / "data" / "clips" / "self-test.json"
    write_json(out, clip)

    sys.path.insert(0, str(ROOT / "python"))
    from marionet.extract_gpu import missing_body_backend, pick_instance, wholebody_to_frame
    from marionet.features import trajectory_vector
    from marionet.fsq import PoseFSQ, codebook_size, quantize
    from marionet.pose_interop import from_pose_json, to_pose_json
    from marionet.smooth import savgol_1d, smooth_clip_fingers, smooth_pose_xyz
    from marionet.video import _sample_indices

    assert missing_body_backend("rtmlib") == ["rtmlib"] or __import__("importlib").util.find_spec("rtmlib")
    idx, fps = _sample_indices(60, 60.0, 30.0)
    assert fps == 30.0 and len(idx) == 30 and idx[0] == 0 and idx[-1] == 59

    kpts = [[0.0, 0.0, 0.0] for _ in range(133)]
    scores = [0.9] * 133
    kpts[0] = [320.0, 80.0, 0.0]  # nose, image y-down
    kpts[6] = [400.0, 160.0, 0.0]  # right shoulder
    kpts[112] = [410.0, 200.0, 0.0]  # right wrist (hand 0)
    for j in range(21):
        kpts[112 + j] = [410.0 + j, 200.0, 0.0]
    fr = wholebody_to_frame(kpts, scores, (640, 480), 0.1)
    nose = fr["body"]["keypoints"]["nose"]
    assert abs(nose[0] - 0.5) < 1e-6
    assert abs(nose[1] - (1.0 - 80 / 480)) < 1e-6  # y-up
    assert fr["right"] and len(fr["right"]["xyz"]) == 21
    inst, two = pick_instance(
        [
            {"bbox_score": 0.9, "keypoints": kpts, "keypoint_scores": scores},
            {"bbox_score": 0.2, "keypoints": kpts, "keypoint_scores": scores},
        ]
    )
    assert inst is not None and two is False

    spike = [0.0] * 9
    spike[4] = 10.0
    sm = savgol_1d(spike, window=5, poly=2)
    assert sm[4] is not None and sm[4] < 10.0
    smoothed = smooth_pose_xyz(pose)
    assert smoothed["right"][0].get("smoothed") == "savgol"
    clipped = smooth_clip_fingers(clip)
    assert "rightUpperArm" in clipped["bones"]
    assert clipped["bones"]["rightUpperArm"] == clip["bones"]["rightUpperArm"]
    assert clipped.get("residual", {}).get("oneeuro", {}).get("macro") == "locked"

    codes, recon = quantize([[0.0, 0.0, 0.0, 0.0]])
    assert codes.shape == (1, 4) and recon.shape == (1, 4)
    fsq = PoseFSQ()
    tok = fsq.tokens([[0.1] * 16])
    assert tok.shape == (1, 4) and codebook_size() == 8 * 5 * 5 * 5

    import math as _math

    n = pose["n_frames"]
    pose["canonical"] = {"start": 0, "end": n, "method": "test"}
    straight = json.loads(json.dumps(pose))
    circle = json.loads(json.dumps(pose))
    for i in range(n):
        straight["body"][i]["keypoints"]["rightWrist"] = [0.05 + 0.4 * i / max(n - 1, 1), 0.12, 0.22]
        ang = 2 * _math.pi * i / max(n, 1)
        circle["body"][i]["keypoints"]["rightWrist"] = [0.2 + 0.12 * _math.cos(ang), 0.12 + 0.12 * _math.sin(ang), 0.22]
    ts, tc = trajectory_vector(straight), trajectory_vector(circle)
    assert tc[3] > ts[3], "circle curvature should exceed a straight chord"
    assert ts[11] < tc[11], "straight path/displacement ratio should be nearer 1"

    packed = to_pose_json(pose)
    back = from_pose_json(packed)
    assert back["schema"] == "marionet.pose/v0"
    assert back["n_frames"] == pose["n_frames"]
    assert back["right"][0].get("xyz") and len(back["right"][0]["xyz"]) == 21

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
