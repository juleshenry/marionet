/**
 * Render baked clips on the sample VRM for review, into outDir:
 *   <id>/sheet.png     upper body + straight-on hand close-up at sampled times
 *   <id>/orbit.mp4     hand close-up while the camera drifts around the held handshape
 *                      (parallax shows thumb over/under, finger depth; the hand never moves)
 *   <id>/play.mp4      moving signs only: front view with the fingertip's path drawn as it goes
 *   index.html         gallery of all of the above
 *
 * Usage: node scripts/render_clips.mjs [baseUrl] [outDir] [id ...]
 *   MARIONET_CLIPS=data/runs/preview renders a bake_clips --out folder instead of clips/
 *   MARIONET_AVATAR=avatars/out/w-white.vrm renders on that avatar instead of the sample
 *   python3 -m http.server 8765 &
 *   node scripts/render_clips.mjs http://127.0.0.1:8765 data/runs/renders ase/fs/A ase/ily
 */
import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const baseUrl = process.argv[2] || "http://127.0.0.1:8765";
const outDir = path.resolve(root, process.argv[3] || "data/runs/renders");
const only = new Set(process.argv.slice(4));
const clipsDir = path.resolve(root, process.env.MARIONET_CLIPS || "clips");

const RISE = 0.4;
const VIDEO_FPS = 24;
const ORBIT_FRAMES = 144; // 6 s loop: slow enough not to disorient
const ORBIT_YAW = 0.26; // ±15°
const ORBIT_PITCH = 0.08; // ±5°
const PLAY_FPS = 24;
const TIPS = ["Thumb", "Index", "Middle", "Ring", "Little"];

function run(cmd, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, { stdio: ["ignore", "ignore", "pipe"] });
    let err = "";
    child.stderr.on("data", (d) => (err += d));
    child.on("close", (code) => (code === 0 ? resolve() : reject(new Error(`${cmd} failed (${code}): ${err}`))));
  });
}

async function writePng(file, dataUrl) {
  await writeFile(file, Buffer.from(dataUrl.split(",")[1], "base64"));
}

async function framesToMp4(pattern, out, fps, width) {
  await run("ffmpeg", ["-y", "-framerate", String(fps), "-i", pattern, "-vf", `scale=${width}:-2:flags=lanczos`,
    "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "20", "-movflags", "+faststart", out]);
}

/** Moves after the hand arrives: some bone track changes value after RISE. */
function isMoving(clip) {
  return Object.values(clip.bones).some((keys) => {
    const held = (keys.find((k) => k[0] >= RISE - 1e-6) ?? keys.at(-1))[1];
    return keys.some((k) => k[0] > RISE + 1e-6 && k[1].some((v, i) => Math.abs(v - held[i]) > 1e-4));
  });
}

function sampleTimes(duration, moving) {
  if (!moving) return [duration];
  const n = 5;
  return Array.from({ length: n }, (_, i) => RISE + ((duration - RISE) * i) / (n - 1));
}

// --- in-page helpers (installed once on window.marionet._r) -------------------------------

function installPageHelpers() {
  const m = window.marionet;
  const canvas = document.querySelector("#app canvas");
  const frame = () => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
  const pose = (clip, t) => {
    m.clip = null;
    m.playing = false;
    m._render.applyClip(m.vrm, clip, m.rest, t);
    m.vrm.update(0);
  };
  // Midway between the wrist and the fingertip that reaches furthest, so extended
  // fingers stay in frame and a fist is still centred.
  const handCenter = () => {
    const h = m.vrm.humanoid;
    const wrist = h.getRawBoneNode("rightHand").getWorldPosition(m.camera.position.clone());
    let far = null;
    for (const name of ["Thumb", "Index", "Middle", "Ring", "Little"]) {
      const d = h.getRawBoneNode(`right${name}Distal`);
      if (!d) continue;
      const p = (d.children[0] ?? d).getWorldPosition(m.camera.position.clone());
      if (!far || p.distanceTo(wrist) > far.distanceTo(wrist)) far = p;
    }
    return wrist.lerp(far, 0.5);
  };
  // The render loop calls controls.update(), which aims the camera at controls.target
  // and clamps the distance to minDistance, so both follow the close-up camera.
  const lookFrom = (target, offset) => {
    if (m.controls) {
      m.controls.target.copy(target);
      m.controls.minDistance = 0;
    }
    m.camera.position.copy(target).add(offset);
    m.camera.lookAt(target);
  };
  const reset = () => {
    if (m.controls) m.controls.minDistance = m._minDistance;
    m.frameDemoCamera();
  };
  const tips = (names) => {
    const h = m.vrm.humanoid.getRawBoneNode("rightHand");
    const hp = h.getWorldPosition(h.position.clone()).project(m.camera);
    const out = { Hand: [(hp.x + 1) / 2, (1 - hp.y) / 2] };
    for (const name of names) {
      const d = m.vrm.humanoid.getRawBoneNode(`right${name}Distal`);
      if (!d) continue;
      const p = (d.children[0] ?? d).getWorldPosition(d.position.clone()).project(m.camera);
      out[name] = [(p.x + 1) / 2, (1 - p.y) / 2];
    }
    return out;
  };
  m._r = { canvas, frame, pose, handCenter, lookFrom, reset, tips };
}

async function shootSheetFrame(page, clip, t) {
  return page.evaluate(async ({ clip, t }) => {
    const { canvas, frame, pose, handCenter, lookFrom, reset } = window.marionet._r;
    const V = window.marionet.camera.position.constructor;
    pose(clip, t);
    await frame();
    pose(clip, t);
    const png = canvas.toDataURL("image/png");
    lookFrom(handCenter(), new V(0, 0.01, 0.46));
    await frame();
    pose(clip, t);
    await frame();
    const close = canvas.toDataURL("image/png");
    reset();
    return { png, close };
  }, { clip, t });
}

async function shootOrbit(page, clip, t, k) {
  return page.evaluate(async ({ clip, t, k, n, yaw, pitch }) => {
    const { canvas, frame, pose, handCenter, lookFrom } = window.marionet._r;
    const V = window.marionet.camera.position.constructor;
    pose(clip, t);
    const a = (2 * Math.PI * k) / n;
    const y = yaw * Math.sin(a), p = pitch * Math.cos(a), r = 0.46;
    lookFrom(handCenter(), new V(r * Math.sin(y) * Math.cos(p), 0.01 + r * Math.sin(p), r * Math.cos(y) * Math.cos(p)));
    await frame();
    pose(clip, t);
    await frame();
    return canvas.toDataURL("image/png");
  }, { clip, t, k, n: ORBIT_FRAMES, yaw: ORBIT_YAW, pitch: ORBIT_PITCH });
}

async function shootPlay(page, clip, t) {
  return page.evaluate(async ({ clip, t, names }) => {
    const { canvas, frame, pose, tips } = window.marionet._r;
    pose(clip, t);
    await frame();
    pose(clip, t);
    window.marionet.vrm.scene.updateMatrixWorld(true);
    return { png: canvas.toDataURL("image/png"), tips: tips(names) };
  }, { clip, t, names: TIPS });
}

// --- post-processing (PIL) ----------------------------------------------------------------

const SHEET_PY = `
import json, sys
from PIL import Image, ImageDraw
spec = json.loads(sys.argv[1])
tiles = []
for f in spec["frames"]:
    im = Image.open(f["raw"]).convert("RGB")
    w, h = im.size
    body = im.crop((int(w*0.12), int(h*0.08), int(w*0.88), int(h*0.72))).resize((288, 296))
    cl = Image.open(f["close"]).convert("RGB")
    cw, ch = cl.size
    s = min(cw, ch) * 0.7
    hand = cl.crop((int(cw/2-s/2), int(ch/2-s/2), int(cw/2+s/2), int(ch/2+s/2))).resize((296, 296))
    tile = Image.new("RGB", (288+296, 296+22), (12, 16, 24))
    tile.paste(body, (0, 22)); tile.paste(hand, (288, 22))
    ImageDraw.Draw(tile).text((6, 4), f'{spec["id"]}  t={f["t"]:.2f}s', fill=(239, 231, 214))
    tiles.append(tile)
sheet = Image.new("RGB", (tiles[0].width, sum(t.height for t in tiles)), (0, 0, 0))
y = 0
for t in tiles:
    sheet.paste(t, (0, y)); y += t.height
sheet.save(spec["out"])
`;

const ORBIT_PY = `
import json, sys
from PIL import Image
spec = json.loads(sys.argv[1])
for src, dst in spec["pairs"]:
    im = Image.open(src).convert("RGB")
    w, h = im.size
    s = min(w, h) * 0.8
    im.crop((int(w/2-s/2), int(h/2-s/2), int(w/2+s/2), int(h/2+s/2))).save(dst)
`;

// Trail: the fingertip's path so far, red → yellow, start ringed in green, current tip dotted.
const PLAY_PY = `
import json, sys
from PIL import Image, ImageDraw, ImageFont
spec = json.loads(sys.argv[1])
try:
    font = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial.ttf", 26)
except Exception:
    font = ImageFont.load_default()
pts = spec["path"]
n = len(pts)
box = (0.12, 0.08, 0.88, 0.72)
for i, (src, dst) in enumerate(spec["pairs"]):
    im = Image.open(src).convert("RGB")
    w, h = im.size
    d = ImageDraw.Draw(im)
    xy = [(x * w, y * h) for x, y in pts[: min(i, spec["moveEnd"]) + 1]]
    if i >= spec["moveStart"]:
        for k in range(spec["moveStart"], len(xy) - 1):
            u = k / max(1, n - 1)
            d.line([xy[k], xy[k + 1]], fill=(255, int(60 + 195 * u), 40), width=5)
        x0, y0 = pts[spec["moveStart"]][0] * w, pts[spec["moveStart"]][1] * h
        d.ellipse([x0 - 8, y0 - 8, x0 + 8, y0 + 8], outline=(80, 230, 120), width=3)
        if i <= spec["moveEnd"]:
            cx, cy = xy[-1]
            d.ellipse([cx - 5, cy - 5, cx + 5, cy + 5], fill=(255, 255, 255))
    im = im.crop((int(w * box[0]), int(h * box[1]), int(w * box[2]), int(h * box[3])))
    ImageDraw.Draw(im).text((14, 12), spec["label"], fill=(239, 231, 214), font=font)
    im.save(dst)
`;

// --- main ---------------------------------------------------------------------------------

const { clips } = JSON.parse(await readFile(path.join(clipsDir, "index.json"), "utf8"));
const todo = clips.filter((c) => !only.size || only.has(c.id));

await mkdir(outDir, { recursive: true });
const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage({ viewport: { width: 900, height: 1100 }, deviceScaleFactor: 1 });
try {
  // jsdelivr's /gh/ route for the sample VRM is flaky; the same file is on raw.githubusercontent.
  await page.route("https://cdn.jsdelivr.net/gh/pixiv/three-vrm@release/**", async (route) => {
    const url = route.request().url().replace("https://cdn.jsdelivr.net/gh/pixiv/three-vrm@release/", "https://raw.githubusercontent.com/pixiv/three-vrm/release/");
    await route.fulfill({ response: await route.fetch({ url }) });
  });
  await page.goto(`${baseUrl}/`, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForFunction(() => window.marionet?.vrm && window.marionet?.rest, null, { timeout: 60000 });
  await page.evaluate(async () => {
    document.body.classList.add("demo");
    // No damping: the close-ups move the camera and it must snap back exactly.
    if (window.marionet.controls) window.marionet.controls.enableDamping = false;
    window.marionet._minDistance = window.marionet.controls?.minDistance;
    window.marionet.frameDemoCamera?.();
    window.marionet._render = await import("./src/vrm.js");
  });
  if (process.env.MARIONET_AVATAR) {
    await page.evaluate(async (url) => {
      const m = window.marionet;
      const { loadVrm, applyRestPose, snapshotPose } = m._render;
      const v = await loadVrm(url);
      applyRestPose(v);
      const rest = snapshotPose(v);
      m.vrm.scene.parent.add(v.scene);
      m.vrm.scene.removeFromParent();
      m.vrm = v;
      m.rest = rest;
    }, `/${process.env.MARIONET_AVATAR}`);
  }
  await page.evaluate(installPageHelpers);

  for (const entry of todo) {
    const clip = JSON.parse(await readFile(path.join(clipsDir, entry.path), "utf8"));
    const dir = path.join(outDir, entry.id);
    await mkdir(dir, { recursive: true });
    const tmp = await mkdtemp(path.join(tmpdir(), "marionet-render-"));
    const moving = isMoving(clip);
    try {
      // Sheet.
      const raws = [];
      const times = sampleTimes(clip.duration, moving);
      for (let i = 0; i < times.length; i++) {
        const shot = await shootSheetFrame(page, clip, times[i]);
        const raw = path.join(dir, `raw-${i}.png`);
        const close = path.join(dir, `hand-${i}.png`);
        await writePng(raw, shot.png);
        await writePng(close, shot.close);
        raws.push({ raw, close, t: times[i] });
      }
      await run("python3", ["-c", SHEET_PY, JSON.stringify({ id: entry.id, frames: raws, out: path.join(dir, "sheet.png") })]);

      // Orbit around the held handshape (before any movement starts).
      const hold = moving ? RISE : clip.duration;
      const pairs = [];
      for (let k = 0; k < ORBIT_FRAMES; k++) {
        const src = path.join(tmp, `o-raw-${String(k).padStart(3, "0")}.png`);
        await writePng(src, await shootOrbit(page, clip, hold, k));
        pairs.push([src, path.join(tmp, `o-${String(k).padStart(3, "0")}.png`)]);
      }
      await page.evaluate(() => window.marionet._r.reset());
      await run("python3", ["-c", ORBIT_PY, JSON.stringify({ pairs })]);
      await framesToMp4(path.join(tmp, "o-%03d.png"), path.join(dir, "orbit.mp4"), VIDEO_FPS, 360);

      // Playback with the fingertip trail, for signs that move.
      if (moving) {
        const n = Math.round(clip.duration * PLAY_FPS);
        const times = Array.from({ length: n + 1 }, (_, i) => (i / n) * clip.duration);
        const hold = Math.round(0.8 * PLAY_FPS);
        for (let i = 0; i < hold; i++) times.push(clip.duration);
        const shots = [];
        for (let i = 0; i < times.length; i++) {
          const shot = await shootPlay(page, clip, times[i]);
          const src = path.join(tmp, `p-raw-${String(i).padStart(3, "0")}.png`);
          await writePng(src, shot.png);
          shots.push({ src, tips: shot.tips });
        }
        // Trace the fingertip that draws the movement: among tips that travel at least
        // 60% as far as the furthest, the one held furthest from the wrist (an extended
        // finger, not a thumb tucked over a fist).
        const moveStart = times.findIndex((t) => t >= RISE - 1e-6);
        const moveEnd = n;
        const stats = TIPS.map((name) => {
          let len = 0, reach = 0;
          for (let i = moveStart; i <= moveEnd; i++) {
            const a = shots[i].tips[name], w = shots[i].tips.Hand;
            if (a && w) reach += Math.hypot(a[0] - w[0], a[1] - w[1]);
            const b = shots[i + 1]?.tips[name];
            if (i < moveEnd && a && b) len += Math.hypot(a[0] - b[0], a[1] - b[1]);
          }
          return { name, len, reach };
        });
        const maxLen = Math.max(...stats.map((s) => s.len));
        const best = stats.filter((s) => s.len >= 0.6 * maxLen).sort((a, b) => b.reach - a.reach)[0].name;
        const spec = {
          label: `${entry.gloss}  ·  ${best.toLowerCase()} fingertip path`,
          path: shots.slice(0, moveEnd + 1).map((s) => s.tips[best]),
          moveStart,
          moveEnd,
          pairs: shots.map((s, i) => [s.src, path.join(tmp, `p-${String(i).padStart(3, "0")}.png`)]),
        };
        await run("python3", ["-c", PLAY_PY, JSON.stringify(spec)]);
        await framesToMp4(path.join(tmp, "p-%03d.png"), path.join(dir, "play.mp4"), PLAY_FPS, 380);
      }
      console.log(`${entry.id}  sheet, orbit${moving ? ", play" : ""} → ${path.relative(root, dir)}`);
    } finally {
      await rm(tmp, { recursive: true, force: true });
    }
  }
} finally {
  await browser.close();
}

// Gallery over every clip that has renders, not just this run's.
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
const have = (id, f) => existsSync(path.join(outDir, id, f));
const video = (src) => `<video src="${src}" autoplay loop muted playsinline preload="auto"></video>`;
const orbitTiles = clips.filter((c) => have(c.id, "orbit.mp4"))
  .map((c) => `<figure>${video(`${c.id}/orbit.mp4`)}<figcaption>${esc(c.gloss)}</figcaption></figure>`).join("\n");
const playTiles = clips.filter((c) => have(c.id, "play.mp4"))
  .map((c) => `<figure class="play">${video(`${c.id}/play.mp4`)}<figcaption>${esc(c.gloss)} <span>${c.id} · ${c.duration}s</span></figcaption></figure>`).join("\n");
const sheetTiles = clips.filter((c) => have(c.id, "sheet.png"))
  .map((c) => `<figure class="sheet"><figcaption>${esc(c.gloss)} <span>${c.id} · ${c.duration}s</span></figcaption><img src="${c.id}/sheet.png" loading="lazy"></figure>`).join("\n");
await writeFile(path.join(outDir, "index.html"), `<!doctype html><meta charset="utf-8"><title>Marionet renders</title>
<style>
body{background:#0b1020;color:#efe7d6;font:14px system-ui;margin:16px}
h1{font-size:18px} h2{font-size:15px;margin:28px 0 4px} p{opacity:.65;margin:0 0 12px}
.row{display:flex;flex-wrap:wrap;gap:10px}
figure{margin:0;background:#141a2c;padding:6px;border-radius:8px}
figure img,figure video{display:block;width:200px} figure.play video{width:380px} figure.sheet img{width:420px}
figcaption{margin-top:4px;font-weight:600;text-align:center} figcaption span{font-weight:400;opacity:.6;margin-left:6px}
figure.sheet figcaption{margin:0 0 6px;text-align:left}
details summary{cursor:pointer;margin-top:28px;font-size:15px;font-weight:600}
</style>
<h1>Marionet renders</h1>
<h2>Movement</h2>
<p>Front view, played at real speed. The line is the fingertip that travels furthest: green ring is where the movement starts, red → yellow over time.</p>
<div class="row">${playTiles}</div>
<h2>Handshape, orbit</h2>
<p>The hand is held still at its handshape; the camera drifts ±15° around it on a 6 s loop so depth reads (thumb over or under the fingers, finger spread).</p>
<div class="row">${orbitTiles}</div>
<details><summary>Sheets (upper body + straight-on close-up at sampled times)</summary>
<div class="row" style="margin-top:12px">${sheetTiles}</div>
</details>
`);
console.log(`gallery → ${path.relative(root, path.join(outDir, "index.html"))}`);
