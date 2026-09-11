"""Label spaces aligned with src/ir.js + src/library.js. Named shapes are atoms (ILY, horns).

marionet.phonology/v0 is a language-agnostic articulatory subset over the whole
body: selected fingers, major location, palm facing, path type, head, torso,
coarse face. It is not an ASL phoneme inventory and not “manual phonology.”
Language-specific leftovers are the reject tokens unmapped / occluded,
never a forced nearest L1 label.
"""

from __future__ import annotations

INVENTORY = "marionet.phonology/v0"
UNMAPPED = "unmapped"
OCCLUDED = "occluded"
# Below this, a hand frame does not vote. Matches paper τ_pose.
POSE_CONF_MIN = 0.35
# Class max-prob reject. L2/L3 uses the stricter value.
CLS_MIN_L1 = 0.45
CLS_MIN_L2 = 0.55

HANDSHAPE_IDS = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P",
    "R", "S", "T", "U", "V", "W", "X", "Y", "1", "3", "4", "5", "8",
    "open_b", "flat_b", "curved_5", "baby_o", "flat_o", "open_8",
    "ILY", "horns",
]

# curl 0 = extended, 1 = fist. Mirrors library.js HANDSHAPES (fingers + thumb only).
HANDSHAPE_SPECS = {
    "A": {"fingers": {"index": 1, "middle": 1, "ring": 1, "little": 1, "spread": 0}, "thumb": {"curl": 0.15, "opposition": 0.2, "abduction": 0.45}},
    "B": {"fingers": {"index": 0, "middle": 0, "ring": 0, "little": 0, "spread": -0.1}, "thumb": {"curl": 0.75, "opposition": 0.85, "abduction": 0.1}},
    "C": {"fingers": {"index": 0.38, "middle": 0.4, "ring": 0.42, "little": 0.45, "spread": 0.15}, "thumb": {"curl": 0.35, "opposition": 0.55, "abduction": 0.55}},
    "D": {"fingers": {"index": 0, "middle": 0.82, "ring": 0.85, "little": 0.85, "spread": 0}, "thumb": {"curl": 0.45, "opposition": 0.75, "abduction": 0.2}},
    "E": {"fingers": {"index": 0.72, "middle": 0.74, "ring": 0.76, "little": 0.78, "spread": 0}, "thumb": {"curl": 0.7, "opposition": 0.7, "abduction": 0.05}},
    "F": {"fingers": {"index": 0.48, "middle": 0.03, "ring": 0.03, "little": 0.03, "spread": 0.18}, "thumb": {"curl": 0.08, "opposition": 0, "abduction": 0.05}},
    "G": {"fingers": {"index": 0, "middle": 1, "ring": 1, "little": 1, "spread": 0}, "thumb": {"curl": 0.1, "opposition": 0.15, "abduction": 0.35}},
    "H": {"fingers": {"index": 0, "middle": 0, "ring": 1, "little": 1, "spread": -0.15}, "thumb": {"curl": 0.55, "opposition": 0.45, "abduction": 0.1}},
    "I": {"fingers": {"index": 1, "middle": 1, "ring": 1, "little": 0, "spread": 0.1}, "thumb": {"curl": 0.35, "opposition": 0.35, "abduction": 0.2}},
    "K": {"fingers": {"index": 0, "middle": 0.22, "ring": 1, "little": 1, "spread": 0.35}, "thumb": {"curl": 0.2, "opposition": 0.55, "abduction": 0.15}},
    "L": {"fingers": {"index": 0, "middle": 1, "ring": 1, "little": 1, "spread": 0}, "thumb": {"curl": 0.05, "opposition": 0.05, "abduction": 0.95}},
    "M": {"fingers": {"index": 0.92, "middle": 0.92, "ring": 0.92, "little": 0.95, "spread": 0}, "thumb": {"curl": 0.55, "opposition": 0.5, "abduction": -0.15}},
    "N": {"fingers": {"index": 0.92, "middle": 0.92, "ring": 0.95, "little": 0.95, "spread": 0}, "thumb": {"curl": 0.5, "opposition": 0.45, "abduction": -0.05}},
    "O": {"fingers": {"index": 0.48, "middle": 0.5, "ring": 0.52, "little": 0.55, "spread": 0.05}, "thumb": {"curl": 0.45, "opposition": 0.8, "abduction": 0.3}},
    "P": {"fingers": {"index": 0, "middle": 0.22, "ring": 1, "little": 1, "spread": 0.35}, "thumb": {"curl": 0.25, "opposition": 0.6, "abduction": 0.2}},
    "R": {"fingers": {"index": 0.08, "middle": 0.08, "ring": 1, "little": 1, "spread": -0.05}, "thumb": {"curl": 0.5, "opposition": 0.4, "abduction": 0.1}},
    "S": {"fingers": {"index": 1, "middle": 1, "ring": 1, "little": 1, "spread": 0}, "thumb": {"curl": 0.35, "opposition": 0.55, "abduction": 0.05}},
    "T": {"fingers": {"index": 0.95, "middle": 1, "ring": 1, "little": 1, "spread": 0}, "thumb": {"curl": 0.25, "opposition": 0.35, "abduction": 0.2}},
    "U": {"fingers": {"index": 0, "middle": 0, "ring": 1, "little": 1, "spread": -0.2}, "thumb": {"curl": 0.55, "opposition": 0.5, "abduction": 0.1}},
    "V": {"fingers": {"index": 0, "middle": 0, "ring": 1, "little": 1, "spread": 0.55}, "thumb": {"curl": 0.55, "opposition": 0.5, "abduction": 0.1}},
    "W": {"fingers": {"index": 0, "middle": 0, "ring": 0, "little": 1, "spread": 0.4}, "thumb": {"curl": 0.6, "opposition": 0.55, "abduction": 0.05}},
    "X": {"fingers": {"index": 0.55, "middle": 1, "ring": 1, "little": 1, "spread": 0}, "thumb": {"curl": 0.4, "opposition": 0.4, "abduction": 0.15}},
    "Y": {"fingers": {"index": 1, "middle": 1, "ring": 1, "little": 0, "spread": 0.35}, "thumb": {"curl": 0.05, "opposition": 0.1, "abduction": 0.95}},
    "1": {"fingers": {"index": 0, "middle": 1, "ring": 1, "little": 1, "spread": 0}, "thumb": {"curl": 0.45, "opposition": 0.45, "abduction": 0.1}},
    "3": {"fingers": {"index": 0, "middle": 0, "ring": 1, "little": 1, "spread": 0.45}, "thumb": {"curl": 0.05, "opposition": 0.1, "abduction": 0.9}},
    "4": {"fingers": {"index": 0, "middle": 0, "ring": 0, "little": 1, "spread": 0.45}, "thumb": {"curl": 0.7, "opposition": 0.7, "abduction": 0.1}},
    "5": {"fingers": {"index": 0, "middle": 0, "ring": 0, "little": 0, "spread": 0.7}, "thumb": {"curl": 0.05, "opposition": 0.1, "abduction": 0.9}},
    "8": {"fingers": {"index": 0.05, "middle": 0.55, "ring": 0.05, "little": 0.05, "spread": 0.2}, "thumb": {"curl": 0.35, "opposition": 0.7, "abduction": 0.25}},
    "open_b": {"fingers": {"index": 0, "middle": 0, "ring": 0, "little": 0, "spread": -0.05}, "thumb": {"curl": 0.08, "opposition": 0.12, "abduction": 0.55}},
    "flat_b": {"fingers": {"index": 0, "middle": 0, "ring": 0, "little": 0, "spread": -0.08}, "thumb": {"curl": 0.2, "opposition": 0.15, "abduction": 0.12}},
    "curved_5": {"fingers": {"index": 0.38, "middle": 0.4, "ring": 0.42, "little": 0.45, "spread": 0.55}, "thumb": {"curl": 0.25, "opposition": 0.2, "abduction": 0.7}},
    "baby_o": {"fingers": {"index": 0.42, "middle": 1, "ring": 1, "little": 1, "spread": 0}, "thumb": {"curl": 0.4, "opposition": 0.85, "abduction": 0.25}},
    "flat_o": {"fingers": {"index": 0.32, "middle": 0.34, "ring": 0.36, "little": 0.38, "spread": 0.08}, "thumb": {"curl": 0.35, "opposition": 0.75, "abduction": 0.35}},
    "open_8": {"fingers": {"index": 0, "middle": 0.58, "ring": 0, "little": 0, "spread": 0.35}, "thumb": {"curl": 0.15, "opposition": 0.25, "abduction": 0.55}},
    "ILY": {"fingers": {"index": 0, "middle": 1, "ring": 1, "little": 0, "spread": 0.35}, "thumb": {"curl": 0.05, "opposition": 0.05, "abduction": 0.95}},
    "horns": {"fingers": {"index": 0, "middle": 1, "ring": 1, "little": 0, "spread": 0.4}, "thumb": {"curl": 0.45, "opposition": 0.45, "abduction": 0.15}},
}

LOCATIONS = [
    "rest", "fs-station", "neutral-space", "neutral-space-high", "chest-front",
    "belly", "shoulder", "neck", "head", "forehead", "eye", "nose", "cheek",
    "mouth", "chin", "ear", "forearm", "weak-hand",
]

ORIENTATIONS = ["palm-out", "palm-in", "palm-down", "palm-up", "palm-side"]
MOVEMENTS = ["hold", "linear", "arc", "circle", "whisker", "hook", "present", "trace"]
HANDED = ["1h", "2h-symmetric", "2h-asymmetric", "2h-alternating"]

NMF_EYEBROWS = ["neutral", "raised", "furrowed"]
NMF_MOUTH = ["neutral", "open", "spread", "pursed"]
NMF_EYEGAZE = ["neutral", "left", "right", "up", "down", "hand"]
NMF_HEAD = ["neutral", "tilt-left", "tilt-right", "turn-left", "turn-right", "nod", "shake"]
TORSO = ["neutral", "lean-left", "lean-right", "forward"]
NMF_DEFAULT = {"eyebrows": "neutral", "mouth": "neutral", "eyegaze": "neutral", "head": "neutral"}
BODY_DEFAULT = {"head": "neutral", "torso": "neutral"}

# Languages with L1 phonological spreadsheets. Others are L2/L3 transfer-with-reject.
L1_LANGUAGES = frozenset({"ase"})

# Signer-space wrist y (shoulder at 0, hip at -0.45) for synthetic body tracks.
LOCATION_WRIST_Y = {
    "rest": -0.32, "belly": -0.22, "forearm": -0.10, "neutral-space": -0.18,
    "neutral-space-high": 0.08, "fs-station": 0.10, "chest-front": 0.02,
    "weak-hand": 0.00, "shoulder": 0.06, "neck": 0.16, "chin": 0.19,
    "mouth": 0.21, "cheek": 0.23, "nose": 0.25, "eye": 0.27, "ear": 0.23,
    "forehead": 0.31, "head": 0.25,
}


def primitive_ids(handshape) -> list[str]:
    if isinstance(handshape, list):
        return [str(x) for x in handshape if x]
    if isinstance(handshape, str) and handshape:
        return [handshape]
    return []


def compose_specs(ids: list[str]) -> dict:
    specs = [HANDSHAPE_SPECS[i] for i in ids if i in HANDSHAPE_SPECS]
    if not specs:
        return HANDSHAPE_SPECS["5"]
    keys = ("index", "middle", "ring", "little")
    fingers = {k: min(s["fingers"][k] for s in specs) for k in keys}
    fingers["spread"] = max(s["fingers"]["spread"] for s in specs)
    thumb = {
        "curl": min(s["thumb"]["curl"] for s in specs),
        "opposition": min(s["thumb"]["opposition"] for s in specs),
        "abduction": max(s["thumb"]["abduction"] for s in specs),
    }
    return {"fingers": fingers, "thumb": thumb}


def movement_type(move) -> str:
    if not move:
        return "hold"
    if isinstance(move, list) and move:
        t = move[0].get("type") if isinstance(move[0], dict) else None
        if t == "trace":
            return "trace"
        return t if t in MOVEMENTS else "hold"
    return "hold"
