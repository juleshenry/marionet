"""marionet.pose/v0 ↔ pose-format interchange.

sign-language-processing/pose is a reviewer-known .pose container. Marionet does
not adopt it as the IR — that would leak OpenPose/Holistic layouts into SignDesc.
This module is a converter + citation. Binary .pose write requires `pose-format`.
"""

from __future__ import annotations

import sys
from pathlib import Path

_SCRIPTS = str(Path(__file__).resolve().parents[2] / "scripts")
if _SCRIPTS not in sys.path:
    sys.path.insert(0, _SCRIPTS)

from marionet_pose import BODY_NAMES, _xyz  # noqa: E402

POSE_JSON = "pose-format-json/v0"

HAND_POINTS = (
    "WRIST",
    "THUMB_CMC",
    "THUMB_MCP",
    "THUMB_IP",
    "THUMB_TIP",
    "INDEX_MCP",
    "INDEX_PIP",
    "INDEX_DIP",
    "INDEX_TIP",
    "MIDDLE_MCP",
    "MIDDLE_PIP",
    "MIDDLE_DIP",
    "MIDDLE_TIP",
    "RING_MCP",
    "RING_PIP",
    "RING_DIP",
    "RING_TIP",
    "PINKY_MCP",
    "PINKY_PIP",
    "PINKY_DIP",
    "PINKY_TIP",
)

FACE_POINTS = (
    "nose",
    "leftEye",
    "rightEye",
    "leftEar",
    "rightEar",
    "leftBrow",
    "rightBrow",
    "upperLip",
    "lowerLip",
    "mouthLeft",
    "mouthRight",
)


def to_pose_json(pose: dict) -> dict:
    """Pack marionet.pose/v0 as a pose-format-shaped JSON object (1 person)."""
    n = int(pose.get("n_frames") or 0)
    fps = float(pose.get("fps") or 30.0)
    body = pose.get("body") or []
    face = pose.get("face") or []
    left = pose.get("left") or []
    right = pose.get("right") or []
    frames = []
    confs = []
    for i in range(n):
        pts = []
        cf = []
        kps = {}
        if i < len(body) and isinstance(body[i], dict):
            kps = body[i].get("keypoints") or {}
        for name in BODY_NAMES:
            p = _xyz(kps.get(name)) or [0.0, 0.0, 0.0]
            pts.append(p)
            cf.append(1.0 if kps.get(name) else 0.0)
        fk = {}
        if i < len(face) and isinstance(face[i], dict):
            fk = face[i].get("keypoints") or {}
        for name in FACE_POINTS:
            p = _xyz(fk.get(name)) or _xyz(kps.get(name)) or [0.0, 0.0, 0.0]
            pts.append(p)
            cf.append(1.0 if fk.get(name) or kps.get(name) else 0.0)
        for frames_side in (left, right):
            fr = frames_side[i] if i < len(frames_side) and isinstance(frames_side[i], dict) else {}
            xyz = fr.get("xyz") if isinstance(fr.get("xyz"), list) else None
            conf = float(fr.get("conf") or 0.0)
            for j in range(21):
                p = _xyz(xyz[j]) if xyz and j < len(xyz) else None
                pts.append(p or [0.0, 0.0, 0.0])
                cf.append(conf if p else 0.0)
        frames.append(pts)
        confs.append(cf)
    return {
        "schema": POSE_JSON,
        "source": "marionet.pose/v0",
        "fps": fps,
        "n_frames": n,
        "people": 1,
        "components": [
            {"name": "POSE_LANDMARKS", "points": list(BODY_NAMES), "format": "XYZC"},
            {"name": "FACE_LANDMARKS", "points": list(FACE_POINTS), "format": "XYZC"},
            {"name": "LEFT_HAND_LANDMARKS", "points": list(HAND_POINTS), "format": "XYZC"},
            {"name": "RIGHT_HAND_LANDMARKS", "points": list(HAND_POINTS), "format": "XYZC"},
        ],
        "data": frames,
        "confidence": confs,
        "language": pose.get("language"),
        "gloss": pose.get("gloss"),
    }


def from_pose_json(blob: dict, *, language: str | None = None, gloss: str | None = None) -> dict:
    """Unpack pose-format-json/v0 (or a matching blob) back to marionet.pose/v0."""
    if not isinstance(blob, dict):
        raise ValueError("pose json must be an object")
    comps = blob.get("components") or []
    names = []
    for c in comps:
        names.extend(c.get("points") or [])
    n = int(blob.get("n_frames") or len(blob.get("data") or []))
    fps = float(blob.get("fps") or 30.0)
    data = blob.get("data") or []
    conf = blob.get("confidence") or []
    body_off = 0
    face_off = len(BODY_NAMES)
    left_off = face_off + len(FACE_POINTS)
    right_off = left_off + 21
    body, face, left, right = [], [], [], []
    for i in range(n):
        pts = data[i] if i < len(data) else []
        cf = conf[i] if i < len(conf) else []
        t = round(i / fps, 4) if fps else 0.0
        kps = {}
        for j, name in enumerate(BODY_NAMES):
            p = _xyz(pts[body_off + j] if body_off + j < len(pts) else None)
            if p:
                kps[name] = p
        body.append({"t": t, "keypoints": kps})
        fk = {}
        for j, name in enumerate(FACE_POINTS):
            p = _xyz(pts[face_off + j] if face_off + j < len(pts) else None)
            if p:
                fk[name] = p
        face.append({"t": t, "keypoints": fk, "head": {"yaw": 0.0, "pitch": 0.0, "roll": 0.0}, "conf": 1.0 if fk else 0.0})
        def _hand(off):
            xyz, scores = [], []
            for j in range(21):
                p = _xyz(pts[off + j] if off + j < len(pts) else None)
                s = float(cf[off + j]) if off + j < len(cf) else 0.0
                xyz.append(p or [0.0, 0.0, 0.0])
                scores.append(s)
            mean = sum(scores) / 21.0
            if mean < 1e-6:
                return {"t": t, "conf": 0.0}
            return {"t": t, "xyz": xyz, "conf": round(mean, 3), "occluded": mean < 0.35}

        left.append(_hand(left_off))
        right.append(_hand(right_off))
    return {
        "schema": "marionet.pose/v0",
        "fps": fps,
        "n_frames": n,
        "status": "ok",
        "language": language or blob.get("language"),
        "gloss": gloss or blob.get("gloss"),
        "body": body,
        "face": face,
        "left": left,
        "right": right,
        "camera": {"frame": "pose-format-json", "note": "imported from pose-format interchange; Marionet IR is marionet.pose/v0"},
        "backend": "pose-format",
    }


def write_pose_file(path: Path, pose: dict) -> bool:
    """Write binary .pose if pose-format is installed. Returns False if the extra is missing."""
    try:
        import numpy as np
        from pose_format.numpy.pose_body import NumPyPoseBody  # type: ignore
        from pose_format.pose import Pose  # type: ignore
        from pose_format.pose_header import PoseHeader, PoseHeaderComponent, PoseHeaderDimensions  # type: ignore
    except ImportError:
        return False
    blob = to_pose_json(pose)
    comps = []
    for c in blob["components"]:
        pts = list(c["points"])
        limbs = [(i, i + 1) for i in range(len(pts) - 1)]
        colors = [(255, 255, 255)] * max(len(limbs), 1)
        comps.append(PoseHeaderComponent(c["name"], pts, limbs, colors, "XYZC"))
    header = PoseHeader(0.2, PoseHeaderDimensions(1, 1, 1), comps)
    arr = np.asarray(blob["data"], dtype=np.float32)
    if arr.ndim == 3:
        arr = arr[:, None, :, :]
    conf = np.asarray(blob["confidence"], dtype=np.float32)
    if conf.ndim == 2:
        conf = conf[:, None, :]
    body = NumPyPoseBody(fps=blob["fps"], data=arr, confidence=conf)
    Pose(header, body).write(str(path))
    return True
