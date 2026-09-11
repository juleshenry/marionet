"""marionet.pose/v0 → fixed vector. Hand cloud + finger curls + body wrist station + motion."""

from __future__ import annotations

import sys
from pathlib import Path

import numpy as np

_SCRIPTS = str(Path(__file__).resolve().parents[2] / "scripts")
if _SCRIPTS not in sys.path:
    sys.path.insert(0, _SCRIPTS)

from marionet_pose import _xyz, finger_curls, finger_spread, thumb_curl  # noqa: E402

# 21×3 mean, 21×3 std, 6 curls mean/std, 3 wrist mean, 3 wrist std, 3 motion
FEAT_DIM = 21 * 3 * 2 + 6 * 2 + 9


def _hand_frames(pose: dict) -> list:
    right = pose.get("right") or []
    left = pose.get("left") or []
    frames = []
    for i, fr in enumerate(right):
        xyz = fr.get("xyz") if isinstance(fr, dict) else None
        if xyz and len(xyz) == 21:
            frames.append(("right", i, xyz))
    if not frames:
        for i, fr in enumerate(left):
            xyz = fr.get("xyz") if isinstance(fr, dict) else None
            if xyz and len(xyz) == 21:
                frames.append(("left", i, xyz))
    return frames


def _cloud(xyz21) -> np.ndarray:
    pts = np.zeros((21, 3), dtype=np.float64)
    for i, p in enumerate(xyz21):
        v = _xyz(p)
        if v:
            pts[i] = v
    return pts - pts[0]


def _curl_vec(xyz21) -> np.ndarray:
    c = finger_curls(xyz21)
    return np.array(
        [c["Index"], c["Middle"], c["Ring"], c["Little"], thumb_curl(xyz21), finger_spread(xyz21)],
        dtype=np.float64,
    )


def pose_vector(pose: dict) -> np.ndarray:
    hands = _hand_frames(pose)
    if not hands:
        return np.zeros(FEAT_DIM, dtype=np.float64)
    clouds = np.stack([_cloud(xyz) for _, _, xyz in hands], axis=0)
    flat = clouds.reshape(clouds.shape[0], -1)
    curls = np.stack([_curl_vec(xyz) for _, _, xyz in hands], axis=0)
    body = pose.get("body") or []
    wrists = []
    for side, i, xyz in hands:
        bf = body[i] if i < len(body) and isinstance(body[i], dict) else {}
        kps = bf.get("keypoints") or {}
        w = _xyz(kps.get(f"{side}Wrist")) or _xyz(xyz[0]) or [0.0, 0.0, 0.0]
        sh = _xyz(kps.get(f"{side}Shoulder")) or [0.18 if side == "right" else -0.18, 0.0, 0.0]
        wrists.append([w[0] - sh[0], w[1] - sh[1], w[2] - sh[2]])
    W = np.array(wrists, dtype=np.float64)
    motion = np.abs(np.diff(W, axis=0)).mean(axis=0) if len(W) > 1 else np.zeros(3)
    return np.concatenate(
        [flat.mean(axis=0), flat.std(axis=0), curls.mean(axis=0), curls.std(axis=0), W.mean(axis=0), W.std(axis=0), motion]
    )
