"""Phonology-locked residual: fingers only, clipped. Macro-pose stays compiled.

θ_macro(t)  :=  θ_phon(t)
r_finger(t) :=  clip(θ_pose(t) − θ_phon(t), −ε, ε)
θ_finger(t) :=  θ_phon(t) + r_finger(t)

Copying HaMeR / geometric-retarget eulers onto shoulder, arm, or wrist is forbidden.
"""

from __future__ import annotations

EPS_RAD = 0.12  # ~7 degrees; high-frequency IK only

_MACRO_STEMS = ("Shoulder", "UpperArm", "LowerArm", "Hand", "Spine", "Chest", "Neck", "Head", "Hips")
_FINGER_STEMS = ("Thumb", "Index", "Middle", "Ring", "Little")


def is_macro_bone(name: str) -> bool:
    return any(name.endswith(stem) or stem in name for stem in _MACRO_STEMS) and not is_finger_bone(name)


def is_finger_bone(name: str) -> bool:
    return any(stem in name for stem in _FINGER_STEMS)


def _clip(v: float, eps: float) -> float:
    if v > eps:
        return eps
    if v < -eps:
        return -eps
    return v


def _nearest(track: list, t: float) -> list[float] | None:
    if not track:
        return None
    best = track[0]
    best_d = abs(float(best[0]) - t)
    for key in track:
        d = abs(float(key[0]) - t)
        if d < best_d:
            best, best_d = key, d
    eul = best[1]
    if not isinstance(eul, (list, tuple)) or len(eul) != 3:
        return None
    return [float(eul[0]), float(eul[1]), float(eul[2])]


def apply_residual(compiled: dict, retargeted: dict, *, eps: float = EPS_RAD) -> dict:
    """Return a clip whose macro bones equal `compiled` and fingers = phonology + clipped delta."""
    phon = compiled.get("bones") or {}
    pose = retargeted.get("bones") or {}
    bones: dict[str, list] = {}
    for name, track in phon.items():
        if is_macro_bone(name) or not is_finger_bone(name):
            bones[name] = [[k[0], list(k[1])] for k in track]
            continue
        pose_track = pose.get(name) or []
        out = []
        for t, eul in track:
            base = [float(eul[0]), float(eul[1]), float(eul[2])]
            other = _nearest(pose_track, float(t))
            if other is None:
                out.append([t, base])
                continue
            delta = [_clip(other[i] - base[i], eps) for i in range(3)]
            out.append([t, [base[i] + delta[i] for i in range(3)]])
        bones[name] = out
        # Finger bones that exist only on the pose side are ignored (would invent motion).
    return {
        "schema": compiled.get("schema") or "marionet.clip/v0",
        "signDescId": compiled.get("signDescId"),
        "language": compiled.get("language"),
        "source": "compiled+residual",
        "vrmHumanoid": compiled.get("vrmHumanoid") or "vrm1",
        "duration": compiled.get("duration"),
        "bones": bones,
        "expressions": dict(compiled.get("expressions") or {}),
        "residual": {"eps": eps, "macro": "locked", "fingers": "clipped"},
    }


def macro_pose_unchanged(compiled: dict, result: dict, *, atol: float = 1e-6) -> bool:
    a = compiled.get("bones") or {}
    b = result.get("bones") or {}
    for name, track in a.items():
        if not is_macro_bone(name):
            continue
        other = b.get(name)
        if other is None or len(other) != len(track):
            return False
        for (t0, e0), (t1, e1) in zip(track, other):
            if abs(float(t0) - float(t1)) > atol:
                return False
            if any(abs(float(e0[i]) - float(e1[i])) > atol for i in range(3)):
                return False
    return True
