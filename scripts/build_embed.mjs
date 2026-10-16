/**
 * Build the embeddable player into dist/embed/: embed.html as index.html, the modules it
 * imports, and three + three-vrm copied out of node_modules, so a site can host the player
 * with nothing loaded from a CDN.
 *
 * Usage: node scripts/build_embed.mjs [outDir]     (default dist/embed)
 */
import { execSync } from "node:child_process";
import { copyFileSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { pageModules } from "./page_modules.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, process.argv[2] || "dist/embed");

// The bare names the modules import, and the files they stand for (as embed.html's import map
// has them on the CDN).
const BARE = {
  three: "node_modules/three/build/three.module.min.js",
  "three/addons/": "node_modules/three/examples/jsm/",
  "@pixiv/three-vrm": "node_modules/@pixiv/three-vrm/lib/three-vrm.module.min.js",
};
const LICENCES = ["node_modules/three/LICENSE", "node_modules/@pixiv/three-vrm/LICENSE"];

const published = (file) => (file.startsWith("node_modules/") ? `vendor/${file.slice("node_modules/".length)}` : file);

const html = readFileSync(join(root, "embed.html"), "utf8");
const files = pageModules(root, "embed.html", BARE);

rmSync(outDir, { recursive: true, force: true });
for (const file of [...files, ...LICENCES]) {
  const dest = join(outDir, published(file));
  mkdirSync(dirname(dest), { recursive: true });
  copyFileSync(join(root, file), dest);
}

const imports = Object.fromEntries(Object.entries(BARE).map(([name, file]) => [name, `./${published(file)}`]));
const map = `<script type="importmap">\n      ${JSON.stringify({ imports }, null, 2).replace(/\n/g, "\n      ")}\n    </script>`;
const page = html.replace(/<script type="importmap">[\s\S]*?<\/script>/, map);
if (page === html) throw new Error("embed.html has no import map to replace");
writeFileSync(join(outDir, "index.html"), page);

let version = "unknown";
try {
  const commit = execSync("git rev-parse --short HEAD", { cwd: root }).toString().trim();
  // only the files the embed ships: other work in progress does not make it a local build
  const shipped = ["embed.html", ...[...files].filter((file) => !file.startsWith("node_modules/"))];
  const dirty = execSync(`git status --porcelain -- ${shipped.join(" ")}`, { cwd: root }).toString().trim();
  version = dirty ? `${commit}+local` : commit;
} catch {
  /* not a git checkout */
}
writeFileSync(join(outDir, "VERSION"), `${version}\n`);

console.log(`built ${relative(root, outDir)}/  ${files.size} modules  marionet ${version}`);
