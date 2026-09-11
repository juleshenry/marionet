"""FSQ ablation for Stage C. Not the v1 tokenizer.

v1 classifies SignDesc from continuous pose features (features.py).
If linear heads saturate, quantize wrist-relative hand vectors with FSQ
trained only on the training split — never a pretrained SignVIP codebook.

GPU: vector_quantize_pytorch.FSQ (lucidrains) when torch is present.
This module is the numpy drop-in so Mac tests do not need CUDA.
"""

from __future__ import annotations

from typing import Iterable

import numpy as np

# MAGVIT-style small codebook; 8*5*5*5 = 1000 codes per 4-D slice.
DEFAULT_LEVELS = (8, 5, 5, 5)


def _levels(levels: Iterable[int]) -> tuple[int, ...]:
    out = tuple(int(x) for x in levels)
    if not out or any(L < 2 for L in out):
        raise ValueError("FSQ levels must be integers >= 2")
    return out


def quantize(z: np.ndarray, levels: Iterable[int] = DEFAULT_LEVELS) -> tuple[np.ndarray, np.ndarray]:
    """Map continuous z (..., d) → integer codes (..., d) and tanh-space reconstruction.

    d must equal len(levels). Each dim is independent (finite scalar).
    """
    z = np.asarray(z, dtype=np.float64)
    lv = _levels(levels)
    if z.shape[-1] != len(lv):
        raise ValueError(f"last dim {z.shape[-1]} != n_levels {len(lv)}")
    z_b = np.tanh(z)
    codes = np.empty(z.shape, dtype=np.int32)
    recon = np.empty(z.shape, dtype=np.float64)
    for i, L in enumerate(lv):
        q = np.round((z_b[..., i] + 1.0) * 0.5 * (L - 1))
        q = np.clip(q, 0, L - 1)
        codes[..., i] = q.astype(np.int32)
        recon[..., i] = 2.0 * q / (L - 1) - 1.0
    return codes, recon


def pack_index(codes: np.ndarray, levels: Iterable[int] = DEFAULT_LEVELS) -> np.ndarray:
    """Mixed-radix index in 0 .. prod(levels)-1."""
    lv = _levels(levels)
    codes = np.asarray(codes)
    idx = np.zeros(codes.shape[:-1], dtype=np.int64)
    for i, L in enumerate(lv):
        idx = idx * L + codes[..., i].astype(np.int64)
    return idx


def codebook_size(levels: Iterable[int] = DEFAULT_LEVELS) -> int:
    n = 1
    for L in _levels(levels):
        n *= L
    return n


def slice_features(x: np.ndarray, dim: int | None = None) -> np.ndarray:
    """Pad/truncate a feature vector so its last dim is a multiple of the FSQ width."""
    x = np.asarray(x, dtype=np.float64)
    d = int(dim or x.shape[-1])
    if d <= 0:
        raise ValueError("dim must be > 0")
    flat = x.reshape(-1, x.shape[-1]) if x.ndim > 1 else x.reshape(1, -1)
    width = flat.shape[-1]
    if width == d:
        return flat
    if width > d:
        return flat[:, :d]
    pad = np.zeros((flat.shape[0], d - width), dtype=np.float64)
    return np.concatenate([flat, pad], axis=1)


class PoseFSQ:
    """Quantize a pose feature matrix as consecutive FSQ slices.

    Train this only on the training split of extracted poses.
    """

    def __init__(self, levels: Iterable[int] = DEFAULT_LEVELS):
        self.levels = _levels(levels)
        self.width = len(self.levels)
        self.n_codes = codebook_size(self.levels)

    def tokens(self, X: np.ndarray) -> np.ndarray:
        """(n, feat) → (n, n_slices) integer tokens."""
        X = np.asarray(X, dtype=np.float64)
        if X.ndim == 1:
            X = X.reshape(1, -1)
        n, d = X.shape
        n_slices = (d + self.width - 1) // self.width
        pad_d = n_slices * self.width
        Xp = slice_features(X, pad_d)
        chunks = Xp.reshape(n, n_slices, self.width)
        codes, _ = quantize(chunks, self.levels)
        return pack_index(codes, self.levels)

    def reconstruct(self, X: np.ndarray) -> np.ndarray:
        X = np.asarray(X, dtype=np.float64)
        one = X.ndim == 1
        if one:
            X = X.reshape(1, -1)
        n, d = X.shape
        n_slices = (d + self.width - 1) // self.width
        pad_d = n_slices * self.width
        Xp = slice_features(X, pad_d)
        chunks = Xp.reshape(n, n_slices, self.width)
        _, recon = quantize(chunks, self.levels)
        out = recon.reshape(n, pad_d)[:, :d]
        return out[0] if one else out


def try_torch_fsq(levels: Iterable[int] = DEFAULT_LEVELS):
    """Return lucidrains FSQ module or None. Ablation only; not imported at train time."""
    lv = list(_levels(levels))
    try:
        from vector_quantize_pytorch import FSQ  # type: ignore

        return FSQ(levels=lv)
    except Exception:
        return None
