/** SignDesc + MarionetClip v0 — phonological IR and executable gesture code. */

export const SIGN_DESC_SCHEMA = "marionet.signdesc/v0";
export const CLIP_SCHEMA = "marionet.clip/v0";

export const LANGUAGES = Object.freeze({
  ase: "American Sign Language",
  gsm: "Guatemalan Sign Language (LENSEGUA)",
});

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
  "cheek",
]);

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
  if (desc.nmf != null && !isObj(desc.nmf)) errors.push("nmf must be an object");
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
  if (lib) return Boolean(lib.handshape && lib.location && LOCATIONS.includes(lib.location));
  const art = desc?.dominant;
  return Boolean(art?.handshape && art?.location && LOCATIONS.includes(art.location));
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
  return errors;
}

export function makeSignDesc(partial) {
  return {
    schema: SIGN_DESC_SCHEMA,
    handed: "1h",
    spoken: [],
    nmf: { eyebrows: "neutral", mouth: "neutral", eyegaze: "neutral" },
    ...partial,
  };
}
