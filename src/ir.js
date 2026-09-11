/** SignDesc + MarionetClip v0 — phonological IR and executable gesture code.

JSON Schema (shared with Python fixtures / Ajv): schemas/*.v0.schema.json
These functions stay the browser validator so the player has no Ajv dependency.
*/

export const SIGN_DESC_SCHEMA = "marionet.signdesc/v0";
export const CLIP_SCHEMA = "marionet.clip/v0";

export const LANGUAGES = Object.freeze({
  ase: "American Sign Language",
  gsm: "Guatemalan Sign Language (LENSEGUA)",
  eso: "Estonian Sign Language (EVK)",
  dse: "Sign Language of the Netherlands (NGT)",
  mfs: "Mexican Sign Language (LSM)",
  tsc: "Thai Sign Language",
  bfi: "British Sign Language",
  gsg: "German Sign Language (DGS)",
  fsl: "French Sign Language",
  ins: "Indian Sign Language",
  jsl: "Japanese Sign Language",
});

export function languageName(code) {
  if (!code) return "unknown";
  return LANGUAGES[code] || code;
}

export const HANDED = Object.freeze(["1h", "2h-symmetric", "2h-asymmetric", "2h-alternating"]);

export const ORIENTATIONS = Object.freeze([
  "palm-out",
  "palm-in",
  "palm-down",
  "palm-up",
  "palm-side",
]);

export const LOCATIONS = Object.freeze([
  "rest",
  "fs-station",
  "neutral-space",
  "neutral-space-high",
  "chest-front",
  "belly",
  "shoulder",
  "neck",
  "head",
  "forehead",
  "eye",
  "nose",
  "cheek",
  "mouth",
  "chin",
  "ear",
  "forearm",
  "weak-hand",
]);

export const POSE_SCHEMA = "marionet.pose/v0";
export const CLIP_SOURCES = Object.freeze(["authored", "retargeted", "compiled+residual"]);
export const INVENTORY = "marionet.phonology/v0";
export const UNMAPPED = "unmapped";
export const OCCLUDED = "occluded";

export const NMF_EYEBROWS = Object.freeze(["neutral", "raised", "furrowed"]);
export const NMF_MOUTH = Object.freeze(["neutral", "open", "spread", "pursed"]);
export const NMF_EYEGAZE = Object.freeze(["neutral", "left", "right", "up", "down", "hand"]);
export const NMF_HEAD = Object.freeze([
  "neutral",
  "tilt-left",
  "tilt-right",
  "turn-left",
  "turn-right",
  "nod",
  "shake",
]);
export const TORSO = Object.freeze(["neutral", "lean-left", "lean-right", "forward"]);

/** Solver catalogs. Lexicon rows may use unmapped ASL-LEX codes; only these compile. */

const isObj = (v) => v !== null && typeof v === "object" && !Array.isArray(v);

export function validateSignDesc(desc) {
  const errors = [];
  if (!isObj(desc)) return ["SignDesc must be an object"];
  if (desc.schema !== SIGN_DESC_SCHEMA) errors.push(`schema must be ${SIGN_DESC_SCHEMA}`);
  if (typeof desc.id !== "string" || !desc.id) errors.push("id required");
  if (typeof desc.language !== "string" || !desc.language) errors.push("language required");
  if (typeof desc.gloss !== "string" || !desc.gloss) errors.push("gloss required");
  if (!Array.isArray(desc.spoken)) errors.push("spoken must be an array of strings");
  if (!HANDED.includes(desc.handed)) errors.push(`handed must be one of ${HANDED.join(", ")}`);
  if (!isObj(desc.dominant)) errors.push("dominant articulator required");
  else validateArticulator(desc.dominant, "dominant", errors);
  if (desc.nondominant != null) {
    if (!isObj(desc.nondominant)) errors.push("nondominant must be an object");
    else validateArticulator(desc.nondominant, "nondominant", errors);
  }
  if (desc.nmf != null) {
    if (!isObj(desc.nmf)) errors.push("nmf must be an object");
    else {
      if (desc.nmf.eyebrows != null && !NMF_EYEBROWS.includes(desc.nmf.eyebrows)) {
        errors.push(`nmf.eyebrows unknown: ${desc.nmf.eyebrows}`);
      }
      if (desc.nmf.mouth != null && !NMF_MOUTH.includes(desc.nmf.mouth)) {
        errors.push(`nmf.mouth unknown: ${desc.nmf.mouth}`);
      }
      if (desc.nmf.eyegaze != null && !NMF_EYEGAZE.includes(desc.nmf.eyegaze)) {
        errors.push(`nmf.eyegaze unknown: ${desc.nmf.eyegaze}`);
      }
      if (desc.nmf.head != null && !NMF_HEAD.includes(desc.nmf.head)) {
        errors.push(`nmf.head unknown: ${desc.nmf.head}`);
      }
      if (desc.nmf.torso != null && !TORSO.includes(desc.nmf.torso)) {
        errors.push(`nmf.torso unknown: ${desc.nmf.torso}`);
      }
    }
  }
  if (desc.body != null) {
    if (!isObj(desc.body)) errors.push("body must be an object");
    else {
      if (desc.body.head != null && !NMF_HEAD.includes(desc.body.head)) {
        errors.push(`body.head unknown: ${desc.body.head}`);
      }
      if (desc.body.torso != null && !TORSO.includes(desc.body.torso)) {
        errors.push(`body.torso unknown: ${desc.body.torso}`);
      }
    }
  }
  return errors;
}

function isHandshapeRef(v) {
  if (typeof v === "string" && v) return true;
  return Array.isArray(v) && v.length > 0 && v.every((id) => typeof id === "string" && id);
}

function validateArticulator(art, label, errors) {
  if (!isHandshapeRef(art.handshape)) {
    errors.push(`${label}.handshape must be a primitive id or a list of simultaneous primitives`);
  }
  if (art.orientation && !ORIENTATIONS.includes(art.orientation)) {
    errors.push(`${label}.orientation unknown: ${art.orientation}`);
  }
  if (art.location != null && typeof art.location !== "string") {
    errors.push(`${label}.location must be a string`);
  }
  if (art.movement != null && !Array.isArray(art.movement)) {
    errors.push(`${label}.movement must be an array`);
  }
}

export function isCompilable(desc) {
  if (typeof desc?.compileReady === "boolean") return desc.compileReady;
  const lib = desc?.library;
  if (lib) {
    const hs = lib.handshape;
    const loc = lib.location;
    if (!hs || !loc || loc === UNMAPPED || loc === OCCLUDED) return false;
    if (hs === UNMAPPED || hs === OCCLUDED) return false;
    return LOCATIONS.includes(loc);
  }
  const art = desc?.dominant;
  const loc = art?.location;
  const hs = art?.handshape;
  if (!hs || !loc || loc === UNMAPPED || loc === OCCLUDED) return false;
  if (hs === UNMAPPED || hs === OCCLUDED) return false;
  return LOCATIONS.includes(loc);
}

export function validateClip(clip) {
  const errors = [];
  if (!isObj(clip)) return ["MarionetClip must be an object"];
  if (clip.schema !== CLIP_SCHEMA) errors.push(`schema must be ${CLIP_SCHEMA}`);
  if (typeof clip.duration !== "number" || clip.duration < 0) errors.push("duration must be >= 0");
  if (!isObj(clip.bones)) errors.push("bones must be an object of tracks");
  else {
    for (const [bone, track] of Object.entries(clip.bones)) {
      if (!Array.isArray(track) || track.some((k) => !Array.isArray(k) || k.length !== 2)) {
        errors.push(`bones.${bone} must be [[t, [x,y,z]], ...]`);
      }
    }
  }
  if (clip.source != null && !CLIP_SOURCES.includes(clip.source)) {
    errors.push(`source must be one of ${CLIP_SOURCES.join(", ")}`);
  }
  if (clip.expressions != null && !isObj(clip.expressions)) {
    errors.push("expressions must be an object of tracks");
  }
  return errors;
}

function isKeypoint(v) {
  return Array.isArray(v) && v.length >= 3 && v.every((n) => typeof n === "number");
}

export function validatePose(pose) {
  const errors = [];
  if (!isObj(pose)) return ["pose must be an object"];
  if (pose.schema !== POSE_SCHEMA) errors.push(`schema must be ${POSE_SCHEMA}`);
  if (typeof pose.fps !== "number" || pose.fps <= 0) errors.push("fps must be > 0");
  if (!Number.isInteger(pose.n_frames) || pose.n_frames < 0) errors.push("n_frames must be >= 0");
  if (pose.status != null && typeof pose.status !== "string") errors.push("status must be a string");
  for (const hand of ["left", "right"]) {
    if (pose[hand] == null) continue;
    if (!Array.isArray(pose[hand])) {
      errors.push(`${hand} must be an array of frames`);
      continue;
    }
    for (let i = 0; i < pose[hand].length; i++) {
      const frame = pose[hand][i];
      if (!isObj(frame)) {
        errors.push(`${hand}[${i}] must be an object`);
        continue;
      }
      if (frame.xyz != null) {
        if (!Array.isArray(frame.xyz) || frame.xyz.length !== 21 || frame.xyz.some((p) => !isKeypoint(p))) {
          errors.push(`${hand}[${i}].xyz must be 21 × [x,y,z]`);
        }
      }
      if (frame.conf != null && (typeof frame.conf !== "number" || frame.conf < 0 || frame.conf > 1)) {
        errors.push(`${hand}[${i}].conf must be in [0,1]`);
      }
    }
  }
  if (pose.face != null && !Array.isArray(pose.face)) errors.push("face must be an array");
  if (pose.canonical != null) {
    if (!isObj(pose.canonical)) errors.push("canonical must be an object");
    else {
      if (pose.canonical.start != null && !Number.isInteger(pose.canonical.start)) {
        errors.push("canonical.start must be an integer");
      }
      if (pose.canonical.end != null && !Number.isInteger(pose.canonical.end)) {
        errors.push("canonical.end must be an integer");
      }
    }
  }
  return errors;
}

export function makeSignDesc(partial) {
  return {
    schema: SIGN_DESC_SCHEMA,
    handed: "1h",
    spoken: [],
    nmf: { eyebrows: "neutral", mouth: "neutral", eyegaze: "neutral", head: "neutral" },
    body: { head: "neutral", torso: "neutral" },
    ...partial,
  };
}
