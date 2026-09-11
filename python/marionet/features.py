"""marionet.pose/v0 → fixed vector. Hand cloud + finger curls + body wrist station + motion."""

from __future__ import annotations

import math
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


# direction(3) + curvature(1) + plane(3) + repetition(1) + ulnar(1) + path_len(1) + displacement(1) + ratio(1)
TRAJ_DIM = 12


def _wrist_path(pose: dict) -> np.ndarray:
    """Nucleus wrist polyline in signer space. Empty if no confident hand."""
    hands = _hand_frames(pose)
    if not hands:
        return np.zeros((0, 3), dtype=np.float64)
    body = pose.get("body") or []
    pts = []
    for side, i, xyz in hands:
        bf = body[i] if i < len(body) and isinstance(body[i], dict) else {}
        kps = bf.get("keypoints") or {}
        w = _xyz(kps.get(f"{side}Wrist")) or _xyz(xyz[0])
        if w:
            pts.append(w)
    return np.array(pts, dtype=np.float64) if pts else np.zeros((0, 3), dtype=np.float64)


def _unit(v: np.ndarray) -> np.ndarray:
    n = float(np.linalg.norm(v))
    if n < 1e-8:
        return np.zeros_like(v)
    return v / n


def trajectory_vector(pose: dict) -> np.ndarray:
    """Path-shape features for Movement.2.0. Does not replace pose_vector (FEAT_DIM stays).

    Mean |Δwrist| energy cannot tell Circular from Straight. This vector is the
    D-pilot input for pathMovement: direction, curvature, plane, repetition,
    ulnar-rotation proxy, path length vs displacement.
    """
    W = _wrist_path(pose)
    out = np.zeros(TRAJ_DIM, dtype=np.float64)
    if len(W) < 2:
        return out
    segs = np.diff(W, axis=0)
    lengths = np.linalg.norm(segs, axis=1)
    path_len = float(lengths.sum())
    disp_vec = W[-1] - W[0]
    displacement = float(np.linalg.norm(disp_vec))
    out[0:3] = _unit(disp_vec)
    out[9] = path_len
    out[10] = displacement
    out[11] = path_len / max(displacement, 1e-6)

    chord = disp_vec
    chord_n = max(displacement, 1e-6)
    if path_len > 1e-8:
        dev = 0.0
        for p in W:
            # distance from point to chord segment's infinite line
            t = float(np.dot(p - W[0], chord) / (chord_n * chord_n))
            proj = W[0] + t * chord
            d = float(np.linalg.norm(p - proj))
            if d > dev:
                dev = d
        out[3] = dev / path_len

    if len(W) >= 3:
        X = W - W.mean(axis=0)
        try:
            _, _, vt = np.linalg.svd(X, full_matrices=False)
            out[4:7] = _unit(vt[-1])
        except np.linalg.LinAlgError:
            pass
        speed = lengths
        out[7] = _acf_peak(speed)

    # Ulnar/forearm-roll proxy: integrated yaw of the index-MCP relative to wrist.
    twists = []
    hands = _hand_frames(pose)
    prev = None
    for _, _, xyz in hands:
        idx = _xyz(xyz[5]) if len(xyz) > 5 else None
        wr = _xyz(xyz[0])
        if not (idx and wr):
            continue
        ang = math.atan2(idx[1] - wr[1], idx[0] - wr[0])
        if prev is not None:
            d = ang - prev
            while d > math.pi:
                d -= 2 * math.pi
            while d < -math.pi:
                d += 2 * math.pi
            twists.append(abs(d))
        prev = ang
    if twists:
        out[8] = float(sum(twists) / len(twists))
    return out


def _acf_peak(speed: np.ndarray) -> float:
    x = speed - float(speed.mean())
    n = len(x)
    if n < 6:
        return 0.0
    var = float(np.dot(x, x))
    if var < 1e-12:
        return 0.0
    best = 0.0
    for lag in range(2, max(3, n // 2)):
        c = float(np.dot(x[lag:], x[:-lag]) / var)
        if c > best:
            best = c
    return max(0.0, best)


def pose_vector_with_traj(pose: dict) -> np.ndarray:
    """Configuration + trajectory. New movement heads train on this; named-shape heads stay on pose_vector."""
    return np.concatenate([pose_vector(pose), trajectory_vector(pose)])
