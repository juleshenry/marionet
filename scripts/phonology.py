#!/usr/bin/env python3
"""Pose → SignDesc setup: synth L1, train linear heads, predict.

  python scripts/phonology.py setup
  python scripts/phonology.py self-test
  python scripts/phonology.py synth --out data/l1/l1.npz
  python scripts/phonology.py train --data data/l1/l1.npz --out data/runs/phonology.npz
  python scripts/phonology.py predict data/clips/dummy.pose.json
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "python"))
sys.path.insert(0, str(ROOT / "scripts"))

import numpy as np  # noqa: E402

from marionet.catalogs import HANDSHAPE_IDS  # noqa: E402
from marionet.model import PhonologyHeads, decode_heads, predict_signdesc  # noqa: E402
from marionet.synth import build_arrays, load_lexicon_descs, pose_from_desc  # noqa: E402
from marionet_pose import validate_pose, write_json  # noqa: E402


def _split(n: int, ids: list[str], seed: int = 0) -> tuple[np.ndarray, np.ndarray]:
    rng = np.random.default_rng(seed)
    idx = np.arange(n)
    # stable hash-ish: last byte of id
    keys = np.array([sum(map(ord, s)) % 10 for s in ids])
    val = np.where(keys < 2)[0]
    train = np.where(keys >= 2)[0]
    if len(val) < max(4, n // 10):
        rng.shuffle(idx)
        cut = max(1, n // 5)
        return idx[cut:], idx[:cut]
    return train, val


def cmd_synth(args: argparse.Namespace) -> int:
    descs = load_lexicon_descs(ROOT)
    X, Y, ids = build_arrays(descs)
    out = Path(args.out)
    out.parent.mkdir(parents=True, exist_ok=True)
    np.savez(out, X=X, ids=np.array(ids), **{f"y_{k}": v for k, v in Y.items()})
    print(json.dumps({"n": int(X.shape[0]), "dim": int(X.shape[1]), "out": str(out)}))
    return 0


def cmd_train(args: argparse.Namespace) -> int:
    data = np.load(args.data, allow_pickle=True)
    X = data["X"]
    ids = [str(x) for x in data["ids"]]
    Y = {k: data[f"y_{k}"] for k in ("hs", "loc", "ori", "mov", "han")}
    tr, va = _split(len(ids), ids)
    model = PhonologyHeads(np.random.default_rng(0))
    model.fit_norm(X[tr])
    best = 1e9
    best_state = None
    for epoch in range(args.epochs):
        order = np.random.default_rng(epoch).permutation(tr)
        loss = 0.0
        bs = min(64, len(order))
        n_steps = 0
        for i in range(0, len(order), bs):
            sl = order[i : i + bs]
            batch_y = {k: Y[k][sl] for k in Y}
            loss += model.step(X[sl], batch_y, lr=args.lr)
            n_steps += 1
        P = model.forward(X[va])
        loc_acc = float((P["loc"].argmax(1) == Y["loc"][va].argmax(1)).mean())
        hs_exact = 0.0
        for j, vi in enumerate(va):
            pred, *_ = decode_heads({k: P[k][j] for k in P})
            gold = primitive_ids_from_row(Y["hs"][vi])
            pred_ids = pred if isinstance(pred, list) else [pred]
            hs_exact += float(set(pred_ids) == set(gold))
        hs_exact /= max(len(va), 1)
        mean_loss = loss / max(n_steps, 1)
        if mean_loss < best:
            best = mean_loss
            best_state = {k: getattr(model, k).copy() for k in ("Whs", "bhs", "Wloc", "bloc", "Wori", "bori", "Wmov", "bmov", "Whan", "bhan")}
        if epoch % 10 == 0 or epoch + 1 == args.epochs:
            print(json.dumps({"epoch": epoch, "loss": round(mean_loss, 4), "val_loc": round(loc_acc, 3), "val_hs": round(hs_exact, 3)}))
    if best_state:
        for k, v in best_state.items():
            setattr(model, k, v)
    out = Path(args.out)
    model.save(out)
    print(json.dumps({"ckpt": str(out), "n_train": int(len(tr)), "n_val": int(len(va))}))
    return 0


def primitive_ids_from_row(row: np.ndarray) -> list[str]:
    return [HANDSHAPE_IDS[i] for i, v in enumerate(row) if v > 0.5]


def cmd_predict(args: argparse.Namespace) -> int:
    ckpt = Path(args.ckpt)
    if not ckpt.exists():
        raise SystemExit(f"missing {ckpt}; run: python scripts/phonology.py setup")
    model = PhonologyHeads.load(ckpt)
    pose = json.loads(Path(args.pose).read_text())
    err = validate_pose(pose)
    if err:
        raise SystemExit("invalid pose: " + "; ".join(err))
    desc = predict_signdesc(pose, model, lang=args.lang, gloss=args.gloss)
    out = Path(args.output) if args.output else Path(args.pose).with_suffix(".signdesc.json")
    write_json(out, desc)
    print(json.dumps({"out": str(out), "id": desc["id"], "handshape": desc["dominant"]["handshape"], "location": desc["dominant"]["location"], "compileReady": desc["compileReady"]}))
    return 0


def cmd_self_test() -> int:
    from marionet.catalogs import HANDSHAPE_SPECS, NMF_DEFAULT, OCCLUDED, UNMAPPED
    from marionet.nmf import nmf_from_face, posture_from_pose, torso_from_body
    from marionet.residual import apply_residual, macro_pose_unchanged
    from marionet_pose import canonical_span, dummy_pose

    descs = []
    for hs in ("A", "5", "F", "I", "L", "Y", "ILY", "open_b"):
        for loc in ("fs-station", "cheek", "neutral-space", "chest-front"):
            descs.append(
                {
                    "schema": "marionet.signdesc/v0",
                    "id": f"test/{hs}/{loc}",
                    "language": "ase",
                    "gloss": hs,
                    "spoken": [hs],
                    "handed": "1h",
                    "dominant": {"handshape": hs, "orientation": "palm-out", "location": loc, "movement": []},
                    "compileReady": True,
                }
            )
    descs.append(
        {
            "schema": "marionet.signdesc/v0",
            "id": "test/ily",
            "language": "ase",
            "gloss": "ILY",
            "spoken": ["ILY"],
            "handed": "1h",
            "dominant": {"handshape": "ILY", "orientation": "palm-out", "location": "chest-front", "movement": [{"type": "present"}]},
            "compileReady": True,
        }
    )
    rng = np.random.default_rng(2)
    X, Y, ids = build_arrays(descs, rng=rng)
    model = PhonologyHeads(np.random.default_rng(0))
    model.fit_norm(X)
    for _ in range(120):
        model.step(X, Y, lr=0.25)
    P = model.forward(X)
    loc_acc = float((P["loc"].argmax(1) == Y["loc"].argmax(1)).mean())
    hs_acc = 0.0
    for j in range(len(ids)):
        pred, *_ = decode_heads({k: P[k][j] for k in P})
        gold = primitive_ids_from_row(Y["hs"][j])
        pred_ids = pred if isinstance(pred, list) else [pred]
        hs_acc += float(set(pred_ids) == set(gold))
    hs_acc /= len(ids)
    ily = pose_from_desc(descs[-1], rng=np.random.default_rng(3))
    pred = predict_signdesc(ily, model, lang="ase", gloss="ILY")
    pred_hs = pred["dominant"]["handshape"]
    if pred_hs != "ILY":
        raise SystemExit(f"ILY must decode as the named shape, got {pred_hs!r}")
    if loc_acc < 0.85 or hs_acc < 0.75:
        raise SystemExit(f"self-test too weak loc={loc_acc:.2f} hs={hs_acc:.2f}")

    # Never argmax-force: a flat head must be unmapped, not a random catalog id.
    flat = {
        "hs": np.full(len(HANDSHAPE_IDS), 0.05),
        "loc": np.full(len(P["loc"][0]), 1.0 / max(len(P["loc"][0]), 1)),
        "ori": np.full(len(P["ori"][0]), 1.0 / max(len(P["ori"][0]), 1)),
        "mov": np.full(len(P["mov"][0]), 1.0 / max(len(P["mov"][0]), 1)),
        "han": np.full(len(P["han"][0]), 1.0 / max(len(P["han"][0]), 1)),
    }
    rejected, *_ = decode_heads(flat, thresh=0.45)
    if rejected != UNMAPPED:
        raise SystemExit(f"low-confidence decode must be unmapped, got {rejected!r}")

    occ_pose = dummy_pose(language="ase", gloss="X")
    for fr in occ_pose["right"]:
        fr["conf"] = 0.05
        fr["occluded"] = True
    occ = predict_signdesc(occ_pose, model, lang="ase", gloss="X")
    if occ["dominant"]["handshape"] != OCCLUDED:
        raise SystemExit(f"occluded pose must decode as occluded, got {occ['dominant']['handshape']!r}")
    if occ["compileReady"]:
        raise SystemExit("occluded SignDesc must not compile")

    dummy = dummy_pose(language="ase", gloss="REST")
    nmf = nmf_from_face(dummy)
    if nmf["eyebrows"] != NMF_DEFAULT["eyebrows"] or nmf["mouth"] != "neutral" or nmf["head"] != "neutral":
        raise SystemExit(f"dummy rest face must be NMF-neutral, got {nmf}")
    rest_body = posture_from_pose(dummy)
    if rest_body["head"] != "neutral" or rest_body["torso"] != "neutral":
        raise SystemExit(f"dummy rest posture must be neutral, got {rest_body}")
    leaned = dummy_pose(language="ase", gloss="LEAN")
    for bf in leaned["body"]:
        kps = bf["keypoints"]
        kps["leftShoulder"] = [kps["leftShoulder"][0] - 0.12, kps["leftShoulder"][1], kps["leftShoulder"][2]]
        kps["rightShoulder"] = [kps["rightShoulder"][0] - 0.12, kps["rightShoulder"][1], kps["rightShoulder"][2]]
    if torso_from_body(leaned) != "lean-left":
        raise SystemExit(f"shifted shoulders must decode as lean-left, got {torso_from_body(leaned)}")

    # Rest → hold at chest → retract. Nucleus must not include the lap frames.
    hold = dummy_pose(language="ase", gloss="HOLD", seconds=1.0)
    n = hold["n_frames"]
    for i, bf in enumerate(hold["body"]):
        kps = bf["keypoints"]
        if i < 8 or i >= n - 8:
            kps["rightWrist"] = [0.2, -0.35, 0.08]
        else:
            kps["rightWrist"] = [0.2, 0.12, 0.22]
    hold.pop("canonical", None)
    span = canonical_span(hold)
    if span["start"] < 6 or span["end"] > n - 6:
        raise SystemExit(f"nucleus window leaked prep/retract: {span}")
    if span["n"] < 6:
        raise SystemExit(f"nucleus window too short: {span}")

    compiled = {
        "schema": "marionet.clip/v0",
        "source": "authored",
        "duration": 1.0,
        "bones": {
            "rightUpperArm": [[0.0, [0.1, 0.2, 0.3]], [1.0, [0.1, 0.2, 0.3]]],
            "rightIndexProximal": [[0.0, [0.0, 0.0, 0.4]], [1.0, [0.0, 0.0, 0.4]]],
        },
    }
    retargeted = {
        "schema": "marionet.clip/v0",
        "source": "retargeted",
        "duration": 1.0,
        "bones": {
            "rightUpperArm": [[0.0, [9.0, 9.0, 9.0]], [1.0, [9.0, 9.0, 9.0]]],
            "rightIndexProximal": [[0.0, [0.0, 0.0, 1.2]], [1.0, [0.0, 0.0, 1.2]]],
        },
    }
    mixed = apply_residual(compiled, retargeted, eps=0.12)
    if mixed["source"] != "compiled+residual":
        raise SystemExit("residual clip must be tagged compiled+residual")
    if not macro_pose_unchanged(compiled, mixed):
        raise SystemExit("residual must not move macro-pose")
    finger = mixed["bones"]["rightIndexProximal"][0][1][2]
    if abs(finger - 0.52) > 1e-6:  # 0.4 + clip(0.8, 0.12)
        raise SystemExit(f"finger residual should clip to ε, got {finger}")

    from marionet.residual import macro_pose_unchanged as _macro
    from marionet.smooth import smooth_clip_fingers

    euro = smooth_clip_fingers(mixed)
    if not _macro(compiled, euro):
        raise SystemExit("one-euro must not move macro-pose")

    from marionet.features import FEAT_DIM, TRAJ_DIM, pose_vector, trajectory_vector
    from marionet.fsq import PoseFSQ

    fsq = PoseFSQ()
    rec = fsq.reconstruct(X[0])
    if rec.shape != X[0].shape:
        raise SystemExit(f"FSQ reconstruct dim {rec.shape} != {X[0].shape}")
    pv = pose_vector(dummy)
    if pv.shape != (FEAT_DIM,):
        raise SystemExit(f"pose_vector dim {pv.shape} != {FEAT_DIM}")
    tv = trajectory_vector(dummy)
    if tv.shape != (TRAJ_DIM,):
        raise SystemExit(f"trajectory_vector dim {tv.shape} != {TRAJ_DIM}")

    print(json.dumps({"loc_acc": round(loc_acc, 3), "hs_acc": round(hs_acc, 3), "ily": pred_hs, "n": len(ids), "n_hs": len(HANDSHAPE_SPECS), "reject": rejected, "nucleus": span}))
    return 0


def cmd_setup(args: argparse.Namespace) -> int:
    (ROOT / "data/l1").mkdir(parents=True, exist_ok=True)
    (ROOT / "data/runs").mkdir(parents=True, exist_ok=True)
    (ROOT / "data/pose").mkdir(parents=True, exist_ok=True)
    print("== self-test ==")
    cmd_self_test()
    l1 = ROOT / "data/l1/l1.npz"
    print("== synth L1 from lexicon ==")
    cmd_synth(argparse.Namespace(out=str(l1)))
    ckpt = ROOT / "data/runs/phonology.npz"
    print("== train ==")
    cmd_train(argparse.Namespace(data=str(l1), out=str(ckpt), epochs=args.epochs, lr=0.08))
    print("== next ==")
    print("python scripts/video_to_marionet.py --backend dummy --lang eso --gloss KASS --phonology")
    print("python scripts/phonology.py predict data/clips/eso/KASS.pose.json")
    print("drop the clip JSON on http://localhost:8080  (compiled SignDesc if compileReady)")
    return 0


def main(argv: list[str] | None = None) -> int:
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = p.add_subparsers(dest="cmd", required=True)
    sub.add_parser("self-test")
    s = sub.add_parser("setup")
    s.add_argument("--epochs", type=int, default=40)
    sy = sub.add_parser("synth")
    sy.add_argument("--out", default=str(ROOT / "data/l1/l1.npz"))
    tr = sub.add_parser("train")
    tr.add_argument("--data", default=str(ROOT / "data/l1/l1.npz"))
    tr.add_argument("--out", default=str(ROOT / "data/runs/phonology.npz"))
    tr.add_argument("--epochs", type=int, default=40)
    tr.add_argument("--lr", type=float, default=0.08)
    pr = sub.add_parser("predict")
    pr.add_argument("pose")
    pr.add_argument("--ckpt", default=str(ROOT / "data/runs/phonology.npz"))
    pr.add_argument("-o", "--output")
    pr.add_argument("--lang")
    pr.add_argument("--gloss")
    args = p.parse_args(argv)
    if args.cmd == "self-test":
        return cmd_self_test()
    if args.cmd == "setup":
        return cmd_setup(args)
    if args.cmd == "synth":
        return cmd_synth(args)
    if args.cmd == "train":
        return cmd_train(args)
    if args.cmd == "predict":
        return cmd_predict(args)
    raise SystemExit("unknown command")


if __name__ == "__main__":
    raise SystemExit(main())
