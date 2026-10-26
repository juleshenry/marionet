import { CLIP_SCHEMA, DIRECTIONS, OPPOSITE, isCompilable, validateSignDesc } from "./ir.js";
import {
  fittedPathKey,
  mergePoses,
  siteKey,
  solveFitted,
  turnKey,
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

// --- sequences: the movement vocabulary that names directions, contact and second locations ----

/** Seconds per step of a sequence. */
const STEP = { stroke: 0.32, back: 0.22, arc: 0.4, tap: 0.13, move: 0.42, change: 0.24, nod: 0.17, twist: 0.26, end: 0.45 };
const FIRST_VOCABULARY = new Set(["linear", "arc", "circle", "trace", "hook", "present", "whisker"]);

/** Played as a sequence: more than one movement, a newer type, or a direction or contact on a path. */
export function isSequenced(movements = []) {
  return movements.length > 1 || movements.some((m) => !FIRST_VOCABULARY.has(m.type) || m.direction != null || m.contact != null);
}

const canonical = (parts) => DIRECTIONS.filter((d) => parts.includes(d)).join("+");

/**
 * Which fitted path a movement plays, and whether backwards. A path that arrives at its location
 * (contact "end", or a direction "in") is the path the other way, played from its far end.
 */
function planOf(m) {
  if ((m.type === "linear" || m.type === "arc") && m.direction) {
    const parts = m.direction.split("+");
    const arrive = m.contact === "end" || parts.includes("in");
    return { move: `${m.type}:${canonical(arrive ? parts.map((p) => OPPOSITE[p]) : parts)}`, reverse: arrive };
  }
  if (m.type === "tap" || m.type === "nod" || m.type === "twist") return { move: m.type, reverse: false };
  return null;
}

/** How a hand is held: handshape, location, and its palm (orientation, or palm and fingers), site. */
const holdFrom = (h, location) => ({
  handshape: h.handshape,
  location: location ?? h.location ?? "fs-station",
  orientation: h.orientation,
  palm: h.palm,
  fingers: h.fingers,
  offset: h.offset,
  site: h.site,
});

/**
 * The hold after a move or change: what the movement names replaces what it was. An offset
 * belongs to its location: a move to another drops it unless the move gives its own.
 */
function nextHold(state, m) {
  const moved = m.type === "move";
  const kept = moved ? undefined : state.offset;
  const turned = m.orientation != null ? { orientation: m.orientation, palm: undefined, fingers: undefined, offset: undefined }
    : m.palm != null ? { orientation: undefined, palm: m.palm, fingers: m.fingers, offset: m.offset ?? kept } : { offset: kept };
  return {
    ...state,
    ...turned,
    handshape: m.handshape ?? state.handshape,
    location: m.type === "move" ? m.to : state.location,
    site: m.site ?? state.site,
  };
}

/** The movements of an articulator, each with how the hand is held before and after it. */
function* walk(art) {
  let state = holdFrom(art);
  for (const [index, m] of (art.movement ?? []).entries()) {
    const before = state;
    if (m.type === "move" || m.type === "change") state = nextHold(state, m);
    yield { m, index, before, after: state };
  }
}

/** The fitted rows a hold needs: its palm and fingers turned, the part of it that touches. */
function holdJobs(h, twoHanded) {
  const jobs = [];
  if (h.palm) jobs.push({ kind: "turn", key: turnKey(h.location, h, twoHanded), hold: h, twoHanded });
  if (h.site) jobs.push({ kind: "site", key: siteKey(h.location, h, twoHanded), hold: h, twoHanded });
  return jobs;
}

/**
 * Everything a sign needs fitted on the sample (src/fitted.js): each hold's turn and site, the
 * base hand's, and each directed path, tap, nod or twist. scripts/fit_arm.mjs jobs fits those
 * missing; check_compiler refuses an approved sign with any still missing.
 */
export function fitJobs(desc) {
  const art = desc.dominant;
  const twoHanded = desc.handed === "2h-symmetric" || desc.handed === "2h-alternating";
  const jobs = [...holdJobs(holdFrom(art), twoHanded)];
  if (desc.handed === "2h-asymmetric" && desc.nondominant) {
    const nd = desc.nondominant;
    jobs.push(...holdJobs(holdFrom(nd, !nd.location || nd.location === "weak-hand" ? "base-hand" : nd.location), false));
  }
  if (!isSequenced(art?.movement)) return jobs;
  for (const { m, before, after } of walk(art)) {
    if (after !== before) jobs.push(...holdJobs(after, twoHanded));
    const plan = planOf(m);
    if (plan) jobs.push({ kind: "path", key: fittedPathKey(before.location, before, twoHanded, plan.move), hold: before, twoHanded, move: plan.move });
  }
  return [...new Map(jobs.map((j) => [j.key, j])).values()];
}

const negate = (pose) => Object.fromEntries(Object.entries(pose).map(([b, r]) => [b, { x: -r.x, y: -r.y, z: -r.z }]));
const scale = (pose, k) => Object.fromEntries(Object.entries(pose).map(([b, r]) => [b, { x: r.x * k, y: r.y * k, z: r.z * k }]));

/**
 * Offsets along a fitted path for the hands that move, or a rough stand-in while the path has
 * not been fitted (fitJobs lists it; check_compiler refuses an approved sign that needs one).
 * Alternating hands run half a cycle apart: the other hand starts where the dominant one ends
 * and comes back as it goes out (alternate: the other hand's start, then its path).
 */
function pathOffsets(state, plan, ctx, { alternate = false } = {}) {
  const key = fittedPathKey(state.location, state, ctx.twoHanded, plan.move);
  const rowsFor = (side) => solveFitted(key, side) ?? standIn(plan.move, state.location, side);
  const dom = rowsFor(ctx.side);
  if (!ctx.twoHanded) return alternate ? { start: {}, along: dom } : dom;
  const other = rowsFor(ctx.other);
  if (!(alternate && ctx.handed === "2h-alternating")) {
    const along = dom.map((row, i) => mergePoses(row, other[i]));
    return alternate ? { start: {}, along } : along;
  }
  const back = [...other.slice(0, -1).reverse(), {}];
  return { start: other.at(-1), along: dom.map((row, i) => mergePoses(row, back[i])) };
}

function standIn(move, location, side) {
  const [type] = move.split(":");
  const out = solveMovePath("linear", location, side)?.[0] ?? { [`${side}UpperArm`]: { x: -0.22, y: 0, z: 0 } };
  if (type === "linear") return [out];
  if (type === "arc") return [scale(out, 0.5), out];
  if (type === "tap") return [scale(out, 0.35)];
  if (type === "nod") return [wristOffset(side, { z: -0.5 * (side === "right" ? 1 : -1) })];
  return [wristOffset(side, { x: 0.7 }), wristOffset(side, { x: -0.7 })];
}

/**
 * Keyframes for a sequence of movements. Each starts where the last left the hand: paths and taps
 * add their fitted offsets to the current pose, a move goes to the next location's held pose, a
 * change turns the hand into the next handshape or palm where it is.
 */
function sequenceKeyframes(art, ctx) {
  const bones = {};
  const ensure = (pose) => {
    for (const bone of Object.keys(pose)) if (!bones[bone]) bones[bone] = [];
  };
  let t = 0;
  const put = (pose) => {
    ensure(pose);
    for (const bone of Object.keys(bones)) {
      const rot = pose[bone] ?? zero;
      bones[bone].push([t, [rot.x, rot.y, rot.z]]);
    }
  };
  const handPose = (state) => {
    const a = { ...state, movement: [] };
    const dom = poseForArticulator(a, ctx.side, ctx.twoHanded);
    return mergePoses(ctx.fixed, dom, ctx.twoHanded ? poseForArticulator(a, ctx.other, true) : {});
  };

  const movements = art.movement ?? [];
  const steps = [...walk(art)];
  let cur = handPose(steps[0]?.before ?? holdFrom(art));
  ensure(cur);
  // Ease in from rest. A first movement that arrives at its location, or taps it, starts off it.
  put(zeroPose(cur));
  const firstPlan = movements[0] && planOf(movements[0]);
  let start = cur;
  if (firstPlan?.reverse || movements[0]?.type === "tap") {
    const offs = pathOffsets(steps[0].before, firstPlan, ctx);
    start = mergePoses(cur, offs.at(-1));
  }
  t = RISE;
  put(start);
  t += 0.1;
  put(start);
  let here = start;
  const go = (pose, dt) => {
    t += dt;
    put(pose);
    here = pose;
  };

  for (const { m, index, before, after } of steps) {
    const plan = planOf(m);
    const reps = Math.max(1, m.reps ?? 1);
    if (plan && (m.type === "linear" || m.type === "arc")) {
      const offs = pathOffsets(before, plan, ctx, { alternate: true });
      const origin = mergePoses(cur, offs.start);
      const along = offs.along.map((o) => mergePoses(cur, o));
      const seq = plan.reverse ? [...along.slice(0, -1).reverse(), origin] : along;
      const from = plan.reverse ? along.at(-1) : origin;
      if (here !== from) go(from, STEP.back);
      const dt = (m.type === "arc" ? STEP.arc : STEP.stroke) / seq.length;
      for (let r = 0; r < reps; r++) {
        if (r > 0) go(from, STEP.back);
        for (const pose of seq) go(pose, dt);
      }
      cur = here;
    } else if (m.type === "tap") {
      const lift = mergePoses(cur, pathOffsets(before, plan, ctx)[0]);
      for (let r = 0; r < reps; r++) {
        if (r > 0 || here !== lift) go(lift, STEP.tap);
        go(cur, STEP.tap);
      }
    } else if (m.type === "nod") {
      // Bends at the wrist and back, each time.
      const [bent] = pathOffsets(before, plan, ctx).map((o) => mergePoses(cur, o));
      for (let r = 0; r < reps; r++) {
        go(bent, STEP.nod);
        go(cur, STEP.nod);
      }
    } else if (m.type === "twist") {
      // Once: turns and stays turned. More: one way and the other, then back.
      const [bent, back] = pathOffsets(before, plan, ctx).map((o) => mergePoses(cur, o));
      if (reps === 1) {
        go(bent, STEP.twist);
        cur = bent;
      } else {
        for (let r = 0; r < reps; r++) go(r % 2 ? back : bent, STEP.twist);
        go(cur, STEP.twist);
      }
    } else if (m.type === "move") {
      cur = handPose(after);
      go(cur, STEP.move);
    } else if (m.type === "change") {
      // The arm stays where it is: only what the new handshape or palm changes.
      const turned = mergePoses(cur, handPose(after), negate(handPose(before)));
      for (let r = 0; r < reps; r++) go(r % 2 ? cur : turned, STEP.change);
      if (reps % 2 === 0) go(turned, STEP.change);
      cur = turned;
    } else if (m.type === "circle" || m.type === "linear" || m.type === "arc") {
      // The first vocabulary inside a sequence: its fitted out-and-back stroke, arc or circle.
      const poses = pathPoses(cur, m.type, before.location, ctx.side, ctx.handed);
      if (!poses) continue;
      for (let r = 0; r < reps; r++) {
        for (const pose of poses.slice(1)) go(pose, m.type === "circle" ? 0.11 : 0.24);
        if (m.type !== "arc") go(poses[0], 0.24);
      }
      cur = here;
    }
    void index;
  }
  t += STEP.end;
  put(here);
  return { bones, duration: t };
}

/**
 * No orientation means the location's natural hand (ASL-LEX gives none); a named one
 * turns the hand from there.
 */
function poseForArticulator(art, side, twoHanded = false) {
  const hand = solveHandshape(art.handshape, side);
  const location = art.location ?? "fs-station";
  const loc = solveLocation(location, side, { twoHanded });
  const h = { ...art, location };
  // A palm and fingers direction, or a site, is fitted (fitJobs); until it is, the hand is held
  // as its location holds it naturally.
  const ori = art.palm
    ? solveFitted(turnKey(location, h, twoHanded), side)?.[0] ?? {}
    : art.orientation ? solveOrientation(art.orientation, side, location) : {};
  const site = art.site ? solveFitted(siteKey(location, h, twoHanded), side)?.[0] ?? {} : {};
  return mergePoses(loc, ori, hand, site);
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
    // "weak-hand" names where the dominant hand acts, not where the base hand waits.
    const ndLocation = desc.nondominant.location;
    const nd = {
      ...holdFrom(desc.nondominant, !ndLocation || ndLocation === "weak-hand" ? "base-hand" : ndLocation),
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
  const axial = mergePoses(solveTorso(torso), solveHead(head === "nod" || head === "shake" ? "neutral" : head));
  base = mergePoses(base, axial);
  let armTrack;
  if (isSequenced(art.movement)) {
    // What does not move with the dominant hand: the waiting base hand, the head and torso.
    const other = side === "right" ? "left" : "right";
    const waiting = twoHanded ? {} : negate(pose);
    const fixed = mergePoses(base, waiting, twoHanded ? negate(mergePoses(pose, poseForArticulator(art, other, true))) : {});
    armTrack = sequenceKeyframes(art, { side, other, twoHanded, handed: desc.handed, fixed });
  } else {
    armTrack = movementKeyframes(base, art.movement ?? [], side, art.location ?? "fs-station", desc.handed);
  }
  const { bones, duration: armDur } = armTrack;
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
