/**
 * Capture clean single-sign README demos as GIFs by scrubbing clip time
 * (deterministic; avoids headless realtime / WebGL screenshot freezes).
 *
 * Usage: node scripts/capture_demo_gifs.mjs [baseUrl]
 */
import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "docs");
const baseUrl = process.argv[2] || "http://127.0.0.1:8080";

const SIGNS = [
  {
    id: "ily",
    path: "./data/signs/ase/i-love-you.json",
    caption: "ASL  ·  I-LOVE-YOU",
    out: "demo-ily.gif",
    holdTail: 0.55,
  },
  {
    id: "gato",
    path: "./data/signs/gsm/gato.json",
    caption: "LENSEGUA  ·  GATO",
    out: "demo-gato.gif",
    holdTail: 0.45,
  },
];

function run(cmd, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, { stdio: ["ignore", "pipe", "pipe"] });
    let err = "";
    child.stderr.on("data", (d) => {
      err += d;
    });
    child.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${cmd} ${args.join(" ")} failed (${code}): ${err}`));
    });
  });
}

async function labelFrame(inPath, outPath, caption) {
  const py = `
from PIL import Image, ImageDraw, ImageFont
im = Image.open(${JSON.stringify(inPath)}).convert("RGBA")
# Crop to upper body / signing space (canvas is full stage).
w, h = im.size
top = int(h * 0.08)
bottom = int(h * 0.72)
left = int(w * 0.12)
right = int(w * 0.88)
im = im.crop((left, top, right, bottom))
draw = ImageDraw.Draw(im, "RGBA")
text = ${JSON.stringify(caption)}
if text:
    try:
        font = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial.ttf", 26)
    except Exception:
        font = ImageFont.load_default()
    bbox = draw.textbbox((0, 0), text, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    pad_x, pad_y = 14, 9
    x = (im.width - tw) // 2
    y = im.height - th - 28
    draw.rounded_rectangle(
        (x - pad_x, y - pad_y, x + tw + pad_x, y + th + pad_y),
        radius=12,
        fill=(12, 16, 24, 200),
    )
    draw.text((x, y), text, fill=(239, 231, 214, 255), font=font)
im.convert("RGB").save(${JSON.stringify(outPath)})
`;
  await run("python3", ["-c", py]);
}

async function framesToGif(frameDir, outPath, fps) {
  const palette = path.join(frameDir, "palette.png");
  await run("ffmpeg", [
    "-y",
    "-framerate",
    String(fps),
    "-i",
    path.join(frameDir, "frame-%04d.png"),
    "-vf",
    "scale=640:-1:flags=lanczos,palettegen=stats_mode=diff",
    palette,
  ]);
  await run("ffmpeg", [
    "-y",
    "-framerate",
    String(fps),
    "-i",
    path.join(frameDir, "frame-%04d.png"),
    "-i",
    palette,
    "-lavfi",
    "scale=640:-1:flags=lanczos[x];[x][1:v]paletteuse=dither=bayer:bayer_scale=5:diff_mode=rectangle",
    outPath,
  ]);
}

async function captureSign(browser, sign) {
  const fps = 12;
  const frameDir = await mkdtemp(path.join(tmpdir(), `marionet-${sign.id}-`));
  const page = await browser.newPage({
    viewport: { width: 900, height: 1100 },
    deviceScaleFactor: 1,
  });

  try {
    // Load player without auto-demo so we can scrub deterministically.
    await page.goto(`${baseUrl}/`, { waitUntil: "networkidle", timeout: 60000 });
    await page.waitForFunction(() => window.marionet?.vrm && window.marionet?.rest, null, {
      timeout: 60000,
    });

    await page.evaluate(() => {
      document.body.classList.add("demo");
      window.marionet.frameDemoCamera?.();
    });

    const meta = await page.evaluate(async ({ signPath, caption }) => {
      const desc = await fetch(signPath).then((r) => r.json());
      const { compileSignDesc } = await import("./src/compile.js");
      const { applyClip, restorePose } = await import("./src/vrm.js");
      const clip = compileSignDesc(desc);
      const m = window.marionet;
      m._scrub = { clip, desc, applyClip, restorePose };
      document.getElementById("caption").textContent = caption;
      document.getElementById("caption").style.display = "block";
      // Start at rest.
      m.clip = null;
      m.playing = false;
      restorePose(m.vrm, m.rest);
      m.vrm.update(0);
      return { duration: clip.duration, id: clip.signDescId };
    }, { signPath: sign.path, caption: sign.caption });

    console.log(sign.id, "clip", meta);

    const times = [];
    // Short rest beat, then full clip, then hold.
    times.push(null, null); // rest frames
    const steps = Math.max(8, Math.round(meta.duration * fps));
    for (let i = 0; i <= steps; i++) times.push((i / steps) * meta.duration);
    const hold = Math.round(sign.holdTail * fps);
    for (let i = 0; i < hold; i++) times.push(meta.duration);

    for (let i = 0; i < times.length; i++) {
      const t = times[i];
      await page.evaluate((t) => {
        const m = window.marionet;
        const { clip, applyClip, restorePose } = m._scrub;
        if (t == null) {
          m.clip = null;
          restorePose(m.vrm, m.rest);
        } else {
          m.clip = clip;
          m.clipTime = t;
          applyClip(m.vrm, clip, m.rest, t);
        }
        m.vrm.update(0);
      }, t);

      const dataUrl = await page.evaluate(async () => {
        const canvas = document.querySelector("#app canvas");
        await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
        return canvas.toDataURL("image/png");
      });
      const raw = path.join(frameDir, `raw-${String(i).padStart(4, "0")}.png`);
      const framed = path.join(frameDir, `frame-${String(i).padStart(4, "0")}.png`);
      await writeFile(raw, Buffer.from(dataUrl.split(",")[1], "base64"));
      await labelFrame(raw, framed, sign.caption);
    }

    const outPath = path.join(outDir, sign.out);
    await framesToGif(frameDir, outPath, fps);
    console.log(`wrote ${outPath}`);
  } finally {
    await page.close();
    await rm(frameDir, { recursive: true, force: true });
  }
}

await mkdir(outDir, { recursive: true });
const browser = await chromium.launch({
  channel: "chrome",
  headless: true,
});

try {
  for (const sign of SIGNS) {
    await captureSign(browser, sign);
  }
} finally {
  await browser.close();
}
