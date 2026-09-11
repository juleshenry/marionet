"""GPU pose extract: MMPose wholebody (DWPose) + HaMeR hands + Decord frames.

Local Mac uses --backend mediapipe. This module is the rented-48GB contract.
It emits marionet.pose/v0. It does not write MANO β, meshes, or mp4.

HaMeR code is MIT; MANO is non-commercial research and forbids redistributing
the model. Derived 21-joint JSON stays local until that license is checked.
"""

from __future__ import annotations

import os
from pathlib import Path

from .video import FPS_CAP, load_frames

POSE_SCHEMA = "marionet.pose/v0"
POSE_CONF_MIN = 0.35
FPS_CAP_DEFAULT = FPS_CAP

# COCO-WholeBody 133: body 0-16, foot 17-22, face 23-90, L-hand 91-111, R-hand 112-132.
BODY_IDX = {
    "nose": 0,
    "leftEye": 1,
    "rightEye": 2,
    "leftEar": 3,
    "rightEar": 4,
    "leftShoulder": 5,
    "rightShoulder": 6,
    "leftElbow": 7,
    "rightElbow": 8,
    "leftWrist": 9,
    "rightWrist": 10,
    "leftHip": 11,
    "rightHip": 12,
}
# 68-point face (iBUG), offset 23.
FACE68_IDX = {
    "leftBrow": 23 + 19,
    "rightBrow": 23 + 24,
    "nose": 23 + 30,
    "leftEye": 23 + 36,
    "rightEye": 23 + 45,
    "mouthLeft": 23 + 48,
    "upperLip": 23 + 51,
    "mouthRight": 23 + 54,
    "lowerLip": 23 + 57,
}
LEFT_HAND0 = 91
RIGHT_HAND0 = 112
N_WHOLEBODY = 133

GPU_CONTRACT = """GPU pose extract (batch 1, 48GB, isolated clips, 30 fps cap):
  frames: Decord (OpenCV fallback)
  body/face: rtmlib Wholebody (ONNX Runtime: CUDA/CPU/MPS) is the production front-end.
             MMPose wholebody (alias 'dwpose' else 'wholebody') is the research lab.
  hands:  pluggable — HaMeR (geopavlakos/hamer) MANO → 21 joints, or wholebody 2D.
          Fast-HaMeR is an allowed drop-in. Do not write β or mesh.
          --hands auto|hamer|none. HaMeR code is MIT; MANO is not.
  schema: marionet.pose/v0 is the swap layer (named body + 21×2 hands + face).
          Downstream never sees raw DWPose 133, rtmlib arrays, or MediaPipe 543.

On the rented box:
  pip install decord rtmlib onnxruntime-gpu   # production body/face (ONNX)
  # MMPose (research lab): https://mmpose.readthedocs.io/en/latest/installation.html
  git clone --recursive https://github.com/geopavlakos/hamer
  # MANO_RIGHT.pkl → $HAMER_ROOT/_DATA/data/mano/  (register at mano.is.tue.mpg.de)
  export HAMER_ROOT=...
  export HAMER_CHECKPOINT=...   # optional; HaMeR default otherwise
"""


def probe() -> dict[str, bool]:
    hamer_root = os.environ.get("HAMER_ROOT")
    return {
        "decord": _has("decord"),
        "cv2": _has("cv2"),
        "mmpose": _has("mmpose"),
        "rtmlib": _has("rtmlib"),
        "hamer": _has("hamer") or bool(hamer_root and Path(hamer_root).exists()),
        "torch": _has("torch"),
    }


def missing_body_backend(prefer: str = "auto") -> list[str]:
    """prefer: auto (rtmlib then MMPose), rtmlib, mmpose."""
    p = probe()
    if prefer == "rtmlib":
        return [] if p["rtmlib"] else ["rtmlib"]
    if prefer == "mmpose":
        return [] if p["mmpose"] else ["mmpose"]
    if p["rtmlib"] or p["mmpose"]:
        return []
    return ["rtmlib (or mmpose)"]


def contract_message(extra: str | None = None, prefer: str = "auto") -> str:
    p = probe()
    have = ", ".join(k for k, v in p.items() if v) or "none"
    miss = missing_body_backend(prefer)
    lines = [GPU_CONTRACT.strip(), "", f"this process: {have}"]
    if miss:
        lines.append("missing body backend: " + ", ".join(miss))
    if extra:
        lines.append(extra)
    return "\n".join(lines)


def _has(name: str) -> bool:
    try:
        __import__(name)
        return True
    except Exception:
        return False


def _xy(pt, w: float, h: float) -> list[float] | None:
    if pt is None:
        return None
    if hasattr(pt, "tolist"):
        pt = pt.tolist()
    if not isinstance(pt, (list, tuple)) or len(pt) < 2:
        return None
    x, y = float(pt[0]), float(pt[1])
    z = float(pt[2]) if len(pt) > 2 else 0.0
    if w > 1 and (x > 1.5 or y > 1.5):
        x, y = x / w, y / h
    # Image y grows down; retarget station math is signer-up.
    return [x, 1.0 - y, z]


def _score(scores, i: int) -> float:
    if scores is None:
        return 1.0
    if hasattr(scores, "tolist"):
        scores = scores.tolist()
    if i >= len(scores):
        return 0.0
    v = scores[i]
    if hasattr(v, "item"):
        v = v.item()
    return max(0.0, min(1.0, float(v)))


def wholebody_to_frame(
    keypoints,
    scores,
    img_wh: tuple[int, int],
    t: float,
    kpt_thr: float = 0.3,
) -> dict:
    """Map one COCO-WholeBody instance to a marionet.pose frame dict."""
    w, h = float(img_wh[0]), float(img_wh[1])
    if hasattr(keypoints, "tolist"):
        keypoints = keypoints.tolist()
    kps = {}
    for name, idx in BODY_IDX.items():
        if idx >= len(keypoints):
            continue
        if _score(scores, idx) < kpt_thr:
            continue
        xyz = _xy(keypoints[idx], w, h)
        if xyz:
            kps[name] = xyz
    face_kps = {}
    for name, idx in FACE68_IDX.items():
        if idx >= len(keypoints):
            continue
        if _score(scores, idx) < kpt_thr:
            continue
        xyz = _xy(keypoints[idx], w, h)
        if xyz:
            face_kps[name] = xyz
    if "nose" not in face_kps and "nose" in kps:
        face_kps["nose"] = kps["nose"]
    for ear in ("leftEar", "rightEar"):
        if ear not in face_kps and ear in kps:
            face_kps[ear] = kps[ear]
    left = _hand21(keypoints, scores, LEFT_HAND0, w, h, kpt_thr)
    right = _hand21(keypoints, scores, RIGHT_HAND0, w, h, kpt_thr)
    head = _head_from_kps({**kps, **face_kps})
    return {
        "t": round(float(t), 4),
        "body": {"t": round(float(t), 4), "keypoints": kps},
        "face": {
            "t": round(float(t), 4),
            "keypoints": face_kps,
            "head": head,
            "conf": 1.0 if face_kps else 0.0,
        },
        "left": left,
        "right": right,
    }


def _hand21(keypoints, scores, start: int, w: float, h: float, kpt_thr: float) -> dict | None:
    pts = []
    confs = []
    for j in range(21):
        idx = start + j
        if idx >= len(keypoints):
            return None
        xyz = _xy(keypoints[idx], w, h)
        sc = _score(scores, idx)
        if xyz is None or sc < kpt_thr:
            pts.append(None)
        else:
            pts.append(xyz)
        confs.append(sc)
    if sum(1 for p in pts if p is not None) < 6:
        return None
    # Fill tiny holes with wrist so retarget still sees 21 points.
    origin = next((p for p in pts if p is not None), [0.0, 0.0, 0.0])
    xyz = [p if p is not None else list(origin) for p in pts]
    conf = sum(confs) / max(len(confs), 1)
    return {
        "xyz": xyz,
        "conf": round(max(0.0, min(1.0, conf)), 3),
        "occluded": bool(conf < POSE_CONF_MIN),
    }


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


def pick_instance(instances: list, two_person_gap: float = 0.15) -> tuple[dict | None, bool]:
    """Highest-score instance. two_people True if a second instance is close in score."""
    if not instances:
        return None, False
    scored = []
    for inst in instances:
        if not isinstance(inst, dict):
            continue
        s = inst.get("bbox_score")
        if s is None:
            scores = inst.get("keypoint_scores")
            if scores is not None and len(scores):
                s = float(sum(float(x) for x in scores) / len(scores))
            else:
                s = 0.0
        scored.append((float(s), inst))
    if not scored:
        return None, False
    scored.sort(key=lambda x: x[0], reverse=True)
    two = len(scored) > 1 and (scored[0][0] - scored[1][0]) < two_person_gap and scored[1][0] > 0.4
    return scored[0][1], two


def assemble_pose(
    frames: list[dict],
    fps: float,
    lang: str | None,
    gloss: str | None,
    source_path: str | None,
    backend: str,
    hands_source: str,
    two_people_frac: float,
    blur_frac: float,
) -> dict:
    n = len(frames)
    body, left, right, face = [], [], [], []
    no_hand = 0
    occ_n = 0
    for fr in frames:
        t = fr.get("t", 0.0)
        body.append(fr.get("body") or {"t": t, "keypoints": {}})
        face.append(fr.get("face") or {"t": t, "keypoints": {}, "head": {"yaw": 0, "pitch": 0, "roll": 0}, "conf": 0.0})
        lf = fr.get("left")
        rf = fr.get("right")
        if lf:
            lf = dict(lf)
            lf["t"] = t
            left.append(lf)
            if lf.get("occluded"):
                occ_n += 1
        else:
            left.append({"t": t, "conf": 0.0})
        if rf:
            rf = dict(rf)
            rf["t"] = t
            right.append(rf)
            if rf.get("occluded"):
                occ_n += 1
        else:
            right.append({"t": t, "conf": 0.0})
        if not lf and not rf:
            no_hand += 1

    status = "ok"
    if n == 0:
        status = "empty"
    elif two_people_frac > 0.3:
        status = "two_people"
    elif no_hand / max(n, 1) > 0.5:
        status = "no_hand"
    elif blur_frac > 0.5:
        status = "blur"
    elif occ_n / max(n * 2, 1) > 0.5:
        status = "occluded"

    return {
        "schema": POSE_SCHEMA,
        "fps": float(fps),
        "n_frames": n,
        "status": status,
        "language": lang,
        "gloss": gloss,
        "source_path": source_path,
        "body": body,
        "right": right,
        "left": left,
        "face": face,
        "camera": {
            "frame": "y-up-normalized",
            "body": "wholebody-133",
            "hands": hands_source,
            "note": "rtmlib/MMPose wholebody body+face; HaMeR 21 joints when present; no MANO β/mesh",
        },
        "backend": backend,
        "e0": {
            "no_hand_frac": round(no_hand / max(n, 1), 3),
            "blur_frac": round(blur_frac, 3),
            "occluded_frac": round(occ_n / max(n * 2, 1), 3),
            "two_people_frac": round(two_people_frac, 3),
        },
    }


def _blur_frac(frames_rgb: list) -> float:
    if not frames_rgb:
        return 0.0
    try:
        import cv2  # type: ignore
    except ImportError:
        return 0.0
    low = 0
    for im in frames_rgb:
        if im is None:
            continue
        gray = cv2.cvtColor(im, cv2.COLOR_RGB2GRAY) if im.ndim == 3 else im
        if float(cv2.Laplacian(gray, cv2.CV_64F).var()) < 20:
            low += 1
    return low / max(len(frames_rgb), 1)


def _infer_wholebody(frame_rgb, inferencer) -> list[dict]:
    """Return MMPose-style instance dicts: keypoints, keypoint_scores, bbox_score."""
    kind, obj = inferencer
    if kind == "mmpose":
        result = next(obj(frame_rgb, show=False, return_vis=False))
        return list(result.get("predictions") or [[]])[0] or []
    if kind == "rtmlib":
        kpts, scores = obj(frame_rgb)
        if kpts is None:
            return []
        if hasattr(kpts, "ndim") and kpts.ndim == 2:
            kpts = [kpts]
            scores = [scores]
        out = []
        for k, s in zip(kpts, scores):
            out.append(
                {
                    "keypoints": k,
                    "keypoint_scores": s,
                    "bbox_score": float(sum(float(x) for x in s) / max(len(s), 1)) if s is not None else 0.0,
                }
            )
        return out
    raise RuntimeError(f"unknown inferencer {kind}")


def _make_rtmlib(device: str):
    from rtmlib import Wholebody  # type: ignore

    # ONNX Runtime is the pose-extract inference layer (CUDA / CPU / MPS). Not the compiler.
    return "rtmlib", Wholebody(to_openpose=False, mode="balanced", backend="onnxruntime", device=device)


def _make_mmpose(device: str):
    from mmpose.apis import MMPoseInferencer  # type: ignore

    last = None
    for alias in ("dwpose", "wholebody"):
        try:
            return "mmpose", MMPoseInferencer(alias, device=device)
        except Exception as exc:
            last = exc
    raise RuntimeError(f"MMPoseInferencer failed for dwpose/wholebody: {last}")


def _make_body_inferencer(prefer: str = "auto"):
    """rtmlib is the production front-end (ONNX). MMPose is the research lab."""
    device = "cuda" if _cuda() else "cpu"
    order = ("rtmlib", "mmpose") if prefer == "auto" else (prefer,)
    last = None
    for name in order:
        try:
            if name == "rtmlib" and _has("rtmlib"):
                return _make_rtmlib(device)
            if name == "mmpose" and _has("mmpose"):
                return _make_mmpose(device)
        except Exception as exc:
            last = exc
    if last:
        raise RuntimeError(last)
    return None


def _cuda() -> bool:
    try:
        import torch  # type: ignore

        return bool(torch.cuda.is_available())
    except Exception:
        return False


def _make_hamer():
    """Return callable (bgr, hand_bboxes) -> {left: {xyz,conf}, right: ...} or None."""
    root = os.environ.get("HAMER_ROOT")
    if root:
        import sys

        r = str(Path(root).resolve())
        if r not in sys.path:
            sys.path.insert(0, r)
    try:
        import torch  # type: ignore
        from hamer.models import load_hamer, DEFAULT_CHECKPOINT  # type: ignore
        from hamer.datasets.vitdet_dataset import ViTDetDataset  # type: ignore
        from hamer.utils import recursive_to  # type: ignore
    except Exception:
        return None

    ckpt = os.environ.get("HAMER_CHECKPOINT") or DEFAULT_CHECKPOINT
    model, model_cfg = load_hamer(ckpt)
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    model = model.to(device)
    model.eval()

    def run(bgr, boxes_is_right: list[tuple[list[float], int]]):
        if not boxes_is_right:
            return {}
        import numpy as np

        boxes = np.stack([b for b, _ in boxes_is_right])
        right = np.array([s for _, s in boxes_is_right], dtype=np.int32)
        dataset = ViTDetDataset(model_cfg, bgr, boxes, right, rescale_factor=2.0)
        loader = torch.utils.data.DataLoader(dataset, batch_size=8, shuffle=False, num_workers=0)
        found: dict[str, dict] = {}
        for batch in loader:
            batch = recursive_to(batch, device)
            with torch.no_grad():
                out = model(batch)
            k3d = out.get("pred_keypoints_3d")
            if k3d is None:
                continue
            k3d = k3d.detach().cpu().numpy()
            sides = batch["right"].detach().cpu().numpy()
            for n in range(k3d.shape[0]):
                xyz = k3d[n].tolist()
                if len(xyz) != 21:
                    continue
                is_r = int(sides[n]) == 1
                side = "right" if is_r else "left"
                found[side] = {
                    "xyz": [[float(p[0]), float(p[1]), float(p[2])] for p in xyz],
                    "conf": 1.0,
                    "occluded": False,
                    "space": "mano",
                }
        return found

    return run


def _hand_bboxes_from_frame(fr: dict, img_wh: tuple[int, int]) -> list[tuple[list[float], int]]:
    """Pixel bboxes from 2D wholebody hands, for HaMeR crops."""
    w, h = img_wh
    out = []
    for side, is_right in (("left", 0), ("right", 1)):
        hand = fr.get(side)
        if not hand or not hand.get("xyz"):
            continue
        xs, ys = [], []
        for pt in hand["xyz"]:
            # stored y-up normalized
            x = float(pt[0]) * w
            y = (1.0 - float(pt[1])) * h
            xs.append(x)
            ys.append(y)
        if len(xs) < 6:
            continue
        pad = 12.0
        box = [min(xs) - pad, min(ys) - pad, max(xs) + pad, max(ys) + pad]
        out.append((box, is_right))
    return out


def extract_dwpose_hamer(video: Path, lang: str | None, gloss: str | None, *, hands: str = "auto") -> dict:
    return extract_gpu(video, lang, gloss, body="auto", hands=hands, backend_name="dwpose_hamer")


def extract_rtmlib(video: Path, lang: str | None, gloss: str | None, *, hands: str = "auto") -> dict:
    return extract_gpu(video, lang, gloss, body="rtmlib", hands=hands, backend_name="rtmlib")


def extract_gpu(
    video: Path,
    lang: str | None,
    gloss: str | None,
    *,
    body: str = "auto",
    hands: str = "auto",
    backend_name: str = "dwpose_hamer",
) -> dict:
    """Body backends produce measurements. This adapter writes marionet.pose/v0.

    body: auto | rtmlib | mmpose
    hands: auto | hamer | none  — HaMeR is pluggable; MANO is not MIT.
    """
    video = Path(video)
    if not video.exists():
        return {
            "schema": POSE_SCHEMA,
            "fps": 30.0,
            "n_frames": 0,
            "status": "no_video",
            "language": lang,
            "gloss": gloss,
            "backend": backend_name,
            "body": [],
            "right": [],
            "left": [],
        }
    miss = missing_body_backend(body)
    if miss:
        raise SystemExit(contract_message(f"requested body={body}", prefer=body))

    frames_rgb, fps = load_frames(video, fps_cap=FPS_CAP_DEFAULT)
    inferencer = _make_body_inferencer(body)
    if inferencer is None:
        raise SystemExit(contract_message(f"requested body={body}", prefer=body))
    want_hamer = hands in ("auto", "hamer")
    hamer_run = _make_hamer() if want_hamer else None
    if hands == "hamer" and hamer_run is None:
        raise SystemExit(contract_message("requested --hands hamer but HaMeR/MANO is not available"))
    hands_source = "hamer-21" if hamer_run else ("none" if hands == "none" else "wholebody-2d")

    pose_frames = []
    two_n = 0
    try:
        import cv2  # type: ignore
    except ImportError:
        cv2 = None  # type: ignore

    for i, rgb in enumerate(frames_rgb):
        t = i / fps if fps else 0.0
        h, w = int(rgb.shape[0]), int(rgb.shape[1])
        # OpenMMLab / rtmlib expect OpenCV BGR arrays.
        infer_img = cv2.cvtColor(rgb, cv2.COLOR_RGB2BGR) if cv2 is not None else rgb
        instances = _infer_wholebody(infer_img, inferencer)
        inst, two = pick_instance(instances)
        if two:
            two_n += 1
        if inst is None:
            pose_frames.append(
                {
                    "t": round(t, 4),
                    "body": {"t": round(t, 4), "keypoints": {}},
                    "face": {
                        "t": round(t, 4),
                        "keypoints": {},
                        "head": {"yaw": 0.0, "pitch": 0.0, "roll": 0.0},
                        "conf": 0.0,
                    },
                    "left": None,
                    "right": None,
                }
            )
            continue
        kpts = inst.get("keypoints")
        scores = inst.get("keypoint_scores")
        fr = wholebody_to_frame(kpts, scores, (w, h), t)
        if hamer_run and cv2 is not None:
            bgr = cv2.cvtColor(rgb, cv2.COLOR_RGB2BGR)
            boxes = _hand_bboxes_from_frame(fr, (w, h))
            try:
                rec = hamer_run(bgr, boxes)
            except Exception:
                rec = {}
            for side in ("left", "right"):
                if rec.get(side):
                    rec[side]["t"] = round(t, 4)
                    fr[side] = rec[side]
        pose_frames.append(fr)

    pose = assemble_pose(
        pose_frames,
        fps=fps,
        lang=lang,
        gloss=gloss,
        source_path=str(video),
        backend=backend_name,
        hands_source=hands_source,
        two_people_frac=two_n / max(len(frames_rgb), 1),
        blur_frac=_blur_frac(frames_rgb),
    )
    if hamer_run is None:
        pose["camera"]["note"] += " (HaMeR missing; 2D wholebody hands)"
    return pose
