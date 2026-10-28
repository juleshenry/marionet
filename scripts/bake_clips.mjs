/**
 * Bake every SignDesc in the non-deferred packs that is ready for the dictionary (isPublishable:
 * compiles, and approved if it carries a review) to MarionetClip JSON.
 * No video: the clip is the compiler's output, written once so players need no compiler.
 * A sign listed by two packs is baked from the first: reviewed rows come before the lexicon's.
 *
 * Usage: node scripts/bake_clips.mjs           write clips/ + clips/index.json
 *        node scripts/bake_clips.mjs --check   fail if clips/ is stale
 *        node scripts/bake_clips.mjs --ids ase/asllex/tree,ase/asllex/cat --out data/runs/preview
 *          bake chosen signs from any pack (deferred ones too, drafts too) to review them
 * A pack with "clips": "<dir>" (signs converted by the thousand, data/clips/ being out of git) is
 * baked into that folder with its own index.json, and --check leaves it alone.
 */
import { compileSignDesc } from "../src/compile.js";
import { isCompilable, isPublishable, validateClip } from "../src/ir.js";
import { packSigns } from "../src/lexicon.js";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const arg = (name) => {
  const i = process.argv.indexOf(`--${name}`);
  return i > 0 ? process.argv[i + 1] : null;
};
const ids = arg("ids") ? new Set(arg("ids").split(",")) : null;
const outDir = arg("out") ? join(root, arg("out")) : join(root, "clips");
const check = process.argv.includes("--check");
const load = (p) => JSON.parse(readFileSync(join(root, p), "utf8"));

const round = (v) => Math.round(v * 1e4) / 1e4;

function roundClip(clip) {
  const bones = {};
  for (const [bone, keys] of Object.entries(clip.bones)) {
    bones[bone] = keys.map(([t, e]) => [round(t), e.map(round)]);
  }
  const expressions = {};
  for (const [name, keys] of Object.entries(clip.expressions || {})) {
    expressions[name] = keys.map(([t, v]) => [round(t), round(v)]);
  }
  return { ...clip, duration: round(clip.duration), bones, expressions };
}

const index = [];
const stale = [];
const seen = new Set();
const ownIndex = new Map(); // a pack's own clips folder → its index
for (const pack of load("data/signs/index.json").packs) {
  if (pack.defer && !ids) continue;
  const own = pack.clips && !arg("out") ? join(root, pack.clips) : null;
  if (own && check) continue;
  const into = own ?? outDir;
  const list = own ? (ownIndex.get(own) ?? ownIndex.set(own, []).get(own)) : index;
  for (const desc of packSigns(load(pack.path))) {
    if (seen.has(desc.id)) continue;
    seen.add(desc.id);
    if (!isCompilable(desc) || (ids && !ids.has(desc.id))) continue;
    if (!ids && !isPublishable(desc)) continue;
    const clip = roundClip(compileSignDesc(desc));
    const errors = validateClip(clip);
    if (errors.length) throw new Error(`${desc.id}: ${errors.join("; ")}`);
    const rel = `${desc.id}.json`;
    const text = JSON.stringify(clip) + "\n";
    const file = join(into, rel);
    if (check) {
      let prev = null;
      try {
        prev = readFileSync(file, "utf8");
      } catch {
        /* missing */
      }
      if (prev !== text) stale.push(rel);
    } else {
      mkdirSync(dirname(file), { recursive: true });
      writeFileSync(file, text);
    }
    list.push({ id: desc.id, language: desc.language, gloss: desc.gloss, duration: clip.duration, path: rel });
  }
}

const indexText = JSON.stringify({ schema: "marionet.clipindex/v0", clips: index }, null, 2) + "\n";
if (check) {
  let prev = null;
  try {
    prev = readFileSync(join(outDir, "index.json"), "utf8");
  } catch {
    /* missing */
  }
  if (prev !== indexText) stale.push("index.json");
  if (stale.length) {
    console.error(`clips/ is stale (${stale.join(", ")}); run node scripts/bake_clips.mjs`);
    process.exit(1);
  }
  console.log(`bake_clips ok  ${index.length} clips current`);
} else {
  writeFileSync(join(outDir, "index.json"), indexText);
  console.log(`baked ${index.length} clips → ${outDir.slice(root.length + 1)}/`);
  for (const [dir, list] of ownIndex) {
    writeFileSync(join(dir, "index.json"), JSON.stringify({ schema: "marionet.clipindex/v0", clips: list }) + "\n");
    console.log(`baked ${list.length} clips → ${dir.slice(root.length + 1)}/`);
  }
}
