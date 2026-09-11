"""Temporal smoothing for Stage F. Does not rewrite macro-pose.

Savitzky–Golay: offline, on extracted xyz trajectories before features.
One-Euro: after compile/residual, on finger eulers only (same lock as residual.py).
"""

from __future__ import annotations

import math

from .residual import is_finger_bone, is_macro_bone

# Odd window; poly 2 is the usual kinematic smoother.
SAVGOL_WINDOW = 5
SAVGOL_POLY = 2


def _savgol_coeffs(window: int, poly: int) -> list[float]:
    if window % 2 == 0 or window < 3:
        raise ValueError("savgol window must be odd and >= 3")
    if poly < 0 or poly >= window:
        raise ValueError("savgol poly must be < window")
    half = window // 2
    xs = list(range(-half, half + 1))
    # Vandermonde, increasing powers. Coeffs = first row of pinv(A).
    a = [[float(x) ** p for p in range(poly + 1)] for x in xs]
    at = _transpose(a)
    ata = _matmul(at, a)
    ata_inv = _invert(ata)
    pinv = _matmul(ata_inv, at)
    return pinv[0]


def _transpose(m: list[list[float]]) -> list[list[float]]:
    return [list(row) for row in zip(*m)]


def _matmul(a: list[list[float]], b: list[list[float]]) -> list[list[float]]:
    n, k, m = len(a), len(b), len(b[0])
    out = [[0.0] * m for _ in range(n)]
    for i in range(n):
        for j in range(m):
            s = 0.0
            for t in range(k):
                s += a[i][t] * b[t][j]
            out[i][j] = s
    return out


def _invert(m: list[list[float]]) -> list[list[float]]:
    n = len(m)
    aug = [row[:] + [1.0 if i == j else 0.0 for j in range(n)] for i, row in enumerate(m)]
    for i in range(n):
        pivot = i
        for r in range(i + 1, n):
            if abs(aug[r][i]) > abs(aug[pivot][i]):
                pivot = r
        if abs(aug[pivot][i]) < 1e-12:
            raise ValueError("singular savgol design matrix")
        aug[i], aug[pivot] = aug[pivot], aug[i]
        div = aug[i][i]
        for c in range(2 * n):
            aug[i][c] /= div
        for r in range(n):
            if r == i:
                continue
            f = aug[r][i]
            for c in range(2 * n):
                aug[r][c] -= f * aug[i][c]
    return [row[n:] for row in aug]


def savgol_1d(y: list[float | None], window: int = SAVGOL_WINDOW, poly: int = SAVGOL_POLY) -> list[float | None]:
    """Smooth a series; None stays None and does not leak into neighbors."""
    n = len(y)
    if n == 0:
        return []
    if window > n:
        window = n if n % 2 == 1 else n - 1
    if window < 3:
        return list(y)
    coeffs = _savgol_coeffs(window, min(poly, window - 1))
    half = window // 2
    out: list[float | None] = [None] * n
    for i, v in enumerate(y):
        if v is None:
            continue
        acc = 0.0
        wsum = 0.0
        ok = True
        for k, c in enumerate(coeffs):
            j = i + (k - half)
            if j < 0 or j >= n or y[j] is None:
                ok = False
                break
            acc += c * float(y[j])
            wsum += c
        if ok:
            out[i] = acc
        else:
            out[i] = float(v)
    return out


def smooth_pose_xyz(pose: dict, window: int = SAVGOL_WINDOW, poly: int = SAVGOL_POLY) -> dict:
    """In-place-safe copy: Savitzky–Golay on present xyz only. Occluded frames stay occluded."""
    out = dict(pose)
    for side in ("left", "right"):
        frames = pose.get(side)
        if not isinstance(frames, list) or not frames:
            continue
        n = len(frames)
        series: list[list[list[float | None]]] = [[[None, None, None] for _ in range(21)] for _ in range(n)]
        keep = [None] * n
        for i, fr in enumerate(frames):
            if not isinstance(fr, dict):
                continue
            keep[i] = dict(fr)
            xyz = fr.get("xyz")
            if not isinstance(xyz, list) or len(xyz) != 21:
                continue
            for j, pt in enumerate(xyz):
                if isinstance(pt, (list, tuple)) and len(pt) >= 3:
                    series[i][j] = [float(pt[0]), float(pt[1]), float(pt[2])]
        new_frames = []
        for j in range(21):
            for c in range(3):
                col = [series[i][j][c] for i in range(n)]
                sm = savgol_1d(col, window=window, poly=poly)
                for i in range(n):
                    series[i][j][c] = sm[i]
        for i in range(n):
            fr = keep[i]
            if fr is None:
                new_frames.append(frames[i])
                continue
            if not isinstance(fr.get("xyz"), list) or len(fr["xyz"]) != 21:
                new_frames.append(fr)
                continue
            xyz = []
            for j in range(21):
                pt = series[i][j]
                if any(v is None for v in pt):
                    xyz.append(fr["xyz"][j])
                else:
                    xyz.append([float(pt[0]), float(pt[1]), float(pt[2])])
            fr = dict(fr)
            fr["xyz"] = xyz
            fr["smoothed"] = "savgol"
            new_frames.append(fr)
        out[side] = new_frames
    note = dict(out.get("camera") or {})
    note["smooth"] = f"savgol-{window}-{poly}"
    out["camera"] = note
    return out


class OneEuro:
    """1€ filter (Casiez et al. 2012). Adaptive low-pass: jitter down, lag low."""

    def __init__(self, min_cutoff: float = 1.0, beta: float = 0.007, dcutoff: float = 1.0):
        self.min_cutoff = min_cutoff
        self.beta = beta
        self.dcutoff = dcutoff
        self._x = None
        self._dx = 0.0
        self._t = None

    def reset(self) -> None:
        self._x = None
        self._dx = 0.0
        self._t = None

    def __call__(self, x: float, t: float) -> float:
        if self._x is None or self._t is None:
            self._x = float(x)
            self._t = float(t)
            self._dx = 0.0
            return float(x)
        dt = max(1e-6, float(t) - self._t)
        dx = (float(x) - self._x) / dt
        a_d = _alpha(dt, self.dcutoff)
        edx = a_d * dx + (1.0 - a_d) * self._dx
        cutoff = self.min_cutoff + self.beta * abs(edx)
        a = _alpha(dt, cutoff)
        hat = a * float(x) + (1.0 - a) * self._x
        self._x = hat
        self._dx = edx
        self._t = float(t)
        return hat


def _alpha(dt: float, cutoff: float) -> float:
    tau = 1.0 / (2.0 * math.pi * max(cutoff, 1e-6))
    return 1.0 / (1.0 + tau / dt)


def smooth_clip_fingers(clip: dict, min_cutoff: float = 1.0, beta: float = 0.007) -> dict:
    """One-Euro on finger euler tracks. Macro bones copied unchanged."""
    bones_in = clip.get("bones") or {}
    bones: dict[str, list] = {}
    for name, track in bones_in.items():
        if is_macro_bone(name) or not is_finger_bone(name):
            bones[name] = [[k[0], list(k[1])] for k in track]
            continue
        fx, fy, fz = OneEuro(min_cutoff, beta), OneEuro(min_cutoff, beta), OneEuro(min_cutoff, beta)
        out = []
        for t, eul in track:
            x, y, z = float(eul[0]), float(eul[1]), float(eul[2])
            out.append([t, [fx(x, t), fy(y, t), fz(z, t)]])
        bones[name] = out
    result = dict(clip)
    result["bones"] = bones
    extra = dict(result.get("residual") or {})
    extra["oneeuro"] = {"min_cutoff": min_cutoff, "beta": beta, "macro": "locked"}
    result["residual"] = extra
    return result
