"""Frame IO for pose extract. Decord first, OpenCV fallback. Never fetches."""

from __future__ import annotations

from pathlib import Path

FPS_CAP = 30.0


def _sample_indices(n: int, src_fps: float, cap: float = FPS_CAP) -> tuple[list[int], float]:
    src_fps = float(src_fps) if src_fps and src_fps > 0 else cap
    if n <= 0:
        return [], src_fps
    if src_fps <= cap + 1e-6:
        return list(range(n)), src_fps
    out_n = max(1, int(round(n * cap / src_fps)))
    if out_n >= n:
        return list(range(n)), src_fps
    return [min(n - 1, int(round(i * (n - 1) / max(out_n - 1, 1)))) for i in range(out_n)], cap


def load_frames(path: Path, fps_cap: float = FPS_CAP) -> tuple[list, float]:
    """Return (RGB uint8 frames, fps). Caps at 30 fps by index sampling."""
    path = Path(path)
    if not path.exists():
        raise FileNotFoundError(str(path))
    frames, fps = _load_decord(path, fps_cap)
    if frames is not None:
        return frames, fps
    frames, fps = _load_cv2(path, fps_cap)
    if frames is not None:
        return frames, fps
    raise RuntimeError(
        "no video decoder: install decord (GPU extract) or opencv-python (local fallback)"
    )


def _load_decord(path: Path, fps_cap: float) -> tuple[list | None, float]:
    try:
        from decord import VideoReader, cpu  # type: ignore
    except ImportError:
        return None, 0.0
    vr = VideoReader(str(path), ctx=cpu(0))
    n = len(vr)
    src_fps = float(vr.get_avg_fps() or fps_cap) or fps_cap
    idx, fps = _sample_indices(n, src_fps, fps_cap)
    if not idx:
        return [], fps
    batch = vr.get_batch(idx).asnumpy()
    return [batch[i] for i in range(batch.shape[0])], fps


def _load_cv2(path: Path, fps_cap: float) -> tuple[list | None, float]:
    try:
        import cv2  # type: ignore
    except ImportError:
        return None, 0.0
    cap = cv2.VideoCapture(str(path))
    if not cap.isOpened():
        cap.release()
        return [], fps_cap
    src_fps = float(cap.get(cv2.CAP_PROP_FPS) or fps_cap) or fps_cap
    raw = []
    while True:
        ok, bgr = cap.read()
        if not ok:
            break
        raw.append(cv2.cvtColor(bgr, cv2.COLOR_BGR2RGB))
    cap.release()
    idx, fps = _sample_indices(len(raw), src_fps, fps_cap)
    return [raw[i] for i in idx], fps
