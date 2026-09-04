import { CLIP_SCHEMA, validateSignDesc } from "./ir.js";
import { mergePoses, solveHandshape, solveLocation, solveOrientation } from "./library.js";

const HOLD = 0.9;
const RISE = 0.4;

function track(from, to, tHold = HOLD) {
  return [
    [0, [from.x, from.y, from.z]],
    [RISE, [to.x, to.y, to.z]],
    [RISE + tHold, [to.x, to.y, to.z]],
  ];
}

const zero = { x: 0, y: 0, z: 0 };

function wristOffset(side, { x = 0, y = 0, z = 0 }) {
  return { [`${side}Hand`]: { x, y, z } };
}

function zeroPose(pose) {
  const out = {};
  for (const bone of Object.keys(pose)) out[bone] = zero;
  return out;
}

function movementKeyframes(basePose, movements, side) {
  const bones = {};
  const ensure = (pose) => {
    for (const bone of Object.keys(pose)) {
      if (!bones[bone]) bones[bone] = [];
    }
  };
  const apply = (pose, t0, t1) => {
    ensure(pose);
    for (const bone of Object.keys(bones)) {
      const rot = pose[bone] ?? zero;
      bones[bone].push([t0, [rot.x, rot.y, rot.z]]);
      if (t1 != null) bones[bone].push([t1, [rot.x, rot.y, rot.z]]);
    }
  };

  // Always ease in from rest so clips do not snap on from the previous pose.
  const rest = zeroPose(basePose);
  ensure(basePose);
  apply(rest, 0);

  const first = movements[0];
  if (!first) {
    apply(basePose, RISE, RISE + HOLD);
    return { bones, duration: RISE + HOLD };
  }

  if (first.type === "hook") {
    // J: I-hand traces a J in wrist yaw/pitch.
    const mid = mergePoses(basePose, wristOffset(side, { y: 0.55, x: 0.15 }));
    const end = mergePoses(basePose, wristOffset(side, { y: 0.15, x: 0.85, z: 0.2 }));
    apply(basePose, RISE, RISE + 0.15);
    apply(mid, RISE + 0.4);
    apply(end, RISE + 0.85, RISE + 1.05);
    return { bones, duration: RISE + 1.05 };
  }

  if (first.type === "present") {
    const fwd = mergePoses(basePose, { [`${side}UpperArm`]: { x: -0.18, y: 0, z: 0 } });
    apply(basePose, RISE, RISE + 0.25);
    apply(fwd, RISE + 0.55, RISE + 1.85);
    return { bones, duration: RISE + 1.85 };
  }

  if (first.type === "whisker") {
    const s = side === "right" ? 1 : -1;
    const reps = Math.max(1, first.reps ?? 2);
    // Stroke along the cheek (forearm carry + wrist), not a floating station wiggle.
    const out = mergePoses(basePose, {
      [`${side}LowerArm`]: { x: 0.06, y: -0.12 * s, z: 0 },
      [`${side}Hand`]: { x: 0.1, y: -0.45 * s, z: 0.08 },
    });
    let t = RISE;
    apply(basePose, t, t + 0.12);
    t += 0.12;
    for (let i = 0; i < reps; i++) {
      apply(out, t + 0.16);
      apply(basePose, t + 0.32);
      t += 0.32;
    }
    apply(basePose, t + 0.2);
    return { bones, duration: t + 0.2 };
  }

  if (first.type === "trace" && first.path === "z") {
    const b = mergePoses(basePose, wristOffset(side, { y: -0.55, x: 0.05 }));
    const c = mergePoses(basePose, wristOffset(side, { y: 0.15, x: 0.55 }));
    const d = mergePoses(basePose, wristOffset(side, { y: -0.55, x: 0.85 }));
    apply(basePose, RISE, RISE + 0.1);
    apply(b, RISE + 0.3);
    apply(c, RISE + 0.55);
    apply(d, RISE + 0.85, RISE + 1.05);
    return { bones, duration: RISE + 1.05 };
  }

  apply(basePose, RISE, RISE + HOLD);
  return { bones, duration: RISE + HOLD };
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
