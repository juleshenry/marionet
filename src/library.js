/**
 * Expertise library: parametric handshapes + a VRM bone solver.
 *
 * curl 0 = extended, 1 = full fist
 * spread: abduction at MCP, + away from palm midline
 * thumb.opposition 0 = along radial edge, 1 = across palm
 * profile "hook" puts flexion on PIP/DIP more than MCP (X, bent-B, etc.)
 */

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
    fingers: { index: 0.32, middle: 0.34, ring: 0.36, little: 0.38, spread: 0.08 },
    thumb: { curl: 0.35, opposition: 0.75, abduction: 0.35 },
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
 * fingers (E, M, N, T), on the fingertip (D, O). The parametric thumb below swings
 * the tip out to the side on VRM thumbs, so these replace it for the named shapes.
 * Targets: scripts/fit_thumbs.mjs. Right hand; y and z mirror for the left.
 */
const THUMB_POSES = {
  A: [[-0.179, 0.056, -0.6], [0.968, 0, 0.758], [0.622, 0, 0.663]],
  B: [[0.374, -0.507, -0.511], [1.237, 0, 0.863], [0.617, 0, 0.599]],
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
};

/**
 * Fingers that the curl/spread parameters cannot express. R crosses the index in
 * front of the middle finger: twisting them in place (the old approach) passed one
 * through the other. Fitted on the sample VRM so they touch without overlapping.
 */
const FINGER_POSES = {
  R: {
    Index: [[0.071, -0.136, 0.034], [0, 0, -0.011], [0, 0, -0.008]],
    Middle: [[-0.306, 0.254, -0.225], [0, 0, 0.156], [0, 0, 0.109]],
  },
};


function curlJoints(curl, profile) {
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
    const joints = curlJoints(curls[finger], finger === "Index" ? profile : "full");
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
    arm(side, s, [0.75, 0.18, 0.12], [0.35, 0.9, 0.05], [0.1, 0.05, 0], [0.02, 0.04, 0.05]),
  "chest-front": (side, s) =>
    arm(side, s, [-0.85, 0.28, -0.22], [0.15, 1.05, 0.1], [0.15, 0.45, 0.05], [0.06, 0.12, 0.08]),
  belly: (side, s) =>
    arm(side, s, [-0.45, 0.22, -0.12], [0.35, 0.75, 0.08], [0.2, 0.25, 0.05], [0.04, 0.08, 0.04]),
  shoulder: (side, s) =>
    arm(side, s, [-0.7, -0.15, -0.55], [0.2, 1.6, 0.15], [0.1, 0.1, 0.1], [0.08, 0.05, 0.12]),
  neck: (side, s) =>
    arm(side, s, [-0.92, 0.08, -0.4], [0.12, 1.85, 0.12], [0.2, 0.05, 0.15], [0.08, 0.1, 0.08]),
  head: (side, s) =>
    arm(side, s, [-1.02, 0.08, -0.42], [0.12, 2.0, 0.1], [0.2, -0.05, 0.2], [0.1, 0.1, 0.08]),
  forehead: (side, s) =>
    arm(side, s, [-1.12, 0.05, -0.38], [0.08, 2.15, 0.08], [0.15, -0.1, 0.18], [0.12, 0.1, 0.08]),
  eye: (side, s) =>
    arm(side, s, [-1.05, 0.02, -0.48], [0.1, 2.12, 0.1], [0.22, -0.15, 0.22], [0.1, 0.1, 0.1]),
  nose: (side, s) =>
    arm(side, s, [-1.0, 0.0, -0.45], [0.12, 2.05, 0.12], [0.28, -0.08, 0.2], [0.1, 0.08, 0.1]),
  cheek: (side, s) =>
    arm(side, s, [-1.0, 0.05, -0.5], [0.1, 2.1, 0.1], [0.25, -0.2, 0.25], [0.1, 0.12, 0.1]),
  mouth: (side, s) =>
    arm(side, s, [-0.95, 0.06, -0.48], [0.14, 2.0, 0.12], [0.3, -0.12, 0.22], [0.1, 0.1, 0.1]),
  chin: (side, s) =>
    arm(side, s, [-0.88, 0.08, -0.45], [0.18, 1.9, 0.12], [0.32, -0.05, 0.18], [0.08, 0.1, 0.08]),
  ear: (side, s) =>
    arm(side, s, [-1.0, 0.18, -0.62], [0.05, 2.2, 0.05], [0.15, -0.25, 0.15], [0.12, 0.16, 0.12]),
  forearm: (side, s) =>
    arm(side, s, [-0.55, 0.35, -0.05], [0.25, 0.85, 0.12], [0.15, 0.35, 0.08], [0.04, 0.1, 0.06]),
  "weak-hand": (side, s) =>
    arm(side, s, [-0.7, 0.42, -0.08], [0.2, 0.95, 0.1], [0.12, 0.4, 0.06], [0.05, 0.14, 0.08]),
};

export const SOLVED_LOCATIONS = Object.freeze(Object.keys(LOCATION_POSES));

export function solveLocation(locationId, side = "right") {
  const fn = LOCATION_POSES[locationId];
  if (!fn) throw new Error(`unknown location: ${locationId}`);
  const s = side === "right" ? 1 : -1;
  return fn(side, s);
}

/**
 * Orientation at the fingerspelling station, as offsets from the station pose.
 * The generic offsets below left the palm facing the midline here, so V/W read
 * as 1 and B as a blade. These were fitted so the palm and fingers point where a
 * viewer straight on expects them (palm-out: palm to the viewer, fingers up;
 * palm-side: palm to the signer, fingers to the signer's left; palm-down: fingers
 * down and forward). Palm-down also opens the elbow a little, keeping the hand
 * at chest height, so P and Q do not bend the wrist past its range.
 */
const FS_ORIENTATION = {
  "palm-out": { Hand: [1.198, -0.306, -0.864] },
  "palm-side": { Hand: [-0.892, -0.762, 0.925] },
  "palm-down": { Hand: [-0.868, -1.229, -0.359], UpperArm: [0.233, 0.124, -0.077], LowerArm: [0, -0.332, 0] },
};

export function solveOrientation(orientation, side = "right", location = null) {
  const s = side === "right" ? 1 : -1;
  const station = location === "fs-station" ? FS_ORIENTATION[orientation] : null;
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
