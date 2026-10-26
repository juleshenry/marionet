/**
 * Expertise library: parametric handshapes + a VRM bone solver.
 *
 * curl 0 = extended, 1 = full fist
 * spread: abduction at MCP, + away from palm midline
 * thumb.opposition 0 = along radial edge, 1 = across palm
 * profile "hook" puts flexion on PIP/DIP more than MCP (X, bent-B, etc.); "flat" bends all
 * four fingers at the knuckles and keeps them nearly straight (flat O)
 */

import { FITTED } from "./fitted.js";

export const FINGER_AXES = {
  curl: "z",
  spread: "y",
  thumbCurl: "x",
  thumbOpp: "y",
  thumbAbd: "z",
};

const CURL_MAX = 1.38;
const SPREAD_MAX = 0.32;
const THUMB_CURL_MAX = 0.85;
const THUMB_OPP_MAX = 0.9;
const THUMB_ABD_MAX = 0.7;

const FINGERS = ["Index", "Middle", "Ring", "Little"];

/** ASL fingerspelling handshapes (citation form). P uses K; Q uses G; J uses I; Z uses 1. */
export const HANDSHAPES = {
  A: {
    id: "A",
    fingers: { index: 1, middle: 1, ring: 1, little: 1, spread: 0 },
    thumb: { curl: 0.15, opposition: 0.2, abduction: 0.45 },
  },
  B: {
    id: "B",
    fingers: { index: 0, middle: 0, ring: 0, little: 0, spread: -0.1 },
    thumb: { curl: 0.75, opposition: 0.85, abduction: 0.1 },
  },
  C: {
    id: "C",
    fingers: { index: 0.38, middle: 0.4, ring: 0.42, little: 0.45, spread: 0.15 },
    thumb: { curl: 0.35, opposition: 0.55, abduction: 0.55 },
  },
  D: {
    id: "D",
    fingers: { index: 0, middle: 0.82, ring: 0.85, little: 0.85, spread: 0 },
    thumb: { curl: 0.45, opposition: 0.75, abduction: 0.2 },
  },
  E: {
    id: "E",
    fingers: { index: 0.72, middle: 0.74, ring: 0.76, little: 0.78, spread: 0 },
    thumb: { curl: 0.7, opposition: 0.7, abduction: 0.05 },
  },
  F: {
    id: "F",
    // Small metacarpal lift only. Large extra.y hyperextends the CMC (broken-looking
    // thumb); zero extra leaves the rest thumb pointing down in the demo camera.
    fingers: { index: 0.48, middle: 0.03, ring: 0.03, little: 0.03, spread: 0.18 },
    thumb: { curl: 0.08, opposition: 0, abduction: 0.05, extra: { x: 0.15, y: -0.35, z: 0 } },
  },
  G: {
    id: "G",
    fingers: { index: 0, middle: 1, ring: 1, little: 1, spread: 0 },
    thumb: { curl: 0.1, opposition: 0.15, abduction: 0.35 },
  },
  H: {
    id: "H",
    fingers: { index: 0, middle: 0, ring: 1, little: 1, spread: -0.1 },
    thumb: { curl: 0.55, opposition: 0.45, abduction: 0.1 },
  },
  I: {
    id: "I",
    fingers: { index: 1, middle: 1, ring: 1, little: 0, spread: 0.1 },
    thumb: { curl: 0.35, opposition: 0.35, abduction: 0.2 },
  },
  K: {
    id: "K",
    fingers: { index: 0, middle: 0.22, ring: 1, little: 1, spread: 0.35 },
    thumb: { curl: 0.2, opposition: 0.55, abduction: 0.15 },
  },
  L: {
    id: "L",
    fingers: { index: 0, middle: 1, ring: 1, little: 1, spread: 0 },
    thumb: { curl: 0.05, opposition: 0.05, abduction: 0.95 },
  },
  M: {
    id: "M",
    fingers: { index: 0.92, middle: 0.92, ring: 0.92, little: 0.95, spread: 0 },
    thumb: { curl: 0.55, opposition: 0.5, abduction: -0.15 },
  },
  N: {
    id: "N",
    fingers: { index: 0.92, middle: 0.92, ring: 0.95, little: 0.95, spread: 0 },
    thumb: { curl: 0.5, opposition: 0.45, abduction: -0.05 },
  },
  O: {
    id: "O",
    fingers: { index: 0.62, middle: 0.64, ring: 0.66, little: 0.68, spread: 0.05 },
    thumb: { curl: 0.45, opposition: 0.8, abduction: 0.3 },
  },
  R: {
    id: "R",
    fingers: { index: 0.08, middle: 0.08, ring: 1, little: 1, spread: -0.05 },
    thumb: { curl: 0.5, opposition: 0.4, abduction: 0.1 },
  },
  S: {
    id: "S",
    fingers: { index: 1, middle: 1, ring: 1, little: 1, spread: 0 },
    thumb: { curl: 0.35, opposition: 0.55, abduction: 0.05 },
  },
  T: {
    id: "T",
    fingers: { index: 0.95, middle: 1, ring: 1, little: 1, spread: 0 },
    thumb: { curl: 0.25, opposition: 0.35, abduction: 0.2 },
  },
  U: {
    id: "U",
    fingers: { index: 0, middle: 0, ring: 1, little: 1, spread: -0.1 },
    thumb: { curl: 0.55, opposition: 0.5, abduction: 0.1 },
  },
  V: {
    id: "V",
    fingers: { index: 0, middle: 0, ring: 1, little: 1, spread: 0.55 },
    thumb: { curl: 0.55, opposition: 0.5, abduction: 0.1 },
  },
  W: {
    id: "W",
    fingers: { index: 0, middle: 0, ring: 0, little: 1, spread: 0.4 },
    thumb: { curl: 0.6, opposition: 0.55, abduction: 0.05 },
  },
  X: {
    id: "X",
    fingers: { index: 0.55, middle: 1, ring: 1, little: 1, spread: 0 },
    thumb: { curl: 0.4, opposition: 0.4, abduction: 0.15 },
    profile: "hook",
  },
  Y: {
    id: "Y",
    fingers: { index: 1, middle: 1, ring: 1, little: 0, spread: 0.35 },
    thumb: { curl: 0.05, opposition: 0.1, abduction: 0.95 },
  },
  ILY: {
    id: "ILY",
    // Named ASL handshape (ASL-LEX `ily`). Not a chord of letter signs.
    fingers: { index: 0, middle: 1, ring: 1, little: 0, spread: 0.35 },
    thumb: { curl: 0.05, opposition: 0.05, abduction: 0.95 },
  },
  horns: {
    id: "horns",
    // Index + pinky extended, thumb in. Not I+Y (I curls the index).
    fingers: { index: 0, middle: 1, ring: 1, little: 0, spread: 0.4 },
    thumb: { curl: 0.45, opposition: 0.45, abduction: 0.15 },
  },
  1: {
    id: "1",
    fingers: { index: 0, middle: 1, ring: 1, little: 1, spread: 0 },
    thumb: { curl: 0.45, opposition: 0.45, abduction: 0.1 },
  },
  3: {
    id: "3",
    fingers: { index: 0, middle: 0, ring: 1, little: 1, spread: 0.45 },
    thumb: { curl: 0.05, opposition: 0.1, abduction: 0.9 },
  },
  4: {
    id: "4",
    fingers: { index: 0, middle: 0, ring: 0, little: 1, spread: 0.45 },
    thumb: { curl: 0.7, opposition: 0.7, abduction: 0.1 },
  },
  5: {
    id: "5",
    fingers: { index: 0, middle: 0, ring: 0, little: 0, spread: 0.7 },
    thumb: { curl: 0.05, opposition: 0.1, abduction: 0.9 },
  },
  open_b: {
    id: "open_b",
    fingers: { index: 0, middle: 0, ring: 0, little: 0, spread: -0.05 },
    thumb: { curl: 0.08, opposition: 0.12, abduction: 0.55 },
  },
  flat_b: {
    id: "flat_b",
    fingers: { index: 0, middle: 0, ring: 0, little: 0, spread: -0.08 },
    thumb: { curl: 0.2, opposition: 0.15, abduction: 0.12 },
  },
  // Bent B (NIGHT, AGAIN): the fingers bent at the knuckles, straight and together.
  bent_b: {
    id: "bent_b",
    fingers: { index: 1, middle: 1, ring: 1, little: 1, spread: -0.08 },
    thumb: { curl: 0.2, opposition: 0.15, abduction: 0.12 },
    profile: "flat",
  },
  curved_5: {
    id: "curved_5",
    fingers: { index: 0.38, middle: 0.4, ring: 0.42, little: 0.45, spread: 0.55 },
    thumb: { curl: 0.25, opposition: 0.2, abduction: 0.7 },
  },
  baby_o: {
    id: "baby_o",
    fingers: { index: 0.42, middle: 1, ring: 1, little: 1, spread: 0 },
    thumb: { curl: 0.4, opposition: 0.85, abduction: 0.25 },
  },
  flat_o: {
    id: "flat_o",
    fingers: { index: 0.95, middle: 0.97, ring: 0.99, little: 1.01, spread: -0.05 },
    thumb: { curl: 0.35, opposition: 0.75, abduction: 0.35 },
    profile: "flat",
  },
  open_8: {
    id: "open_8",
    fingers: { index: 0, middle: 0.58, ring: 0, little: 0, spread: 0.35 },
    thumb: { curl: 0.15, opposition: 0.25, abduction: 0.55 },
    profile: "hook",
  },
  8: {
    id: "8",
    fingers: { index: 0.05, middle: 0.55, ring: 0.05, little: 0.05, spread: 0.2 },
    thumb: { curl: 0.35, opposition: 0.7, abduction: 0.25 },
    profile: "hook",
  },
  P: {
    id: "P",
    fingers: { index: 0, middle: 0.22, ring: 1, little: 1, spread: 0.35 },
    thumb: { curl: 0.25, opposition: 0.6, abduction: 0.2 },
  },
};

const euler = (x = 0, y = 0, z = 0) => ({ x, y, z });

/**
 * Thumb eulers (metacarpal, proximal, distal) fitted on the sample VRM so the tip
 * lands where ASL puts it: beside the index (A), across the palm (B), across the
 * curled fingers (S, I, X, 1, and U/V/R/H/W over the ring and little), under the
 * fingers (E, M, N, T), on the fingertip (D, O, flat O). The parametric thumb below swings
 * the tip out to the side on VRM thumbs, so these replace it for the named shapes.
 * Targets: scripts/fit_thumbs.mjs. Right hand; y and z mirror for the left.
 */
const THUMB_POSES = {
  A: [[-0.179, 0.056, -0.6], [0.968, 0, 0.758], [0.622, 0, 0.663]],
  B: [[0.374, -0.507, -0.511], [1.237, 0, 0.863], [0.617, 0, 0.599]],
  bent_b: [[0.374, -0.507, -0.511], [1.237, 0, 0.863], [0.617, 0, 0.599]], // B's thumb, across the palm
  C: [[0.139, -0.268, -0.118], [0.692, 0, 0.629], [0.399, 0, 0.442]],
  D: [[0.47, -0.101, 0.11], [0.847, 0, 0.656], [0.542, 0, 0.519]],
  E: [[0.259, -0.43, -0.301], [1.309, 0, 1.021], [1.166, 0, 0.809]],
  G: [[-0.252, -0.191, -0.601], [0.56, 0, 0.35], [0.412, 0, 0.42]],
  H: [[0.595, -0.587, 0.164], [0.843, 0, 0.594], [0.382, 0, 0.358]],
  I: [[0.625, -0.035, 0.008], [0.993, 0, 0.675], [0.519, 0, 0.478]],
  K: [[0.725, -0.492, -0.455], [0.832, 0, 0.081], [0.651, 0, 0.385]],
  M: [[0.41, -0.672, -0.326], [1.034, 0, 0.711], [0.476, 0, 0.456]],
  N: [[0.423, -0.281, -0.408], [1.291, 0, 0.939], [0.366, 0, 0.284]],
  O: [[0.325, -0.327, 0.125], [0.375, 0, 0.27], [0.203, 0, 0.19]],
  P: [[0.725, -0.492, -0.455], [0.832, 0, 0.081], [0.651, 0, 0.385]],
  R: [[0.596, -0.586, 0.165], [0.843, 0, 0.593], [0.383, 0, 0.359]],
  S: [[0.632, -0.024, 0.049], [0.963, 0, 0.659], [0.53, 0, 0.495]],
  T: [[0.776, -0.127, -0.025], [1.007, 0, 0.04], [1.408, 0, 0.809]],
  U: [[0.595, -0.587, 0.164], [0.843, 0, 0.594], [0.382, 0, 0.358]],
  V: [[0.609, -0.574, 0.169], [0.843, 0, 0.586], [0.39, 0, 0.363]],
  W: [[0.484, -0.872, 0.151], [0.836, 0, 0.573], [0.321, 0, 0.308]],
  X: [[0.461, -0.341, 0.046], [0.885, 0, 0.683], [0.51, 0, 0.502]],
  "1": [[0.674, -0.294, 0.129], [0.868, 0, 0.543], [0.555, 0, 0.494]],
  // Pad against the index and middle tips (not a letter: fitted on the held handshape).
  flat_o: [[0.37, -0.154, 0.029], [0.925, 0, 0.823], [0.175, 0, 0.148]],
};

/**
 * Fingers that the curl/spread parameters cannot express. R crosses the index in
 * front of the middle finger: twisting them in place (the old approach) passed one
 * through the other. Fitted on the sample VRM so they touch without overlapping.
 */
const FINGER_POSES = {
  // K and P: the middle finger angles forward from the knuckle, so K does not read as V.
  K: { Middle: [[0, 0.05, 0.8], [0, 0, 0.12], [0, 0, 0.08]] },
  P: { Middle: [[0, 0.05, 0.8], [0, 0, 0.12], [0, 0, 0.08]] },
  R: {
    Index: [[0.071, -0.136, 0.034], [0, 0, -0.011], [0, 0, -0.008]],
    Middle: [[-0.306, 0.254, -0.225], [0, 0, 0.156], [0, 0, 0.109]],
  },
};


function curlJoints(curl, profile) {
  if (profile === "flat") {
    return { proximal: curl * CURL_MAX, mid: curl * 0.25 * CURL_MAX, distal: curl * 0.15 * CURL_MAX };
  }
  if (profile === "hook") {
    return { proximal: curl * 0.35 * CURL_MAX, mid: curl * 1.15 * CURL_MAX, distal: curl * 0.95 * CURL_MAX };
  }
  return { proximal: curl * CURL_MAX, mid: curl * 1.05 * CURL_MAX, distal: curl * 0.88 * CURL_MAX };
}

/**
 * Unnamed simultaneous selections: most-extended finger wins, thumb abduction
 * wins over opposition. Named shapes (ILY, horns) are their own catalog ids.
 */
export function composeHandshapes(ids) {
  const specs = ids.map((id) => {
    const shape = HANDSHAPES[id];
    if (!shape) throw new Error(`unknown handshape: ${id}`);
    return shape;
  });
  const fingerKeys = ["index", "middle", "ring", "little"];
  const fingers = {};
  for (const key of fingerKeys) {
    fingers[key] = Math.min(...specs.map((s) => s.fingers[key]));
  }
  fingers.spread = Math.max(...specs.map((s) => s.fingers.spread));
  return {
    id: ids.join("+"),
    fingers,
    thumb: {
      curl: Math.min(...specs.map((s) => s.thumb.curl)),
      opposition: Math.min(...specs.map((s) => s.thumb.opposition)),
      abduction: Math.max(...specs.map((s) => s.thumb.abduction)),
    },
  };
}

function shapeSpec(shapeId) {
  if (Array.isArray(shapeId)) return composeHandshapes(shapeId);
  const shape = HANDSHAPES[shapeId];
  if (!shape) throw new Error(`unknown handshape: ${shapeId}`);
  return shape;
}

export function isKnownHandshape(ref) {
  if (typeof ref === "string") return Boolean(HANDSHAPES[ref]);
  return Array.isArray(ref) && ref.length > 0 && ref.every((id) => Boolean(HANDSHAPES[id]));
}

/**
 * Solve a named handshape, or a simultaneous list of them, into local Euler offsets.
 * `side` is "left" or "right". Right is the default dominant hand.
 */
export function solveHandshape(shapeId, side = "right") {
  const shape = shapeSpec(shapeId);

  const pose = {};
  const prefix = side;
  const sign = side === "right" ? 1 : -1;
  const f = shape.fingers;
  const profile = shape.profile ?? "full";
  const curls = { Index: f.index, Middle: f.middle, Ring: f.ring, Little: f.little };

  for (const finger of FINGERS) {
    const joints = curlJoints(curls[finger], finger === "Index" || profile === "flat" ? profile : "full");
    // On VRM right-hand fingers, +y swings the finger toward the thumb side, so the
    // index spreads with +y and the ring and little with -y.
    let spread = 0;
    if (finger === "Index") spread = f.spread * SPREAD_MAX;
    if (finger === "Little") spread = -f.spread * SPREAD_MAX * 0.85;
    if (finger === "Ring") spread = -f.spread * SPREAD_MAX * 0.35;
    if (finger === "Middle") spread = 0;

    // Mirror y and z for the left hand, like the arms and thumb: an unmirrored z
    // bent left fingers backwards.
    const bone = `${prefix}${finger}`;
    pose[`${bone}Proximal`] = euler(0, spread * sign, joints.proximal * sign);
    pose[`${bone}Intermediate`] = euler(0, 0, joints.mid * sign);
    pose[`${bone}Distal`] = euler(0, 0, joints.distal * sign);
  }

  for (const [finger, joints] of Object.entries(FINGER_POSES[shape.id] ?? {})) {
    ["Proximal", "Intermediate", "Distal"].forEach((joint, i) => {
      const [x, y, z] = joints[i];
      pose[`${prefix}${finger}${joint}`] = euler(x, y * sign, z * sign);
    });
  }

  const fitted = THUMB_POSES[shape.id];
  if (fitted) {
    const [meta, prox, dist] = fitted;
    pose[`${prefix}ThumbMetacarpal`] = euler(meta[0], meta[1] * sign, meta[2] * sign);
    pose[`${prefix}ThumbProximal`] = euler(prox[0], prox[1] * sign, prox[2] * sign);
    pose[`${prefix}ThumbDistal`] = euler(dist[0], dist[1] * sign, dist[2] * sign);
    return pose;
  }

  const t = shape.thumb;
  const extra = t.extra ?? {};
  // Keep most opposition on the metacarpal only — stacking it on proximal too
  // over-rotates the chain and stretches the skinned thumb.
  pose[`${prefix}ThumbMetacarpal`] = euler(
    t.curl * THUMB_CURL_MAX * 0.3 + (extra.x ?? 0),
    t.opposition * THUMB_OPP_MAX * 0.75 * sign + (extra.y ?? 0) * sign,
    t.abduction * THUMB_ABD_MAX * sign + (extra.z ?? 0) * sign
  );
  pose[`${prefix}ThumbProximal`] = euler(t.curl * THUMB_CURL_MAX * 0.85, 0, 0);
  pose[`${prefix}ThumbDistal`] = euler(t.curl * THUMB_CURL_MAX * 0.45, 0, 0);

  return pose;
}

/**
 * Locations are offsets from the arms-down rest pose, not from T-pose.
 * Rest already hangs the upper arms; fs-station lifts the dominant hand
 * to ipsilateral shoulder height.
 */
function arm(side, s, upper, lower, hand, shoulder = [0.06, 0.08, 0.05]) {
  return {
    [`${side}Shoulder`]: euler(shoulder[0], shoulder[1] * s, shoulder[2] * s),
    [`${side}UpperArm`]: euler(upper[0], upper[1] * s, upper[2] * s),
    [`${side}LowerArm`]: euler(lower[0], lower[1] * s, lower[2] * s),
    [`${side}Hand`]: euler(hand[0], hand[1] * s, hand[2] * s),
  };
}

/** Rest-relative arm stations. Existing keys keep their original eulers. */
const LOCATION_POSES = {
  rest: () => ({}),
  "fs-station": (side, s) =>
    arm(side, s, [-0.95, 0.12, -0.35], [0.2, 1.45, 0.05], [-0.15, 0.25, 0.08]),
  "neutral-space-high": (side, s) => LOCATION_POSES["fs-station"](side, s),
  "neutral-space": (side, s) =>
    arm(side, s, [-0.542, -0.248, 0.038], [0.35, 1.262, 0.05], [-0.122, 0.03, 0.263], [0.02, 0.04, 0.05]),
  "chest-front": (side, s) =>
    arm(side, s, [-0.209, 0.087, -0.253], [0.15, 1.926, 0.1], [-0.833, 0.023, 0.846], [0.06, 0.12, 0.08]),
  // On the chest itself (ME, MY, PLEASE): index 0.01 cm off, palm 0.6°, fingers 0.7°
  chest: (side, s) =>
    arm(side, s, [0.188, -0.34, -0.206], [0.15, 1.957, 0.1], [-0.857, 0.126, 1.378], [0.06, 0.12, 0.08]),
  belly: (side, s) =>
    arm(side, s, [-0.012, 0.023, -0.182], [0.35, 1.337, 0.08], [-0.319, 0.42, 0.821], [0.04, 0.08, 0.04]),
  shoulder: (side, s) =>
    arm(side, s, [-0.59, -0.202, -0.283], [0.2, 1.918, 0.15], [1.197, 2.196, -0.893], [0.08, 0.05, 0.12]),
  neck: (side, s) =>
    arm(side, s, [-0.15, 0.37, -0.277], [0.12, 2.369, 0.12], [-0.764, 0.779, 0.82], [0.08, 0.1, 0.08]),
  head: (side, s) =>
    arm(side, s, [-0.898, -0.142, 0.384], [0.12, 2.414, 0.1], [-0.471, -0.175, 0.361], [0.1, 0.1, 0.08]),
  forehead: (side, s) =>
    arm(side, s, [-1.259, -0.11, 0.107], [0.08, 2.154, 0.08], [-1.312, -0.719, 0.455], [0.12, 0.1, 0.08]),
  eye: (side, s) =>
    arm(side, s, [-1.244, -0.369, 0.027], [0.1, 2.182, 0.1], [-1.188, -1.083, 0.813], [0.1, 0.1, 0.1]),
  nose: (side, s) =>
    arm(side, s, [-0.67, -0.086, 0.168], [0.12, 2.398, 0.12], [-0.839, -0.287, 0.675], [0.1, 0.08, 0.1]),
  cheek: (side, s) =>
    arm(side, s, [-0.523, 0.058, 0.092], [0.1, 2.509, 0.1], [-0.486, 0.259, 0.296], [0.1, 0.12, 0.1]),
  mouth: (side, s) =>
    arm(side, s, [-0.53, -0.092, 0.031], [0.14, 2.402, 0.12], [-0.868, -0.1, 0.727], [0.1, 0.1, 0.1]),
  chin: (side, s) =>
    arm(side, s, [-0.374, 0.028, -0.255], [0.18, 2.454, 0.12], [-0.887, 0.235, 0.587], [0.08, 0.1, 0.08]),
  ear: (side, s) =>
    arm(side, s, [-0.97, -0.626, 0.429], [0.05, 2.718, 0.05], [-0.918, -0.608, 0.565], [0.12, 0.16, 0.12]),
  forearm: (side, s) =>
    arm(side, s, [-0.16, 0.448, -0.268], [0.25, 1.996, 0.12], [1.16, -0.232, 0.5], [0.04, 0.1, 0.06]),
  "weak-hand": (side, s) =>
    arm(side, s, [-0.539, 0.942, -0.561], [0.2, 1.359, 0.1], [0.499, -0.605, 0.071], [0.05, 0.14, 0.08]),
  // Internal: where the non-dominant hand waits in a two-handed sign (not a SignDesc location).
  "base-hand": (side, s) =>
    arm(side, s, [-0.149, -0.808, 0.63], [0.15, 1.416, 0.1], [-0.998, -0.893, 0.037], [0.06, 0.12, 0.08]),
};

/**
 * Two-handed versions of locations near the midline, where both hands would otherwise
 * land on the same spot and cross: each hand keeps to its own side.
 */
const LOCATION_POSES_2H = {
  // index 0.15 cm off, palm 4.7°, fingers 16.6°
  "forehead": (side, s) =>
    arm(side, s, [-1.311, -0.171, -0.123], [0.08, 2.163, 0.08], [-1.604, -0.676, 0.382], [0.12, 0.1, 0.08]),
  // index 0 cm off, palm 0.1°, fingers 0.1°
  "nose": (side, s) =>
    arm(side, s, [-0.691, -0.313, 0.113], [0.12, 2.426, 0.12], [-1.034, -0.391, 0.72], [0.1, 0.08, 0.1]),
  // index 0.01 cm off, palm 0.4°, fingers 0.4°
  "mouth": (side, s) =>
    arm(side, s, [-0.572, -0.299, -0.086], [0.14, 2.427, 0.12], [-1.093, -0.147, 0.768], [0.1, 0.1, 0.1]),
  // index 0 cm off, palm 0.1°, fingers 0.1°
  "chin": (side, s) =>
    arm(side, s, [-0.371, -0.29, -0.263], [0.18, 2.491, 0.12], [-1.137, 0.126, 0.779], [0.08, 0.1, 0.08]),
  // index 0.19 cm off, palm 15.9°, fingers 28.6°
  "neck": (side, s) =>
    arm(side, s, [-0.202, 0.038, -0.245], [0.12, 2.413, 0.12], [-1.173, 0.665, 1.187], [0.08, 0.1, 0.08]),
  // center 0 cm off, palm 0.1°, fingers 1.3°
  "chest-front": (side, s) =>
    arm(side, s, [-0.173, -0.19, -0.112], [0.15, 1.906, 0.1], [-1.248, 0.141, 1.117], [0.06, 0.12, 0.08]),
  // center 0.02 cm off, palm 1.8°, fingers 5.2°
  "belly": (side, s) =>
    arm(side, s, [-0.083, -0.254, -0.056], [0.35, 1.103, 0.08], [-1.356, 0.456, 1.92], [0.04, 0.08, 0.04]),
  // center 0 cm off, palm 0°, fingers 0°
  "neutral-space": (side, s) =>
    arm(side, s, [-0.566, -0.313, -0.062], [0.35, 1.279, 0.05], [-0.192, 0.008, 0.353], [0.02, 0.04, 0.05]),
};

export const SOLVED_LOCATIONS = Object.freeze(Object.keys(LOCATION_POSES));

export function solveLocation(locationId, side = "right", { twoHanded = false } = {}) {
  const fn = (twoHanded && LOCATION_POSES_2H[locationId]) || LOCATION_POSES[locationId];
  if (!fn) throw new Error(`unknown location: ${locationId}`);
  const s = side === "right" ? 1 : -1;
  return fn(side, s);
}

/**
 * Hand paths for path movements, per location, as arm and hand offsets from the held
 * pose (right side; mirrored for the left). Fitted on the sample VRM with
 * scripts/fit_arm.mjs so the hand centre travels the path while the palm keeps facing
 * the same way.
 */
const LOCATION_PATHS = {
  "forehead": {
    // worst point 0.04 cm off, palm 1.6°
    linear: [
      { UpperArm: [-0.01, 0.039, -0.083], LowerArm: [0, -0.323, 0], Hand: [0.139, 0.18, 0.309] },
    ],
    // worst point 0.64 cm off, palm 5.9°
    arc: [
      { UpperArm: [-0.006, 0.112, 0.152], LowerArm: [0, -0.164, 0], Hand: [0.156, 0.283, -0.011] },
      { UpperArm: [0.004, 0.237, 0.137], LowerArm: [0, -0.237, 0], Hand: [0.322, 0.224, 0.153] },
    ],
    // worst point 0.01 cm off, palm 1.1°
    circle: [
      { UpperArm: [0.06, 0.126, -0.009], LowerArm: [0, -0.053, 0], Hand: [0.112, 0.13, 0.078] },
      { UpperArm: [0.185, 0.188, -0.032], LowerArm: [0, -0.004, 0], Hand: [0.169, 0.207, 0.129] },
      { UpperArm: [0.321, 0.152, -0.091], LowerArm: [0, 0.056, 0], Hand: [0.166, 0.24, 0.214] },
      { UpperArm: [0.374, 0.027, -0.143], LowerArm: [0, 0.092, 0], Hand: [0.095, 0.199, 0.286] },
      { UpperArm: [0.298, -0.101, -0.163], LowerArm: [0, 0.079, 0], Hand: [-0.003, 0.1, 0.284] },
      { UpperArm: [0.151, -0.143, -0.147], LowerArm: [0, 0.027, 0], Hand: [-0.063, 0.015, 0.203] },
      { UpperArm: [0.035, -0.09, -0.096], LowerArm: [0, -0.032, 0], Hand: [-0.047, -0.001, 0.116] },
    ],
  },
  "eye": {
    // worst point 0.01 cm off, palm 1.5°
    linear: [
      { UpperArm: [-0.016, 0.181, -0.19], LowerArm: [0, -0.33, 0], Hand: [0.133, 0.338, 0.252] },
    ],
    // worst point 0.19 cm off, palm 2.1°
    arc: [
      { UpperArm: [-0.025, 0.227, -0.003], LowerArm: [0, -0.144, 0], Hand: [0.017, 0.298, -0.113] },
      { UpperArm: [0.058, 0.355, 0.038], LowerArm: [0, -0.166, 0], Hand: [0.23, 0.324, 0.011] },
    ],
    // worst point 0.01 cm off, palm 1.1°
    circle: [
      { UpperArm: [0.089, 0.142, -0.018], LowerArm: [0, -0.027, 0], Hand: [0.096, 0.161, 0.042] },
      { UpperArm: [0.229, 0.188, -0.042], LowerArm: [0, 0.03, 0], Hand: [0.141, 0.256, 0.09] },
      { UpperArm: [0.35, 0.138, -0.109], LowerArm: [0, 0.073, 0], Hand: [0.138, 0.322, 0.189] },
      { UpperArm: [0.368, 0.016, -0.178], LowerArm: [0, 0.075, 0], Hand: [0.084, 0.312, 0.287] },
      { UpperArm: [0.255, -0.084, -0.228], LowerArm: [0, 0.034, 0], Hand: [0.012, 0.227, 0.311] },
      { UpperArm: [0.096, -0.103, -0.222], LowerArm: [0, -0.023, 0], Hand: [-0.032, 0.124, 0.242] },
      { UpperArm: [-0.002, -0.05, -0.149], LowerArm: [0, -0.064, 0], Hand: [-0.023, 0.068, 0.137] },
    ],
  },
  "nose": {
    // worst point 0 cm off, palm 0.4°
    linear: [
      { UpperArm: [-0.122, -0.025, -0.051], LowerArm: [0, -0.349, 0], Hand: [0.008, 0.162, 0.163] },
    ],
    // worst point 0 cm off, palm 0.5°
    arc: [
      { UpperArm: [-0.157, 0.152, 0.069], LowerArm: [0, -0.2, 0], Hand: [0.14, 0.082, -0.042] },
      { UpperArm: [-0.104, 0.293, 0.095], LowerArm: [0, -0.308, 0], Hand: [0.265, 0.254, -0.017] },
    ],
    // worst point 0.01 cm off, palm 0.8°
    circle: [
      { UpperArm: [0.03, 0.129, 0.007], LowerArm: [0, -0.103, 0], Hand: [0.115, 0.14, 0.031] },
      { UpperArm: [0.137, 0.22, -0.084], LowerArm: [0, -0.117, 0], Hand: [0.138, 0.303, 0.035] },
      { UpperArm: [0.24, 0.259, -0.309], LowerArm: [0, -0.105, 0], Hand: [0.047, 0.495, -0.005] },
      { UpperArm: [0.317, 0.083, -0.302], LowerArm: [0, -0.076, 0], Hand: [-0.053, 0.461, 0.15] },
      { UpperArm: [0.264, -0.076, -0.305], LowerArm: [0, -0.045, 0], Hand: [-0.177, 0.352, 0.191] },
      { UpperArm: [0.116, -0.127, -0.312], LowerArm: [0, -0.029, 0], Hand: [-0.246, 0.236, 0.103] },
      { UpperArm: [0.028, -0.151, -0.068], LowerArm: [0, -0.041, 0], Hand: [-0.114, 0.013, 0.106] },
    ],
  },
  "cheek": {
    // worst point 0 cm off, palm 0.4°
    linear: [
      { UpperArm: [-0.138, -0.061, -0.051], LowerArm: [0, -0.332, 0], Hand: [-0.103, 0.171, 0.106] },
    ],
    // worst point 0 cm off, palm 0.5°
    arc: [
      { UpperArm: [-0.178, 0.132, 0.129], LowerArm: [0, -0.202, 0], Hand: [0.164, 0.016, -0.02] },
      { UpperArm: [-0.111, 0.243, 0.201], LowerArm: [0, -0.333, 0], Hand: [0.302, 0.193, 0.013] },
    ],
    // worst point 0.1 cm off, palm 1.2°
    circle: [
      { UpperArm: [0.011, 0.151, -0.036], LowerArm: [0, -0.118, 0], Hand: [0.122, 0.151, -0.06] },
      { UpperArm: [0.113, 0.311, -0.263], LowerArm: [0, -0.152, 0], Hand: [0.227, 0.341, -0.28] },
      { UpperArm: [0.285, 0.206, -0.246], LowerArm: [0, -0.151, 0], Hand: [0.152, 0.467, -0.099] },
      { UpperArm: [0.348, 0.093, -0.369], LowerArm: [0, -0.127, 0], Hand: [0.007, 0.595, -0.057] },
      { UpperArm: [0.294, -0.079, -0.363], LowerArm: [0, -0.085, 0], Hand: [-0.21, 0.556, 0.074] },
      { UpperArm: [0.175, -0.216, -0.241], LowerArm: [0, -0.03, 0], Hand: [-0.292, 0.255, 0.11] },
      { UpperArm: [0.005, -0.112, -0.252], LowerArm: [0, -0.03, 0], Hand: [-0.201, 0.148, -0.061] },
    ],
  },
  "mouth": {
    // worst point 0 cm off, palm 0.3°
    linear: [
      { UpperArm: [-0.165, -0.009, -0.024], LowerArm: [0, -0.354, 0], Hand: [-0.007, 0.121, 0.145] },
    ],
    // worst point 0 cm off, palm 0.4°
    arc: [
      { UpperArm: [-0.169, 0.161, 0.092], LowerArm: [0, -0.188, 0], Hand: [0.145, 0.036, -0.059] },
      { UpperArm: [-0.123, 0.295, 0.139], LowerArm: [0, -0.312, 0], Hand: [0.28, 0.195, -0.027] },
    ],
    // worst point 0.01 cm off, palm 0.9°
    circle: [
      { UpperArm: [0.009, 0.142, 0], LowerArm: [0, -0.112, 0], Hand: [0.109, 0.134, 0.003] },
      { UpperArm: [0.09, 0.293, -0.184], LowerArm: [0, -0.144, 0], Hand: [0.115, 0.36, -0.084] },
      { UpperArm: [0.228, 0.202, -0.172], LowerArm: [0, -0.154, 0], Hand: [0.093, 0.417, 0.081] },
      { UpperArm: [0.295, 0.034, -0.164], LowerArm: [0, -0.133, 0], Hand: [-0.016, 0.385, 0.237] },
      { UpperArm: [0.251, -0.12, -0.17], LowerArm: [0, -0.095, 0], Hand: [-0.134, 0.274, 0.28] },
      { UpperArm: [0.119, -0.174, -0.181], LowerArm: [0, -0.06, 0], Hand: [-0.194, 0.156, 0.193] },
      { UpperArm: [-0.015, -0.089, -0.184], LowerArm: [0, -0.051, 0], Hand: [-0.17, 0.106, 0.039] },
    ],
  },
  "chin": {
    // worst point 0 cm off, palm 0.3°
    linear: [
      { UpperArm: [-0.189, 0.014, 0.003], LowerArm: [0, -0.342, 0], Hand: [-0.076, 0.085, 0.143] },
    ],
    // worst point 0 cm off, palm 0.4°
    arc: [
      { UpperArm: [-0.197, 0.166, 0.141], LowerArm: [0, -0.175, 0], Hand: [0.128, -0.046, -0.078] },
      { UpperArm: [-0.163, 0.296, 0.232], LowerArm: [0, -0.32, 0], Hand: [0.286, 0.069, -0.039] },
    ],
    // worst point 0.31 cm off, palm 6.5°
    circle: [
      { UpperArm: [0.004, 0.128, 0.072], LowerArm: [0, -0.124, 0], Hand: [0.131, 0.063, 0.021] },
      { UpperArm: [0.118, 0.177, 0.078], LowerArm: [0, -0.18, 0], Hand: [0.205, 0.176, 0.091] },
      { UpperArm: [0.233, 0.133, 0.015], LowerArm: [0, -0.207, 0], Hand: [0.16, 0.294, 0.193] },
      { UpperArm: [0.262, -0.008, 0.017], LowerArm: [0, -0.226, 0], Hand: [-0.075, 0.37, 0.503] },
      { UpperArm: [0.224, -0.165, 0.016], LowerArm: [0, -0.183, 0], Hand: [-0.222, 0.269, 0.604] },
      { UpperArm: [0.144, -0.258, 0.007], LowerArm: [0, -0.098, 0], Hand: [-0.202, 0.086, 0.415] },
      { UpperArm: [0.028, -0.189, 0.001], LowerArm: [0, -0.053, 0], Hand: [-0.137, -0.009, 0.195] },
    ],
  },
  "neck": {
    // worst point 0.01 cm off, palm 0.9°
    linear: [
      { UpperArm: [-0.24, -0.041, -0.007], LowerArm: [0, -0.3, 0], Hand: [-0.24, 0.06, 0.146] },
    ],
    // worst point 0 cm off, palm 0.3°
    arc: [
      { UpperArm: [-0.259, 0.103, 0.186], LowerArm: [0, -0.172, 0], Hand: [0.091, -0.075, -0.071] },
      { UpperArm: [-0.295, 0.212, 0.276], LowerArm: [0, -0.356, 0], Hand: [0.184, 0.046, -0.034] },
    ],
    // worst point 0.62 cm off, palm 10.8°
    circle: [
      { UpperArm: [-0.055, 0.086, 0.088], LowerArm: [0, -0.146, 0], Hand: [0.062, 0.044, 0.039] },
      { UpperArm: [0.02, 0.139, 0.069], LowerArm: [0, -0.231, 0], Hand: [0.085, 0.161, 0.104] },
      { UpperArm: [0.119, 0.118, -0.015], LowerArm: [0, -0.274, 0], Hand: [-0.052, 0.297, 0.273] },
      { UpperArm: [0.137, -0.015, 0.008], LowerArm: [0, -0.279, 0], Hand: [-0.613, 0.254, 0.92] },
      { UpperArm: [0.118, -0.162, 0.027], LowerArm: [0, -0.21, 0], Hand: [-0.791, 0.112, 1.075] },
      { UpperArm: [0.066, -0.239, 0.032], LowerArm: [0, -0.115, 0], Hand: [-0.67, 0.062, 0.83] },
      { UpperArm: [0.012, -0.196, 0.028], LowerArm: [0, -0.042, 0], Hand: [-0.328, 0.009, 0.355] },
    ],
  },
  "head": {
    // worst point 0 cm off, palm 0.3°
    linear: [
      { UpperArm: [-0.019, -0.077, -0.058], LowerArm: [0, -0.318, 0], Hand: [-0.05, 0.237, 0.15] },
    ],
    // worst point 0 cm off, palm 0.5°
    arc: [
      { UpperArm: [-0.112, 0.129, 0.044], LowerArm: [0, -0.208, 0], Hand: [0.141, 0.136, -0.031] },
      { UpperArm: [-0.029, 0.267, 0.071], LowerArm: [0, -0.287, 0], Hand: [0.251, 0.322, -0.036] },
    ],
    // worst point 0.02 cm off, palm 0.2°
    circle: [
      { UpperArm: [0.066, 0.122, 0.003], LowerArm: [0, -0.08, 0], Hand: [0.091, 0.169, 0.014] },
      { UpperArm: [0.214, 0.191, -0.02], LowerArm: [0, -0.062, 0], Hand: [0.119, 0.301, 0.046] },
      { UpperArm: [0.349, 0.171, -0.152], LowerArm: [0, -0.02, 0], Hand: [0.025, 0.417, 0.046] },
      { UpperArm: [0.374, 0.087, -0.373], LowerArm: [0, 0.024, 0], Hand: [-0.15, 0.496, -0.035] },
      { UpperArm: [0.383, -0.183, -0.106], LowerArm: [0, 0.043, 0], Hand: [-0.245, 0.229, 0.222] },
      { UpperArm: [0.211, -0.242, -0.086], LowerArm: [0, 0.023, 0], Hand: [-0.247, 0.077, 0.165] },
      { UpperArm: [0.058, -0.166, -0.055], LowerArm: [0, -0.022, 0], Hand: [-0.147, 0.014, 0.088] },
    ],
  },
  "ear": {
    // worst point 0.01 cm off, palm 1.1°
    linear: [
      { UpperArm: [0.131, 0.089, -0.052], LowerArm: [0, -0.297, 0], Hand: [0.108, 0.359, 0.261] },
    ],
    // worst point 0.04 cm off, palm 1.5°
    arc: [
      { UpperArm: [-0.008, 0.395, -0.036], LowerArm: [0, -0.136, 0], Hand: [0.314, 0.313, 0.02] },
      { UpperArm: [0.216, 0.639, -0.006], LowerArm: [0, -0.161, 0], Hand: [0.485, 0.594, 0.102] },
    ],
    // worst point 0.15 cm off, palm 3.4°
    circle: [
      { UpperArm: [0.235, 0.246, 0.029], LowerArm: [0, -0.034, 0], Hand: [0.156, 0.337, 0.168] },
      { UpperArm: [0.441, 0.36, -0.237], LowerArm: [0, -0.009, 0], Hand: [0.076, 0.716, 0.128] },
      { UpperArm: [0.651, 0.289, -0.692], LowerArm: [0, 0.007, 0], Hand: [-0.113, 1.08, 0.033] },
      { UpperArm: [1.011, -0.177, 0.615], LowerArm: [0, -0.032, 0], Hand: [-0.207, 0.147, 0.689] },
      { UpperArm: [0.693, -0.38, 0.262], LowerArm: [0, -0.07, 0], Hand: [-0.378, 0.153, 0.412] },
      { UpperArm: [0.283, -0.396, 0.08], LowerArm: [0, -0.095, 0], Hand: [-0.315, 0.014, 0.24] },
      { UpperArm: [0.053, -0.218, -0.008], LowerArm: [0, -0.095, 0], Hand: [-0.154, 0.01, 0.135] },
    ],
  },
  "shoulder": {
    // worst point 0 cm off, palm 0.3°
    linear: [
      { UpperArm: [-0.221, 0.011, 0.111], LowerArm: [0, -0.424, 0], Hand: [-0.014, 0.126, 0.188] },
    ],
    // worst point 0 cm off, palm 0.1°
    arc: [
      { UpperArm: [-0.123, 0.174, 0.064], LowerArm: [0, -0.131, 0], Hand: [0.09, -0.116, -0.035] },
      { UpperArm: [-0.082, 0.206, 0.217], LowerArm: [0, -0.241, 0], Hand: [0.129, -0.109, 0.123] },
    ],
    // worst point 0.01 cm off, palm 1.2°
    circle: [
      { UpperArm: [0.009, 0.061, 0.102], LowerArm: [0, -0.099, 0], Hand: [0.042, -0.01, 0.094] },
      { UpperArm: [0.085, 0.073, 0.138], LowerArm: [0, -0.145, 0], Hand: [-0.014, 0.007, 0.246] },
      { UpperArm: [0.141, 0.02, 0.136], LowerArm: [0, -0.194, 0], Hand: [-0.097, 0.089, 0.374] },
      { UpperArm: [0.146, -0.096, 0.128], LowerArm: [0, -0.22, 0], Hand: [-0.114, 0.21, 0.383] },
      { UpperArm: [0.092, -0.186, 0.095], LowerArm: [0, -0.206, 0], Hand: [-0.103, 0.277, 0.297] },
      { UpperArm: [0.012, -0.17, 0.024], LowerArm: [0, -0.16, 0], Hand: [-0.106, 0.23, 0.186] },
      { UpperArm: [-0.043, -0.092, -0.005], LowerArm: [0, -0.11, 0], Hand: [-0.068, 0.127, 0.081] },
    ],
  },
  "chest-front": {
    // worst point 0 cm off, palm 0.2°
    linear: [
      { UpperArm: [-0.274, 0.043, 0.028], LowerArm: [0, -0.372, 0], Hand: [-0.041, 0.038, 0.105] },
    ],
    // worst point 0 cm off, palm 0.2°
    arc: [
      { UpperArm: [-0.121, 0.108, 0.104], LowerArm: [0, -0.053, 0], Hand: [0.068, -0.045, -0.108] },
      { UpperArm: [-0.174, 0.274, 0.131], LowerArm: [0, -0.229, 0], Hand: [0.108, 0.108, -0.157] },
    ],
    // worst point 0 cm off, palm 0.4°
    circle: [
      { UpperArm: [-0.003, 0.118, 0.09], LowerArm: [0, -0.096, 0], Hand: [0.114, 0.076, -0.034] },
      { UpperArm: [0.03, 0.17, 0.124], LowerArm: [0, -0.243, 0], Hand: [0.171, 0.217, 0.026] },
      { UpperArm: [0.08, 0.139, 0.093], LowerArm: [0, -0.354, 0], Hand: [0.143, 0.332, 0.147] },
      { UpperArm: [0.125, 0.044, 0.022], LowerArm: [0, -0.368, 0], Hand: [0.059, 0.351, 0.273] },
      { UpperArm: [0.129, -0.144, 0.02], LowerArm: [0, -0.277, 0], Hand: [0.023, 0.214, 0.381] },
      { UpperArm: [0.095, -0.244, 0.016], LowerArm: [0, -0.132, 0], Hand: [-0.006, 0.049, 0.348] },
      { UpperArm: [0.041, -0.189, 0.011], LowerArm: [0, -0.016, 0], Hand: [-0.02, -0.042, 0.191] },
    ],
  },
  "belly": {
    // worst point 0 cm off, palm 0.3°
    linear: [
      { UpperArm: [-0.307, 0.019, 0.058], LowerArm: [0, -0.345, 0], Hand: [-0.06, 0.017, 0.089] },
    ],
    // worst point 0.01 cm off, palm 0.5°
    arc: [
      { UpperArm: [-0.051, 0.049, 0.084], LowerArm: [0, 0.033, 0], Hand: [0.063, -0.098, -0.081] },
      { UpperArm: [-0.189, 0.298, 0.107], LowerArm: [0, -0.207, 0], Hand: [0.001, 0.026, -0.246] },
    ],
    // worst point 0.07 cm off, palm 0.5°
    circle: [
      { UpperArm: [-0.05, 0.064, 0.111], LowerArm: [0, -0.143, 0], Hand: [0.086, 0.057, -0.061] },
      { UpperArm: [-0.164, 0.321, 0.107], LowerArm: [0, -0.446, 0], Hand: [-0.013, 0.259, -0.187] },
      { UpperArm: [-0.257, 0.854, 0.038], LowerArm: [0, -0.804, 0], Hand: [-0.417, 0.565, -0.266] },
      { UpperArm: [-0.265, 0.497, 0.082], LowerArm: [0, -0.899, 0], Hand: [-0.255, 0.538, -0.042] },
      { UpperArm: [-0.19, -0.008, 0.058], LowerArm: [0, -0.688, 0], Hand: [-0.072, 0.418, 0.245] },
      { UpperArm: [-0.077, -0.14, -0.004], LowerArm: [0, -0.334, 0], Hand: [-0.051, 0.215, 0.261] },
      { UpperArm: [-0.007, -0.164, 0.001], LowerArm: [0, -0.074, 0], Hand: [-0.012, 0.047, 0.187] },
    ],
  },
  "neutral-space": {
    // worst point 0.01 cm off, palm 0.1°
    linear: [
      { UpperArm: [-0.384, 0.002, 0.029], LowerArm: [0, -0.65, 0], Hand: [0.005, 0.237, 0.046] },
    ],
    // worst point 0 cm off, palm 0.2°
    arc: [
      { UpperArm: [-0.065, 0.052, 0.091], LowerArm: [0, -0.051, 0], Hand: [0.052, -0.038, -0.075] },
      { UpperArm: [-0.116, 0.101, 0.172], LowerArm: [0, -0.268, 0], Hand: [0.097, 0.096, -0.145] },
    ],
    // worst point 0.01 cm off, palm 0.4°
    circle: [
      { UpperArm: [0.011, 0.06, 0.083], LowerArm: [0, -0.094, 0], Hand: [0.059, 0.075, -0.074] },
      { UpperArm: [0.009, 0.087, 0.113], LowerArm: [0, -0.274, 0], Hand: [0.083, 0.235, -0.103] },
      { UpperArm: [-0.007, 0.068, 0.083], LowerArm: [0, -0.448, 0], Hand: [0.064, 0.391, -0.06] },
      { UpperArm: [-0.016, 0.012, 0.01], LowerArm: [0, -0.495, 0], Hand: [0.015, 0.444, 0.039] },
      { UpperArm: [-0.01, -0.046, -0.071], LowerArm: [0, -0.376, 0], Hand: [-0.039, 0.359, 0.125] },
      { UpperArm: [-0.006, -0.073, -0.114], LowerArm: [0, -0.186, 0], Hand: [-0.07, 0.197, 0.139] },
      { UpperArm: [-0.007, -0.055, -0.086], LowerArm: [0, -0.036, 0], Hand: [-0.055, 0.051, 0.085] },
    ],
  },
  "weak-hand": {
    // worst point 0.01 cm off, palm 0.1°
    linear: [
      { UpperArm: [-0.42, -0.007, 0.366], LowerArm: [0, -0.539, 0], Hand: [0.042, 0.312, -0.063] },
    ],
    // worst point 0.01 cm off, palm 0.1°
    arc: [
      { UpperArm: [-0.274, 0.1, 0.222], LowerArm: [0, -0.146, 0], Hand: [-0.034, -0.018, 0.019] },
      { UpperArm: [-0.593, 0.109, 0.623], LowerArm: [0, -0.437, 0], Hand: [0.026, 0.061, -0.057] },
    ],
    // worst point 0.01 cm off, palm 0.6°
    circle: [
      { UpperArm: [-0.176, 0.099, 0.232], LowerArm: [0, -0.168, 0], Hand: [0.011, -0.009, -0.06] },
      { UpperArm: [-0.276, 0.122, 0.43], LowerArm: [0, -0.355, 0], Hand: [0.045, 0.052, -0.17] },
      { UpperArm: [-0.185, 0.108, 0.411], LowerArm: [0, -0.447, 0], Hand: [0.064, 0.131, -0.273] },
      { UpperArm: [0.043, 0.045, 0.199], LowerArm: [0, -0.374, 0], Hand: [0.075, 0.181, -0.3] },
      { UpperArm: [0.178, -0.113, 0.046], LowerArm: [0, -0.192, 0], Hand: [0.134, 0.206, -0.21] },
      { UpperArm: [0.085, -0.437, 0.205], LowerArm: [0, -0.017, 0], Hand: [0.41, 0.303, 0.06] },
      { UpperArm: [0.017, -0.36, 0.175], LowerArm: [0, 0.06, 0], Hand: [0.34, 0.2, 0.154] },
    ],
  },
  "forearm": {
    // worst point 0 cm off, palm 0.2°
    linear: [
      { UpperArm: [-0.253, -0.055, 0.064], LowerArm: [0, -0.303, 0], Hand: [-0.11, 0.138, -0.071] },
    ],
    // worst point 0 cm off, palm 0.2°
    arc: [
      { UpperArm: [-0.194, 0.088, 0.157], LowerArm: [0, -0.099, 0], Hand: [0.035, -0.061, 0.084] },
      { UpperArm: [-0.294, 0.157, 0.293], LowerArm: [0, -0.32, 0], Hand: [0.081, -0.067, -0.029] },
    ],
    // worst point 0.37 cm off, palm 1.9°
    circle: [
      { UpperArm: [-0.068, 0.116, 0.121], LowerArm: [0, -0.156, 0], Hand: [0.077, -0.046, -0.057] },
      { UpperArm: [-0.066, 0.23, 0.108], LowerArm: [0, -0.326, 0], Hand: [0.046, -0.098, -0.235] },
      { UpperArm: [0.034, 0.141, 0.107], LowerArm: [0, -0.418, 0], Hand: [0.104, 0.015, -0.368] },
      { UpperArm: [0.149, 0.03, 0.008], LowerArm: [0, -0.379, 0], Hand: [0.093, 0.11, -0.435] },
      { UpperArm: [0.195, -0.255, 0.051], LowerArm: [0, -0.253, 0], Hand: [0.136, 0.508, -0.332] },
      { UpperArm: [0.176, -0.372, 0.058], LowerArm: [0, -0.085, 0], Hand: [0.027, 0.633, -0.123] },
      { UpperArm: [0.131, -0.267, 0.051], LowerArm: [0, 0.042, 0], Hand: [0.045, 0.273, -0.022] },
    ],
  },
};

export function solveMovePath(type, location, side = "right") {
  const keys = LOCATION_PATHS[location]?.[type];
  if (!keys) return null;
  const s = side === "right" ? 1 : -1;
  return keys.map((key) => {
    const out = {};
    for (const [bone, [x, y, z]] of Object.entries(key)) out[`${side}${bone}`] = euler(x, y * s, z * s);
    return out;
  });
}

/** How a hand is held, for the keys of fitted rows: a named orientation, palm:fingers, or natural. */
export const offsetOf = (h) => (h.offset ? Object.entries(h.offset).map(([d, cm]) => `+${d}${cm}`).join("") : "");
export const holdOf = (h) => h.orientation ?? (h.palm ? `${h.palm}:${h.fingers}${offsetOf(h)}` : "natural");
const hands = (twoHanded) => (twoHanded ? "2h" : "1h");

/** Keys of fitted rows (fitted.js). */
export const turnKey = (location, h, twoHanded) => `turn|${location}|${h.palm}:${h.fingers}${offsetOf(h)}|${hands(twoHanded)}`;
export const siteKey = (location, h, twoHanded) =>
  `site|${location}|${holdOf(h)}|${[h.handshape].flat().join("+")}|${h.site}|${hands(twoHanded)}`;
export const fittedPathKey = (location, h, twoHanded, move) => `path|${location}|${holdOf(h)}|${hands(twoHanded)}|${move}`;

/** Fitted rows (fitted.js) as poses for one side, or null if not fitted yet. */
export function solveFitted(key, side = "right") {
  const keys = FITTED[key];
  if (!keys) return null;
  const s = side === "right" ? 1 : -1;
  return keys.map((key) => {
    const out = {};
    for (const [bone, [x, y, z]] of Object.entries(key)) out[`${side}${bone}`] = euler(x, y * s, z * s);
    return out;
  });
}

export const solveFittedPath = solveFitted;
export const isFitted = (key) => key in FITTED;

/**
 * Which way a hand lifts off a location in a tap, from the signer: away from the face and body,
 * sideways off the side of the head, up off the base hand and forearm.
 */
export const AWAY = Object.freeze({ cheek: "ipsi", head: "ipsi", ear: "ipsi", "weak-hand": "up", forearm: "up" });
export const awayFrom = (location) => AWAY[location] ?? "out";

/**
 * Orientation at the fingerspelling station, as offsets from the station pose.
 * The generic offsets below left the palm facing the midline here, so V/W read
 * as 1 and B as a blade. These were fitted so the palm and fingers point where a
 * viewer straight on expects them (palm-out: palm to the viewer, fingers up;
 * palm-side: palm to the signer, fingers to the signer's left; palm-down: fingers
 * down and forward; palm-in: turned toward the midline, for C and O). Palm-down also
 * opens the elbow a little, keeping the hand at chest height, so P and Q do not bend
 * the wrist past its range.
 */
const FS_ORIENTATION = {
  "palm-out": { Hand: [1.198, -0.306, -0.864] },
  "palm-side": { Hand: [-0.892, -0.762, 0.925] },
  "palm-down": { Hand: [-0.868, -1.229, -0.359], UpperArm: [0.233, 0.124, -0.077], LowerArm: [0, -0.332, 0] },
  // C and O: turned about 60° toward the midline, so the viewer sees the shape side-on.
  "palm-in": { Hand: [0.592, 0.246, -0.644] },
};

/**
 * Named orientations at the other locations, as hand offsets from the location's own
 * (natural) hand: palm-out faces the viewer with fingers up, palm-in faces the signer,
 * palm-down and palm-up face the floor and the ceiling with fingers forward, palm-side
 * faces the midline with fingers forward. Fitted on the sample VRM (scripts/fit_arm.mjs).
 */
const LOCATION_ORIENTATION = {
  "forehead": {
    // 0.22 cm off, palm 30.8°, fingers 18.6°
    "palm-out": { UpperArm: [0.021, 0.214, -0.332], LowerArm: [0, 0.233, 0], Hand: [2.023, 0.584, -0.131] },
    // 0.01 cm off, palm 1.4°, fingers 2.2°
    "palm-in": { UpperArm: [0.297, 0.24, 0.546], LowerArm: [0, 0.192, 0], Hand: [0.486, 0.3, -0.282] },
    // 0.6 cm off, palm 45.8°, fingers 46.6°
    "palm-down": { UpperArm: [-0.043, 0.004, -0.111], LowerArm: [0, -0.021, 0], Hand: [0.626, 0.39, 0.339] },
    // 0.49 cm off, palm 49.1°, fingers 42.7°
    "palm-up": { UpperArm: [-0.029, -0.045, -0.064], LowerArm: [0, 0.147, 0], Hand: [-1.891, 0.68, -1.182] },
    // 0.02 cm off, palm 3.6°, fingers 3.3°
    "palm-side": { UpperArm: [0.07, 0.461, -0.235], LowerArm: [0, 0.252, 0], Hand: [1.268, 0.276, -0.685] },
  },
  "eye": {
    // 0.1 cm off, palm 22.4°, fingers 20.5°
    "palm-out": { UpperArm: [0.155, 0.214, -0.316], LowerArm: [0, 0.394, 0], Hand: [1.882, 1.046, -0.332] },
    // 0.02 cm off, palm 1.6°, fingers 4.4°
    "palm-in": { UpperArm: [0.604, 0.371, 0.546], LowerArm: [0, 0.296, 0], Hand: [0.257, 0.587, -0.46] },
    // 0.32 cm off, palm 29.5°, fingers 29.4°
    "palm-down": { UpperArm: [-0.12, 0.131, -0.304], LowerArm: [0, -0.033, 0], Hand: [0.456, 0.78, 0.266] },
    // 0.39 cm off, palm 37.2°, fingers 30.7°
    "palm-up": { UpperArm: [-0.087, 0.216, -0.303], LowerArm: [0, -0.121, 0], Hand: [0.498, -1.548, 1.353] },
    // 0.03 cm off, palm 4.2°, fingers 3.5°
    "palm-side": { UpperArm: [0.389, 0.473, -0.055], LowerArm: [0, 0.347, 0], Hand: [1.236, 0.854, -0.763] },
  },
  "nose": {
    // 0.1 cm off, palm 19°, fingers 20.4°
    "palm-out": { UpperArm: [-0.117, 0.088, -0.44], LowerArm: [0, 0.192, 0], Hand: [1.823, 0.295, -0.498] },
    // 0.01 cm off, palm 1.2°, fingers 1.8°
    "palm-in": { UpperArm: [0.103, 0.394, 0.009], LowerArm: [0, 0.026, 0], Hand: [-0.109, 0.379, -0.416] },
    // 0.16 cm off, palm 16.5°, fingers 17°
    "palm-down": { UpperArm: [-0.67, -0.143, -0.395], LowerArm: [0, -0.216, 0], Hand: [0.25, 0.047, 0.598] },
    // 0.28 cm off, palm 51.1°, fingers 36°
    "palm-up": { UpperArm: [-0.381, -0.154, -0.448], LowerArm: [0, 0.171, 0], Hand: [-2.181, 0.039, -1.306] },
    // 0.02 cm off, palm 4.3°, fingers 3°
    "palm-side": { UpperArm: [0.12, 0.266, -0.017], LowerArm: [0, 0.101, 0], Hand: [1.135, 0.375, -0.555] },
  },
  "cheek": {
    // 0.08 cm off, palm 10°, fingers 11.8°
    "palm-out": { UpperArm: [-0.107, -0.215, -0.384], LowerArm: [0, 0.16, 0], Hand: [1.62, -0.286, -0.351] },
    // 0.03 cm off, palm 2.5°, fingers 5.9°
    "palm-in": { UpperArm: [0.02, 0.179, -0.061], LowerArm: [0, 0.05, 0], Hand: [-0.554, -0.052, -0.08] },
    // 0.14 cm off, palm 15.4°, fingers 17.5°
    "palm-down": { UpperArm: [-0.911, -0.453, -0.419], LowerArm: [0, -0.321, 0], Hand: [-0.255, -0.556, 1.113] },
    // 0.2 cm off, palm 54.6°, fingers 21.7°
    "palm-up": { UpperArm: [-1.016, -0.646, -0.469], LowerArm: [0, -0.082, 0], Hand: [1.812, 0.964, -0.481] },
    // 0.04 cm off, palm 2.2°, fingers 7.6°
    "palm-side": { UpperArm: [0.002, -0.111, -0.054], LowerArm: [0, 0.062, 0], Hand: [0.555, -0.019, -0.14] },
  },
  "mouth": {
    // 0.12 cm off, palm 21.7°, fingers 22.5°
    "palm-out": { UpperArm: [-0.055, -0.018, -0.316], LowerArm: [0, 0.202, 0], Hand: [1.858, 0.265, -0.689] },
    // 0.01 cm off, palm 1.4°, fingers 1.6°
    "palm-in": { UpperArm: [0.083, 0.467, -0.128], LowerArm: [0, 0.007, 0], Hand: [-0.126, 0.475, -0.463] },
    // 0.05 cm off, palm 6°, fingers 6.6°
    "palm-down": { UpperArm: [-0.834, -0.174, -0.317], LowerArm: [0, -0.209, 0], Hand: [0.309, -0.105, 0.725] },
    // 0.28 cm off, palm 52.2°, fingers 35.2°
    "palm-up": { UpperArm: [-0.303, -0.222, -0.34], LowerArm: [0, 0.184, 0], Hand: [-2.095, -0.375, -1.247] },
    // 0.03 cm off, palm 4.9°, fingers 3.9°
    "palm-side": { UpperArm: [0.108, 0.323, -0.186], LowerArm: [0, 0.098, 0], Hand: [1.147, 0.256, -0.892] },
  },
  "chin": {
    // 0.2 cm off, palm 12.7°, fingers 41.4°
    "palm-out": { UpperArm: [0.167, -0.677, 0.967], LowerArm: [0, 0.164, 0], Hand: [1.007, 1.09, 0.599] },
    // 0.01 cm off, palm 1.6°, fingers 1.6°
    "palm-in": { UpperArm: [0.122, 0.412, 0.054], LowerArm: [0, -0.039, 0], Hand: [-0.019, 0.326, -0.275] },
    // 0.01 cm off, palm 1.9°, fingers 2.9°
    "palm-down": { UpperArm: [-0.917, -0.387, -0.039], LowerArm: [0, -0.142, 0], Hand: [0.316, -0.441, 0.918] },
    // 0.29 cm off, palm 52.4°, fingers 33.9°
    "palm-up": { UpperArm: [-0.202, -0.414, -0.035], LowerArm: [0, 0.18, 0], Hand: [-2.013, -0.904, -0.978] },
    // 0.04 cm off, palm 5.5°, fingers 4.7°
    "palm-side": { UpperArm: [0.125, 0.254, -0.009], LowerArm: [0, 0.017, 0], Hand: [1.318, 0.102, -0.951] },
  },
  "neck": {
    // 0.25 cm off, palm 30.1°, fingers 38.7°
    "palm-out": { UpperArm: [0.168, -0.821, 0.054], LowerArm: [0, 0.397, 0], Hand: [1.826, 0.007, -1.209] },
    // 0.09 cm off, palm 9.8°, fingers 14.8°
    "palm-in": { UpperArm: [0.172, 0.6, -0.303], LowerArm: [0, -0.055, 0], Hand: [0.345, 0.352, -0.819] },
    // 0.04 cm off, palm 2.3°, fingers 9.2°
    "palm-down": { UpperArm: [-0.946, -0.793, -0.032], LowerArm: [0, 0.209, 0], Hand: [-0.013, -0.973, 0.646] },
    // 0.09 cm off, palm 19.8°, fingers 6.5°
    "palm-up": { UpperArm: [-1.058, -1.164, 0.382], LowerArm: [0, 0.345, 0], Hand: [0.295, 1.268, 0.424] },
    // 0.19 cm off, palm 15.6°, fingers 30°
    "palm-side": { UpperArm: [-0.003, -0.015, 0.004], LowerArm: [0, 0.006, 0], Hand: [1.42, 0.154, -1.251] },
  },
  "head": {
    // 0.04 cm off, palm 5.5°, fingers 7.7°
    "palm-out": { UpperArm: [-0.279, -0.011, -0.657], LowerArm: [0, 0.156, 0], Hand: [1.516, 0.002, 0.06] },
    // 0.01 cm off, palm 1.5°, fingers 3.2°
    "palm-in": { UpperArm: [0.177, 0.029, 0.434], LowerArm: [0, 0.087, 0], Hand: [-0.371, -0.45, -0.059] },
    // 0.49 cm off, palm 39.9°, fingers 41.5°
    "palm-down": { UpperArm: [-0.495, -0.189, -0.67], LowerArm: [0, -0.261, 0], Hand: [-0.424, -0.121, 0.541] },
    // 0.35 cm off, palm 65.1°, fingers 56.4°
    "palm-up": { UpperArm: [-0.441, -0.29, -0.494], LowerArm: [0, 0.159, 0], Hand: [-2.284, 0.105, -1.208] },
    // 0.01 cm off, palm 1.4°, fingers 2.2°
    "palm-side": { UpperArm: [-0.131, 0.011, -0.344], LowerArm: [0, 0.102, 0], Hand: [0.428, -0.118, -0.178] },
  },
  "ear": {
    // 0.11 cm off, palm 9.9°, fingers 16.8°
    "palm-out": { UpperArm: [-1.016, -0.315, -1.128], LowerArm: [0, -0.013, 0], Hand: [0.924, 0.711, 0.378] },
    // 0.16 cm off, palm 16.6°, fingers 19.8°
    "palm-in": { UpperArm: [0.149, 0.219, 0.277], LowerArm: [0, 0.084, 0], Hand: [-0.466, -0.191, -0.44] },
    // 0.38 cm off, palm 31.1°, fingers 44.2°
    "palm-down": { UpperArm: [-0.624, 0.089, -0.849], LowerArm: [0, -0.43, 0], Hand: [-0.544, 0.005, 0.392] },
    // 0.16 cm off, palm 37.1°, fingers 50°
    "palm-up": { UpperArm: [-0.652, 0.035, -0.87], LowerArm: [0, -0.383, 0], Hand: [1.999, 1.336, -0.972] },
    // 0.1 cm off, palm 8.1°, fingers 15.5°
    "palm-side": { UpperArm: [-0.531, -0.269, -0.729], LowerArm: [0, 0, 0], Hand: [0.129, 0.05, 0.059] },
  },
  "shoulder": {
    // 0.06 cm off, palm 4.9°, fingers 9.5°
    "palm-out": { UpperArm: [1.969, -0.437, 2.355], LowerArm: [0, 0.367, 0], Hand: [-0.248, -0.097, 0.657] },
    // 0.2 cm off, palm 18.2°, fingers 27.1°
    "palm-in": { UpperArm: [0.509, 0.275, 0.009], LowerArm: [0, 0.127, 0], Hand: [0.092, 0.186, -0.545] },
    // 0.01 cm off, palm 2.9°, fingers 2°
    "palm-down": { UpperArm: [-0.404, -0.688, -0.233], LowerArm: [0, 0.316, 0], Hand: [0.945, 0.676, -0.213] },
    // 0.02 cm off, palm 10.1°, fingers 3.8°
    "palm-up": { UpperArm: [0.979, -1.127, 1.949], LowerArm: [0, 0.379, 0], Hand: [-1.559, 0.376, 1.275] },
    // 0.03 cm off, palm 2.8°, fingers 4.5°
    "palm-side": { UpperArm: [0.747, -0.108, 0.016], LowerArm: [0, 0.273, 0], Hand: [-0.553, -0.949, 0.183] },
  },
  "chest-front": {
    // 0.11 cm off, palm 21.7°, fingers 19.3°
    "palm-out": { UpperArm: [0.025, 0.179, -0.018], LowerArm: [0, -0.05, 0], Hand: [1.987, -0.393, -1.681] },
    // 0.01 cm off, palm 0.5°, fingers 2.7°
    "palm-in": { UpperArm: [-0.009, 0.029, 0.132], LowerArm: [0, -0.105, 0], Hand: [-0.516, 0.475, 0.292] },
    // 0.03 cm off, palm 16.4°, fingers 11.1°
    "palm-down": { UpperArm: [0.041, 0.055, -0.002], LowerArm: [0, 0.18, 0], Hand: [1.823, -0.374, -0.266] },
    // 0.03 cm off, palm 4.2°, fingers 4.1°
    "palm-up": { UpperArm: [0.066, 0.002, 0.141], LowerArm: [0, 0.176, 0], Hand: [-0.856, 0.177, -1.25] },
    // 0.01 cm off, palm 2.2°, fingers 2.2°
    "palm-side": { UpperArm: [0.078, 0.022, 0.142], LowerArm: [0, 0.156, 0], Hand: [0.643, -0.386, -1.096] },
  },
  "belly": {
    // 0.23 cm off, palm 37.7°, fingers 26.3°
    "palm-out": { UpperArm: [1.729, 1.005, -2.41], LowerArm: [0, -0.316, 0], Hand: [-1.254, -1.147, 1.871] },
    // 0.05 cm off, palm 3.9°, fingers 9.5°
    "palm-in": { UpperArm: [-0.13, 0.045, 0.122], LowerArm: [0, -0.315, 0], Hand: [-1.36, 0.195, 1.219] },
    // 0.69 cm off, palm 5.1°, fingers 6.2°
    "palm-down": { UpperArm: [0.037, 0.182, -0.021], LowerArm: [0, 0.04, 0], Hand: [1.416, -0.844, -1.195] },
    // 0.67 cm off, palm 7.4°, fingers 7°
    "palm-up": { UpperArm: [0.035, 0.175, -0.018], LowerArm: [0, 0.029, 0], Hand: [-1.543, -0.038, -0.243] },
    // 0.42 cm off, palm 5.3°, fingers 10°
    "palm-side": { UpperArm: [0.022, 0.209, -0.018], LowerArm: [0, -0.034, 0], Hand: [0.212, 0.316, -1.241] },
  },
  "neutral-space": {
    // 0.09 cm off, palm 13.1°, fingers 13°
    "palm-out": { UpperArm: [-0.15, 0.321, -0.116], LowerArm: [0, -0.329, 0], Hand: [1.399, -0.146, -1.512] },
    // 0.04 cm off, palm 6.4°, fingers 8.1°
    "palm-in": { UpperArm: [-0.047, -0.336, 0.218], LowerArm: [0, -0.371, 0], Hand: [-0.933, 0.087, 1.331] },
    // 0.01 cm off, palm 3.3°, fingers 1°
    "palm-down": { UpperArm: [-0.043, 0.354, -0.243], LowerArm: [0, 0.043, 0], Hand: [1.172, -0.189, 0.006] },
    // 0.01 cm off, palm 2.4°, fingers 2.3°
    "palm-up": { UpperArm: [0.734, -0.666, 1.087], LowerArm: [0, 0.045, 0], Hand: [-0.525, -0.74, -0.114] },
    // 0 cm off, palm 0.3°, fingers 0.3°
    "palm-side": { UpperArm: [0.02, -0.034, 0.047], LowerArm: [0, 0.017, 0], Hand: [0.092, -0.073, -0.144] },
  },
  "base-hand": {
    // 0.11 cm off, palm 31.9°, fingers 4°
    "palm-out": { UpperArm: [-0.387, 1.207, -0.952], LowerArm: [0, -0.454, 0], Hand: [-1.238, -1.469, 1.322] },
    // 0.07 cm off, palm 11.2°, fingers 12.4°
    "palm-in": { UpperArm: [-0.39, 0.498, -0.585], LowerArm: [0, -0.35, 0], Hand: [-0.235, 1.017, 1.467] },
    // 0.04 cm off, palm 19.8°, fingers 2.3°
    "palm-down": { UpperArm: [-0.257, 0.909, -0.905], LowerArm: [0, 0.011, 0], Hand: [1.843, 0.693, 0.142] },
    // 0 cm off, palm 0.5°, fingers 0.6°
    "palm-up": { UpperArm: [0.084, -0.024, 0.112], LowerArm: [0, 0.012, 0], Hand: [0.09, 0.127, 0.039] },
    // 0.01 cm off, palm 1.3°, fingers 3.4°
    "palm-side": { UpperArm: [-0.253, 0.902, -0.881], LowerArm: [0, -0.005, 0], Hand: [0.64, 0.885, -0.147] },
  },
  "weak-hand": {
    // 0.04 cm off, palm 5.9°, fingers 7.7°
    "palm-out": { UpperArm: [-0.251, -0.365, 0.518], LowerArm: [0, -0.375, 0], Hand: [0.721, 0.017, -1.309] },
    // 0.04 cm off, palm 5.6°, fingers 11.3°
    "palm-in": { UpperArm: [-0.023, -1.234, 0.963], LowerArm: [0, -0.354, 0], Hand: [-1.332, 0.969, 1.311] },
    // 0 cm off, palm 0.2°, fingers 0.7°
    "palm-down": { UpperArm: [-0.041, -0.005, 0.067], LowerArm: [0, -0.005, 0], Hand: [0.037, -0.233, 0.009] },
    // 0.08 cm off, palm 7°, fingers 0.1°
    "palm-up": { UpperArm: [0.073, -1.131, 0.986], LowerArm: [0, -0.01, 0], Hand: [-1.638, 0.539, -0.27] },
    // 0 cm off, palm 0.9°, fingers 1.4°
    "palm-side": { UpperArm: [0.043, -1.058, 0.933], LowerArm: [0, -0.038, 0], Hand: [-0.205, 0.446, -0.16] },
  },
  "forearm": {
    // 0.04 cm off, palm 6.7°, fingers 10.3°
    "palm-out": { UpperArm: [-0.064, 0.195, -0.062], LowerArm: [0, -0.269, 0], Hand: [0.467, -0.694, -1.291] },
    // 0.06 cm off, palm 17.5°, fingers 17.3°
    "palm-in": { UpperArm: [-0.024, -0.066, 0.16], LowerArm: [0, -0.245, 0], Hand: [-1.769, 1.087, 0.04] },
    // 0.01 cm off, palm 1°, fingers 2.3°
    "palm-down": { UpperArm: [0.022, -0.02, 0.159], LowerArm: [0, -0.011, 0], Hand: [0.406, -0.41, 0.122] },
    // 0.08 cm off, palm 22.6°, fingers 22.3°
    "palm-up": { UpperArm: [-0.021, 0.099, 0.138], LowerArm: [0, -0.074, 0], Hand: [-2.011, 0.997, -1.312] },
    // 0.03 cm off, palm 3.9°, fingers 4.2°
    "palm-side": { UpperArm: [0.029, 0.01, 0.156], LowerArm: [0, -0.058, 0], Hand: [-1.244, -0.028, -1.146] },
  },
};

export function solveOrientation(orientation, side = "right", location = null) {
  const s = side === "right" ? 1 : -1;
  const station = location === "fs-station" ? FS_ORIENTATION[orientation] : LOCATION_ORIENTATION[location]?.[orientation];
  if (station) {
    const out = {};
    for (const [bone, [x, y, z]] of Object.entries(station)) out[`${side}${bone}`] = euler(x, y * s, z * s);
    return out;
  }
  const extra = {
    "palm-out": euler(0.1, 0.15 * s, 0),
    "palm-in": euler(0.1, 1.35 * s, 0),
    "palm-down": euler(1.15, 0.2 * s, 0.2 * s),
    "palm-up": euler(-1.05, 0.1 * s, 0),
    "palm-side": euler(0.2, 0.95 * s, 0.15 * s),
  };
  const e = extra[orientation] ?? extra["palm-out"];
  return { [`${side}Hand`]: e };
}

/**
 * Fingertip paths at the fingerspelling station, as arm and hand offsets from the
 * held letter. Z: the index draws a Z as the signer writes it (8 cm strokes), so the
 * viewer sees it mirrored. J: the little finger drops 6 cm, then hooks toward the
 * midline while the palm turns in. Fitted on the sample VRM; the wrist-only
 * offsets in compile.js no longer trace these from the palm-out station.
 */
const FS_PATHS = {
  "trace:z": [
    { UpperArm: [-0.036, -0.136, -0.169], LowerArm: [0, -0.076, 0], Hand: [-0.127, 0.203, -0.039] },
    { UpperArm: [0.222, -0.02, 0.018], LowerArm: [0, -0.044, 0], Hand: [0.071, 0.032, -0.24] },
    { UpperArm: [0.18, -0.167, -0.139], LowerArm: [0, -0.12, 0], Hand: [-0.038, 0.243, -0.283] },
  ],
  hook: [
    { UpperArm: [0.159, -0.136, 0.227], LowerArm: [0, 0.066, 0], Hand: [-0.15, 0.097, -0.025] },
    { UpperArm: [0.321, 0.368, -0.205], LowerArm: [0, -0.186, 0], Hand: [-0.623, 1.302, -0.398] },
  ],
};

export function solveStationPath(type, location, side = "right") {
  const keys = location === "fs-station" ? FS_PATHS[type] : null;
  if (!keys) return null;
  const s = side === "right" ? 1 : -1;
  return keys.map((key) => {
    const out = {};
    for (const [bone, [x, y, z]] of Object.entries(key)) out[`${side}${bone}`] = euler(x, y * s, z * s);
    return out;
  });
}

export function mergePoses(...poses) {
  const out = {};
  for (const pose of poses) {
    for (const [bone, rot] of Object.entries(pose)) {
      const prev = out[bone] ?? euler();
      out[bone] = euler(prev.x + rot.x, prev.y + rot.y, prev.z + rot.z);
    }
  }
  return out;
}

/** Head/neck as articulators — not “hand at the head” (that is solveLocation). */
export function solveHead(label = "neutral") {
  switch (label) {
    case "tilt-left":
      return { neck: euler(0, 0, 0.28), head: euler(0, 0, 0.12) };
    case "tilt-right":
      return { neck: euler(0, 0, -0.28), head: euler(0, 0, -0.12) };
    case "turn-left":
      return { neck: euler(0, 0.4, 0), head: euler(0, 0.12, 0) };
    case "turn-right":
      return { neck: euler(0, -0.4, 0), head: euler(0, -0.12, 0) };
    case "nod":
      return { neck: euler(0.12, 0, 0), head: euler(0.22, 0, 0) };
    case "shake":
      return { neck: euler(0, 0.18, 0), head: euler(0, 0.08, 0) };
    default:
      return {};
  }
}

/** Spine/chest lean. Independent of arm station. */
export function solveTorso(label = "neutral") {
  switch (label) {
    case "lean-left":
      return { spine: euler(0, 0, 0.18), chest: euler(0, 0, 0.12) };
    case "lean-right":
      return { spine: euler(0, 0, -0.18), chest: euler(0, 0, -0.12) };
    case "forward":
      return { spine: euler(0.22, 0, 0), chest: euler(0.12, 0, 0) };
    default:
      return {};
  }
}
