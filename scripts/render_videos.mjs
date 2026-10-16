/**
 * Render baked clips into the dictionary's videos: each sign performed by the signer
 * src/assign.js deals it, as one seamless loop (rise from rest, sign, hold, back to rest),
 * drawn at twice the size and scaled down so edges stay smooth.
 *
 * Usage:
 *   python3 -m http.server 8765 &
 *   node scripts/bake_clips.mjs
 *   node scripts/render_videos.mjs [--ids ase/fs/A,ase/ily] [--language ase] [--out dist/signs] [--force] [--reassign]
 *
 * Writes {out}/{language}/{slug}.mp4 (H.264, faststart), {slug}.jpg (the held pose, the poster),
 * {slug}.clip.json (for the live player) and manifest.json (marionet.signmedia/v0). A sign whose
 * clip, signer and renderer (render.html and every module it loads) are unchanged since the last
 * run is not drawn again. A sign keeps the signer the last manifest gave it; --reassign deals the
 * signs asked for afresh.
 */
import { chromium } from "playwright";
import { execFileSync, spawn } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { assignAvatars, avatarWeights } from "../src/assign.js";
import { packSigns } from "../src/lexicon.js";
import { cycleLength } from "../src/loop.js";
import { pageModules } from "./page_modules.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const arg = (name) => {
  const i = process.argv.indexOf(`--${name}`);
  return i > 0 ? process.argv[i + 1] : null;
};
const baseUrl = arg("base") || "http://127.0.0.1:8765";
const language = arg("language") || "ase";
const outDir = path.resolve(root, arg("out") || "dist/signs", language);
const force = process.argv.includes("--force");
const reassign = process.argv.includes("--reassign");
const only = arg("ids") ? new Set(arg("ids").split(",")) : null;

// colour: frames are converted with the BT.709 matrix and tagged as sRGB. An untagged video is
// shown darker by Apple's players than by others, and its paper background no longer matches
// the page around it.
const SETTINGS = { size: 540, scale: 2, fps: 30, background: "f4ecd8", crf: 23, colour: "bt709/srgb" };
const COLOUR_TAGS = { color_primaries: "bt709", color_transfer: "iec61966-2-1", color_space: "bt709" };

/** Stop if ffmpeg wrote the video without its colour tags (it once ignored the flags). */
function checkColour(file) {
  const out = execFileSync("ffprobe", ["-v", "error", "-select_streams", "v:0", "-show_entries",
    `stream=${Object.keys(COLOUR_TAGS).join(",")}`, "-of", "json", file]).toString();
  const stream = JSON.parse(out).streams?.[0] ?? {};
  const wrong = Object.entries(COLOUR_TAGS).filter(([key, value]) => stream[key] !== value);
  if (wrong.length) throw new Error(`${file}: colour tags ${JSON.stringify(stream)}, expected ${JSON.stringify(COLOUR_TAGS)}`);
}

const readJson = async (p) => JSON.parse(await readFile(path.join(root, p), "utf8"));
const sha1 = (...parts) => {
  const hash = createHash("sha1");
  for (const part of parts) hash.update(part);
  return hash.digest("hex");
};

/** ase/fs/A → fs-a, ase/asllex/cat-2 → asllex-cat-2 */
export function slugOf(id) {
  return id.split("/").slice(1).join("-").toLowerCase().replace(/[^a-z0-9-]+/g, "-");
}

function ffmpeg(args) {
  const child = spawn("ffmpeg", ["-y", "-v", "error", ...args], { stdio: ["pipe", "ignore", "pipe"] });
  let err = "";
  child.stderr.on("data", (d) => (err += d));
  const done = new Promise((resolve, reject) =>
    child.on("close", (code) => (code === 0 ? resolve() : reject(new Error(`ffmpeg failed (${code}): ${err.slice(-400)}`))))
  );
  const write = (buffer) =>
    new Promise((resolve, reject) => (child.stdin.write(buffer, (e) => (e ? reject(e) : resolve())))); // honours back-pressure
  return { write, end: () => (child.stdin.end(), done) };
}

// What each sign says and where it came from: the SignDesc packs, deferred ones included.
const descs = new Map();
for (const pack of (await readJson("data/signs/index.json")).packs) {
  for (const desc of packSigns(await readJson(pack.path))) descs.set(desc.id, desc);
}

const roster = await readJson("avatars/roster.json");
const weights = await readJson("avatars/weights.json");
const avatarHash = new Map();
for (const a of roster.avatars) {
  const file = path.join(root, "avatars/out", `${a.id}.vrm`);
  if (!existsSync(file)) throw new Error(`${a.id}.vrm is missing: run blender -b --python avatars/build_avatars.py`);
  avatarHash.set(a.id, sha1(await readFile(file)));
}
// Everything that draws a frame: the page and every module it loads (the player, the retargeting
// in body.js and hands.js, three and three-vrm), so a change to any of them redraws the videos.
const rendererFiles = ["render.html", ...pageModules(root, "render.html")];
const rendererHash = sha1(...(await Promise.all(rendererFiles.map((p) => readFile(path.join(root, p))))), JSON.stringify(SETTINGS));

const { clips } = await readJson("clips/index.json");
const todo = clips.filter((c) => c.language === language && (!only || only.has(c.id)));
if (only && todo.length !== only.size) {
  const missing = [...only].filter((id) => !todo.some((c) => c.id === id));
  throw new Error(`not in clips/index.json for ${language}: ${missing.join(", ")} (run node scripts/bake_clips.mjs)`);
}

await mkdir(outDir, { recursive: true });
const manifestPath = path.join(outDir, "manifest.json");
const previous = existsSync(manifestPath) ? JSON.parse(await readFile(manifestPath, "utf8")) : { signs: [] };
const before = new Map(previous.signs.map((s) => [s.id, s]));
const asked = new Set(todo.map((c) => c.id));
const kept = new Map(previous.signs.filter((s) => !(reassign && asked.has(s.id))).map((s) => [s.id, s.avatar]));
const signers = assignAvatars([...asked], roster, weights, kept);

const jobs = [];
for (const entry of todo) {
  const clip = await readJson(path.join("clips", entry.path));
  const desc = descs.get(entry.id);
  const avatar = signers.get(entry.id);
  const slug = slugOf(entry.id);
  const hash = sha1(JSON.stringify(clip), avatarHash.get(avatar), rendererHash);
  const fresh =
    !force && before.get(entry.id)?.hash === hash && existsSync(path.join(outDir, `${slug}.mp4`)) && existsSync(path.join(outDir, `${slug}.jpg`));
  jobs.push({ entry, clip, desc, avatar, slug, hash, fresh });
}

const browser = await chromium.launch({ channel: "chrome", headless: true });
const { size, scale, fps, background, crf } = SETTINGS;
const page = await browser.newPage({ viewport: { width: size + 20, height: size + 20 }, deviceScaleFactor: 1 });
page.on("pageerror", (e) => console.error("page:", e.message));
await page.goto(`${baseUrl}/render.html?w=${size}&h=${size}&scale=${scale}&bg=${background}`, { waitUntil: "load" });
await page.waitForFunction(() => window.marionetRender?.ready);

const signs = [];
let drawn = 0;
try {
  // One signer at a time, so each avatar loads once.
  const order = [...jobs].sort((a, b) => a.avatar.localeCompare(b.avatar) || a.entry.id.localeCompare(b.entry.id));
  let loaded = null;
  for (const job of order) {
    const { entry, clip, desc, avatar, slug, hash } = job;
    const cycle = cycleLength(clip);
    if (!job.fresh) {
      if (loaded !== avatar) {
        await page.evaluate((url) => window.marionetRender.loadAvatar(url), `/avatars/out/${avatar}.vrm`);
        loaded = avatar;
      }
      await page.evaluate((clip) => window.marionetRender.setClip(clip), clip);
      const frames = Math.round(cycle * fps);
      const holdFrame = Math.min(Math.round(clip.duration * fps), frames - 1);
      // Let look-at and any spring bones settle on the first pose before recording.
      for (let i = 0; i < 10; i++) await page.evaluate((d) => window.marionetRender.frame(0, d), 1 / fps);

      const video = ffmpeg([
        "-f", "image2pipe", "-framerate", String(fps), "-c:v", "png", "-i", "-",
        "-vf", `scale=${size}:${size}:flags=lanczos:out_color_matrix=bt709:out_range=tv,format=yuv420p,`
          + "setparams=color_primaries=bt709:color_trc=iec61966-2-1:colorspace=bt709:range=tv",
        "-c:v", "libx264", "-profile:v", "high", "-preset", "slow", "-crf", String(crf),
        "-movflags", "+faststart", "-an", path.join(outDir, `${slug}.mp4`),
      ]);
      let poster = null;
      for (let f = 0; f < frames; f++) {
        const url = await page.evaluate(({ t, d }) => window.marionetRender.frame(t, d), { t: f / fps, d: 1 / fps });
        const png = Buffer.from(url.slice(url.indexOf(",") + 1), "base64");
        if (f === holdFrame) poster = png;
        await video.write(png);
      }
      await video.end();
      checkColour(path.join(outDir, `${slug}.mp4`));
      const still = ffmpeg(["-f", "image2pipe", "-c:v", "png", "-i", "-", "-vf", `scale=${size}:${size}:flags=lanczos`, "-q:v", "3", path.join(outDir, `${slug}.jpg`)]);
      await still.write(poster);
      await still.end();
      drawn++;
      process.stdout.write(`  ${entry.id} → ${slug}.mp4 (${avatar}, ${frames} frames)\n`);
    }
    await writeFile(path.join(outDir, `${slug}.clip.json`), JSON.stringify(clip) + "\n");
    signs.push({
      id: entry.id,
      gloss: entry.gloss,
      spoken: desc?.spoken ?? [],
      slug,
      avatar,
      duration: Math.round(cycle * 1000) / 1000,
      source: desc?.source?.dataset || "authored",
      hash,
    });
  }
} finally {
  await browser.close();
}

// Signs drawn before and not asked for this time stay listed.
for (const [id, sign] of before) if (!signs.some((s) => s.id === id)) signs.push(sign);
signs.sort((a, b) => a.id.localeCompare(b.id));

const manifest = {
  schema: "marionet.signmedia/v0",
  language,
  fps,
  size: [size, size],
  background: `#${background}`,
  avatars: roster.avatars.map(({ id, label, gender, population }) => ({ id, label, gender, population })),
  signs,
};
await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + "\n");

// How the signers came out against the weights they were drawn by.
const target = new Map(avatarWeights(roster, weights).map(({ id, weight }) => [id, weight]));
const byPopulation = new Map();
for (const a of roster.avatars) {
  const row = byPopulation.get(a.population) || { target: 0, actual: 0 };
  row.target += target.get(a.id);
  row.actual += signs.filter((s) => s.avatar === a.id).length / signs.length;
  byPopulation.set(a.population, row);
}
console.log(`\n${drawn} drawn, ${signs.length - drawn} unchanged → ${path.relative(root, outDir)}/`);
console.log("signers  population        target  actual");
for (const [population, { target: t, actual }] of byPopulation) {
  console.log(`         ${population.padEnd(16)}  ${(t * 100).toFixed(0).padStart(4)}%  ${(actual * 100).toFixed(0).padStart(5)}%`);
}
const women = signs.filter((s) => roster.avatars.find((a) => a.id === s.avatar)?.gender === "woman").length;
console.log(`         women ${((women / signs.length) * 100).toFixed(0)}%, men ${(((signs.length - women) / signs.length) * 100).toFixed(0)}%`);
console.log(`         ${new Set(signs.map((s) => s.avatar)).size} of ${roster.avatars.length} signers sign`);
