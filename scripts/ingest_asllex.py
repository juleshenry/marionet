#!/usr/bin/env python3
"""ASL-LEX 2.0 OSF spreadsheet → SignDesc. Features only, no video.

Re-fetch (cap 20 MB):
  curl -L --max-filesize 20971520 -o data/raw/asllex_signdata.csv https://osf.io/download/9nygd/
  curl -L --max-filesize 20971520 -o data/raw/asllex_signdataKEY.csv https://osf.io/download/ygq4v/
"""

from __future__ import annotations

import csv
import json
from collections import Counter
from io import StringIO
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
RAW = ROOT / "data/raw/asllex_signdata.csv"
MAP_PATH = ROOT / "data/sources/v0_library_map.json"
OUT = ROOT / "data/signs/ase/asllex_signdesc.json"
COVERAGE = ROOT / "data/signs/ase/coverage.json"

PHON_COLS = [
    "Handshape.2.0",
    "MarkedHandshape.2.0",
    "SelectedFingers.2.0",
    "Flexion.2.0",
    "FlexionChange.2.0",
    "Spread.2.0",
    "SpreadChange.2.0",
    "ThumbPosition.2.0",
    "ThumbContact.2.0",
    "SignType.2.0",
    "Movement.2.0",
    "RepeatedMovement.2.0",
    "MajorLocation.2.0",
    "MinorLocation.2.0",
    "SecondMinorLocation.2.0",
    "Contact.2.0",
    "NonDominantHandshape.2.0",
    "UlnarRotation.2.0",
]


def slug(s: str) -> str:
    out = []
    for ch in s.strip().lower():
        out.append(ch if ch.isalnum() else "-")
    collapsed = "".join(out).strip("-")
    while "--" in collapsed:
        collapsed = collapsed.replace("--", "-")
    return collapsed or "entry"


def load_rows() -> list[dict]:
    text = RAW.read_bytes().decode("utf-8", errors="replace")
    return list(csv.DictReader(StringIO(text)))


def convert(rows: list[dict], mapping: dict) -> list[dict]:
    hs_map = {k.lower(): v for k, v in mapping["handshape"].items()}
    loc_map = mapping["majorLocation"]
    type_map = mapping["signType"]
    seen_ids: dict[str, int] = {}
    signs = []
    for row in rows:
        entry = (row.get("EntryID") or "").strip()
        lemma = (row.get("LemmaID") or "").strip()
        hs_raw = (row.get("Handshape.2.0") or "").strip()
        loc_raw = (row.get("MajorLocation.2.0") or "").strip()
        type_raw = (row.get("SignType.2.0") or "").strip()
        gloss = (row.get("SignBankLemmaID") or lemma or entry).strip() or "UNKNOWN"
        sid = f"ase/asllex/{slug(entry)}"
        if sid in seen_ids:
            seen_ids[sid] += 1
            sid = f"{sid}-{seen_ids[sid]}"
        else:
            seen_ids[sid] = 1

        lib_hs = hs_map.get(hs_raw.lower()) if hs_raw else None
        lib_loc = loc_map.get(loc_raw)
        handed = type_map.get(type_raw, "1h")
        phonology = {col: (row.get(col) or "").strip() or None for col in PHON_COLS}
        nd = (row.get("NonDominantHandshape.2.0") or "").strip()
        desc = {
            "schema": "marionet.signdesc/v0",
            "id": sid,
            "language": "ase",
            "gloss": gloss,
            "spoken": [entry] if entry else [],
            "handed": handed,
            "lexicalClass": (row.get("LexicalClass") or "").strip() or None,
            "dominant": {
                "handshape": lib_hs or hs_raw or "unknown",
                "location": lib_loc or loc_raw or "unknown",
                "movement": [],
            },
            "library": {"handshape": lib_hs, "location": lib_loc},
            "compileReady": bool(lib_hs and lib_loc),
            "source": {
                "dataset": "asl-lex-2.0",
                "entryId": entry,
                "lemmaId": lemma,
                "code": (row.get("Code") or "").strip() or None,
                "signbankLemmaId": (row.get("SignBankLemmaID") or "").strip() or None,
                "signbankAnnotationId": (row.get("SignBankAnnotationID") or "").strip() or None,
                "phonology": phonology,
            },
        }
        if nd and nd not in {"NA", ""}:
            nd_lib = hs_map.get(nd.lower())
            desc["nondominant"] = {
                "handshape": nd_lib or nd,
                "role": "base",
            }
        signs.append(desc)
    return signs


def main() -> None:
    if not RAW.exists():
        raise SystemExit(f"missing {RAW}; see script docstring")
    mapping = json.loads(MAP_PATH.read_text())
    rows = load_rows()
    signs = convert(rows, mapping)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(
        json.dumps(
            {"dataset": "asl-lex-2.0", "license": "CC-BY-4.0", "n": len(signs), "signs": signs},
            separators=(",", ":"),
        )
        + "\n"
    )
    hs = Counter(s["source"]["phonology"]["Handshape.2.0"] for s in signs)
    loc = Counter(s["source"]["phonology"]["MajorLocation.2.0"] for s in signs)
    ready = sum(1 for s in signs if s["compileReady"])
    coverage = {
        "asllex": {
            "n": len(signs),
            "compileReady": ready,
            "handshapeMapped": sum(1 for s in signs if s["library"]["handshape"]),
            "locationMapped": sum(1 for s in signs if s["library"]["location"]),
            "handshapeInventory": dict(hs.most_common()),
            "majorLocationInventory": dict(loc.most_common()),
        }
    }
    if COVERAGE.exists():
        prev = json.loads(COVERAGE.read_text())
        prev.update(coverage)
        coverage = prev
    COVERAGE.write_text(json.dumps(coverage, indent=2) + "\n")
    print(f"wrote {OUT} ({len(signs)} signs, {ready} compileReady)")


if __name__ == "__main__":
    main()
