"""Face/head landmarks → coarse SignDesc.nmf fields. Rule-based v0; not a linear head."""

from __future__ import annotations

import sys
from pathlib import Path

_SCRIPTS = str(Path(__file__).resolve().parents[2] / "scripts")
if _SCRIPTS not in sys.path:
    sys.path.insert(0, _SCRIPTS)

from marionet_pose import _xyz  # noqa: E402

from .catalogs import BODY_DEFAULT, NMF_DEFAULT

# Thresholds in units of inter-ocular distance. Dummy rest face must stay neutral.
BROW_RAISE = 0.70
BROW_FURROW = 0.22
MOUTH_OPEN = 0.45
MOUTH_SPREAD = 1.80
MOUTH_PURSED = 0.45
HEAD_TILT = 0.08
HEAD_TURN = 0.06
HEAD_NOD = 0.10
HEAD_SHAKE_STD = 0.05
TORSO_LEAN = 0.05
TORSO_FORWARD = 0.07


def _kps_from_face_frame(fr: dict) -> dict:
    if not isinstance(fr, dict):
        return {}
    raw = fr.get("keypoints") or {}
    out = {}
    for k, v in raw.items():
        p = _xyz(v)
        if p:
            out[k] = p
    return out


def _mean_face(pose: dict) -> tuple[dict, dict]:
    """Average keypoints + head over nucleus frames (or all face frames)."""
    frames = pose.get("face") or []
    if not frames:
        return {}, {}
    span = pose.get("canonical") or {}
    start = int(span["start"]) if isinstance(span.get("start"), int) else 0
    end = int(span["end"]) if isinstance(span.get("end"), int) else len(frames)
    chosen = []
    for i, fr in enumerate(frames):
        if i < start or i >= end:
            continue
        if isinstance(fr, dict):
            chosen.append(fr)
    if not chosen:
        chosen = [fr for fr in frames if isinstance(fr, dict)]
    acc: dict[str, list] = {}
    heads = []
    for fr in chosen:
        for k, p in _kps_from_face_frame(fr).items():
            acc.setdefault(k, []).append(p)
        h = fr.get("head") if isinstance(fr.get("head"), dict) else None
        if h:
            heads.append(h)
    mean_kps = {k: [sum(p[i] for p in pts) / len(pts) for i in range(3)] for k, pts in acc.items() if pts}
    mean_head = {}
    if heads:
        for key in ("yaw", "pitch", "roll"):
            vals = [float(h[key]) for h in heads if isinstance(h.get(key), (int, float))]
            if vals:
                mean_head[key] = sum(vals) / len(vals)
    return mean_kps, mean_head


def _iod(kps: dict) -> float:
    le = kps.get("leftEye")
    re = kps.get("rightEye")
    if not (le and re):
        return 0.0
    dx, dy, dz = le[0] - re[0], le[1] - re[1], le[2] - re[2]
    d = (dx * dx + dy * dy + dz * dz) ** 0.5
    return d if d > 1e-6 else 0.0


def nmf_from_face(pose: dict) -> dict:
    """Map 2D/3D face+head tracks onto discrete NMF labels. Missing face → all neutral."""
    nmf = dict(NMF_DEFAULT)
    kps, head = _mean_face(pose)
    iod = _iod(kps)
    if iod > 0:
        def gap(a, b):
            pa, pb = kps.get(a), kps.get(b)
            if not (pa and pb):
                return None
            return abs(pa[1] - pb[1]) / iod

        left_b = gap("leftBrow", "leftEye")
        right_b = gap("rightBrow", "rightEye")
        brows = [v for v in (left_b, right_b) if v is not None]
        if brows:
            b = sum(brows) / len(brows)
            if b >= BROW_RAISE:
                nmf["eyebrows"] = "raised"
            elif b <= BROW_FURROW:
                nmf["eyebrows"] = "furrowed"

        lip = gap("upperLip", "lowerLip")
        if lip is not None and lip >= MOUTH_OPEN:
            nmf["mouth"] = "open"
        ml, mr = kps.get("mouthLeft"), kps.get("mouthRight")
        if ml and mr:
            width = ((ml[0] - mr[0]) ** 2 + (ml[1] - mr[1]) ** 2) ** 0.5 / iod
            if nmf["mouth"] == "neutral":
                if width >= MOUTH_SPREAD:
                    nmf["mouth"] = "spread"
                elif width <= MOUTH_PURSED:
                    nmf["mouth"] = "pursed"

    yaw = float(head.get("yaw") or 0.0)
    pitch = float(head.get("pitch") or 0.0)
    roll = float(head.get("roll") or 0.0)
    yaw_std = _head_std(pose, "yaw")
    if yaw_std >= HEAD_SHAKE_STD:
        nmf["head"] = "shake"
    elif abs(roll) >= HEAD_TILT:
        nmf["head"] = "tilt-left" if roll > 0 else "tilt-right"
    elif abs(yaw) >= HEAD_TURN:
        nmf["head"] = "turn-left" if yaw < 0 else "turn-right"
    elif pitch <= -HEAD_NOD:
        nmf["head"] = "nod"

    if abs(yaw) >= HEAD_TURN and nmf.get("eyegaze") == "neutral":
        nmf["eyegaze"] = "left" if yaw < 0 else "right"
    return nmf


def _head_std(pose: dict, key: str) -> float:
    frames = pose.get("face") or []
    vals = []
    for fr in frames:
        if not isinstance(fr, dict):
            continue
        h = fr.get("head") if isinstance(fr.get("head"), dict) else None
        if h and isinstance(h.get(key), (int, float)):
            vals.append(float(h[key]))
    if len(vals) < 3:
        return 0.0
    mean = sum(vals) / len(vals)
    var = sum((v - mean) ** 2 for v in vals) / len(vals)
    return var ** 0.5


def _mid(a, b):
    return [(a[i] + b[i]) / 2.0 for i in range(3)]


def torso_from_body(pose: dict) -> str:
    """Shoulder/hip geometry → discrete torso posture. Upright dummy must stay neutral."""
    frames = pose.get("body") or []
    if not frames:
        return "neutral"
    span = pose.get("canonical") or {}
    start = int(span["start"]) if isinstance(span.get("start"), int) else 0
    end = int(span["end"]) if isinstance(span.get("end"), int) else len(frames)
    dxs, dzs = [], []
    for i, fr in enumerate(frames):
        if i < start or i >= end or not isinstance(fr, dict):
            continue
        kps = fr.get("keypoints") or {}
        ls, rs = _xyz(kps.get("leftShoulder")), _xyz(kps.get("rightShoulder"))
        lh, rh = _xyz(kps.get("leftHip")), _xyz(kps.get("rightHip"))
        if not (ls and rs and lh and rh):
            continue
        sh, hip = _mid(ls, rs), _mid(lh, rh)
        dxs.append(sh[0] - hip[0])
        dzs.append(sh[2] - hip[2])
    if not dxs:
        return "neutral"
    dx = sum(dxs) / len(dxs)
    dz = sum(dzs) / len(dzs)
    if dx <= -TORSO_LEAN:
        return "lean-left"
    if dx >= TORSO_LEAN:
        return "lean-right"
    if dz >= TORSO_FORWARD:
        return "forward"
    return "neutral"


def posture_from_pose(pose: dict) -> dict:
    """Head + torso labels. Face NMFs stay in nmf_from_face."""
    body = dict(BODY_DEFAULT)
    body["head"] = nmf_from_face(pose).get("head") or "neutral"
    body["torso"] = torso_from_body(pose)
    return body


# Same mapping as src/compile.js expressionsFromNmf.
_NMF_TO_EXPR = {
    ("eyebrows", "raised"): (("surprised", 0.7),),
    ("eyebrows", "furrowed"): (("angry", 0.55),),
    ("mouth", "open"): (("aa", 0.65),),
    ("mouth", "spread"): (("ee", 0.45), ("happy", 0.25)),
    ("mouth", "pursed"): (("ou", 0.5),),
    ("eyegaze", "left"): (("lookLeft", 1.0),),
    ("eyegaze", "right"): (("lookRight", 1.0),),
    ("eyegaze", "up"): (("lookUp", 1.0),),
    ("eyegaze", "down"): (("lookDown", 1.0),),
}


def expression_tracks(nmf: dict, duration: float, *, rise: float = 0.4) -> dict:
    """Discrete face labels → VRM expression tracks [[t, weight], ...]."""
    out: dict[str, list] = {}
    if not isinstance(nmf, dict):
        return out
    dur = max(float(duration), rise)
    for (field, label), rows in _NMF_TO_EXPR.items():
        if nmf.get(field) != label:
            continue
        for name, weight in rows:
            out[name] = [[0.0, 0.0], [rise, float(weight)], [dur, float(weight)]]
    return out
