/**
 * Contact sheets for reviewing many baked clips at once: one row per sign, on the sample VRM.
 * Each row: the held start, the middle and the end from the front, the end from the signer's
 * right at 50° (shows out/in), and a close-up of the hand at the start. The index fingertip's
 * path is drawn on the front frames. Six signs to a sheet.
 *
 * Usage: python3 -m http.server 8765 &
 *   node scripts/review_sheet.mjs <outDir> <id> [id ...]      writes <outDir>/sheet-01.png, …
 *   MARIONET_CLIPS=data/runs/preview reviews a bake_clips --out folder instead of clips/
 */
import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const baseUrl = process.env.MARIONET_URL || "http://127.0.0.1:8765";
const [outArg, ...ids] = process.argv.slice(2);
if (!outArg || !ids.length) throw new Error("usage: review_sheet.mjs <outDir> <id> [id ...]");
const outDir = path.resolve(root, outArg);
const clipsDir = path.resolve(root, process.env.MARIONET_CLIPS || "clips");
const PER_SHEET = Number(process.env.PER_SHEET || 6);
const RISE = 0.4;
const TILE = 200;

const SHEET_PY = String.raw`
import json, sys
from PIL import Image, ImageDraw, ImageFont
spec = json.loads(sys.argv[1])
T = spec["tile"]
rows = spec["rows"]
font = ImageFont.load_default()
LABEL = 16
sheet = Image.new("RGB", (T * 5, len(rows) * (T + LABEL)), (20, 20, 28))
d = ImageDraw.Draw(sheet)
for r, row in enumerate(rows):
    y = r * (T + LABEL)
    d.text((4, y + 2), row["label"], fill=(240, 240, 240), font=font)
    for c, f in enumerate(row["frames"]):
        im = Image.open(f["png"]).convert("RGB")
        w, h = im.size
        s = min(w, h)
        im = im.crop(((w - s) // 2, (h - s) // 2, (w - s) // 2 + s, (h - s) // 2 + s)).resize((T, T), Image.LANCZOS)
        if f.get("trail"):
            dd = ImageDraw.Draw(im)
            pts = [(((x * w) - (w - s) / 2) / s * T, ((yy * h) - (h - s) / 2) / s * T) for x, yy in f["trail"]]
            if len(pts) > 1:
                dd.line(pts, fill=(255, 40, 120), width=2)
                dd.ellipse([pts[-1][0] - 3, pts[-1][1] - 3, pts[-1][0] + 3, pts[-1][1] + 3], fill=(255, 40, 120))
        sheet.paste(im, (c * T, y + LABEL))
sheet.save(spec["out"])
`;

function run(cmd, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, { stdio: ["ignore", "ignore", "pipe"] });
    let err = "";
    child.stderr.on("data", (d) => (err += d));
    child.on("close", (code) => (code === 0 ? resolve() : reject(new Error(`${cmd} failed (${code}): ${err}`))));
  });
}

const index = JSON.parse(await readFile(path.join(clipsDir, "index.json"), "utf8"));
const byId = new Map(index.clips.map((c) => [c.id, c]));
const missing = ids.filter((id) => !byId.has(id));
if (missing.length) console.warn("not baked:", missing.join(", "));
const todo = ids.filter((id) => byId.has(id));

await mkdir(outDir, { recursive: true });
const tmp = await mkdtemp(path.join(tmpdir(), "marionet-review-"));
const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage({ viewport: { width: 420, height: 420 }, deviceScaleFactor: 1 });
try {
  await page.route("https://cdn.jsdelivr.net/gh/pixiv/three-vrm@release/**", async (route) => {
    const url = route.request().url().replace("https://cdn.jsdelivr.net/gh/pixiv/three-vrm@release/", "https://raw.githubusercontent.com/pixiv/three-vrm/release/");
    await route.fulfill({ response: await route.fetch({ url }) });
  });
  await page.goto(`${baseUrl}/`, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForFunction(() => window.marionet?.vrm && window.marionet?.rest, null, { timeout: 60000 });
  await page.evaluate(async () => {
    const m = window.marionet;
    document.body.classList.add("demo");
    if (m.controls) m.controls.enableDamping = false;
    m._render = await import("./src/vrm.js");
    const canvas = document.querySelector("#app canvas");
    const frame = () => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    const V = m.camera.position.constructor;
    const bone = (n) => m.vrm.humanoid.getRawBoneNode(n).getWorldPosition(new V());
    const pose = (clip, t) => {
      m.clip = null;
      m.playing = false;
      m._render.applyClip(m.vrm, clip, m.rest, t);
      m.vrm.update(0);
      m.vrm.scene.updateMatrixWorld(true);
    };
    const look = (target, offset) => {
      if (m.controls) {
        m.controls.target.copy(target);
        m.controls.minDistance = 0;
        m.controls.maxPolarAngle = Math.PI;
      }
      m.camera.position.copy(target).add(offset);
      m.camera.lookAt(target);
    };
    const tip = () => {
      const d = m.vrm.humanoid.getRawBoneNode("rightIndexDistal");
      const p = (d.children[0] ?? d).getWorldPosition(new V()).project(m.camera);
      return [(p.x + 1) / 2, (1 - p.y) / 2];
    };
    const handCenter = () => {
      const wrist = bone("rightHand");
      const d = m.vrm.humanoid.getRawBoneNode("rightMiddleDistal");
      return wrist.lerp((d.children[0] ?? d).getWorldPosition(new V()), 0.5);
    };
    m._q = { canvas, frame, pose, look, tip, handCenter, bone, V };
  });

  const rows = [];
  for (const id of todo) {
    const clip = JSON.parse(await readFile(path.join(clipsDir, byId.get(id).path), "utf8"));
    const shots = await page.evaluate(async ({ clip, RISE }) => {
      const { canvas, frame, pose, look, tip, handCenter, bone, V } = window.marionet._q;
      pose(clip, 0);
      const center = bone("neck").add(new V(0, -0.1, 0));
      const front = new V(0, 0.02, 0.95);
      const side = new V(-0.73, 0.02, 0.61);
      const end = clip.duration;
      const times = [Math.min(RISE, end), (Math.min(RISE, end) + end) / 2, end];
      const trailT = Array.from({ length: 25 }, (_, i) => Math.min(RISE, end) + (i / 24) * (end - Math.min(RISE, end)));
      const out = [];
      for (const t of times) {
        look(center, front);
        pose(clip, t);
        await frame();
        pose(clip, t);
        const trail = [];
        for (const tt of trailT) {
          if (tt > t + 1e-6) break;
          pose(clip, tt);
          trail.push(tip());
        }
        pose(clip, t);
        await frame();
        out.push({ png: canvas.toDataURL("image/png"), trail });
      }
      look(center, side);
      pose(clip, end);
      await frame();
      pose(clip, end);
      out.push({ png: canvas.toDataURL("image/png") });
      pose(clip, Math.min(RISE, end));
      look(handCenter(), new V(0, 0.01, 0.42));
      await frame();
      pose(clip, Math.min(RISE, end));
      await frame();
      out.push({ png: canvas.toDataURL("image/png") });
      return out;
    }, { clip, RISE });
    const frames = [];
    for (let i = 0; i < shots.length; i++) {
      const file = path.join(tmp, `${rows.length}-${i}.png`);
      await writeFile(file, Buffer.from(shots[i].png.split(",")[1], "base64"));
      frames.push({ png: file, trail: shots[i].trail });
    }
    rows.push({ label: `${rows.length + 1}. ${id.split("/").pop()}`, frames });
  }
  let n = 0;
  for (let start = 0; start < rows.length; start += PER_SHEET) {
    n++;
    const out = path.join(outDir, `sheet-${String(n).padStart(2, "0")}.png`);
    await run("python3", ["-c", SHEET_PY, JSON.stringify({ tile: TILE, rows: rows.slice(start, start + PER_SHEET), out })]);
  }
  console.log(`${rows.length} signs, ${n} sheets in ${path.relative(root, outDir)}/`);
} finally {
  await browser.close();
  await rm(tmp, { recursive: true, force: true });
}
