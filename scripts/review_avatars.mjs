/**
 * Contact sheets for checking avatars: each avatar holding every sign's final pose, so a bad
 * finger rig or a wrong rest pose shows at a glance. One sheet per avatar.
 *
 * Usage: node scripts/review_avatars.mjs [--avatars a.vrm,b.vrm] [--ids ase/fs/A,...] [--out dir]
 *   python3 -m http.server 8765 &        (serves render.html, clips/ and avatars/out/)
 *   defaults: every avatars/out/*.vrm, the ASL clips of clips/index.json, data/runs/avatar-review
 */
import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { mkdir, mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const arg = (name) => {
  const i = process.argv.indexOf(`--${name}`);
  return i > 0 ? process.argv[i + 1] : null;
};
const baseUrl = arg("base") || "http://127.0.0.1:8765";
const outDir = path.resolve(root, arg("out") || "data/runs/avatar-review");

function run(cmd, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, { stdio: ["ignore", "ignore", "pipe"] });
    let err = "";
    child.stderr.on("data", (d) => (err += d));
    child.on("close", (code) => (code === 0 ? resolve() : reject(new Error(`${cmd} failed (${code}): ${err.slice(-400)}`))));
  });
}

const avatars = arg("avatars")
  ? arg("avatars").split(",")
  : (await readdir(path.join(root, "avatars/out"))).filter((f) => f.endsWith(".vrm")).map((f) => `avatars/out/${f}`);
const { clips } = JSON.parse(await readFile(path.join(root, "clips/index.json"), "utf8"));
const ids = arg("ids") ? new Set(arg("ids").split(",")) : null;
const todo = clips.filter((c) => (ids ? ids.has(c.id) : c.language === "ase"));

await mkdir(outDir, { recursive: true });
const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage({ viewport: { width: 300, height: 300 } });
page.on("pageerror", (e) => console.error("page:", e.message));
await page.goto(`${baseUrl}/render.html?w=240&h=240&scale=1`, { waitUntil: "load" });
await page.waitForFunction(() => window.marionetRender?.ready);

for (const avatar of avatars) {
  const name = path.basename(avatar, ".vrm");
  await page.evaluate((url) => window.marionetRender.loadAvatar(url), `/${avatar}`);
  const frameDir = await mkdtemp(path.join(tmpdir(), `marionet-review-${name}-`));
  try {
    let i = 0;
    for (const entry of todo) {
      const clip = JSON.parse(await readFile(path.join(root, "clips", entry.path), "utf8"));
      const png = await page.evaluate(
        ({ clip }) => {
          window.marionetRender.setClip(clip);
          return window.marionetRender.frame(clip.duration);
        },
        { clip }
      );
      await writeFile(path.join(frameDir, `f-${String(i++).padStart(3, "0")}.png`), Buffer.from(png.split(",")[1], "base64"));
    }
    const cols = 7;
    const rows = Math.ceil(i / cols);
    const sheet = path.join(outDir, `${name}.png`);
    await run("ffmpeg", ["-y", "-v", "error", "-framerate", "1", "-i", path.join(frameDir, "f-%03d.png"),
      "-vf", `tile=${cols}x${rows}:padding=4:color=white`, "-frames:v", "1", sheet]);
    console.log(`${name}: ${i} signs → ${path.relative(root, sheet)}`);
  } finally {
    await rm(frameDir, { recursive: true, force: true });
  }
}
await browser.close();
