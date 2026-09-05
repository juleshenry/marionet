import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { compileSignDesc } from "./compile.js";
import { validateSignDesc } from "./ir.js";
import { applyClip, applyRestPose, loadVrm, restorePose, sampleUrl, snapshotPose } from "./vrm.js";

const $ = (id) => document.getElementById(id);

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const params = new URLSearchParams(location.search);
const DEMO_MODE = (params.get("demo") || "").toLowerCase(); // "1" | "ily" | "gato"
const DEMO = DEMO_MODE === "1" || DEMO_MODE === "ily" || DEMO_MODE === "gato";
const DEMO_ONCE = params.get("once") === "1" || DEMO_MODE === "ily" || DEMO_MODE === "gato";

const state = {
  vrm: null,
  rest: null,
  signs: new Map(),
  letter: "A",
  clip: null,
  clipTime: 0,
  playing: false,
};

function setStatus(text) {
  $("status").textContent = text;
}

function setCaption(text) {
  const el = $("caption");
  if (el) el.textContent = text;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function waitClip() {
  return new Promise((resolve) => {
    const tick = () => {
      if (!state.playing) resolve();
      else requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

function playDesc(desc) {
  state.clip = compileSignDesc(desc);
  state.clipTime = 0;
  state.playing = true;
  showDesc(desc);
  setStatus(`marionet / ${desc.id}`);
}

function frameDemoCamera() {
  // Straight-on upper body — no 3/4 “looking past you” angle.
  camera.position.set(0, 1.35, 1.85);
  if (controls) {
    controls.target.set(0, 1.28, 0);
    controls.update();
  }
  if (state.vrm?.lookAt) {
    state.vrm.lookAt.target = camera;
  }
}

async function runReadmeDemo() {
  document.body.classList.add("demo");
  frameDemoCamera();
  const ily = await fetch("./data/signs/ase/i-love-you.json").then((r) => r.json());
  const gato = await fetch("./data/signs/gsm/gato.json").then((r) => r.json());
  const sequence =
    DEMO_MODE === "ily" ? [{ caption: "ASL  ·  I-LOVE-YOU", desc: ily }]
    : DEMO_MODE === "gato" ? [{ caption: "LENSEGUA  ·  GATO", desc: gato }]
    : [
        { caption: "ASL  ·  I-LOVE-YOU", desc: ily },
        { caption: "LENSEGUA  ·  GATO", desc: gato },
      ];

  window.marionet.demoReady = true;
  do {
    for (const step of sequence) {
      // Brief rest so the next rise-from-rest is visible and clips do not hard-cut.
      if (state.vrm && state.rest) restorePose(state.vrm, state.rest);
      state.clip = null;
      state.playing = false;
      await sleep(280);
      setCaption(step.caption);
      playDesc(step.desc);
      await waitClip();
      await sleep(DEMO_ONCE ? 700 : 450);
    }
  } while (!DEMO_ONCE);
  window.marionet.demoDone = true;
}

function renderAlphabet() {
  const root = $("alphabet");
  root.innerHTML = "";
  for (const letter of LETTERS) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = letter;
    btn.dataset.letter = letter;
    btn.className = letter === state.letter ? "key active" : "key";
    btn.addEventListener("click", () => selectLetter(letter));
    root.append(btn);
  }
}

function showDesc(desc) {
  $("signdesc").textContent = JSON.stringify(desc, null, 2);
  $("gloss").textContent = desc ? desc.gloss : "—";
}

function selectLetter(letter) {
  const desc = state.signs.get(letter);
  if (!desc) return;
  state.letter = letter;
  state.clip = compileSignDesc(desc);
  state.clipTime = 0;
  state.playing = true;
  showDesc(desc);
  renderAlphabet();
  setStatus(`marionet / ${desc.id}`);
}

async function mountVrm(source, label) {
  setStatus(`marionet / loading ${label}…`);
  if (state.vrm) {
    state.vrm.scene.removeFromParent();
    state.vrm = null;
    state.rest = null;
  }
  const vrm = await loadVrm(source);
  applyRestPose(vrm);
  state.rest = snapshotPose(vrm);
  scene.add(vrm.scene);
  state.vrm = vrm;
  if (vrm.lookAt) vrm.lookAt.target = camera;
  setStatus(`marionet / ${label}`);
  if (!DEMO && state.signs.has(state.letter)) selectLetter(state.letter);
}

const app = $("app");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 1.35, 2.05);

let renderer = null;
let controls = null;
try {
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  app.append(renderer.domElement);
  controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 1.25, 0);
  controls.enablePan = false;
  controls.enableDamping = true;
  controls.minDistance = 1.1;
  controls.maxDistance = 4.2;
} catch (err) {
  console.error(err);
  renderer = null;
}

scene.add(new THREE.HemisphereLight(0xf4efe6, 0x243047, 1.2));
const dir = new THREE.DirectionalLight(0xfff6e8, 1.55);
dir.position.set(1.1, 2.3, 2.0);
scene.add(dir);

const floor = new THREE.Mesh(
  new THREE.CircleGeometry(2.6, 64),
  new THREE.MeshStandardMaterial({ color: 0x0b1020, transparent: true, opacity: 0.65 })
);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -0.01;
scene.add(floor);

const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  if (!renderer) return;
  const delta = clock.getDelta();
  if (state.vrm) {
    if (state.clip) {
      if (state.playing) {
        state.clipTime += delta;
        if (state.clipTime > state.clip.duration) {
          state.clipTime = state.clip.duration;
          state.playing = false;
        }
      }
      // Keep applying the held frame after the clip ends (avoids snap-back to rest).
      applyClip(state.vrm, state.clip, state.rest, state.clipTime);
    }
    state.vrm.update(delta);
  }
  controls?.update();
  renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer?.setSize(window.innerWidth, window.innerHeight);
});

window.addEventListener("keydown", (event) => {
  if (event.metaKey || event.ctrlKey || event.altKey) return;
  const letter = event.key.toUpperCase();
  if (LETTERS.includes(letter)) {
    event.preventDefault();
    selectLetter(letter);
  }
});

function onDrop(event) {
  event.preventDefault();
  $("hud").classList.remove("drop-target");
  const file = event.dataTransfer?.files?.[0];
  if (!file) return;
  if (!file.name.toLowerCase().endsWith(".vrm")) {
    setStatus("marionet / drop a .vrm file");
    return;
  }
  file.arrayBuffer().then((buf) => mountVrm(buf, file.name)).catch((err) => {
    console.error(err);
    setStatus("marionet / failed to load dropped VRM");
  });
}

document.addEventListener("dragover", (event) => {
  event.preventDefault();
  $("hud").classList.add("drop-target");
});
document.addEventListener("dragleave", () => $("hud").classList.remove("drop-target"));
document.addEventListener("drop", onDrop);

$("replay").addEventListener("click", () => selectLetter(state.letter));
window.marionet = state;
window.marionet.camera = camera;
window.marionet.controls = controls;
window.marionet.frameDemoCamera = frameDemoCamera;

async function boot() {
  renderAlphabet();
  setStatus("marionet / loading lexicon…");
  const pack = await fetch("./data/signs/ase/fingerspelling.json").then((r) => r.json());
  for (const desc of pack.signs) {
    const errors = validateSignDesc(desc);
    if (errors.length) {
      console.warn(desc.id, errors);
      continue;
    }
    const letter = desc.spoken[0];
    state.signs.set(letter, desc);
  }
  if (!renderer) {
    setStatus("marionet / WebGL unavailable — lexicon loaded");
    if (state.signs.has("A")) {
      state.letter = "A";
      showDesc(state.signs.get("A"));
      renderAlphabet();
    }
    return;
  }
  await mountVrm(sampleUrl(), "sample avatar");
  if (state.vrm?.lookAt) state.vrm.lookAt.target = camera;
  if (DEMO) await runReadmeDemo();
}

boot().catch((err) => {
  console.error(err);
  setStatus("marionet / boot failed");
});
