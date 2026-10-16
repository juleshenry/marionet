/**
 * The files a page loads as modules: each <script type="module" src="./…"> in it and everything
 * those import, followed through relative paths and bare names. scripts/build_embed.mjs ships
 * them; scripts/render_videos.mjs hashes them, so a change to any module the player loads redraws
 * the videos.
 */
import { readFileSync } from "node:fs";
import { join, posix } from "node:path";

const IMPORT = /\bfrom\s*["']([^"']+)["']|\bimport\s*["']([^"']+)["']|\bimport\(\s*["']([^"']+)["']\s*\)/g;

/** The page's own import map, as paths from the root: { three: "node_modules/three/…", … } */
function pageImportMap(html) {
  const map = html.match(/<script type="importmap">([\s\S]*?)<\/script>/);
  const imports = map ? JSON.parse(map[1]).imports : {};
  return Object.fromEntries(Object.entries(imports).map(([name, file]) => [name, file.replace(/^\.\//, "")]));
}

function resolve(specifier, from, bare) {
  if (specifier.startsWith("./") || specifier.startsWith("../")) return posix.join(posix.dirname(from), specifier);
  if (bare[specifier] && !specifier.endsWith("/")) return bare[specifier];
  for (const [prefix, target] of Object.entries(bare)) {
    if (prefix.endsWith("/") && specifier.startsWith(prefix)) return target + specifier.slice(prefix.length);
  }
  // URLs in comments (GLTFLoader's usage notes) and anything else the page does not load
  return null;
}

/**
 * @param root the repository
 * @param page an HTML file under it, e.g. "render.html"
 * @param bare the files bare names stand for; by default the page's import map
 * @returns the module files, as paths from the root, in the order they were found
 */
export function pageModules(root, page, bare) {
  const html = readFileSync(join(root, page), "utf8");
  bare ??= pageImportMap(html);
  const files = new Set();
  const queue = [...html.matchAll(/<script type="module" src="\.\/([^"]+)"/g)].map((m) => m[1]);
  while (queue.length) {
    const file = queue.shift();
    if (files.has(file)) continue;
    files.add(file);
    const text = readFileSync(join(root, file), "utf8");
    for (const match of text.matchAll(IMPORT)) {
      const target = resolve(match[1] || match[2] || match[3], file, bare);
      if (target && !files.has(target)) queue.push(target);
    }
  }
  return files;
}
