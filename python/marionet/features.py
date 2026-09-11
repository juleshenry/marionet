"""marionet.pose/v0 → fixed vector. Hand cloud + finger curls + body wrist station + motion."""

from __future__ import annotations

import sys
from pathlib import Path

import numpy as np

_SCRIPTS = str(Path(__file__).resolve().parents[2] / "scripts")
if _SCRIPTS not in sys.path:
    sys.path.insert(0, _SCRIPTS)

from marionet_pose import (  # noqa: E402
    POSE_CONF_MIN,
    _xyz,
    canonical_span,
    finger_curls,
    finger_spread,
    hand_confidence,
    thumb_curl,
)

# 21×3 mean, 21×3 std, 6 curls mean/std, 3 wrist mean, 3 wrist std, 3 motion
FEAT_DIM = 21 * 3 * 2 + 6 * 2 + 9


def _window(pose: dict) -> tuple[int, int]:
    span = pose.get("canonical") if isinstance(pose.get("canonical"), dict) else canonical_span(pose)
    n = int(pose.get("n_frames") or 0)
    start = int(span.get("start") or 0)
    end = int(span.get("end") if span.get("end") is not None else n)
    start = max(0, start)
    end = min(n if n else end, end)
    if end <= start:
        return 0, n if n else end
    return start, end


def _hand_frames(pose: dict) -> list:
    """Nucleus frames with usable hand confidence. Prep/retract and occluded frames drop out."""
    start, end = _window(pose)
    right = pose.get("right") or []
    left = pose.get("left") or []
    frames = []
    for i, fr in enumerate(right):
        if i < start or i >= end:
            continue
        xyz = fr.get("xyz") if isinstance(fr, dict) else None
        if xyz and len(xyz) == 21 and hand_confidence(fr) >= POSE_CONF_MIN:
            frames.append(("right", i, xyz))
    if not frames:
        for i, fr in enumerate(left):
            if i < start or i >= end:
                continue
            xyz = fr.get("xyz") if isinstance(fr, dict) else None
            if xyz and len(xyz) == 21 and hand_confidence(fr) >= POSE_CONF_MIN:
                frames.append(("left", i, xyz))
    return frames


def pose_quality(pose: dict) -> dict:
    start, end = _window(pose)
    n_nucleus = max(end - start, 0)
    confs = []
    occluded = 0
    for side in ("right", "left"):
        frames = pose.get(side) or []
        for i in range(start, min(end, len(frames))):
            fr = frames[i]
            if not isinstance(fr, dict):
                continue
            if fr.get("occluded") is True or hand_confidence(fr) < POSE_CONF_MIN:
                if fr.get("xyz"):
                    occluded += 1
                continue
            if fr.get("xyz"):
                confs.append(hand_confidence(fr))
    n_conf = len(confs)
    mean_conf = float(sum(confs) / n_conf) if n_conf else 0.0
    denom = max(n_nucleus, 1)
    return {
        "mean_conf": mean_conf,
        "n_nucleus": n_nucleus,
        "n_confident": n_conf,
        "occluded_frac": occluded / denom,
        "occluded": bool(n_conf == 0 and (occluded > 0 or n_nucleus > 0 and mean_conf < POSE_CONF_MIN)),
    }


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
