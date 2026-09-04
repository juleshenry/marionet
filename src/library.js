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
    fingers: { index: 0.58, middle: 0.05, ring: 0.05, little: 0.05, spread: 0.25 },
    thumb: { curl: 0.4, opposition: 0.85, abduction: 0.25 },
  },
  G: {
    id: "G",
    fingers: { index: 0, middle: 1, ring: 1, little: 1, spread: 0 },
    thumb: { curl: 0.1, opposition: 0.15, abduction: 0.35 },
  },
  H: {
    id: "H",
    fingers: { index: 0, middle: 0, ring: 1, little: 1, spread: -0.15 },
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
    fingers: { index: 0.48, middle: 0.5, ring: 0.52, little: 0.55, spread: 0.05 },
    thumb: { curl: 0.45, opposition: 0.8, abduction: 0.3 },
  },
  R: {
    id: "R",
    fingers: { index: 0.08, middle: 0.08, ring: 1, little: 1, spread: -0.05 },
    thumb: { curl: 0.5, opposition: 0.4, abduction: 0.1 },
    cross: { indexTwist: 0.28, middleTwist: -0.35 },
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
    fingers: { index: 0, middle: 0, ring: 1, little: 1, spread: -0.2 },
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
  1: {
    id: "1",
    fingers: { index: 0, middle: 1, ring: 1, little: 1, spread: 0 },
    thumb: { curl: 0.45, opposition: 0.45, abduction: 0.1 },
  },
};

const euler = (x = 0, y = 0, z = 0) => ({ x, y, z });

function curlJoints(curl, profile) {
  if (profile === "hook") {
    return { proximal: curl * 0.35 * CURL_MAX, mid: curl * 1.15 * CURL_MAX, distal: curl * 0.95 * CURL_MAX };
  }
  return { proximal: curl * CURL_MAX, mid: curl * 1.05 * CURL_MAX, distal: curl * 0.88 * CURL_MAX };
}

/**
 * Simultaneous handshapes: most-extended finger wins, thumb abduction
 * wins over opposition. I+L+Y is I-LOVE-YOU; I+Y is horns.
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
    let spread = 0;
    if (finger === "Index") spread = -f.spread * SPREAD_MAX;
    if (finger === "Little") spread = f.spread * SPREAD_MAX * 0.85;
    if (finger === "Ring") spread = f.spread * SPREAD_MAX * 0.35;
    if (finger === "Middle") spread = 0;

    let twist = 0;
    if (shape.cross && finger === "Index") twist = shape.cross.indexTwist;
    if (shape.cross && finger === "Middle") twist = shape.cross.middleTwist;

    const bone = `${prefix}${finger}`;
    pose[`${bone}Proximal`] = euler(twist, spread * sign, joints.proximal);
    pose[`${bone}Intermediate`] = euler(0, 0, joints.mid);
    pose[`${bone}Distal`] = euler(0, 0, joints.distal);
  }

  const t = shape.thumb;
  pose[`${prefix}ThumbMetacarpal`] = euler(
    t.curl * THUMB_CURL_MAX * 0.35,
    t.opposition * THUMB_OPP_MAX * sign,
    t.abduction * THUMB_ABD_MAX * sign
  );
  pose[`${prefix}ThumbProximal`] = euler(t.curl * THUMB_CURL_MAX, t.opposition * 0.25 * sign, 0);
  pose[`${prefix}ThumbDistal`] = euler(t.curl * THUMB_CURL_MAX * 0.6, 0, 0);

  return pose;
}

/**
 * Locations are offsets from the arms-down rest pose, not from T-pose.
 * Rest already hangs the upper arms; fs-station lifts the dominant hand
 * to ipsilateral shoulder height.
 */
export function solveLocation(locationId, side = "right") {
  if (locationId === "rest") return {};
  const s = side === "right" ? 1 : -1;

  if (locationId === "fs-station" || locationId === "neutral-space-high") {
    return {
      [`${side}Shoulder`]: euler(0.06, 0.08 * s, 0.05 * s),
      [`${side}UpperArm`]: euler(-0.95, 0.12 * s, -0.35 * s),
      [`${side}LowerArm`]: euler(0.2, 1.45 * s, 0.05 * s),
      [`${side}Hand`]: euler(-0.15, 0.25 * s, 0.08 * s),
    };
  }

  if (locationId === "neutral-space") {
    return {
      [`${side}Shoulder`]: euler(0.02, 0.04 * s, 0.05 * s),
      [`${side}UpperArm`]: euler(0.75, 0.18 * s, 0.12 * s),
      [`${side}LowerArm`]: euler(0.35, 0.9 * s, 0.05 * s),
      [`${side}Hand`]: euler(0.1, 0.05 * s, 0),
    };
  }

  if (locationId === "chest-front") {
    // Hold out from the sternum so the hand reads in front of the torso, not buried in it.
    return {
      [`${side}Shoulder`]: euler(0.08, 0.14 * s, 0.1 * s),
      [`${side}UpperArm`]: euler(-0.72, 0.35 * s, -0.28 * s),
      [`${side}LowerArm`]: euler(0.05, 1.15 * s, 0.08 * s),
      [`${side}Hand`]: euler(0.2, 0.55 * s, 0.05 * s),
    };
  }

  // Citation-form cheek/nose: ipsilateral hand beside the face (near head height).
  if (locationId === "cheek") {
    return {
      [`${side}Shoulder`]: euler(0.1, 0.12 * s, 0.1 * s),
      [`${side}UpperArm`]: euler(-1.0, 0.05 * s, -0.5 * s),
      [`${side}LowerArm`]: euler(0.1, 2.1 * s, 0.1 * s),
      [`${side}Hand`]: euler(0.25, -0.2 * s, 0.25 * s),
    };
  }

  return {};
}

export function solveOrientation(orientation, side = "right") {
  const s = side === "right" ? 1 : -1;
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
