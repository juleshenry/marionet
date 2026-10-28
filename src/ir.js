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
  ssp: "Spanish Sign Language (LSE)",
  bzs: "Brazilian Sign Language (Libras)",
  kvk: "Korean Sign Language",
  fcs: "Quebec Sign Language (LSQ)",
  ssr: "Swiss-French Sign Language (LSF-SR)",
  vgt: "Flemish Sign Language (VGT)",
  nsl: "Norwegian Sign Language",
  cse: "Czech Sign Language",
  sgg: "Swiss-German Sign Language (DSGS)",
  tse: "Tunisian Sign Language",
  ysl: "Yugoslavian Sign Language",
  sfb: "French Belgian Sign Language (LSFB)",
  csc: "Catalan Sign Language (LSC)",
  hds: "Honduras Sign Language (LESHO)",
  pys: "Paraguayan Sign Language",
  mdl: "Maltese Sign Language (LSM)",
  ils: "International Sign",
  pso: "Polish Sign Language (PJM)",
  aed: "Argentine Sign Language (LSA)",
  ncs: "Nicaraguan Sign Language (ISN)",
  rsl: "Russian Sign Language",
  csn: "Colombian Sign Language",
  ise: "Italian Sign Language (LIS)",
  sls: "Singapore Sign Language",
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
  "chest",
  "ear",
  "forearm",
  "weak-hand",
]);

/**
 * Movement items. linear, arc and circle without a direction, trace, hook, present and whisker
 * are the first vocabulary (ASL-LEX rows, the letters, ILY, GATO). The rest, and a direction or
 * contact on a path, are played as a sequence (compile.js sequenceKeyframes):
 *   linear/arc  a one-way path in a direction; contact "end" arrives at the location instead
 *   tap         touch the location, lift off and touch again (reps)
 *   move        go to another location ("to"), changing handshape or palm on the way
 *   change      change handshape or palm in place; reps go back and forth
 *   nod         bend the wrist toward the palm and back (reps)
 *   twist       turn the forearm; reps twist back and forth
 */
export const MOVEMENT_TYPES = Object.freeze([
  "linear", "arc", "circle", "trace", "hook", "present", "whisker",
  "tap", "move", "change", "nod", "twist",
]);
/** Path directions, from the signer: out (away from the body), contra (across the body), ipsi. */
export const DIRECTIONS = Object.freeze(["out", "in", "up", "down", "contra", "ipsi"]);
export const OPPOSITE = Object.freeze({ out: "in", in: "out", up: "down", down: "up", contra: "ipsi", ipsi: "contra" });

/**
 * Where on the hand a sign touches its location: at the face the index fingertip unless one is
 * named (MOTHER's thumb on the chin, GOOD's fingertips, MY's palm on the chest).
 */
export const SITES = Object.freeze(["index", "thumb", "fingertips", "palm", "back", "pinky-side"]);

/** "out", "out+down": one to three directions, none opposite another. */
export function isDirection(value) {
  if (typeof value !== "string") return false;
  const parts = value.split("+");
  if (parts.length > 3 || new Set(parts).size !== parts.length) return false;
  return parts.every((p) => DIRECTIONS.includes(p) && !parts.includes(OPPOSITE[p]));
}

/** The cosine between two directions such as "in+up" and "down": each part is a unit axis. */
function cosBetween(a, b) {
  const pa = a.split("+"), pb = b.split("+");
  const dot = pa.reduce((n, p) => n + (pb.includes(p) ? 1 : pb.includes(OPPOSITE[p]) ? -1 : 0), 0);
  return dot / Math.sqrt(pa.length * pb.length);
}

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

/** What a sign means, for a dictionary: parts of speech as glottosphere's entry pages name them. */
export const POS = Object.freeze([
  "noun",
  "verb",
  "adjective",
  "adverb",
  "pronoun",
  "interjection",
  "numeral",
  "determiner",
  "preposition",
  "conjunction",
  "proper noun",
  "phrase",
  "letter",
]);
export const REVIEW_STATUS = Object.freeze(["draft", "approved", "rejected"]);

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
  validateMeaning(desc, errors);
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

function validateMeaning(desc, errors) {
  if (desc.pos != null && !POS.includes(desc.pos)) errors.push(`pos unknown: ${desc.pos}`);
  if (desc.meanings != null) {
    if (!Array.isArray(desc.meanings)) errors.push("meanings must be an array");
    else {
      for (const m of desc.meanings) {
        const text = isObj(m) ? m.text : m;
        if (typeof text !== "string" || !text.trim()) errors.push("each meaning must be a string or {text, pos}");
        else if (isObj(m) && m.pos != null && !POS.includes(m.pos)) errors.push(`meanings pos unknown: ${m.pos}`);
      }
    }
  }
  if (desc.review != null) {
    if (!isObj(desc.review)) errors.push("review must be an object");
    else if (!REVIEW_STATUS.includes(desc.review.status)) {
      errors.push(`review.status must be one of ${REVIEW_STATUS.join(", ")}`);
    }
  }
  if (desc.todo != null && (!Array.isArray(desc.todo) || desc.todo.some((t) => typeof t !== "string"))) {
    errors.push("todo must be an array of strings");
  }
}

/** The English a sign means, as [{text, pos}]: its meanings, or else what it is spoken as. */
export function meaningsOf(desc) {
  const list = desc?.meanings ?? desc?.spoken ?? [];
  return list
    .map((m) => (isObj(m) ? { text: m.text, pos: m.pos ?? desc.pos } : { text: m, pos: desc.pos }))
    .filter((m) => typeof m.text === "string" && m.text.trim())
    .map((m) => (m.pos ? m : { text: m.text }));
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
  validateHold(art, label, errors);
  if (art.location != null && typeof art.location !== "string") {
    errors.push(`${label}.location must be a string`);
  }
  if (art.movement != null && !Array.isArray(art.movement)) {
    errors.push(`${label}.movement must be an array`);
  } else {
    for (const [i, m] of (art.movement ?? []).entries()) validateMovement(m, `${label}.movement[${i}]`, errors);
  }
}

/**
 * A hand can say which way its palm and fingers point (palm, fingers: one direction each, from
 * the signer) instead of a named orientation, which of its parts touches (site), and how far it
 * is held off its location (offset: centimetres per direction, {"out": 6}; TEACH in front of the
 * forehead, BOOK's palms together at the midline).
 */
function validateHold(h, label, errors) {
  if (h.offset != null) {
    const dirs = isObj(h.offset) ? Object.entries(h.offset) : [];
    if (!dirs.length || dirs.some(([d, cm]) => !DIRECTIONS.includes(d) || typeof cm !== "number" || cm <= 0 || cm > 30)) {
      errors.push(`${label}.offset must map directions to centimetres (0–30)`);
    }
    if (h.palm == null) errors.push(`${label}: an offset is fitted with palm and fingers`);
  }
  if (h.palm != null || h.fingers != null) {
    if (h.orientation != null) errors.push(`${label}: palm and fingers replace orientation, not both`);
    if (!isDirection(h.palm) || !isDirection(h.fingers)) errors.push(`${label}: palm and fingers each need a direction`);
    else if (Math.abs(cosBetween(h.palm, h.fingers)) > 0.5) errors.push(`${label}: palm and fingers must point at least 60° apart`);
  }
  if (h.site != null && !SITES.includes(h.site)) errors.push(`${label}.site unknown: ${h.site}`);
}

function validateMovement(m, label, errors) {
  if (!isObj(m)) return errors.push(`${label} must be an object`);
  if (!MOVEMENT_TYPES.includes(m.type)) errors.push(`${label}.type unknown: ${m.type}`);
  if (m.direction != null && !isDirection(m.direction)) errors.push(`${label}.direction unknown: ${m.direction}`);
  if (m.contact != null && !["start", "end"].includes(m.contact)) errors.push(`${label}.contact must be start or end`);
  if (m.reps != null && !(Number.isInteger(m.reps) && m.reps >= 1)) errors.push(`${label}.reps must be a whole number from 1`);
  if (m.orientation != null && !ORIENTATIONS.includes(m.orientation)) errors.push(`${label}.orientation unknown: ${m.orientation}`);
  validateHold(m, label, errors);
  if (m.handshape != null && !isHandshapeRef(m.handshape)) errors.push(`${label}.handshape must be a primitive id`);
  if (m.type === "move" && !LOCATIONS.includes(m.to)) errors.push(`${label}: move needs a location "to"`);
  if (m.type === "change" && m.handshape == null && m.orientation == null && m.palm == null && m.site == null) {
    errors.push(`${label}: change needs a handshape, orientation, palm or site`);
  }
  if ((m.type === "arc" || m.type === "linear") && m.contact === "end" && m.direction == null) {
    errors.push(`${label}: contact "end" needs a direction`);
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

/**
 * Ready for the dictionary: compiles, and if it carries a review, approved with nothing left
 * to do. Signs with no review record (the letters, ILY, GATO) were checked before reviews were.
 */
export function isPublishable(desc) {
  if (!isCompilable(desc)) return false;
  if (desc.todo?.length) return false;
  return desc.review == null || desc.review.status === "approved";
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
