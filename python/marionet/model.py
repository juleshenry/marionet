"""Linear multi-head classifier: pose vector → handshape (multi-hot) + location/orientation/movement/handed."""

from __future__ import annotations

from pathlib import Path

import numpy as np

from .catalogs import (
    CLS_MIN_L1,
    CLS_MIN_L2,
    HANDED,
    HANDSHAPE_IDS,
    HANDSHAPE_SPECS,
    INVENTORY,
    L1_LANGUAGES,
    LOCATIONS,
    MOVEMENTS,
    OCCLUDED,
    ORIENTATIONS,
    POSE_CONF_MIN,
    UNMAPPED,
    primitive_ids,
)
from .features import FEAT_DIM, pose_quality, pose_vector
from .nmf import nmf_from_face, posture_from_pose


def _softmax(z: np.ndarray) -> np.ndarray:
    z = z - z.max(axis=-1, keepdims=True)
    e = np.exp(np.clip(z, -30, 30))
    return e / e.sum(axis=-1, keepdims=True)


def _sigmoid(z: np.ndarray) -> np.ndarray:
    return 1.0 / (1.0 + np.exp(-np.clip(z, -30, 30)))


class PhonologyHeads:
    def __init__(self, rng: np.random.Generator | None = None):
        rng = rng or np.random.default_rng(0)
        d = FEAT_DIM
        scale = 0.05
        self.x_mean = np.zeros(d)
        self.x_std = np.ones(d)
        self.Whs = rng.normal(0, scale, (d, len(HANDSHAPE_IDS)))
        self.bhs = np.zeros(len(HANDSHAPE_IDS))
        self.Wloc = rng.normal(0, scale, (d, len(LOCATIONS)))
        self.bloc = np.zeros(len(LOCATIONS))
        self.Wori = rng.normal(0, scale, (d, len(ORIENTATIONS)))
        self.bori = np.zeros(len(ORIENTATIONS))
        self.Wmov = rng.normal(0, scale, (d, len(MOVEMENTS)))
        self.bmov = np.zeros(len(MOVEMENTS))
        self.Whan = rng.normal(0, scale, (d, len(HANDED)))
        self.bhan = np.zeros(len(HANDED))

    def fit_norm(self, X: np.ndarray) -> None:
        self.x_mean = X.mean(axis=0)
        std = X.std(axis=0)
        std[std < 1e-6] = 1.0
        self.x_std = std

    def _x(self, X: np.ndarray) -> np.ndarray:
        return (X - self.x_mean) / self.x_std

    def forward(self, X: np.ndarray) -> dict[str, np.ndarray]:
        Xn = self._x(X)
        return {
            "hs": _sigmoid(Xn @ self.Whs + self.bhs),
            "loc": _softmax(Xn @ self.Wloc + self.bloc),
            "ori": _softmax(Xn @ self.Wori + self.bori),
            "mov": _softmax(Xn @ self.Wmov + self.bmov),
            "han": _softmax(Xn @ self.Whan + self.bhan),
        }

    def step(self, X: np.ndarray, Y: dict[str, np.ndarray], lr: float = 0.05) -> float:
        n = max(X.shape[0], 1)
        Xn = self._x(X)
        P = self.forward(X)
        loss = 0.0
        # multi-label BCE
        hs = Y["hs"]
        loss += float(-(hs * np.log(P["hs"] + 1e-8) + (1 - hs) * np.log(1 - P["hs"] + 1e-8)).mean())
        g = (P["hs"] - hs) / n
        self.Whs -= lr * (Xn.T @ g)
        self.bhs -= lr * g.sum(axis=0)
        for key, Wname, bname in (
            ("loc", "Wloc", "bloc"),
            ("ori", "Wori", "bori"),
            ("mov", "Wmov", "bmov"),
            ("han", "Whan", "bhan"),
        ):
            y = Y[key]
            p = P[key]
            loss += float(-(y * np.log(p + 1e-8)).sum() / n)
            g = (p - y) / n
            setattr(self, Wname, getattr(self, Wname) - lr * (Xn.T @ g))
            setattr(self, bname, getattr(self, bname) - lr * g.sum(axis=0))
        return loss

    def save(self, path: Path) -> None:
        path.parent.mkdir(parents=True, exist_ok=True)
        np.savez(
            path,
            x_mean=self.x_mean, x_std=self.x_std,
            Whs=self.Whs, bhs=self.bhs,
            Wloc=self.Wloc, bloc=self.bloc,
            Wori=self.Wori, bori=self.bori,
            Wmov=self.Wmov, bmov=self.bmov,
            Whan=self.Whan, bhan=self.bhan,
            handshape_ids=np.array(HANDSHAPE_IDS),
            locations=np.array(LOCATIONS),
        )

    @classmethod
    def load(cls, path: Path) -> "PhonologyHeads":
        data = np.load(path, allow_pickle=False)
        m = cls()
        for k in ("x_mean", "x_std", "Whs", "bhs", "Wloc", "bloc", "Wori", "bori", "Wmov", "bmov", "Whan", "bhan"):
            if k in data:
                setattr(m, k, data[k])
        return m


def labels_from_desc(desc: dict) -> dict[str, np.ndarray]:
    art = desc.get("dominant") or {}
    hs = np.zeros(len(HANDSHAPE_IDS), dtype=np.float64)
    for pid in primitive_ids(art.get("handshape")):
        if pid in HANDSHAPE_IDS:
            hs[HANDSHAPE_IDS.index(pid)] = 1.0
    loc = np.zeros(len(LOCATIONS), dtype=np.float64)
    loc_id = art.get("location") or "neutral-space"
    if loc_id in LOCATIONS:
        loc[LOCATIONS.index(loc_id)] = 1.0
    ori = np.zeros(len(ORIENTATIONS), dtype=np.float64)
    ori_id = art.get("orientation") or "palm-out"
    ori[ORIENTATIONS.index(ori_id) if ori_id in ORIENTATIONS else 0] = 1.0
    mov = np.zeros(len(MOVEMENTS), dtype=np.float64)
    from .catalogs import movement_type

    mt = movement_type(art.get("movement"))
    mov[MOVEMENTS.index(mt)] = 1.0
    han = np.zeros(len(HANDED), dtype=np.float64)
    h = desc.get("handed") or "1h"
    han[HANDED.index(h) if h in HANDED else 0] = 1.0
    return {"hs": hs, "loc": loc, "ori": ori, "mov": mov, "han": han}


# Named catalog shapes win over folk letter-chords (ILY is not I+L+Y).
_NAMED_OVER_LETTERS = {"ILY": {"I", "L", "Y"}, "horns": {"I", "Y"}}


def cls_thresh(lang: str | None) -> float:
    if (lang or "") in L1_LANGUAGES:
        return CLS_MIN_L1
    return CLS_MIN_L2


def decode_heads(
    probs: dict[str, np.ndarray],
    thresh: float = CLS_MIN_L1,
    *,
    pose_conf: float = 1.0,
    occluded: bool = False,
):
    """Never argmax-force a label. Low pose conf → occluded; low class conf → unmapped."""
    if occluded or pose_conf < POSE_CONF_MIN:
        # Handshape/location carry the reject token; handed/orientation stay in-vocab for schema.
        return OCCLUDED, OCCLUDED, "palm-out", "hold", "1h"
    hs_p = probs["hs"]
    ids = [HANDSHAPE_IDS[i] for i, p in enumerate(hs_p) if p >= thresh]
    if not ids:
        # Reject, do not pick argmax — a wrong discrete handshape is worse than unmapped.
        handshape: str | list[str] = UNMAPPED
    else:
        for name, parts in _NAMED_OVER_LETTERS.items():
            if name in ids:
                ids = [i for i in ids if i == name or i not in parts]
        handshape = ids[0] if len(ids) == 1 else ids
    loc_p = float(probs["loc"].max())
    loc = LOCATIONS[int(probs["loc"].argmax())] if loc_p >= thresh else UNMAPPED
    ori_p = float(probs["ori"].max())
    ori = ORIENTATIONS[int(probs["ori"].argmax())] if ori_p >= thresh else UNMAPPED
    mov_p = float(probs["mov"].max())
    mov = MOVEMENTS[int(probs["mov"].argmax())] if mov_p >= thresh else UNMAPPED
    han_p = float(probs["han"].max())
    han = HANDED[int(probs["han"].argmax())] if han_p >= thresh else UNMAPPED
    return handshape, loc, ori, mov, han


def predict_signdesc(pose: dict, model: PhonologyHeads, *, lang: str | None = None, gloss: str | None = None) -> dict:
    language = lang or pose.get("language") or "und"
    gloss = gloss or pose.get("gloss") or "UNKNOWN"
    quality = pose_quality(pose)
    x = pose_vector(pose)[None, :]
    p = model.forward(x)
    p1 = {k: v[0] for k, v in p.items()}
    handshape, loc, ori, mov, han = decode_heads(
        p1,
        thresh=cls_thresh(language),
        pose_conf=quality["mean_conf"],
        occluded=quality["occluded"],
    )
    movement = [] if mov in {"hold", UNMAPPED, OCCLUDED} else [{"type": mov}]
    sid = f"{language}/pred/{gloss}".lower().replace(" ", "-")
    known_hs = (
        all(i in HANDSHAPE_SPECS for i in handshape)
        if isinstance(handshape, list)
        else handshape in HANDSHAPE_SPECS
    )
    compile_ready = bool(known_hs and loc in LOCATIONS and han in HANDED)
    nmf = nmf_from_face(pose)
    body = posture_from_pose(pose)
    return {
        "schema": "marionet.signdesc/v0",
        "id": sid,
        "language": language,
        "gloss": gloss,
        "spoken": [gloss] if gloss else [],
        "handed": han if han in HANDED else "1h",
        "dominant": {
            "handshape": handshape,
            "orientation": ori if ori in ORIENTATIONS else "palm-out",
            "location": loc,
            "movement": movement,
        },
        "nmf": nmf,
        "body": body,
        "inventory": INVENTORY,
        "library": {
            "handshape": handshape if known_hs else None,
            "location": loc if loc in LOCATIONS else None,
        },
        "compileReady": compile_ready,
        "source": {
            "dataset": "pose-classifier",
            "backend": pose.get("backend"),
            "transfer": "supervised-l1" if language in L1_LANGUAGES else "articulatory-nn-reject",
        },
        "scores": {
            "handshape": {HANDSHAPE_IDS[i]: round(float(p1["hs"][i]), 3) for i in np.argsort(-p1["hs"])[:5]},
            "location": loc,
            "location_p": round(float(p1["loc"].max()), 3),
            "pose_conf": round(float(quality["mean_conf"]), 3),
            "occluded_frac": round(float(quality["occluded_frac"]), 3),
        },
    }
