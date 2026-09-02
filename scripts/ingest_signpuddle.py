#!/usr/bin/env python3
"""Official SignPuddle ASL SPML → gloss coverage. Notation only, no video.

Re-fetch (cap 20 MB):
  curl -L --max-filesize 20971520 -A 'marionet-research/0.1' \\
    -o data/raw/sgn4.spml \\
    https://www.signbank.org/signpuddle2.0/data/spml/sgn4.spml
"""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
RAW = ROOT / "data/raw/sgn4.spml"
ASLLEX = ROOT / "data/signs/ase/asllex_signdesc.json"
OUT = ROOT / "data/signs/ase/signpuddle_glosses.json"
COVERAGE = ROOT / "data/signs/ase/coverage.json"

ENTRY_RE = re.compile(r"<entry\b[^>]*>(.*?)</entry>", re.S)
TERM_RE = re.compile(r"<term>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?</term>", re.S)
FSW_RE = re.compile(r"^A?S[0-9a-f]{5}", re.I)


def is_fsw(term: str) -> bool:
    t = term.strip()
    if t.startswith("M") and "x" in t and len(t) > 20:
        return True
    return bool(FSW_RE.match(t.replace(" ", "")))


def parse(xml: str) -> list[dict]:
    out = []
    for body in ENTRY_RE.findall(xml):
        terms = [t.strip() for t in TERM_RE.findall(body) if t.strip()]
        fsw = next((t for t in terms if is_fsw(t)), None)
        glosses = [t for t in terms if not is_fsw(t)]
        if not glosses and not fsw:
            continue
        out.append({"glosses": glosses, "fsw": fsw})
    return out


def norm(s: str) -> str:
    return re.sub(r"[^a-z0-9]+", "", s.lower())


def main() -> None:
    if not RAW.exists():
        raise SystemExit(f"missing {RAW}; see script docstring")
    entries = parse(RAW.read_text(encoding="utf-8", errors="replace"))
    gloss_set = []
    seen = set()
    for e in entries:
        for g in e["glosses"]:
            key = g.lower()
            if key not in seen:
                seen.add(key)
                gloss_set.append(g)
    overlap = []
    asllex_n = 0
    if ASLLEX.exists():
        pack = json.loads(ASLLEX.read_text())
        asllex_n = pack.get("n") or len(pack.get("signs", []))
        puddle_norm = {norm(g) for g in gloss_set}
        for sign in pack.get("signs", []):
            candidates = [sign.get("gloss") or ""] + sign.get("spoken", [])
            if any(norm(c) in puddle_norm for c in candidates if c):
                overlap.append(sign["id"])
    OUT.write_text(
        json.dumps(
            {
                "dataset": "signpuddle-asl-sgn4",
                "sourceUrl": "https://www.signbank.org/signpuddle2.0/data/spml/sgn4.spml",
                "nEntries": len(entries),
                "nGlosses": len(gloss_set),
                "glosses": gloss_set,
            },
            indent=2,
        )
        + "\n"
    )
    coverage = json.loads(COVERAGE.read_text()) if COVERAGE.exists() else {}
    coverage["signpuddle"] = {
        "nEntries": len(entries),
        "nGlosses": len(gloss_set),
        "asllexOverlap": len(overlap),
        "asllexN": asllex_n,
    }
    COVERAGE.write_text(json.dumps(coverage, indent=2) + "\n")
    print(f"wrote {OUT} ({len(entries)} entries, {len(gloss_set)} glosses, overlap {len(overlap)})")


if __name__ == "__main__":
    main()
