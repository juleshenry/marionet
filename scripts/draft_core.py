#!/usr/bin/env python3
"""Draft the everyday ASL signs of data/sources/core_batch.json into data/signs/ase/core.json.

The batch is the most-used compile-ready ASL-LEX rows (SignFrequency(M)), less the ones the
config skips or folds into another. Each new sign is drafted from its ASL-LEX row: its handshape,
location and movement as ingest_asllex.py mapped them, the English meanings the config gives, and
a todo of everything a person must still fill in or check, worked out from the row's phonology
(direction, contact, palm, a second handshape, a second location, the base hand). A sign already
in core.json is never touched: from its draft on, core.json is where it is filled out.

Usage: python3 scripts/draft_core.py           add the signs core.json lacks, write data/runs/core/round-N.txt
       python3 scripts/draft_core.py --list    print the batch and what each sign still needs
"""

from __future__ import annotations

import argparse
import csv
import json
import re
from collections import Counter
from io import StringIO
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
RAW = ROOT / "data/raw/asllex_signdata.csv"
ASLLEX = ROOT / "data/signs/ase/asllex_signdesc.json"
CONFIG = ROOT / "data/sources/core_batch.json"
CORE = ROOT / "data/signs/ase/core.json"
ROUNDS = ROOT / "data/runs/core"
# asl-lex.org has no link to one sign: the reviewer searches its visualization for the entry.
REFERENCE = "https://asl-lex.org/visualization/"
# Where ASL-LEX's minor locations are only "away from" a body part, ingest_asllex.py guessed one.
VAGUE_LOCATIONS = {"HeadAway", "BodyAway", "HandAway", "Other"}


def frequency(row: dict) -> float:
    try:
        return float(row.get("SignFrequency(M)") or 0)
    except ValueError:
        return 0.0


def batch(config: dict, signs: dict, rows: dict) -> list[str]:
    """The batch's ASL-LEX entry ids, most used first."""
    folded = {f for spec in config["signs"].values() for f in spec.get("folds", [])}
    ready = [e for e, s in signs.items() if s["compileReady"] and e in rows]
    ready.sort(key=lambda e: -frequency(rows[e]))
    chosen = [e for e in ready if e not in config["skip"] and e not in folded][: config["size"]]
    missing = sorted(set(config["signs"]) - set(chosen))
    unwritten = [e for e in chosen if e not in config["signs"]]
    if missing or unwritten:
        raise SystemExit(f"core_batch.json is out of step with the ranking: not in the batch {missing}; no meanings for {unwritten}")
    return chosen


def clean_gloss(sign: dict, spec: dict) -> str:
    if spec.get("gloss"):
        return spec["gloss"]
    gloss = sign["gloss"]
    if gloss.startswith("~") or gloss != gloss.upper():
        gloss = re.sub(r"_\d+$", "", sign["source"]["entryId"]).replace("_", "-").upper()
    return gloss


def todo_of(sign: dict, phon: dict, spec: dict) -> list[str]:
    """What ASL-LEX does not say about the form, or says in a way the compiler cannot show yet."""
    todo = ["orientation"]
    move = phon.get("Movement.2.0")
    if move in ("Straight", "Curved"):
        todo.append("direction")
    elif move == "Circular":
        todo.append("circle")
    elif move not in (None, "None"):
        todo.append(f"movement ({move})")
    if phon.get("Contact.2.0") == "1":
        todo.append("contact")
    if phon.get("UlnarRotation.2.0") == "1":
        todo.append("twist")
    second = phon.get("SecondMinorLocation.2.0")
    if second and second not in ("NA", phon.get("MinorLocation.2.0")):
        todo.append(f"second location ({second})")
    if phon.get("MinorLocation.2.0") in VAGUE_LOCATIONS:
        todo.append(f"location ({phon['MinorLocation.2.0']})")
    if sign["handed"] == "2h-asymmetric":
        todo.append("base hand")
    if phon.get("SignType.2.0") == "DominanceViolation":
        todo.append("two-hand roles (DominanceViolation)")
    return todo + spec.get("todo", [])


def draft(sign: dict, row: dict, spec: dict) -> dict:
    phon = dict(sign["source"]["phonology"])
    second_hand = (row.get("HandshapeM2.2.0") or "").strip()
    todo = todo_of(sign, phon, spec)
    if second_hand and second_hand != "NA":
        todo.append(f"handshape change (to {second_hand})")
    meanings = spec["meanings"]
    desc = {
        "schema": "marionet.signdesc/v0",
        "id": sign["id"],
        "language": "ase",
        "gloss": clean_gloss(sign, spec),
        "spoken": list(dict.fromkeys(m["text"] for m in meanings)),
        "meanings": meanings,
        "handed": sign["handed"],
        "lexicalClass": sign.get("lexicalClass"),
        "dominant": {k: sign["dominant"][k] for k in ("handshape", "location", "movement")},
    }
    if sign["handed"] == "2h-asymmetric" and sign.get("nondominant"):
        desc["nondominant"] = {"handshape": sign["nondominant"]["handshape"], "location": "base-hand", "role": "base"}
    desc["library"] = sign["library"]
    desc["compileReady"] = sign["compileReady"]
    source = {k: v for k, v in sign["source"].items() if k != "phonology"}
    source["aliases"] = sign["spoken"]
    if spec.get("folds"):
        source["folds"] = spec["folds"]
    source["phonology"] = phon
    desc["source"] = source
    desc["review"] = {"status": "draft", "reference": REFERENCE}
    desc["todo"] = todo
    return desc


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    parser.add_argument("--list", action="store_true", help="print the batch and each sign's todo")
    args = parser.parse_args()
    if not RAW.exists():
        raise SystemExit(f"missing {RAW}; see scripts/ingest_asllex.py")

    config = json.loads(CONFIG.read_text())
    rows = {r["EntryID"].strip(): r for r in csv.DictReader(StringIO(RAW.read_bytes().decode("utf-8", errors="replace")))}
    signs = {s["source"]["entryId"]: s for s in json.loads(ASLLEX.read_text())["signs"]}
    core = json.loads(CORE.read_text())
    have = {s["id"]: s for s in core["signs"]}
    chosen = batch(config, signs, rows)

    added = 0
    for entry in chosen:
        sid = signs[entry]["id"]
        if sid not in have:
            have[sid] = draft(signs[entry], rows[entry], config["signs"][entry])
            added += 1
    # Batch order (most used first), then anything filled out by hand beyond the batch.
    order = [signs[e]["id"] for e in chosen]
    core["signs"] = [have[i] for i in order] + [s for i, s in have.items() if i not in order]
    core["n"] = len(core["signs"])

    if args.list:
        for k, desc in enumerate(core["signs"], 1):
            print(f"{k:3} {desc['id']:<28} {desc['review']['status']:<8} {', '.join(desc.get('todo', [])) or '-'}")
        need = Counter(t.split(" (")[0] for d in core["signs"] for t in d.get("todo", []))
        print("\ntodo:", ", ".join(f"{t} {n}" for t, n in need.most_common()))
        return

    CORE.write_text(json.dumps(core, indent=1, ensure_ascii=False) + "\n")
    ROUNDS.mkdir(parents=True, exist_ok=True)
    size = config["round"]
    for start in range(0, len(order), size):
        (ROUNDS / f"round-{start // size + 1}.txt").write_text(",".join(order[start : start + size]) + "\n")
    print(f"core.json: {added} drafted, {core['n']} signs; rounds of {size} in {ROUNDS.relative_to(ROOT)}/")


if __name__ == "__main__":
    main()
