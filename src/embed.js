import { validateClip } from "./ir.js";
import { createPlayer } from "./player.js";
import { sampleUrl } from "./vrm.js";

/**
 * The player as a page another page frames:
 *
 *   embed.html?clip=<clip.json>&avatars=<roster.json>&avatar=<roster id or .vrm url>&speed=0.5
 *             &theme=light&bg=f4ecd8      (match a light page whatever the viewer's system prefers)
 *
 * The framing page (same origin only) can then post
 *   { type: "marionet:play", clip: <url or MarionetClip> }
 *   { type: "marionet:avatar", avatar: <roster id or .vrm url> }
 * and hears { type: "marionet:ready" } once an avatar is on stage, and
 * { type: "marionet:error", message } when something fails.
 *
 * A viewer's own .vrm is read in the browser and kept in its IndexedDB; it is never uploaded.
 */

const $ = (id) => document.getElementById(id);
const params = new URLSearchParams(location.search);
if (params.get("theme") === "light") document.documentElement.dataset.theme = "light";
if (/^[0-9a-f]{6}$/i.test(params.get("bg") || "")) document.documentElement.style.setProperty("--bg", `#${params.get("bg")}`);
const OWN = "own"; // the viewer's own avatar
const UPLOAD = "upload"; // the "use your own" entry of the menu
const CHOICE_KEY = "marionet.avatar";

const remember = {
  get(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      if (value == null) localStorage.removeItem(key);
      else localStorage.setItem(key, value);
    } catch {
      /* storage blocked: the choice lasts for this visit */
    }
  },
};

// One IndexedDB store holding one record: the viewer's own avatar file.
function ownStore(mode, act) {
  return new Promise((resolve, reject) => {
    try {
      const open = indexedDB.open("marionet", 1);
      open.onupgradeneeded = () => open.result.createObjectStore("avatars");
      open.onerror = () => reject(open.error);
      open.onsuccess = () => {
        const db = open.result;
        const tx = db.transaction("avatars", mode);
        const request = act(tx.objectStore("avatars"));
        tx.oncomplete = () => {
          db.close();
          resolve(request.result);
        };
        tx.onerror = () => {
          db.close();
          reject(tx.error);
        };
      };
    } catch (err) {
      reject(err);
    }
  });
}
const saveOwn = (buffer) => ownStore("readwrite", (store) => store.put(buffer, OWN)).catch(() => null);
const readOwn = () => ownStore("readonly", (store) => store.get(OWN)).catch(() => null);

function setStatus(text) {
  $("status").textContent = text;
}

function post(message) {
  if (window.parent !== window) window.parent.postMessage(message, location.origin);
}

function fail(text, err) {
  if (err) console.error(err);
  setStatus(text);
  post({ type: "marionet:error", message: text });
}

async function loadRoster(url) {
  if (!url) return [];
  try {
    const base = new URL(url, location.href);
    const response = await fetch(base);
    if (!response.ok) throw new Error(`${response.status} ${base}`);
    const { avatars = [] } = await response.json();
    return avatars.map((a) => ({ id: a.id, label: a.label || a.id, url: new URL(a.url, base).href }));
  } catch (err) {
    console.error(err);
    return [];
  }
}

// No floor: the frame sits on the host page's own background.
const player = createPlayer($("stage"), { floor: false });
const state = { roster: [], choice: null, own: null, clip: null, ready: false };
let playToken = 0;

function renderMenu() {
  const menu = $("avatar");
  menu.innerHTML = "";
  const add = (value, label) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    menu.append(option);
  };
  if (state.roster.length) for (const a of state.roster) add(a.id, a.label);
  else add("sample", "Sample avatar");
  if (state.own) add(OWN, "Your avatar");
  add(UPLOAD, "Use your own .vrm…");
  menu.value = state.choice ?? menu.options[0].value;
}

/** What a choice loads: the viewer's own file, a roster avatar, or a .vrm URL. */
async function sourceOf(choice) {
  if (choice === OWN) {
    state.own ??= await readOwn();
    return state.own;
  }
  const listed = state.roster.find((a) => a.id === choice);
  if (listed) return listed.url;
  if (choice && /[/.]/.test(choice)) return new URL(choice, location.href).href;
  return state.roster[0]?.url ?? sampleUrl();
}

async function useAvatar(choice) {
  const source = await sourceOf(choice);
  if (!source) return useAvatar(null);
  setStatus("Loading avatar…");
  try {
    if (!(await player.loadAvatar(source))) return; // a later choice won
  } catch (err) {
    if (choice === remember.get(CHOICE_KEY)) remember.set(CHOICE_KEY, null);
    fail(choice === OWN ? "That file is not a VRM avatar this player can read." : "Could not load this avatar.", err);
    return;
  }
  const listed = state.roster.find((a) => a.id === choice);
  state.choice = choice === OWN || listed ? choice : state.roster.find((a) => a.url === source)?.id ?? choice;
  player.frameSigningSpace();
  renderMenu();
  setStatus("");
  if (!state.ready) {
    state.ready = true;
    post({ type: "marionet:ready" });
  }
}

async function playClip(source) {
  const token = ++playToken;
  try {
    let clip = source;
    if (typeof source === "string") {
      const response = await fetch(new URL(source, location.href));
      if (!response.ok) throw new Error(`${response.status} ${source}`);
      clip = await response.json();
    }
    if (token !== playToken) return;
    const errors = validateClip(clip);
    if (errors.length) throw new Error(errors[0]);
    state.clip = clip;
    player.play(clip, { loop: true });
  } catch (err) {
    fail("Could not load this sign.", err);
  }
}

function setSpeed(speed) {
  player.setSpeed(speed);
  for (const button of document.querySelectorAll("[data-speed]")) {
    button.setAttribute("aria-pressed", String(Number(button.dataset.speed) === speed));
  }
}

$("avatar").addEventListener("change", (event) => {
  const choice = event.target.value;
  if (choice === UPLOAD) {
    event.target.value = state.choice ?? event.target.options[0].value;
    $("file").click();
    return;
  }
  remember.set(CHOICE_KEY, choice);
  useAvatar(choice);
});

$("file").addEventListener("change", async (event) => {
  const file = event.target.files?.[0];
  event.target.value = "";
  if (!file) return;
  try {
    state.own = await file.arrayBuffer();
  } catch (err) {
    fail("Could not read that file.", err);
    return;
  }
  await saveOwn(state.own);
  remember.set(CHOICE_KEY, OWN);
  useAvatar(OWN);
});

for (const button of document.querySelectorAll("[data-speed]")) {
  button.addEventListener("click", () => setSpeed(Number(button.dataset.speed)));
}

$("replay").addEventListener("click", () => {
  if (state.clip) player.play(state.clip, { loop: true });
});

window.addEventListener("message", (event) => {
  if (event.origin !== location.origin) return;
  const message = event.data || {};
  if (message.type === "marionet:play" && message.clip) playClip(message.clip);
  else if (message.type === "marionet:avatar" && message.avatar) useAvatar(message.avatar);
});

// The camera's framing depends on the stage's shape; keep it when the frame is resized.
new ResizeObserver(() => player.frameSigningSpace()).observe($("stage"));

async function boot() {
  if (!player.ok) {
    fail("The 3D avatar needs WebGL, which this browser does not offer.");
    return;
  }
  const speed = Number(params.get("speed"));
  if ([0.25, 0.5, 1].includes(speed)) setSpeed(speed);
  state.roster = await loadRoster(params.get("avatars"));
  // A choice the viewer made before wins over the avatar the page suggests.
  const saved = remember.get(CHOICE_KEY);
  if (saved === OWN) state.own = await readOwn();
  const first = (saved === OWN && state.own) || (saved && state.roster.some((a) => a.id === saved)) ? saved : params.get("avatar");
  renderMenu();
  const clip = params.get("clip");
  await Promise.all([useAvatar(first), clip ? playClip(clip) : null]);
}

boot().catch((err) => fail("The player could not start.", err));
