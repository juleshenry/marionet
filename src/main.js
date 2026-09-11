import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { compileSignDesc } from "./compile.js";
import { isCompilable, languageName, validateClip, validatePose, validateSignDesc } from "./ir.js";
import { languagesIn, loadLexicon, searchIndex } from "./lexicon.js";
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
  lexicon: [],
  letter: "A",
  lemma: null,
  clip: null,
  clipTime: 0,
  playing: false,
  speed: 1,
  mirror: false,
  query: "",
  language: "all",
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

function handshapeLabel(ref) {
  if (Array.isArray(ref)) return ref.join("+");
  return ref || "—";
}

function movementLabel(move) {
  if (!Array.isArray(move) || !move.length) return "hold";
  return move
    .map((m) => (m.path ? `${m.type}:${m.path}` : m.reps ? `${m.type}×${m.reps}` : m.type))
    .join(", ");
}

function showDesc(desc, clip = null) {
  $("signdesc").textContent = JSON.stringify(desc ?? clip ?? {}, null, 2);
  if (desc) {
    const trans = (desc.spoken || []).find((s) => /\s/.test(s) && s.toLowerCase() !== desc.gloss.toLowerCase());
    $("gloss").textContent = trans
      ? `${languageName(desc.language)}  ·  ${desc.gloss}  ·  1 sign`
      : `${languageName(desc.language)}  ·  ${desc.gloss}`;
  } else {
    $("gloss").textContent = clip?.signDescId || "—";
  }
  const badge = $("badge");
  const inspector = $("inspector");
  if (!desc && clip) {
    badge.textContent = clip.source || "clip";
    badge.className = clip.source === "authored" ? "ready" : "";
    inspector.textContent = `dropped ${clip.source || "clip"} · ${clip.duration?.toFixed?.(2) ?? "?"}s`;
    return;
  }
  if (!desc) {
    badge.textContent = "—";
    badge.className = "";
    inspector.textContent = "";
    return;
  }
  const ready = isCompilable(desc);
  badge.textContent = ready ? "compile-ready" : "lexicon-only — no motion yet";
  badge.className = ready ? "ready" : "";
  const art = desc.dominant || {};
  const translation = (desc.spoken || []).find((s) => /\s/.test(s) && s.toLowerCase() !== desc.gloss.toLowerCase());
  const trans = translation ? ` · translation: ${translation}` : "";
  inspector.innerHTML = `<b>${handshapeLabel(art.handshape)}</b> at <b>${art.location || "—"}</b>
    · ${art.orientation || "palm-out"}
    · ${movementLabel(art.movement)}
    · ${desc.handed || "1h"}
    · 1 sign
    · ${desc.source?.dataset || "authored"}${trans}`;
}

function playClip(clip, desc = null) {
  state.clip = clip;
  state.clipTime = 0;
  state.playing = true;
  state.lemma = desc;
  showDesc(desc, clip);
  const src = clip.source || "authored";
  setStatus(`marionet / ${desc?.id || clip.signDescId || src}`);
}

function playDesc(desc) {
  if (!isCompilable(desc)) {
    state.clip = null;
    state.playing = false;
    state.lemma = desc;
    if (state.vrm && state.rest) restorePose(state.vrm, state.rest);
    showDesc(desc);
    setStatus(`marionet / ${desc.id} — lexicon-only, no invented pose`);
    return;
  }
  playClip(compileSignDesc(desc), desc);
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
    DEMO_MODE === "ily"
      ? [{ caption: "ASL  ·  ILY", desc: ily }]
      : DEMO_MODE === "gato"
        ? [{ caption: "LENSEGUA  ·  GATO", desc: gato }]
        : [
            { caption: "ASL  ·  ILY", desc: ily },
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

function renderLanguages() {
  const sel = $("language");
  const current = state.language;
  const langs = languagesIn(state.lexicon);
  sel.innerHTML = "";
  const all = document.createElement("option");
  all.value = "all";
  all.textContent = "all languages";
  sel.append(all);
  for (const { code, name } of langs) {
    const opt = document.createElement("option");
    opt.value = code;
    opt.textContent = name;
    sel.append(opt);
  }
  sel.value = [...sel.options].some((o) => o.value === current) ? current : "all";
}

function renderResults() {
  const root = $("results");
  root.innerHTML = "";
  const hits = searchIndex(state.lexicon, {
    q: state.query,
    language: state.language,
    limit: 30,
  });
  if (!hits.length) {
    const empty = document.createElement("p");
    empty.className = "lede";
    empty.textContent = state.query ? "no lemmas" : "type to search the lexicon";
    root.append(empty);
    return;
  }
  for (const item of hits) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = item.desc.id === state.lemma?.id ? "hit active" : "hit";
    const ready = item.compileReady ? "ready" : "lexicon-only";
    const unit = item.letter ? "letter" : "1 sign";
    const trans = (item.desc.spoken || []).find((s) => /\s/.test(s) && s.toLowerCase() !== item.desc.gloss.toLowerCase());
    const extra = trans ? ` · “${trans}”` : "";
    btn.innerHTML = `${item.desc.gloss}<span class="meta">${languageName(item.desc.language)} · ${unit}${extra} · ${ready}</span>`;
    btn.addEventListener("click", () => selectLemma(item.desc));
    root.append(btn);
  }
}

function selectLetter(letter) {
  const desc = state.signs.get(letter);
  if (!desc) return;
  state.letter = letter;
  playDesc(desc);
  renderAlphabet();
}

function selectLemma(desc) {
  state.lemma = desc;
  if (desc.spoken?.[0] && LETTERS.includes(desc.spoken[0])) state.letter = desc.spoken[0];
  playDesc(desc);
  renderAlphabet();
  renderResults();
}

function applyMirror() {
  if (!state.vrm) return;
  state.vrm.scene.scale.x = state.mirror ? -1 : 1;
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
  applyMirror();
  if (vrm.lookAt) vrm.lookAt.target = camera;
  setStatus(`marionet / ${label}`);
  if (!DEMO && state.lemma) playDesc(state.lemma);
  else if (!DEMO && state.signs.has(state.letter)) selectLetter(state.letter);
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
        state.clipTime += delta * state.speed;
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
  const tag = event.target?.tagName;
  if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") return;
  const letter = event.key.toUpperCase();
  if (LETTERS.includes(letter)) {
    event.preventDefault();
    selectLetter(letter);
  }
});

function ingestJson(obj, label) {
  if (obj?.schema === "marionet.clip/v0") {
    const errors = validateClip(obj);
    if (errors.length) {
      setStatus(`marionet / invalid clip: ${errors[0]}`);
      return;
    }
    playClip(obj);
    return;
  }
  if (obj?.schema === "marionet.signdesc/v0") {
    const errors = validateSignDesc(obj);
    if (errors.length) {
      setStatus(`marionet / invalid SignDesc: ${errors[0]}`);
      return;
    }
    selectLemma(obj);
    return;
  }
  if (obj?.schema === "marionet.pose/v0") {
    const errors = validatePose(obj);
    setStatus(
      errors.length
        ? `marionet / invalid pose: ${errors[0]}`
        : "marionet / pose JSON is not playable — run scripts/video_to_marionet.py"
    );
    return;
  }
  setStatus(`marionet / ${label}: expected SignDesc or MarionetClip JSON`);
}

function onDrop(event) {
  event.preventDefault();
  $("hud").classList.remove("drop-target");
  const file = event.dataTransfer?.files?.[0];
  if (!file) return;
  const name = file.name.toLowerCase();
  if (name.endsWith(".vrm")) {
    file
      .arrayBuffer()
      .then((buf) => mountVrm(buf, file.name))
      .catch((err) => {
        console.error(err);
        setStatus("marionet / failed to load dropped VRM");
      });
    return;
  }
  if (name.endsWith(".json")) {
    file
      .text()
      .then((text) => ingestJson(JSON.parse(text), file.name))
      .catch((err) => {
        console.error(err);
        setStatus("marionet / failed to read dropped JSON");
      });
    return;
  }
  setStatus("marionet / drop a .vrm or .json clip");
}

document.addEventListener("dragover", (event) => {
  event.preventDefault();
  $("hud").classList.add("drop-target");
});
document.addEventListener("dragleave", () => $("hud").classList.remove("drop-target"));
document.addEventListener("drop", onDrop);

$("replay").addEventListener("click", () => {
  if (state.lemma) playDesc(state.lemma);
  else selectLetter(state.letter);
});
$("search").addEventListener("input", (event) => {
  state.query = event.target.value;
  renderResults();
});
$("language").addEventListener("change", (event) => {
  state.language = event.target.value;
  renderResults();
});
$("mirror").addEventListener("change", (event) => {
  state.mirror = event.target.checked;
  applyMirror();
});
$("speed").addEventListener("input", (event) => {
  state.speed = Number(event.target.value) || 1;
});
$("reset-avatar").addEventListener("click", () => {
  mountVrm(sampleUrl(), "sample avatar").catch((err) => {
    console.error(err);
    setStatus("marionet / failed to load sample avatar");
  });
});

window.marionet = state;
window.marionet.camera = camera;
window.marionet.controls = controls;
window.marionet.frameDemoCamera = frameDemoCamera;

async function boot() {
  renderAlphabet();
  setStatus("marionet / loading lexicon…");
  const { items, pending } = await loadLexicon();
  state.lexicon = items;
  for (const item of items) {
    const letter = item.desc.spoken?.[0];
    if (letter && LETTERS.includes(letter) && item.desc.id?.includes("/fs/")) {
      state.signs.set(letter, item.desc);
    }
  }
  renderLanguages();
  renderResults();
  pending.then(() => {
    renderLanguages();
    renderResults();
  });
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
