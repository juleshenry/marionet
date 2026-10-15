/**
 * Whether the hand lands where the location fits aimed, on the sample and on other avatars,
 * with and without the player's arm retargeting (src/body.js). A flat hand is held at each
 * location, and the table gives how high its contact point (the index fingertip at the face,
 * neck and shoulder; the palm at the chest and belly) stands off the spot the fit aimed at,
 * along the skin's normal there, in cm: negative is under the skin. On another avatar the
 * retargeted number should match the sample's, scaled a little to a bigger face or body.
 *
 * Usage: python3 -m http.server 8765 &
 *        node scripts/check_reach.mjs [--avatars a.vrm,b.vrm]     (default: every avatars/out/*.vrm)
 *        node scripts/check_reach.mjs --shots data/runs/reach --avatars avatars/out/w-white.vrm
 *          also a sheet per avatar: each location from the front and the side, as fitted on
 *          the sample (top) and retargeted (bottom)
 */
import { chromium } from "playwright";
import { mkdirSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const baseUrl = process.env.MARIONET_URL || "http://127.0.0.1:8765";
const argv = process.argv.slice(2);
const ai = argv.indexOf("--avatars");
const si = argv.indexOf("--shots");
const shots = si >= 0 ? path.resolve(root, argv[si + 1]) : null;
const avatars = ai >= 0 ? argv[ai + 1].split(",") : readdirSync(path.join(root, "avatars/out")).filter((f) => f.endsWith(".vrm")).map((f) => `avatars/out/${f}`);

// location: [hand point, the body point it aims at (src/body.js anchors)]
const LOCATIONS = {
  forehead: ["Index", "right:forehead"], eye: ["Index", "right:eye"], nose: ["Index", "right:nose"], cheek: ["Index", "right:cheek"],
  mouth: ["Index", "right:mouth"], chin: ["Index", "right:chin"], head: ["Index", "right:head"], ear: ["Index", "right:ear"],
  neck: ["Index", "neck"], shoulder: ["Index", "right:shoulder"], "chest-front": ["palm", "right:chest"], belly: ["palm", "right:belly"],
};

/** In the page: close-ups of each location on one avatar, raw and retargeted, front and side. */
async function sheet({ url, LOCATIONS }) {
  const m = window.marionet;
  const vrmMod = await import("./src/vrm.js");
  const body = await import("./src/body.js");
  const { compileSignDesc } = await import("./src/compile.js");
  const v = await vrmMod.loadVrm(url);
  vrmMod.applyRestPose(v);
  const rest = vrmMod.snapshotPose(v);
  m.vrm.scene.parent.add(v.scene);
  m.vrm.scene.removeFromParent();
  m.vrm = v;
  m.rest = rest;
  m.clip = null;
  m.playing = false;
  if (m.controls) {
    m.controls.enableDamping = false;
    m.controls.minDistance = 0;
  }
  const bones = body.readSkeleton(v);
  const canvas = document.querySelector("#app canvas");
  const W = 200;
  const locs = Object.keys(LOCATIONS);
  const out = document.createElement("canvas");
  out.width = W * locs.length;
  out.height = W * 4;
  const ctx = out.getContext("2d");
  const frame = () => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
  for (const [col, location] of locs.entries()) {
    const desc = {
      schema: "marionet.signdesc/v0", id: `check/${location}`, language: "ase", gloss: "CHECK", spoken: [], handed: "1h",
      dominant: { handshape: "B", location, movement: [] }, compileReady: true,
    };
    const clip = compileSignDesc(desc);
    for (const [row, raw] of [[0, true], [1, false]]) {
      vrmMod.applyClip(v, clip, rest, 0.4, { raw });
      const shown = raw ? clip : vrmMod.retargetedClip(v, clip);
      const eul = Object.fromEntries(Object.entries(shown.bones).map(([n, k]) => [n, (k.find((x) => x[0] >= 0.4 - 1e-6) ?? k.at(-1))[1]]));
      const target = body.handPoints({ bones }, body.posed({ bones }, eul), "right")[LOCATIONS[location][0]];
      for (const [view, eye] of [[0, [0, 0, 0.42]], [1, [-0.42, 0, 0.04]]]) {
        m.camera.position.set(target.x + eye[0], target.y + eye[1], target.z + eye[2]);
        m.controls?.target.copy(target);
        m.camera.lookAt(target);
        m.controls?.update();
        await frame();
        vrmMod.applyClip(v, clip, rest, 0.4, { raw });
        v.update(0);
        await frame();
        const img = new Image();
        img.src = canvas.toDataURL("image/png");
        await img.decode();
        const s = Math.min(canvas.width, canvas.height);
        ctx.drawImage(img, (canvas.width - s) / 2, (canvas.height - s) / 2, s, s, col * W, (row * 2 + view) * W, W, W);
      }
    }
    ctx.fillStyle = "#fff";
    ctx.font = "13px sans-serif";
    ctx.fillText(location, col * W + 6, 16);
  }
  return out.toDataURL("image/png");
}

const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage({ viewport: { width: 400, height: 400 } });
try {
  await page.route("https://cdn.jsdelivr.net/gh/pixiv/three-vrm@release/**", async (route) => {
    const url = route.request().url().replace("https://cdn.jsdelivr.net/gh/pixiv/three-vrm@release/", "https://raw.githubusercontent.com/pixiv/three-vrm/release/");
    await route.fulfill({ response: await route.fetch({ url }) });
  });
  await page.goto(`${baseUrl}/`, { waitUntil: "networkidle", timeout: 90000 });
  await page.waitForFunction(() => window.marionet?.vrm, null, { timeout: 90000 });

  const rows = {};
  for (const av of [null, ...avatars]) {
    const r = await page.evaluate(
      async ({ url, LOCATIONS }) => {
        const THREE = await import("three");
        const vrmMod = await import("./src/vrm.js");
        const body = await import("./src/body.js");
        const { compileSignDesc } = await import("./src/compile.js");
        const vrm = await vrmMod.loadVrm(url ?? vrmMod.sampleUrl());
        const bones = body.readSkeleton(vrm);
        const { anchors } = body.measureBody(vrm, { bones });
        vrmMod.applyRestPose(vrm);
        // Height of p over the anchor's tangent plane, the anchor moving with its bone.
        const height = (p, P, name) => {
          const a = anchors.find((x) => x.name === name);
          if (!a) return NaN;
          const at = new THREE.Vector3(...a.local).applyQuaternion(P.q[a.bone]).add(P.p[a.bone]);
          return p.clone().sub(at).dot(new THREE.Vector3(...a.normal).applyQuaternion(P.q[a.bone]));
        };
        const out = {};
        for (const [location, [point, spot]] of Object.entries(LOCATIONS)) {
          const desc = {
            schema: "marionet.signdesc/v0", id: `check/${location}`, language: "ase", gloss: "CHECK", spoken: [], handed: "1h",
            dominant: { handshape: "B", location, movement: [] }, compileReady: true,
          };
          const clip = compileSignDesc(desc);
          const held = (c) => Object.fromEntries(Object.entries(c.bones).map(([n, keys]) => [n, (keys.find((k) => k[0] >= 0.4 - 1e-6) ?? keys.at(-1))[1]]));
          const at = (eul) => {
            const P = body.posed({ bones }, eul);
            return height(body.handPoints({ bones }, P, "right")[point], P, spot);
          };
          const moved = vrmMod.retargetedClip(vrm, clip);
          out[location] = {
            raw: +(at(held(clip)) * 100).toFixed(1),
            fit: +(at(held(moved)) * 100).toFixed(1),
            how: moved.retargeted?.right,
          };
        }
        return out;
      },
      { url: av ? `/${av}` : null, LOCATIONS },
    );
    rows[av ? path.basename(av, ".vrm") : "sample"] = r;
    if (shots && av) {
      const png = await page.evaluate(sheet, { url: `/${av}`, LOCATIONS });
      mkdirSync(shots, { recursive: true });
      const file = path.join(shots, `${path.basename(av, ".vrm")}.png`);
      writeFileSync(file, Buffer.from(png.split(",")[1], "base64"));
      console.log(`→ ${path.relative(root, file)}`);
    }
  }

  const names = Object.keys(rows);
  console.log(`height over the aimed spot, cm: raw → retargeted (sample: as fitted)`);
  console.log(`${"".padEnd(12)}${names.map((n) => n.slice(0, 13).padStart(14)).join("")}`);
  for (const location of Object.keys(LOCATIONS)) {
    const cells = names.map((n) => {
      const c = rows[n][location];
      return (n === "sample" ? `${c.raw}` : `${c.raw}→${c.fit}`).padStart(14);
    });
    console.log(`${location.padEnd(12)}${cells.join("")}`);
  }
  if (process.env.VERBOSE) for (const n of names) console.log(n, JSON.stringify(Object.fromEntries(Object.entries(rows[n]).map(([l, c]) => [l, c.how]))));
} finally {
  await browser.close();
}
