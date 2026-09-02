import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { compileSignDesc } from "./compile.js";
import { validateSignDesc } from "./ir.js";
import { applyClip, applyRestPose, loadVrm, sampleUrl, snapshotPose } from "./vrm.js";

const $ = (id) => document.getElementById(id);

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const DEMO = new URLSearchParams(location.search).get("demo") === "1";

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

async function runReadmeDemo() {
  document.body.classList.add("demo");
  camera.position.set(0.12, 1.4, 1.9);
  if (controls) controls.target.set(0.08, 1.25, 0);
  const ily = await fetch("./data/signs/ase/i-love-you.json").then((r) => r.json());
  const gato = await fetch("./data/signs/gsm/gato.json").then((r) => r.json());
  window.marionet.demoReady = true;
  for (;;) {
    setCaption("ASL  ·  I-LOVE-YOU");
    playDesc(ily);
    await waitClip();
    await sleep(500);
    setCaption("LENSEGUA  ·  GATO");
    playDesc(gato);
    await waitClip();
    await sleep(900);
  }
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
  setStatus(`marionet / ${label}`);
  if (!DEMO && state.signs.has(state.letter)) selectLetter(state.letter);
}

const app = $("app");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(-0.35, 1.42, 2.15);

let renderer = null;
let controls = null;
try {
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  app.append(renderer.domElement);
  controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0.15, 1.22, 0);
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
    if (state.clip && state.playing) {
      state.clipTime += delta;
      if (state.clipTime > state.clip.duration) {
        state.clipTime = state.clip.duration;
        state.playing = false;
      }
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
  if (DEMO) await runReadmeDemo();
}

boot().catch((err) => {
  console.error(err);
  setStatus("marionet / boot failed");
});
