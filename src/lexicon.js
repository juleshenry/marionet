/** Polyglot lexicon index: load packs, search lemmas, never invent motion. */

import { isCompilable, languageName, validateSignDesc } from "./ir.js";

export function packSigns(data) {
  if (Array.isArray(data?.signs)) return data.signs;
  if (data?.schema === "marionet.signdesc/v0") return [data];
  return [];
}

export function indexSign(desc) {
  const phrases = (desc.spoken || []).map((s) => String(s).toLowerCase()).filter(Boolean);
  const gloss = (desc.gloss || "").toLowerCase();
  const hay = `${desc.id} ${desc.language} ${desc.gloss} ${phrases.join(" ")}`.toLowerCase();
  return {
    desc,
    hay,
    phrases,
    gloss,
    language: desc.language,
    compileReady: isCompilable(desc),
    letter: Boolean(desc.id?.includes("/fs/")),
  };
}

export function languagesIn(items) {
  const codes = [...new Set(items.map((it) => it.language).filter(Boolean))].sort();
  return codes.map((code) => ({ code, name: languageName(code) }));
}

function searchScore(item, query) {
  if (!query) return item.letter || !item.desc.id?.includes("/asllex/") ? 1 : -1;
  if (item.gloss === query || item.phrases.some((p) => p === query)) return 100;
  // A multi-word spoken string is one sign. Do not split it on spaces.
  if (query.includes(" ") && item.phrases.some((p) => p.includes(query) || query.includes(p))) return 90;
  if (item.phrases.some((p) => p.startsWith(query))) return 50;
  if (item.hay.includes(query)) return 10;
  return 0;
}

export function searchIndex(items, { q = "", language = "all", limit = 40 } = {}) {
  const query = q.trim().toLowerCase();
  const ranked = [];
  for (const item of items) {
    if (language !== "all" && item.language !== language) continue;
    const score = searchScore(item, query);
    if (score <= 0) continue;
    ranked.push({ item, score });
  }
  ranked.sort((a, b) => b.score - a.score);
  return ranked.slice(0, limit).map((r) => r.item);
}

export async function loadPack(pack) {
  const data = await fetch(pack.path).then((r) => {
    if (!r.ok) throw new Error(`failed to load ${pack.path}`);
    return r.json();
  });
  const signs = [];
  for (const desc of packSigns(data)) {
    const errors = validateSignDesc(desc);
    if (errors.length) {
      console.warn(desc.id, errors);
      continue;
    }
    signs.push(indexSign(desc));
  }
  return signs;
}

export async function loadLexicon(indexUrl = "./data/signs/index.json") {
  const index = await fetch(indexUrl).then((r) => r.json());
  const immediate = [];
  const deferred = [];
  for (const pack of index.packs || []) {
    (pack.defer ? deferred : immediate).push(pack);
  }
  const items = [];
  for (const pack of immediate) {
    items.push(...(await loadPack(pack)));
  }
  const pending = Promise.all(deferred.map((pack) => loadPack(pack).catch((err) => {
    console.warn(pack.path, err);
    return [];
  }))).then((chunks) => {
    for (const chunk of chunks) items.push(...chunk);
    return items;
  });
  return { items, pending, packs: index.packs };
}
