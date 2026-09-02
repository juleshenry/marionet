import { CLIP_SCHEMA, validateSignDesc } from "./ir.js";
import { mergePoses, solveHandshape, solveLocation, solveOrientation } from "./library.js";

const HOLD = 0.9;
const TRANSITION = 0.35;

function track(from, to, tHold = HOLD) {
  return [
    [0, [from.x, from.y, from.z]],
    [TRANSITION, [to.x, to.y, to.z]],
    [TRANSITION + tHold, [to.x, to.y, to.z]],
  ];
}

const zero = { x: 0, y: 0, z: 0 };

function wristOffset(side, { x = 0, y = 0, z = 0 }) {
  return { [`${side}Hand`]: { x, y, z } };
}

function movementKeyframes(basePose, movements, side) {
  const bones = {};
  const apply = (pose, t0, t1) => {
    for (const [bone, rot] of Object.entries(pose)) {
      if (!bones[bone]) bones[bone] = [];
      bones[bone].push([t0, [rot.x, rot.y, rot.z]]);
      if (t1 != null) bones[bone].push([t1, [rot.x, rot.y, rot.z]]);
    }
  };

  const first = movements[0];
  if (!first) {
    for (const [bone, rot] of Object.entries(basePose)) {
      bones[bone] = track(zero, rot);
    }
    return { bones, duration: TRANSITION + HOLD };
  }

  if (first.type === "hook") {
    // J: I-hand traces a J in wrist yaw/pitch.
    const start = basePose;
    const mid = mergePoses(basePose, wristOffset(side, { y: 0.55, x: 0.15 }));
    const end = mergePoses(basePose, wristOffset(side, { y: 0.15, x: 0.85, z: 0.2 }));
    apply(start, 0, 0.25);
    apply(mid, 0.45);
    apply(end, 0.85, 1.05);
    return { bones, duration: 1.05 };
  }

  if (first.type === "trace" && first.path === "z") {
    const a = basePose;
    const b = mergePoses(basePose, wristOffset(side, { y: -0.55, x: 0.05 }));
    const c = mergePoses(basePose, wristOffset(side, { y: 0.15, x: 0.55 }));
    const d = mergePoses(basePose, wristOffset(side, { y: -0.55, x: 0.85 }));
    apply(a, 0, 0.15);
    apply(b, 0.35);
    apply(c, 0.6);
    apply(d, 0.9, 1.1);
    return { bones, duration: 1.1 };
  }

  for (const [bone, rot] of Object.entries(basePose)) {
    bones[bone] = track(zero, rot);
  }
  return { bones, duration: TRANSITION + HOLD };
}

export function compileSignDesc(desc, { side = "right" } = {}) {
  const errors = validateSignDesc(desc);
  if (errors.length) throw new Error(`invalid SignDesc (${desc.id}): ${errors.join("; ")}`);

  const art = desc.dominant;
  const hand = solveHandshape(art.handshape, side);
  const loc = solveLocation(art.location ?? "fs-station", side);
  const ori = solveOrientation(art.orientation ?? "palm-out", side);
  const pose = mergePoses(loc, ori, hand);
  const { bones, duration } = movementKeyframes(pose, art.movement ?? [], side);

  return {
    schema: CLIP_SCHEMA,
    signDescId: desc.id,
    source: "authored",
    duration,
    bones,
    expressions: {},
  };
}
