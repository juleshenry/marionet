/** Compile a handful of lemmas; fail if the library invents a pose it cannot name. */
import { compileSignDesc } from "../src/compile.js";
import { isCompilable, validateClip, validateSignDesc } from "../src/ir.js";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const load = (p) => JSON.parse(readFileSync(join(root, p), "utf8"));

const ily = load("data/signs/ase/i-love-you.json");
const gato = load("data/signs/gsm/gato.json");
const fsPack = load("data/signs/ase/fingerspelling.json");
const asllex = load("data/signs/ase/asllex_signdesc.json");

function mustCompile(desc, label) {
  const verr = validateSignDesc(desc);
  if (verr.length) throw new Error(`${label} invalid: ${verr.join("; ")}`);
  if (!isCompilable(desc)) throw new Error(`${label} should be compile-ready`);
  const clip = compileSignDesc(desc);
  const cerr = validateClip(clip);
  if (cerr.length) throw new Error(`${label} clip: ${cerr.join("; ")}`);
  if (!clip.bones || !Object.keys(clip.bones).length) throw new Error(`${label} empty bones`);
  return clip;
}

mustCompile(ily, "ily");
mustCompile(gato, "gato");
mustCompile(fsPack.signs[0], "fs/A");

const horns = {
  schema: "marionet.signdesc/v0",
  id: "ase/test/horns",
  language: "ase",
  gloss: "HORNS",
  spoken: ["horns"],
  handed: "1h",
  dominant: { handshape: "horns", orientation: "palm-out", location: "head", movement: [{ type: "linear" }] },
};
mustCompile(horns, "horns");

const openB = {
  schema: "marionet.signdesc/v0",
  id: "ase/test/open_b",
  language: "ase",
  gloss: "OPEN-B",
  spoken: [],
  handed: "2h-symmetric",
  dominant: { handshape: "open_b", location: "chest-front", movement: [] },
};
mustCompile(openB, "open_b");

const yesNod = {
  schema: "marionet.signdesc/v0",
  id: "ase/test/yes-nod",
  language: "ase",
  gloss: "YES",
  spoken: ["yes"],
  handed: "1h",
  dominant: { handshape: "S", location: "neutral-space", movement: [{ type: "linear" }] },
  body: { head: "nod", torso: "neutral" },
};
const yesClip = mustCompile(yesNod, "yes-nod");
if (!yesClip.bones.head || !yesClip.bones.neck) {
  throw new Error("nod must compile head and neck tracks");
}
if (!yesClip.bones.rightIndexProximal) throw new Error("nod must still compile the hand");

const lean = {
  schema: "marionet.signdesc/v0",
  id: "ase/test/lean",
  language: "ase",
  gloss: "LEAN",
  spoken: [],
  handed: "1h",
  dominant: { handshape: "5", location: "chest-front", movement: [] },
  body: { head: "neutral", torso: "lean-left" },
};
const leanClip = mustCompile(lean, "lean");
if (!leanClip.bones.spine || !leanClip.bones.chest) {
  throw new Error("torso lean must compile spine and chest");
}

const brow = {
  schema: "marionet.signdesc/v0",
  id: "ase/test/brow",
  language: "ase",
  gloss: "SURPRISE",
  spoken: [],
  handed: "1h",
  dominant: { handshape: "5", location: "neutral-space", movement: [] },
  body: { head: "neutral", torso: "neutral" },
  nmf: { eyebrows: "raised", mouth: "open", eyegaze: "neutral" },
};
const browClip = mustCompile(brow, "brow");
if (!browClip.expressions?.surprised || !browClip.expressions?.aa) {
  throw new Error("face nmf must compile VRM expression tracks");
}

const blocked = {
  schema: "marionet.signdesc/v0",
  id: "ase/test/unmapped",
  language: "ase",
  gloss: "UNMAPPED",
  spoken: [],
  handed: "1h",
  dominant: { handshape: "goody_goody", location: "neutral-space", movement: [] },
  compileReady: false,
};
if (isCompilable(blocked)) throw new Error("lexicon-only row must not compile");
let threw = false;
try {
  compileSignDesc(blocked);
} catch {
  threw = true;
}
if (!threw) throw new Error("compiler must refuse lexicon-only rows");

const ready = asllex.signs.filter((s) => s.compileReady).length;
if (ready < 1500) throw new Error(`expected compileReady well past 462, got ${ready}/${asllex.n}`);

console.log(`check_compiler ok  asllex compileReady=${ready}/${asllex.n}`);
