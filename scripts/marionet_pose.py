"""marionet.pose/v0 + geometric retarget → marionet.clip/v0.

Videos are an axiom: this module reads paths on disk. It does not fetch.
"""

from __future__ import annotations

import json
import math
from pathlib import Path

POSE_SCHEMA = "marionet.pose/v0"
CLIP_SCHEMA = "marionet.clip/v0"
CLIP_SOURCES = ("authored", "retargeted", "compiled+residual")

FAIL_OK = "ok"
FAIL_NO_HAND = "no_hand"
FAIL_TWO_PEOPLE = "two_people"
FAIL_BLUR = "blur"
FAIL_OUT_OF_FRAME = "out_of_frame"
FAIL_NO_VIDEO = "no_video"
FAIL_EMPTY = "empty"

# Rest-relative eulers copied from src/library.js fs-station (right).
FS_STATION_RIGHT = {
    "rightShoulder": (0.06, 0.08, 0.05),
    "rightUpperArm": (-0.95, 0.12, -0.35),
    "rightLowerArm": (0.2, 1.45, 0.05),
    "rightHand": (-0.15, 0.25, 0.08),
}

CURL_MAX = 1.38
SPREAD_MAX = 0.32
FINGERS = ("Index", "Middle", "Ring", "Little")
# MediaPipe / HaMeR 21: wrist, thumb(1-4), index(5-8), middle(9-12), ring(13-16), little(17-20)
FINGER_CHAIN = {
    "Index": (5, 6, 7, 8),
    "Middle": (9, 10, 11, 12),
    "Ring": (13, 14, 15, 16),
    "Little": (17, 18, 19, 20),
}

BODY_NAMES = (
    "nose",
    "leftShoulder",
    "rightShoulder",
    "leftElbow",
    "rightElbow",
    "leftWrist",
    "rightWrist",
    "leftHip",
    "rightHip",
)

# MediaPipe Pose landmark indices (BlazePose).
MP_POSE_INDEX = {
    "nose": 0,
    "leftShoulder": 11,
    "rightShoulder": 12,
    "leftElbow": 13,
    "rightElbow": 14,
    "leftWrist": 15,
    "rightWrist": 16,
    "leftHip": 23,
    "rightHip": 24,
}


def _is_num(v) -> bool:
    return isinstance(v, (int, float)) and not isinstance(v, bool) and math.isfinite(v)


def _xyz(pt) -> list[float] | None:
    if pt is None:
        return None
    if isinstance(pt, dict):
        if not all(_is_num(pt.get(k)) for k in ("x", "y", "z")):
            return None
        return [float(pt["x"]), float(pt["y"]), float(pt["z"])]
    if isinstance(pt, (list, tuple)) and len(pt) >= 3 and all(_is_num(n) for n in pt[:3]):
        return [float(pt[0]), float(pt[1]), float(pt[2])]
    return None


def validate_pose(pose: dict) -> list[str]:
    errors = []
    if not isinstance(pose, dict):
        return ["pose must be an object"]
    if pose.get("schema") != POSE_SCHEMA:
        errors.append(f"schema must be {POSE_SCHEMA}")
    fps = pose.get("fps")
    if not _is_num(fps) or fps <= 0:
        errors.append("fps must be > 0")
    n_frames = pose.get("n_frames")
    if not isinstance(n_frames, int) or n_frames < 0:
        errors.append("n_frames must be >= 0")
    for hand in ("left", "right"):
        frames = pose.get(hand)
        if frames is None:
            continue
        if not isinstance(frames, list):
            errors.append(f"{hand} must be an array")
            continue
        for i, frame in enumerate(frames):
            if not isinstance(frame, dict):
                errors.append(f"{hand}[{i}] must be an object")
                continue
            xyz = frame.get("xyz")
            if xyz is None:
                continue
            if not isinstance(xyz, list) or len(xyz) != 21:
                errors.append(f"{hand}[{i}].xyz must be 21 points")
                continue
            for j, pt in enumerate(xyz):
                if _xyz(pt) is None:
                    errors.append(f"{hand}[{i}].xyz[{j}] must be [x,y,z]")
                    break
    return errors


def validate_clip(clip: dict) -> list[str]:
    errors = []
    if not isinstance(clip, dict):
        return ["MarionetClip must be an object"]
    if clip.get("schema") != CLIP_SCHEMA:
        errors.append(f"schema must be {CLIP_SCHEMA}")
    duration = clip.get("duration")
    if not _is_num(duration) or duration < 0:
        errors.append("duration must be >= 0")
    bones = clip.get("bones")
    if not isinstance(bones, dict):
        errors.append("bones must be an object of tracks")
    else:
        for name, track in bones.items():
            if not isinstance(track, list):
                errors.append(f"bones.{name} must be a list")
                continue
            for key in track:
                if (
                    not isinstance(key, (list, tuple))
                    or len(key) != 2
                    or not _is_num(key[0])
                    or not isinstance(key[1], (list, tuple))
                    or len(key[1]) != 3
                ):
                    errors.append(f"bones.{name} must be [[t, [x,y,z]], ...]")
                    break
    source = clip.get("source")
    if source is not None and source not in CLIP_SOURCES:
        errors.append(f"source must be one of {', '.join(CLIP_SOURCES)}")
    return errors


def _sub(a, b):
    return (a[0] - b[0], a[1] - b[1], a[2] - b[2])


def _dot(a, b):
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]


def _norm(a):
    return math.sqrt(_dot(a, a))


def _joint_curl(a, b, c) -> float:
    """Curl 0 = extended (~180° at b), 1 ≈ 90° flexion."""
    v1 = _sub(a, b)
    v2 = _sub(c, b)
    n1, n2 = _norm(v1), _norm(v2)
    if n1 < 1e-8 or n2 < 1e-8:
        return 0.0
    cosang = max(-1.0, min(1.0, _dot(v1, v2) / (n1 * n2)))
    ang = math.acos(cosang)
    return max(0.0, min(1.2, (math.pi - ang) / (math.pi / 2)))


def finger_curls(xyz21: list) -> dict[str, float]:
    pts = [_xyz(p) for p in xyz21]
    curls = {}
    for name, (mcp, pip, dip, _tip) in FINGER_CHAIN.items():
        if not (pts[mcp] and pts[pip] and pts[dip]):
            curls[name] = 0.0
            continue
        curls[name] = _joint_curl(pts[mcp], pts[pip], pts[dip])
    return curls


def thumb_curl(xyz21: list) -> float:
    pts = [_xyz(p) for p in xyz21]
    if not (pts[1] and pts[2] and pts[3]):
        return 0.2
    return _joint_curl(pts[1], pts[2], pts[3])


def finger_spread(xyz21: list) -> float:
    pts = [_xyz(p) for p in xyz21]
    if not (pts[0] and pts[5] and pts[17]):
        return 0.0
    v_i = _sub(pts[5], pts[0])
    v_p = _sub(pts[17], pts[0])
    n1, n2 = _norm(v_i), _norm(v_p)
    if n1 < 1e-8 or n2 < 1e-8:
        return 0.0
    cosang = max(-1.0, min(1.0, _dot(v_i, v_p) / (n1 * n2)))
    ang = math.acos(cosang)
    return max(0.0, min(1.0, (ang - 0.25) / 0.7))


def _curl_joints(curl: float, profile: str = "full"):
    if profile == "hook":
        return curl * 0.35 * CURL_MAX, curl * 1.15 * CURL_MAX, curl * 0.95 * CURL_MAX
    return curl * CURL_MAX, curl * 1.05 * CURL_MAX, curl * 0.88 * CURL_MAX


def hand_eulers(xyz21: list, side: str = "right") -> dict[str, list[float]]:
    sign = 1 if side == "right" else -1
    curls = finger_curls(xyz21)
    spread = finger_spread(xyz21)
    pose = {}
    for finger in FINGERS:
        proximal, mid, distal = _curl_joints(curls[finger])
        spr = 0.0
        if finger == "Index":
            spr = -spread * SPREAD_MAX
        elif finger == "Little":
            spr = spread * SPREAD_MAX * 0.85
        elif finger == "Ring":
            spr = spread * SPREAD_MAX * 0.35
        bone = f"{side}{finger}"
        pose[f"{bone}Proximal"] = [0.0, spr * sign, proximal]
        pose[f"{bone}Intermediate"] = [0.0, 0.0, mid]
        pose[f"{bone}Distal"] = [0.0, 0.0, distal]
    tcurl = thumb_curl(xyz21)
    pose[f"{side}ThumbMetacarpal"] = [tcurl * 0.85 * 0.3, 0.2 * sign, 0.45 * sign]
    pose[f"{side}ThumbProximal"] = [tcurl * 0.85 * 0.85, 0.0, 0.0]
    pose[f"{side}ThumbDistal"] = [tcurl * 0.85 * 0.45, 0.0, 0.0]
    return pose


def classify_station(body_frame: dict | None, side: str = "right") -> dict[str, tuple[float, float, float]]:
    """Cheap location prior from wrist height. True IK is a later E1 refinement."""
    if not body_frame:
        return dict(FS_STATION_RIGHT) if side == "right" else _mirror_arm(FS_STATION_RIGHT)
    kps = body_frame.get("keypoints") or {}
    wrist = _xyz(kps.get(f"{side}Wrist"))
    shoulder = _xyz(kps.get(f"{side}Shoulder"))
    hip = _xyz(kps.get(f"{side}Hip"))
    if not (wrist and shoulder):
        return dict(FS_STATION_RIGHT) if side == "right" else _mirror_arm(FS_STATION_RIGHT)
    # Signer y: up. Image y often grows down — world landmarks from MP are up-positive.
    rel = wrist[1] - shoulder[1]
    if hip:
        span = max(1e-4, abs(shoulder[1] - hip[1]))
        rel = (wrist[1] - shoulder[1]) / span
    if rel > 0.15:
        loc = "head"
    elif rel > -0.35:
        loc = "fs-station"
    else:
        loc = "neutral-space"
    return ARM_STATIONS[loc][side]


def _mirror_arm(right: dict) -> dict:
    out = {}
    for bone, eul in right.items():
        left = "left" + bone[5:] if bone.startswith("right") else bone
        out[left] = (eul[0], -eul[1], -eul[2])
    return out


ARM_STATIONS = {
    "fs-station": {
        "right": FS_STATION_RIGHT,
        "left": _mirror_arm(FS_STATION_RIGHT),
    },
    "head": {
        "right": {
            "rightShoulder": (0.1, 0.1, 0.08),
            "rightUpperArm": (-1.02, 0.08, -0.42),
            "rightLowerArm": (0.12, 2.0, 0.1),
            "rightHand": (0.2, -0.05, 0.2),
        },
        "left": None,
    },
    "neutral-space": {
        "right": {
            "rightShoulder": (0.02, 0.04, 0.05),
            "rightUpperArm": (0.75, 0.18, 0.12),
            "rightLowerArm": (0.35, 0.9, 0.05),
            "rightHand": (0.1, 0.05, 0),
        },
        "left": None,
    },
}
ARM_STATIONS["head"]["left"] = _mirror_arm(ARM_STATIONS["head"]["right"])
ARM_STATIONS["neutral-space"]["left"] = _mirror_arm(ARM_STATIONS["neutral-space"]["right"])


def retarget_pose(pose: dict, side_pref: str = "right") -> dict:
    errors = validate_pose(pose)
    if errors:
        raise ValueError("; ".join(errors))
    fps = float(pose["fps"])
    n = int(pose["n_frames"])
    duration = n / fps if fps else 0.0
    body = pose.get("body") or []
    bones: dict[str, list] = {}

    def push(bone: str, t: float, eul):
        bones.setdefault(bone, []).append([round(t, 4), [round(eul[0], 4), round(eul[1], 4), round(eul[2], 4)]])

    for i in range(n):
        t = i / fps if fps else 0.0
        body_frame = body[i] if i < len(body) else None
        for side in ("right", "left"):
            frames = pose.get(side) or []
            frame = frames[i] if i < len(frames) else None
            xyz = frame.get("xyz") if frame else None
            if not xyz:
                continue
            arm = classify_station(body_frame, side)
            hand = hand_eulers(xyz, side)
            for bone, eul in arm.items():
                push(bone, t, eul)
            for bone, eul in hand.items():
                push(bone, t, eul)

    if not bones:
        # No detected hands: still emit a rest-hold so the CLI has a clip, tagged empty.
        for bone, eul in FS_STATION_RIGHT.items():
            push(bone, 0.0, eul)
            push(bone, max(duration, 0.4), eul)
        duration = max(duration, 0.4)

    return {
        "schema": CLIP_SCHEMA,
        "source": "retargeted",
        "vrmHumanoid": "vrm1",
        "language": pose.get("language"),
        "signDescId": pose.get("signDescId"),
        "duration": round(duration, 4),
        "bones": bones,
        "expressions": {},
        "e0": pose.get("status", FAIL_OK),
    }


def dummy_hand_xyz(
    openness: float = 0.0,
    fingers: dict | None = None,
    spread: float = 0.0,
    thumb: dict | None = None,
) -> list[list[float]]:
    """Synthetic 21-point right hand in signer space (x right, y up, z forward).

    `fingers` curls are 0 = extended, 1 = fist (same convention as library.js).
    """
    pts: list[list[float]] = [[0.0, 0.0, 0.0] for _ in range(21)]
    pts[0] = [0.0, 0.0, 0.0]
    if fingers is None:
        fingers = {
            "index": openness,
            "middle": openness,
            "ring": openness,
            "little": openness,
        }
        spread = 0.15
    t = thumb or {"curl": 0.2, "opposition": 0.3, "abduction": 0.4}
    abd = float(t.get("abduction") or 0)
    opp = float(t.get("opposition") or 0)
    tcurl = float(t.get("curl") or 0)
    pts[1] = [0.02 + 0.04 * abd, 0.01, 0.01 + 0.03 * opp]
    pts[2] = [0.03 + 0.05 * abd, 0.02 + 0.01 * (1 - tcurl), 0.02 + 0.04 * opp]
    pts[3] = [0.04 + 0.05 * abd, 0.03 + 0.02 * (1 - tcurl), 0.03 + 0.04 * opp]
    pts[4] = [0.05 + 0.06 * abd, 0.04 + 0.03 * (1 - tcurl), 0.03 + 0.05 * opp]
    order = (("index", 5, -0.02), ("middle", 9, 0.0), ("ring", 13, 0.02), ("little", 17, 0.04))
    for name, mcp, x0 in order:
        curl = float(fingers.get(name, 0.0))
        sx = x0 + spread * (0.04 if name == "little" else -0.03 if name == "index" else 0.0)
        for k in range(4):
            fold = curl * k * 0.018
            pts[mcp + k] = [sx, 0.03 + k * 0.022 * (1 - 0.35 * curl), fold]
    return pts


def dummy_pose(*, fps: float = 30.0, seconds: float = 1.2, language: str | None = None, gloss: str | None = None) -> dict:
    n = max(1, int(round(fps * seconds)))
    right = []
    body = []
    for i in range(n):
        t = i / fps
        openness = 0.15 * (1 - abs((i / max(n - 1, 1)) * 2 - 1))
        right.append({"t": round(t, 4), "xyz": dummy_hand_xyz(openness)})
        body.append(
            {
                "t": round(t, 4),
                "keypoints": {
                    "rightShoulder": [0.18, 0.0, 0.0],
                    "rightElbow": [0.22, -0.15, 0.12],
                    "rightWrist": [0.2, 0.12, 0.22],
                    "leftShoulder": [-0.18, 0.0, 0.0],
                    "leftHip": [-0.12, -0.45, 0.0],
                    "rightHip": [0.12, -0.45, 0.0],
                    "nose": [0.0, 0.28, 0.04],
                },
            }
        )
    return {
        "schema": POSE_SCHEMA,
        "fps": fps,
        "n_frames": n,
        "status": FAIL_OK,
        "language": language,
        "gloss": gloss,
        "body": body,
        "right": right,
        "left": [],
        "camera": {"frame": "signer", "up": "y"},
        "backend": "dummy",
    }


def write_json(path: Path, obj: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(obj, indent=2) + "\n")
