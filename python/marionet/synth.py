"""SignDesc → dummy marionet.pose/v0 whose fingers/station match the labels."""

from __future__ import annotations

import json
import sys
from pathlib import Path

import numpy as np

_ROOT = Path(__file__).resolve().parents[2]
_SCRIPTS = str(_ROOT / "scripts")
if _SCRIPTS not in sys.path:
    sys.path.insert(0, _SCRIPTS)

from marionet_pose import FAIL_OK, POSE_SCHEMA, attach_canonical, dummy_face_frame, dummy_hand_xyz  # noqa: E402

from .catalogs import (
    HANDSHAPE_SPECS,
    LOCATION_WRIST_Y,
    compose_specs,
    movement_type,
    primitive_ids,
)
from .features import pose_vector
from .model import labels_from_desc


def _spec_for(handshape) -> dict:
    ids = primitive_ids(handshape)
    if len(ids) > 1:
        return compose_specs(ids)
    if ids and ids[0] in HANDSHAPE_SPECS:
        return HANDSHAPE_SPECS[ids[0]]
    return HANDSHAPE_SPECS["5"]


def pose_from_desc(desc: dict, *, fps: float = 24.0, seconds: float = 0.8, rng: np.random.Generator | None = None) -> dict:
    rng = rng or np.random.default_rng(0)
    art = desc.get("dominant") or {}
    spec = _spec_for(art.get("handshape"))
    loc = art.get("location") or "neutral-space"
    wy = LOCATION_WRIST_Y.get(loc, 0.05)
    mt = movement_type(art.get("movement"))
    n = max(8, int(round(fps * seconds)))
    fingers = {k: spec["fingers"][k] for k in ("index", "middle", "ring", "little")}
    face: list = []
    # tiny noise so the linear model cannot memorize a single cloud
    for k in fingers:
        fingers[k] = float(np.clip(fingers[k] + rng.normal(0, 0.03), 0, 1))
    spread = float(spec["fingers"]["spread"] + rng.normal(0, 0.02))
    thumb = dict(spec["thumb"])
    right = []
    body = []
    for i in range(n):
        t = i / fps
        phase = 2 * np.pi * (i / max(n - 1, 1))
        dx = dy = dz = 0.0
        if mt in {"linear", "present"}:
            dz = 0.04 * np.sin(phase)
        elif mt == "arc":
            dx = 0.03 * np.sin(phase)
            dy = 0.02 * np.cos(phase)
        elif mt in {"circle", "whisker"}:
            dx = 0.03 * np.cos(phase)
            dz = 0.03 * np.sin(phase)
        elif mt == "hook":
            dy = -0.03 * (i / max(n - 1, 1))
        xyz = dummy_hand_xyz(fingers=fingers, spread=spread, thumb=thumb)
        xyz = [[p[0] + dx, p[1] + dy, p[2] + dz] for p in xyz]
        right.append({"t": round(t, 4), "xyz": xyz, "conf": 1.0})
        body.append(
            {
                "t": round(t, 4),
                "keypoints": {
                    "rightShoulder": [0.18, 0.0, 0.0],
                    "rightElbow": [0.22, wy * 0.4 - 0.1, 0.12],
                    "rightWrist": [0.20 + dx, wy + dy, 0.22 + dz],
                    "leftShoulder": [-0.18, 0.0, 0.0],
                    "leftHip": [-0.12, -0.45, 0.0],
                    "rightHip": [0.12, -0.45, 0.0],
                    "nose": [0.0, 0.28, 0.04],
                    "leftEye": [-0.03, 0.30, 0.04],
                    "rightEye": [0.03, 0.30, 0.04],
                    "leftEar": [-0.08, 0.28, 0.0],
                    "rightEar": [0.08, 0.28, 0.0],
                    "mouthLeft": [-0.02, 0.24, 0.04],
                    "mouthRight": [0.02, 0.24, 0.04],
                },
            }
        )
        face.append(dummy_face_frame(t))
    pose = {
        "schema": POSE_SCHEMA,
        "fps": fps,
        "n_frames": n,
        "status": FAIL_OK,
        "language": desc.get("language"),
        "gloss": desc.get("gloss"),
        "signDescId": desc.get("id"),
        "body": body,
        "right": right,
        "left": [],
        "face": face,
        "camera": {"frame": "signer", "up": "y"},
        "backend": "synth",
    }
    return attach_canonical(pose)


def load_lexicon_descs(root: Path | None = None) -> list[dict]:
    root = root or _ROOT
    out: list[dict] = []
    fs = json.loads((root / "data/signs/ase/fingerspelling.json").read_text())
    out.extend(fs.get("signs") or [])
    for rel in ("data/signs/ase/i-love-you.json", "data/signs/gsm/gato.json"):
        out.append(json.loads((root / rel).read_text()))
    lex = json.loads((root / "data/signs/ase/asllex_signdesc.json").read_text())
    for desc in lex.get("signs") or []:
        if desc.get("compileReady"):
            out.append(desc)
    return out


def build_arrays(descs: list[dict], rng: np.random.Generator | None = None):
    rng = rng or np.random.default_rng(1)
    xs, ys = [], {k: [] for k in ("hs", "loc", "ori", "mov", "han")}
    ids = []
    for desc in descs:
        pose = pose_from_desc(desc, rng=rng)
        xs.append(pose_vector(pose))
        lab = labels_from_desc(desc)
        for k in ys:
            ys[k].append(lab[k])
        ids.append(desc.get("id") or "")
    X = np.stack(xs, axis=0)
    Y = {k: np.stack(v, axis=0) for k, v in ys.items()}
    return X, Y, ids
