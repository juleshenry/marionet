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
 * A viewer's own .vrm files are read in the browser and kept in its IndexedDB, as many as they
 * add, under names they can change; they are never uploaded.
 */

const $ = (id) => document.getElementById(id);
const params = new URLSearchParams(location.search);
if (params.get("theme") === "light") document.documentElement.dataset.theme = "light";
if (/^[0-9a-f]{6}$/i.test(params.get("bg") || "")) document.documentElement.style.setProperty("--bg", `#${params.get("bg")}`);
const OWN = "own:"; // before the id of one of the viewer's own avatars, in the menu and the saved choice
const UPLOAD = "upload"; // the "add your own" entry of the menu
const MANAGE = "manage"; // the "rename or remove" entry of the menu
const CHOICE_KEY = "marionet.avatar";
const NAME_LENGTH = 40;

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

// One IndexedDB store of the viewer's own avatars: id → { name, file: Blob, added }. Listing them
// reads no file: a stored Blob is read when its avatar goes on stage. `act` gives a request, or
// several, whose results the promise resolves to.
function ownStore(mode, act) {
  return new Promise((resolve, reject) => {
    try {
      const open = indexedDB.open("marionet", 1);
      open.onupgradeneeded = () => open.result.createObjectStore("avatars");
      open.onerror = () => reject(open.error);
      open.onsuccess = () => {
        const db = open.result;
        const tx = db.transaction("avatars", mode);
        const requests = act(tx.objectStore("avatars"));
        tx.oncomplete = () => {
          db.close();
          resolve(Array.isArray(requests) ? requests.map((r) => r.result) : requests.result);
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

const LEGACY = "own"; // the id of the one avatar kept before there could be several

async function listOwn() {
  const [ids, records] = await ownStore("readonly", (store) => [store.getAllKeys(), store.getAll()]);
  const own = [];
  for (const [i, id] of ids.entries()) {
    let record = records[i];
    if (id === LEGACY && record instanceof ArrayBuffer) {
      record = { name: "Your avatar", file: new Blob([record]), added: 0 };
      await ownStore("readwrite", (store) => store.put(record, id)).catch(() => null);
    }
    if (!(record?.file instanceof Blob)) continue;
    own.push({ id: String(id), name: record.name || "Your avatar", file: record.file, added: record.added || 0, kept: true });
  }
  return own.sort((a, b) => a.added - b.added);
}

/** Keep an avatar in the browser; false when it would not (storage full or blocked). */
async function keepOwn(avatar) {
  try {
    await ownStore("readwrite", (store) => store.put({ name: avatar.name, file: avatar.file, added: avatar.added }, avatar.id));
  } catch (err) {
    console.error(err);
    return false;
  }
  avatar.kept = true;
  // Ask the browser not to clear it when space runs short. Chrome decides by itself, Firefox asks.
  navigator.storage?.persist?.().catch(() => null);
  return true;
}

const forgetOwn = (id) => ownStore("readwrite", (store) => store.delete(id)).catch(() => null);

function newId() {
  return crypto.randomUUID?.() ?? `${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`;
}

const nameOf = (file) => file.name.replace(/\.vrm$/i, "").trim().slice(0, NAME_LENGTH) || "Your avatar";

let statusTimer = 0;
function setStatus(text, { for: ms } = {}) {
  clearTimeout(statusTimer);
  $("status").textContent = text;
  if (ms) statusTimer = setTimeout(() => setStatus(""), ms);
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
const state = { roster: [], choice: null, own: [], clip: null, ready: false };
let playToken = 0;

const isOwn = (choice) => typeof choice === "string" && choice.startsWith(OWN);
const ownOf = (choice) => (isOwn(choice) ? state.own.find((a) => a.id === choice.slice(OWN.length)) : null);

function renderMenu() {
  const menu = $("avatar");
  menu.innerHTML = "";
  const add = (value, label, parent = menu) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    parent.append(option);
  };
  if (state.roster.length) for (const a of state.roster) add(a.id, a.label);
  else add("sample", "Sample avatar");
  // an avatar given by URL rather than from the roster
  if (state.choice && !isOwn(state.choice) && ![...menu.options].some((o) => o.value === state.choice)) add(state.choice, "This avatar");
  const yours = document.createElement("optgroup");
  yours.label = "Yours";
  for (const a of state.own) add(OWN + a.id, a.name, yours);
  add(UPLOAD, "Add your own .vrm…", yours);
  if (state.own.length) add(MANAGE, "Rename or remove…", yours);
  menu.append(yours);
  menu.value = state.choice ?? menu.options[0].value;
}

/** What a choice loads: one of the viewer's own files, a roster avatar, or a .vrm URL. */
async function sourceOf(choice) {
  if (isOwn(choice)) return ownOf(choice)?.file.arrayBuffer().catch(() => null) ?? null;
  const listed = state.roster.find((a) => a.id === choice);
  if (listed) return listed.url;
  if (choice && /[/.]/.test(choice)) return new URL(choice, location.href).href;
  return state.roster[0]?.url ?? sampleUrl();
}

/** Put an avatar on stage: true once it is there, false when it fails, null when a later choice won. */
async function useAvatar(choice) {
  const source = await sourceOf(choice);
  if (!source) return useAvatar(null);
  setStatus("Loading avatar…");
  try {
    if (!(await player.loadAvatar(source))) return null;
  } catch (err) {
    if (choice === remember.get(CHOICE_KEY)) remember.set(CHOICE_KEY, null);
    fail(isOwn(choice) ? "That file is not a VRM avatar this player can read." : "Could not load this avatar.", err);
    return false;
  }
  const listed = state.roster.find((a) => a.id === choice);
  state.choice = isOwn(choice) || listed ? choice : state.roster.find((a) => a.url === source)?.id ?? choice;
  player.frameSigningSpace();
  renderMenu();
  setStatus("");
  if (!state.ready) {
    state.ready = true;
    post({ type: "marionet:ready" });
  }
  return true;
}

/** A file the viewer picked: kept only once it has loaded as an avatar. */
async function addOwn(file) {
  const avatar = { id: newId(), name: nameOf(file), file, added: Date.now(), kept: false };
  state.own.push(avatar);
  const choice = OWN + avatar.id;
  if ((await useAvatar(choice)) === false) {
    state.own = state.own.filter((a) => a !== avatar);
    renderMenu();
    renderMine();
    return;
  }
  remember.set(CHOICE_KEY, choice);
  if (!(await keepOwn(avatar))) setStatus("This browser would not keep the file: the avatar lasts for this visit.", { for: 6000 });
  renderMenu();
  renderMine();
}

async function renameOwn(avatar, name) {
  avatar.name = name.trim().slice(0, NAME_LENGTH) || avatar.name;
  if (avatar.kept) await keepOwn(avatar);
  renderMenu();
}

async function removeOwn(avatar) {
  await forgetOwn(avatar.id);
  state.own = state.own.filter((a) => a !== avatar);
  if (state.choice === OWN + avatar.id) {
    remember.set(CHOICE_KEY, null);
    state.choice = null;
    await useAvatar(params.get("avatar"));
  }
  renderMenu();
  renderMine();
  if (!state.own.length) closeMine();
}

// The panel that lists the viewer's own avatars, to rename or remove them.
function renderMine() {
  const list = $("mine-list");
  list.innerHTML = "";
  for (const avatar of state.own) {
    const row = document.createElement("li");
    const name = document.createElement("input");
    name.value = avatar.name;
    name.maxLength = NAME_LENGTH;
    name.setAttribute("aria-label", "Name");
    name.addEventListener("change", () => renameOwn(avatar, name.value).then(() => (name.value = avatar.name)));
    name.addEventListener("keydown", (event) => event.key === "Enter" && name.blur());
    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "Remove";
    // A second press removes it, while the button asks.
    let asking = 0;
    remove.addEventListener("click", () => {
      if (!asking) {
        remove.textContent = "Sure?";
        asking = setTimeout(() => {
          remove.textContent = "Remove";
          asking = 0;
        }, 3000);
        return;
      }
      clearTimeout(asking);
      removeOwn(avatar);
    });
    row.append(name, remove);
    if (!avatar.kept) {
      const note = document.createElement("small");
      note.textContent = "this visit only";
      row.append(note);
    }
    list.append(row);
  }
}

function openMine() {
  renderMine();
  $("mine").hidden = false;
  $("mine-done").focus();
}

function closeMine() {
  $("mine").hidden = true;
  $("avatar").focus();
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
  if (choice === UPLOAD || choice === MANAGE) {
    event.target.value = state.choice ?? event.target.options[0].value;
    if (choice === UPLOAD) $("file").click();
    else openMine();
    return;
  }
  remember.set(CHOICE_KEY, choice);
  useAvatar(choice);
});

$("file").addEventListener("change", (event) => {
  const file = event.target.files?.[0];
  event.target.value = "";
  if (file) addOwn(file);
});

$("mine-add").addEventListener("click", () => $("file").click());
$("mine-done").addEventListener("click", closeMine);
$("mine").addEventListener("keydown", (event) => event.key === "Escape" && closeMine());

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
  state.own = await listOwn().catch(() => []);
  // A choice the viewer made before wins over the avatar the page suggests.
  let saved = remember.get(CHOICE_KEY);
  if (saved === LEGACY) remember.set(CHOICE_KEY, (saved = OWN + LEGACY));
  const first = ownOf(saved) || (saved && state.roster.some((a) => a.id === saved)) ? saved : params.get("avatar");
  renderMenu();
  const clip = params.get("clip");
  await Promise.all([useAvatar(first), clip ? playClip(clip) : null]);
}

boot().catch((err) => fail("The player could not start.", err));
