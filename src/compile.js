import { CLIP_SCHEMA, isCompilable, validateSignDesc } from "./ir.js";
import {
  mergePoses,
  solveHandshape,
  solveHead,
  solveLocation,
  solveMovePath,
  solveOrientation,
  solveStationPath,
  solveTorso,
} from "./library.js";

const HOLD = 0.9;
const RISE = 0.4;

/** Coarse face labels → VRM 1.0 preset expression weights. Per-avatar names still vary. */
const NMF_TO_EXPR = {
  eyebrows: { raised: [["surprised", 0.7]], furrowed: [["angry", 0.55]] },
  mouth: { open: [["aa", 0.65]], spread: [["ee", 0.45], ["happy", 0.25]], pursed: [["ou", 0.5]] },
  eyegaze: { left: [["lookLeft", 1]], right: [["lookRight", 1]], up: [["lookUp", 1]], down: [["lookDown", 1]] },
};

function expressionsFromNmf(nmf, duration) {
  const out = {};
  if (!nmf || typeof nmf !== "object") return out;
  const hold = (v) => [
    [0, 0],
    [RISE, v],
    [duration, v],
  ];
  for (const [field, table] of Object.entries(NMF_TO_EXPR)) {
    const rows = table[nmf[field]];
    if (!rows) continue;
    for (const [name, weight] of rows) {
      out[name] = hold(weight);
    }
  }
  return out;
}

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

/**
 * Fitted hand paths (linear, arc, circle) for one movement, as a list of keyframe poses.
 * Two-handed signs move both hands: in step when symmetric, half a cycle apart when
 * alternating. Returns null where the library has no fitted path for the location.
 */
function pathPoses(basePose, type, location, side, handed) {
  const dom = solveMovePath(type, location, side);
  if (!dom) return null;
  const other = side === "right" ? "left" : "right";
  const both = handed === "2h-symmetric" || handed === "2h-alternating";
  const nd = both ? solveMovePath(type, location, other) : null;
  // One cycle: base, then each path point. Alternating hands run half a cycle behind.
  const cycle = [null, ...dom.map((_, i) => i)];
  const shift = Math.floor(cycle.length / 2);
  return cycle.map((idx, k) => {
    const parts = [basePose];
    if (idx != null) parts.push(dom[idx]);
    if (nd) {
      const j = handed === "2h-alternating" ? cycle[(k + shift) % cycle.length] : idx;
      if (j != null) parts.push(nd[j]);
    }
    return mergePoses(...parts);
  });
}

function movementKeyframes(basePose, movements, side, location, handed) {
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
    // J: I-hand traces a J; at the fingerspelling station the arm carries the path.
    const station = solveStationPath("hook", location, side);
    const mid = mergePoses(basePose, station?.[0] ?? wristOffset(side, { y: 0.55, x: 0.15 }));
    const end = mergePoses(basePose, station?.[1] ?? wristOffset(side, { y: 0.15, x: 0.85, z: 0.2 }));
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
    const station = solveStationPath("trace:z", location, side);
    const b = mergePoses(basePose, station?.[0] ?? wristOffset(side, { y: -0.55, x: 0.05 }));
    const c = mergePoses(basePose, station?.[1] ?? wristOffset(side, { y: 0.15, x: 0.55 }));
    const d = mergePoses(basePose, station?.[2] ?? wristOffset(side, { y: -0.55, x: 0.85 }));
    apply(basePose, RISE, RISE + 0.1);
    apply(b, RISE + 0.3);
    apply(c, RISE + 0.55);
    apply(d, RISE + 0.85, RISE + 1.05);
    return { bones, duration: RISE + 1.05 };
  }

  if (first.type === "linear" || first.type === "arc" || first.type === "circle") {
    const poses = pathPoses(basePose, first.type, location, side, handed);
    if (poses) {
      const reps = Math.max(1, first.reps ?? 1);
      // Seconds per path point: a straight stroke is one point, a circle eight.
      const step = { linear: 0.24, arc: 0.22, circle: 0.11 }[first.type];
      let t = RISE;
      apply(poses[0], t, t + 0.1);
      t += 0.1;
      for (let r = 0; r < reps; r++) {
        for (const pose of poses.slice(1)) {
          t += step;
          apply(pose, t);
        }
        // Linear and circle return to the start each repetition; an arc ends where it lands.
        if (first.type !== "arc") {
          t += step;
          apply(poses[0], t);
        }
      }
      apply(first.type === "arc" ? poses.at(-1) : poses[0], t + 0.25);
      return { bones, duration: t + 0.25 };
    }
  }

  if (first.type === "linear") {
    const reps = Math.max(1, first.reps ?? 1);
    const fwd = mergePoses(basePose, { [`${side}UpperArm`]: { x: -0.22, y: 0, z: 0 } });
    let t = RISE;
    apply(basePose, t, t + 0.12);
    t += 0.12;
    for (let i = 0; i < reps; i++) {
      apply(fwd, t + 0.22);
      apply(basePose, t + 0.44);
      t += 0.44;
    }
    apply(basePose, t + 0.2);
    return { bones, duration: t + 0.2 };
  }

  if (first.type === "arc") {
    const s = side === "right" ? 1 : -1;
    const a = mergePoses(basePose, wristOffset(side, { y: 0.45 * s, x: -0.1 }));
    const b = mergePoses(basePose, wristOffset(side, { y: -0.45 * s, x: 0.15 }));
    apply(basePose, RISE, RISE + 0.1);
    apply(a, RISE + 0.4);
    apply(b, RISE + 0.75, RISE + 0.95);
    return { bones, duration: RISE + 0.95 };
  }

  if (first.type === "circle") {
    const s = side === "right" ? 1 : -1;
    const n = Math.max(1, first.reps ?? 1);
    const pts = [
      wristOffset(side, { y: 0.35 * s, x: 0 }),
      wristOffset(side, { y: 0, x: 0.35 }),
      wristOffset(side, { y: -0.35 * s, x: 0 }),
      wristOffset(side, { y: 0, x: -0.2 }),
    ];
    let t = RISE;
    apply(basePose, t, t + 0.08);
    t += 0.08;
    for (let r = 0; r < n; r++) {
      for (const off of pts) {
        apply(mergePoses(basePose, off), t + 0.16);
        t += 0.16;
      }
    }
    apply(basePose, t + 0.18);
    return { bones, duration: t + 0.18 };
  }

  apply(basePose, RISE, RISE + HOLD);
  return { bones, duration: RISE + HOLD };
}

/**
 * No orientation means the location's natural hand (ASL-LEX gives none); a named one
 * turns the hand from there.
 */
function poseForArticulator(art, side, twoHanded = false) {
  const hand = solveHandshape(art.handshape, side);
  const location = art.location ?? "fs-station";
  const loc = solveLocation(location, side, { twoHanded });
  const ori = art.orientation ? solveOrientation(art.orientation, side, location) : {};
  return mergePoses(loc, ori, hand);
}

export function compileSignDesc(desc, { side = "right" } = {}) {
  const errors = validateSignDesc(desc);
  if (errors.length) throw new Error(`invalid SignDesc (${desc.id}): ${errors.join("; ")}`);
  if (!isCompilable(desc)) {
    throw new Error(`SignDesc ${desc.id} is lexicon-only (not compile-ready)`);
  }

  const art = desc.dominant;
  const twoHanded =
    desc.handed === "2h-symmetric" || desc.handed === "2h-alternating";
  const pose = poseForArticulator(art, side, twoHanded);
  let base = pose;
  if (twoHanded) {
    const other = side === "right" ? "left" : "right";
    base = mergePoses(pose, poseForArticulator(art, other, true));
  } else if (desc.handed === "2h-asymmetric" && desc.nondominant?.handshape) {
    const other = side === "right" ? "left" : "right";
    // The weak hand waits in front of the body for the dominant hand to act on it.
    const nd = {
      handshape: desc.nondominant.handshape,
      location: desc.nondominant.location ?? "base-hand",
      orientation: desc.nondominant.orientation,
      movement: [],
    };
    try {
      base = mergePoses(pose, poseForArticulator(nd, other));
    } catch {
      base = pose;
    }
  }
  const head = desc.body?.head || desc.nmf?.head || "neutral";
  const torso = desc.body?.torso || desc.nmf?.torso || "neutral";
  base = mergePoses(base, solveTorso(torso), solveHead(head === "nod" || head === "shake" ? "neutral" : head));
  const { bones, duration: armDur } = movementKeyframes(base, art.movement ?? [], side, art.location ?? "fs-station", desc.handed);
  const duration = Math.max(armDur, overlayAxial(bones, head, torso, armDur));

  return {
    schema: CLIP_SCHEMA,
    signDescId: desc.id,
    language: desc.language,
    source: "authored",
    vrmHumanoid: "vrm1",
    duration,
    bones,
    expressions: expressionsFromNmf(desc.nmf, duration),
  };
}

function overlayAxial(bones, head, torso, duration) {
  const hold = solveTorso(torso);
  const staticHead = head === "nod" || head === "shake" ? {} : solveHead(head);
  const pose = mergePoses(hold, staticHead);
  const write = (bone, keys) => {
    bones[bone] = keys;
  };
  let end = duration;
  for (const bone of Object.keys(pose)) {
    const to = pose[bone];
    write(bone, [
      [0, [0, 0, 0]],
      [RISE, [to.x, to.y, to.z]],
      [duration, [to.x, to.y, to.z]],
    ]);
  }
  if (head === "nod") {
    const keys = [[0, [0, 0, 0]]];
    let t = RISE;
    const down = [0.28, 0, 0];
    const up = [0.04, 0, 0];
    keys.push([t, up]);
    for (let i = 0; i < 2; i++) {
      t += 0.18;
      keys.push([t, down]);
      t += 0.18;
      keys.push([t, up]);
    }
    end = Math.max(duration, t + 0.15);
    keys.push([end, up]);
    write("neck", keys.map(([tt, e]) => [tt, [e[0] * 0.45, 0, 0]]));
    write("head", keys);
  }
  if (head === "shake") {
    const keys = [[0, [0, 0, 0]]];
    let t = RISE;
    keys.push([t, [0, 0, 0]]);
    for (let i = 0; i < 2; i++) {
      t += 0.16;
      keys.push([t, [0, 0.32, 0]]);
      t += 0.16;
      keys.push([t, [0, -0.32, 0]]);
    }
    t += 0.16;
    keys.push([t, [0, 0, 0]]);
    end = Math.max(duration, t + 0.12);
    keys.push([end, [0, 0, 0]]);
    write("neck", keys);
    write("head", keys.map(([tt, e]) => [tt, [0, e[1] * 0.4, 0]]));
  }
  return end;
}
