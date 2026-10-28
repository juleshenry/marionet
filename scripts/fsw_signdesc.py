#!/usr/bin/env python3
"""SignWriting (FSW, as SignPuddle stores it) → SignDesc drafts, and their score against ASL signs written by hand.

SignWriting is written from the signer's point of view. A hand symbol's base says which handshape it is,
its fill which way the palm faces (0 toward the signer, 1 sideways, 2 away; 3–5 the same with the hand
flat, seen from above: palm up, sideways, down), its rotation where the fingers point (0–7 the right hand,
turning counterclockwise by 45°, from up, or from forward when flat; 8–f the left hand, mirrored).
Where the hand sits is read from its place beside the head symbol; what the hand does, from the arrows
and contact stars.

The handshape a symbol stands for, and where on the face a place beside the head is, are learnt from ASL:
SignPuddle's ASL dictionary (sgn4) written for the same English gloss as an ASL-LEX sign gives pairs of
(symbol, handshape) and (place beside the head, location). The 407 approved signs of core.json are kept
out of the learning and are what the conversion is scored on.

  python3 scripts/fsw_signdesc.py score [--show N]     learn from ASL-LEX, score on core.json
  python3 scripts/fsw_signdesc.py learn                 write data/sources/iswa_learnt.json

Needs data/raw/sgn4.spml (see ingest_signpuddle.py) and data/raw/fonts/SuttonSignWritingLine.ttf
(`npm pack @sutton-signwriting/font-ttf`, font/SuttonSignWritingLine.ttf) for the symbols' sizes.
"""

from __future__ import annotations

import argparse
import collections
import functools
import json
import math
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SPML = ROOT / "data/raw/sgn4.spml"
FONT = ROOT / "data/raw/fonts/SuttonSignWritingLine.ttf"
ASLLEX = ROOT / "data/signs/ase/asllex_signdesc.json"
CORE = ROOT / "data/signs/ase/core.json"
LEARNT = ROOT / "data/sources/iswa_learnt.json"
REPORT = ROOT / "data/runs/fsw-score.json"

ENTRY_RE = re.compile(r"<entry\b[^>]*>(.*?)</entry>", re.S)
TERM_RE = re.compile(r"<term>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?</term>", re.S)
SIGN_RE = re.compile(r"(?:A(?:S[0-9a-f]{5})+)?[BLMR]\d{3}x\d{3}(?:S[0-9a-f]{5}\d{3}x\d{3})*")
SYM_RE = re.compile(r"(S[0-9a-f]{5})(\d{3})x(\d{3})")

# ISWA 2010 ranges (sutton-signwriting/core, fsw-structure.js)
HAND = (0x100, 0x204)
CONTACT = (0x205, 0x215)
FINGER_MOVE = (0x216, 0x229)
STRAIGHT = (0x22a, 0x287)
CURVE = (0x288, 0x2e2)
CIRCLE = (0x2e3, 0x2f6)
HEAD = (0x2ff, 0x309)  # head outlines; faces and features come after
FACE = (0x30a, 0x36c)
TRUNK = (0x36d, 0x375)
HAND_GROUPS = [0x100, 0x10e, 0x11e, 0x144, 0x14c, 0x186, 0x1a4, 0x1ba, 0x1cd, 0x1f5, 0x205]


def within(base: int, r: tuple[int, int]) -> bool:
    return r[0] <= base <= r[1]


def group_of(base: int) -> int:
    for lo, hi in zip(HAND_GROUPS, HAND_GROUPS[1:]):
        if lo <= base < hi:
            return lo
    return 0


@functools.lru_cache(maxsize=None)
def _font():
    from PIL import ImageFont

    return ImageFont.truetype(str(FONT), 30)


@functools.lru_cache(maxsize=None)
def symbol_size(key: str) -> tuple[int, int]:
    base, fill, rot = int(key[1:4], 16), int(key[4], 16), int(key[5], 16)
    box = _font().getmask(chr(0xF0000 + (base - 0x100) * 96 + fill * 16 + rot + 1)).getbbox()
    return (box[2] - box[0], box[3] - box[1]) if box else (20, 20)


def parse_sign(fsw: str) -> dict | None:
    """The first sign of an FSW string: its symbols in the order the prefix gives, with their centres."""
    m = SIGN_RE.search(fsw)
    if not m:
        return None
    text = m.group(0)
    order = re.findall(r"S[0-9a-f]{5}", text.split("M")[0].split("B")[0].split("L")[0].split("R")[0]) if text.startswith("A") else []
    syms = []
    for key, x, y in SYM_RE.findall(text):
        w, h = symbol_size(key)
        syms.append({"key": key, "base": int(key[1:4], 16), "fill": int(key[4], 16), "rot": int(key[5], 16),
                     "x": int(x), "y": int(y), "cx": int(x) + w / 2, "cy": int(y) + h / 2, "w": w, "h": h})
    if order:
        rank = {}
        for i, k in enumerate(order):
            rank.setdefault(k, i)
        syms.sort(key=lambda s: rank.get(s["key"], 99))
    return {"symbols": syms}


def read_spml(path: Path) -> list[dict]:
    out = []
    for body in ENTRY_RE.findall(path.read_text(encoding="utf-8", errors="replace")):
        terms = [t.strip() for t in TERM_RE.findall(body) if t.strip()]
        fsw = next((t for t in terms if re.match(r"(?:AS[0-9a-f]{5}|[BLMR]\d{3}x\d{3})", t)), None)
        glosses = [t for t in terms if t is not fsw]
        if fsw and glosses:
            out.append({"fsw": fsw, "glosses": glosses})
    return out


# --- directions -------------------------------------------------------------------------------------------

def _label(vec: dict[str, float]) -> str:
    """{'up': .7, 'contra': .7} → 'up+contra'; components under 0.38 are left out."""
    parts = [k for k, v in sorted(vec.items(), key=lambda kv: -kv[1]) if v > 0.38]
    return "+".join(parts[:2]) or "out"


def hand_directions(sym: dict) -> tuple[str, str, bool]:
    """(palm, fingers, right hand?) of a hand symbol, in SignDesc's terms."""
    rot, fill = sym["rot"], sym["fill"]
    right = rot < 8
    r = rot if right else rot - 8
    ang = math.radians(90 + 45 * r) if right else math.radians(90 - 45 * r)
    fx, fy = math.cos(ang), math.sin(ang)  # page: x to the signer's right, y up (or forward, flat)
    if fill in (1, 4):  # sideways: the palm is the fingers turned a quarter, toward the other side
        px, py = (-fy, fx) if right else (fy, -fx)
    else:
        px = py = 0.0

    def side(x: float) -> dict[str, float]:
        # the right hand's contra is the signer's left (page left); the left hand's, page right
        ipsi = x if right else -x
        return {"ipsi": max(ipsi, 0), "contra": max(-ipsi, 0)}

    flat = fill >= 3
    if flat:
        fingers = {**side(fx), "out": max(fy, 0), "in": max(-fy, 0)}
        palm = {"up": 1.0} if fill == 3 else {"down": 1.0} if fill == 5 else {**side(px), "out": max(py, 0), "in": max(-py, 0)}
    else:
        fingers = {**side(fx), "up": max(fy, 0), "down": max(-fy, 0)}
        palm = {"in": 1.0} if fill == 0 else {"out": 1.0} if fill == 2 else {**side(px), "up": max(py, 0), "down": max(-py, 0)}
    return _label(palm), _label(fingers), right


# --- conversion -------------------------------------------------------------------------------------------

def split_hands(hands: list[dict]) -> tuple[list[dict], list[dict]]:
    """The dominant hand's symbols and the other hand's.

    A mirrored symbol (rotation 8–f) is the left hand, but writers often draw the left hand unmirrored,
    so with one kind only, measured on SignPuddle ASL against ASL-LEX: two symbols close together, or
    the same shape twice, are two hands (two in three); two shapes apart are one hand changing shape
    when one is above the other, two hands when side by side. Of two hands the dominant one is the one
    not lying flat palm up, else the upper one, else the one on the signer's right.
    """
    plain = [h for h in hands if h["rot"] < 8]
    mirrored = [h for h in hands if h["rot"] >= 8]
    if plain and mirrored:
        return plain, mirrored
    if len(hands) < 2:
        return hands, []
    a, b = hands[0], hands[1]
    dx, dy = a["cx"] - b["cx"], a["cy"] - b["cy"]
    near = math.hypot(dx, dy) <= 22
    if not (near or a["base"] == b["base"] or abs(dy) < abs(dx)):
        return hands, []  # one hand, changing shape
    if (a["fill"] == 3) != (b["fill"] == 3):
        dom, base = (b, a) if a["fill"] == 3 else (a, b)
    elif abs(dy) > abs(dx):
        dom, base = (a, b) if a["cy"] < b["cy"] else (b, a)
    else:
        dom, base = (a, b) if a["cx"] > b["cx"] else (b, a)
    rest = [h for h in hands[2:]]
    return [dom] + [h for h in rest if h["base"] == dom["base"]], [base] + [h for h in rest if h["base"] != dom["base"]]


def features(sign: dict) -> dict:
    syms = sign["symbols"]
    hands = [s for s in syms if within(s["base"], HAND)]
    right, left = split_hands(hands)
    heads = [s for s in syms if within(s["base"], (HEAD[0], FACE[1])) and s["w"] >= 30]
    arrows = [s for s in syms if within(s["base"], (STRAIGHT[0], CIRCLE[1]))]
    contacts = [s for s in syms if within(s["base"], CONTACT)]
    fingermoves = [s for s in syms if within(s["base"], FINGER_MOVE)]
    trunk = [s for s in syms if within(s["base"], TRUNK)]
    dom = right[0] if right else None
    # several faces in a row are mouthing (DGS writes the mouthed word so): the head is the face nearest
    # the hand, and the hand is at the face only where it touches it (see location())
    at = (dom["cx"], dom["cy"]) if dom else (500, 500)
    head = min(heads, key=lambda h: math.hypot(h["cx"] - at[0], h["cy"] - at[1])) if heads else None
    f = {"hands": hands, "right": right, "left": left, "head": head, "mouthing": len(heads) >= 2, "arrows": arrows,
         "contacts": contacts, "fingermoves": fingermoves, "trunk": trunk, "dom": dom}
    if dom and f["head"]:
        hd = f["head"]
        f["rel"] = ((dom["cx"] - hd["cx"]) / hd["w"], (dom["cy"] - hd["cy"]) / hd["h"])
    return f


def handed(f: dict) -> str:
    if not (f["right"] and f["left"]):
        return "1h"
    r, l = f["right"][0], f["left"][0]
    if r["base"] != l["base"]:
        return "2h-asymmetric"
    # the same shape on both hands: one on top of the other is a hand acting on the other (WORK, COFFEE, PET)
    dx, dy = abs(r["cx"] - l["cx"]), abs(r["cy"] - l["cy"])
    if dy > dx and math.hypot(dx, dy) <= 1.7 * max(r["h"], l["h"]):
        return "2h-asymmetric"
    # side by side: symmetric when both move, asymmetric when one is the base the other acts on
    movers = {("r" if a["cx"] > (r["cx"] + l["cx"]) / 2 else "l") for a in f["arrows"]}
    return "2h-symmetric" if len(movers) != 1 or len(f["arrows"]) >= 2 else "2h-asymmetric"


def movement_kind(f: dict) -> str:
    bases = [a["base"] for a in f["arrows"]]
    if any(within(b, CIRCLE) for b in bases):
        return "circle"
    if any(within(b, CURVE) for b in bases):
        return "arc"
    if bases:
        return "linear"
    if f["contacts"]:
        return "contact"
    if f["fingermoves"]:
        return "fingers"
    return "none"


def arrow_direction(a: dict) -> str | None:
    """Where a straight arrow points: on the wall (22a–254) up, down and sideways, on the floor (265–287)
    forward, back and sideways; its rotation turns as a hand's does, mirrored for 8–f."""
    r = a["rot"] % 8
    ang = math.radians(90 + 45 * r) if a["rot"] < 8 else math.radians(90 - 45 * r)
    x, y = math.cos(ang), math.sin(ang)
    side = {"ipsi": max(x, 0), "contra": max(-x, 0)}
    if 0x22a <= a["base"] <= 0x254:
        return _label({**side, "up": max(y, 0), "down": max(-y, 0)})
    if 0x265 <= a["base"] <= 0x287:
        return _label({**side, "out": max(y, 0), "in": max(-y, 0)})
    return None


def touches_face(f: dict) -> bool:
    """The dominant hand, or a contact star, inside the head's box grown by a quarter."""
    hd, dom = f["head"], f["dom"]
    gx, gy = hd["w"] * 0.25, hd["h"] * 0.25
    inside = lambda x, y: hd["x"] - gx <= x <= hd["x"] + hd["w"] + gx and hd["y"] - gy <= y <= hd["y"] + hd["h"] + gy
    hand = not (dom["x"] > hd["x"] + hd["w"] + gx or dom["x"] + dom["w"] < hd["x"] - gx
                or dom["y"] > hd["y"] + hd["h"] + gy or dom["y"] + dom["h"] < hd["y"] - gy)
    return hand or any(inside(c["cx"], c["cy"]) for c in f["contacts"])


def location(f: dict, learnt: dict) -> str:
    if f.get("rel") is not None:
        x, y = f["rel"]
        near = sorted(learnt["places"], key=lambda p: (p[0] - x) ** 2 + (p[1] - y) ** 2)[:9]
        votes = collections.Counter(p[2] for p in near)
        place = votes.most_common(1)[0][0]
        if f["mouthing"] and REGION.get(place) == "face" and not touches_face(f):
            place = None  # under a row of mouthed faces, a hand that does not touch one is below them
        if place and (place not in ("weak-hand", "forearm") or f["left"]):
            return place
    if f["left"] and handed(f) == "2h-asymmetric":
        r, l = f["dom"], f["left"][0]
        if math.hypot(r["cx"] - l["cx"], r["cy"] - l["cy"]) <= 1.7 * max(r["h"], l["h"]):
            return "weak-hand"
    if f["trunk"] or (not f["left"] and f["contacts"] and not f["head"]):
        return "chest"
    return "neutral-space"


def convert(fsw: str, gloss: str, language: str, learnt: dict) -> dict | None:
    sign = parse_sign(fsw)
    if not sign:
        return None
    syms = sign["symbols"]
    if max(s["x"] + s["w"] for s in syms) - min(s["x"] for s in syms) > 250:
        return None  # a phrase or a mouthed sentence written as one sign
    f = features(sign)
    if not f["dom"]:
        return None
    palm, fingers, _ = hand_directions(f["dom"])
    shape = handshape_of(f["dom"]["base"], learnt)
    dom = {"handshape": shape, "palm": palm, "fingers": fingers, "location": location(f, learnt)}
    kind = movement_kind(f)
    dom["movement"] = [] if kind in ("none", "fingers") else [{"type": "tap" if kind == "contact" else kind}]
    if kind == "linear":
        way = arrow_direction(f["arrows"][0])
        if way:
            dom["movement"][0]["direction"] = way
    later = [s for s in f["right"][1:] if s["base"] != f["dom"]["base"]]
    if later:
        dom["movement"].append({"type": "change", "handshape": handshape_of(later[0]["base"], learnt)})
    desc = {"schema": "marionet.signdesc/v0", "language": language, "gloss": gloss.upper(), "handed": handed(f),
            "dominant": dom, "source": {"dataset": "signpuddle", "fsw": fsw}}
    if desc["handed"] != "1h":
        nd = f["left"][0]
        npalm, nfingers, _ = hand_directions(nd)
        desc["nondominant"] = {"handshape": handshape_of(nd["base"], learnt), "palm": npalm, "fingers": nfingers}
    return desc


def choose(convs: list[dict]) -> dict:
    """Of a gloss's variants, the one most like the others: SignPuddle's first is often a rarer form."""
    keys = lambda c: (c["dominant"]["handshape"], c["handed"].split("-")[0], c["dominant"]["location"],
                      (c["dominant"]["movement"] or [{}])[0].get("type"))
    ks = [keys(c) for c in convs]
    scores = [sum(sum(x == y for x, y in zip(k, o)) for o in ks) for k in ks]
    return convs[scores.index(max(scores))]


def handshape_of(base: int, learnt: dict) -> str:
    key = f"{base:03x}"
    return learnt["shapes"].get(key) or learnt["groups"].get(f"{group_of(base):03x}") or "5"


# --- learning and scoring on ASL --------------------------------------------------------------------------

def norm(s: str) -> str:
    s = re.sub(r"[_\-]+", " ", s.lower())
    s = re.sub(r"\s*\(.*?\)|\s*\d+$", "", s)
    return re.sub(r"[^a-z0-9' ]+", "", s).strip()


def gloss_keys(sign: dict) -> set[str]:
    keys = {norm(sign.get("gloss", ""))}
    keys |= {norm(t) for t in sign.get("spoken", [])}
    keys |= {norm(a) for a in (sign.get("source") or {}).get("aliases", []) or []}
    return {k for k in keys if k}


def puddle_index(entries: list[dict]) -> dict[str, list[str]]:
    idx = collections.defaultdict(list)
    for e in entries:
        for g in e["glosses"]:
            for part in re.split(r"[,;/]", g):
                k = norm(part)
                if k and len(k.split()) <= 4:
                    idx[k].append(e["fsw"])
    return idx


def first_fsw(sign: dict, idx: dict) -> list[str]:
    for k in sorted(gloss_keys(sign), key=len):
        if k in idx:
            return idx[k]
    return []


def learn(asllex: list[dict], idx: dict, exclude: set[str]) -> dict:
    pairs = collections.defaultdict(collections.Counter)
    groups = collections.defaultdict(collections.Counter)
    places = collections.defaultdict(list)
    for s in asllex:
        if not s.get("compileReady") or gloss_keys(s) & exclude:
            continue
        shape = s["dominant"]["handshape"]
        if not isinstance(shape, str):
            continue
        for fsw in first_fsw(s, idx)[:3]:
            sign = parse_sign(fsw)
            if not sign:
                continue
            f = features(sign)
            if not f["dom"]:
                continue
            pairs[f"{f['dom']['base']:03x}"][shape] += 1
            groups[f"{group_of(f['dom']['base']):03x}"][shape] += 1
            if f.get("rel") is not None and s["dominant"].get("location"):
                places[s["dominant"]["location"]].append(f["rel"])
    shapes = {}
    for base, c in pairs.items():
        top, n = c.most_common(1)[0]
        if n >= 2:
            shapes[base] = top
    return {
        "comment": "Learnt from SignPuddle ASL (sgn4) against ASL-LEX 2.0 by gloss; see scripts/fsw_signdesc.py",
        "shapes": dict(sorted(shapes.items())),
        "groups": {g: c.most_common(1)[0][0] for g, c in sorted(groups.items())},
        # every (x, y, place) seen with a head: places beside the head are told by their nearest neighbours
        "places": sorted([round(x, 2), round(y, 2), k] for k, v in places.items() if len(v) >= 3 for x, y in v),
        "counts": {base: dict(c.most_common(4)) for base, c in sorted(pairs.items())},
    }


FAMILY = {"open_b": "B", "flat_b": "B", "bent_b": "B", "curved_5": "5", "open_8": "5", "baby_o": "F", "flat_o": "O",
          "X": "1", "G": "1", "D": "1", "H": "V", "R": "V", "3": "V", "K": "V", "P": "V", "W": "V", "E": "S",
          "T": "S", "A": "S"}

REGION = {"forehead": "face", "eye": "face", "nose": "face", "mouth": "face", "chin": "face", "cheek": "face",
          "ear": "face", "head": "face", "neck": "body", "shoulder": "body", "chest": "body", "chest-front": "body",
          "belly": "body", "neutral-space": "neutral", "neutral-space-high": "neutral", "weak-hand": "hand",
          "forearm": "hand"}


def axis(label: str) -> str:
    return (label or "").split("+")[0]


def move_class(sign: dict) -> str:
    moves = [m for m in sign["dominant"].get("movement", []) if m.get("type") not in ("change",)]
    if not moves:
        return "none"
    t = moves[0]["type"]
    return {"move": "linear", "present": "linear", "hook": "arc", "trace": "linear", "nod": "none",
            "twist": "none", "whisker": "linear"}.get(t, t)


def score(show: int) -> None:
    entries = read_spml(SPML)
    idx = puddle_index(entries)
    core = [s for s in json.loads(CORE.read_text())["signs"] if s.get("review", {}).get("status") == "approved"]
    asllex = json.loads(ASLLEX.read_text())["signs"]
    test_keys = set().union(*(gloss_keys(s) for s in core))
    learnt = learn(asllex, idx, test_keys)
    rows = []
    for s in core:
        if isinstance(s["dominant"].get("handshape"), list) or "/fs/" in s["id"]:
            continue
        options = first_fsw(s, idx)
        if not options:
            continue
        convs = [c for c in (convert(o, s["gloss"], "ase", learnt) for o in options[:6]) if c]
        if not convs:
            continue
        want = {"family": FAMILY.get(s["dominant"]["handshape"], s["dominant"]["handshape"]),
                "shape": s["dominant"]["handshape"], "handed": s["handed"].split("-")[0],
                "region": REGION.get(s["dominant"].get("location"), "other"), "loc": s["dominant"].get("location"),
                "palm": axis(s["dominant"].get("palm")), "fingers": axis(s["dominant"].get("fingers")),
                "move": move_class(s)}

        def got(c: dict) -> dict:
            d = c["dominant"]
            return {"family": FAMILY.get(d["handshape"], d["handshape"]), "shape": d["handshape"], "handed": c["handed"].split("-")[0], "region": REGION.get(d["location"], "other"),
                    "loc": d["location"], "palm": axis(d["palm"]), "fingers": axis(d["fingers"]), "move": move_class(c)}

        firsts = got(choose(convs))
        hits = {k: firsts[k] == want[k] for k in want}
        best = {k: any(got(c)[k] == want[k] for c in convs) for k in want}
        rows.append({"id": s["id"], "want": want, "got": firsts, "hit": hits, "best": best, "variants": len(convs)})
    n = len(rows)
    print(f"{len(entries)} SignPuddle ASL entries; {len(core)} approved core signs; {n} found in SignPuddle by gloss")
    print(f"learnt {len(learnt['shapes'])} handshape symbols, {len(learnt['places'])} hand places beside a head")
    print(f"{'':10} chosen variant  best of variants")
    for k in ("shape", "family", "handed", "region", "loc", "palm", "fingers", "move"):
        a = sum(r["hit"][k] for r in rows) / n
        b = sum(r["best"][k] for r in rows) / n
        print(f"{k:10} {a:6.1%}          {b:6.1%}")
    both = sum(r["hit"]["family"] and r["hit"]["region"] for r in rows) / n
    print(f"shape family + region together (chosen variant): {both:.1%}")
    misses = collections.Counter((r["want"]["shape"], r["got"]["shape"]) for r in rows if not r["hit"]["shape"])
    print("commonest handshape misses (wanted, got):", misses.most_common(12))
    lmiss = collections.Counter((r["want"]["loc"], r["got"]["loc"]) for r in rows if not r["hit"]["region"])
    print("commonest region misses (wanted, got):", lmiss.most_common(10))
    REPORT.parent.mkdir(parents=True, exist_ok=True)
    REPORT.write_text(json.dumps({"learnt": learnt, "rows": rows}, indent=1))
    for r in rows[:show]:
        print(r["id"], {k: (r["want"][k], r["got"][k]) for k in r["want"] if not r["hit"][k]})


def slug(text: str) -> str:
    import unicodedata

    t = unicodedata.normalize("NFKD", text.lower())
    t = "".join(ch for ch in t if not unicodedata.combining(ch))
    return re.sub(r"[^\w]+", "-", t).strip("-") or "sign"


def convert_puddle(spml: Path, language: str, gloss_lang: str, dataset: str, learnt: dict) -> list[dict]:
    """One SignDesc draft per headword (an entry's first gloss): of its variants, the one most like the others."""
    groups: dict[str, list[dict]] = collections.defaultdict(list)
    for e in read_spml(spml):
        groups[e["glosses"][0].strip().lower()].append(e)
    signs, seen = [], set()
    for key, es in groups.items():
        pairs = [(c, e) for c, e in ((convert(e["fsw"], e["glosses"][0].strip(), language, learnt), e) for e in es) if c]
        if not pairs:
            continue
        chosen = choose([c for c, _ in pairs])
        entry = next(e for c, e in pairs if c is chosen)
        sid = f"{language}/signpuddle/{slug(key)}"
        n = 2
        while sid in seen:
            sid, n = f"{language}/signpuddle/{slug(key)}-{n}", n + 1
        seen.add(sid)
        words = list(dict.fromkeys(g.strip() for g in entry["glosses"] if g.strip()))
        signs.append({"schema": chosen["schema"], "id": sid, "language": language, "gloss": chosen["gloss"],
                      "gloss_lang": gloss_lang, "spoken": words, "handed": chosen["handed"],
                      "dominant": chosen["dominant"], **({"nondominant": chosen["nondominant"]} if "nondominant" in chosen else {}),
                      "review": {"status": "draft", "reviewer_kind": "converter"},
                      "source": {"dataset": dataset, "fsw": entry["fsw"], "variants": len(pairs)}})
    return signs


def fsw_png(fsw: str, path: Path, size: int = 200) -> None:
    """Draw a sign's SignWriting: each symbol's fill in white, its lines in black."""
    from PIL import Image, ImageDraw, ImageFont

    sign = parse_sign(fsw)
    if not sign or not sign["symbols"]:
        return
    line = ImageFont.truetype(str(FONT), 30)
    fill = ImageFont.truetype(str(FONT.with_name("SuttonSignWritingFill.ttf")), 30)
    syms = sign["symbols"]
    x0, y0 = min(s["x"] for s in syms), min(s["y"] for s in syms)
    x1, y1 = max(s["x"] + s["w"] for s in syms), max(s["y"] + s["h"] for s in syms)
    pad = 6
    im = Image.new("RGB", (x1 - x0 + 2 * pad, y1 - y0 + 2 * pad), "white")
    d = ImageDraw.Draw(im)
    for s in syms:
        ch = chr(0xF0000 + (s["base"] - 0x100) * 96 + s["fill"] * 16 + s["rot"] + 1)
        at = (s["x"] - x0 + pad, s["y"] - y0 + pad)
        for font, colour in ((fill, "white"), (line, "black")):
            box = font.getmask(ch).getbbox() or (0, 0, 0, 0)
            d.text((at[0] - box[0], at[1] - box[1]), ch, font=font, fill=colour)
    side = max(im.size)
    sq = Image.new("RGB", (side, side), "white")
    sq.paste(im, ((side - im.size[0]) // 2, (side - im.size[1]) // 2))
    sq.resize((size, size), Image.LANCZOS).save(path)


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("command", choices=["score", "learn", "convert", "png"])
    ap.add_argument("--show", type=int, default=0)
    ap.add_argument("--spml", type=Path)
    ap.add_argument("--language")
    ap.add_argument("--gloss-lang")
    ap.add_argument("--out", type=Path)
    ap.add_argument("--ids", help="png: comma-separated sign ids of --pack to draw into --out")
    ap.add_argument("--pack", type=Path)
    a = ap.parse_args()
    if a.command == "score":
        score(a.show)
    elif a.command == "convert":
        learnt = json.loads(LEARNT.read_text())
        dataset = f"signpuddle-{a.spml.stem}"
        signs = convert_puddle(a.spml, a.language, a.gloss_lang, dataset, learnt)
        a.out.parent.mkdir(parents=True, exist_ok=True)
        pack = {"dataset": dataset, "source": f"https://www.signbank.org/signpuddle2.0/data/spml/{a.spml.name}",
                "license": "CC BY-SA (SignPuddle)", "note": "Converted from SignWriting by scripts/fsw_signdesc.py; drafts.",
                "n": len(signs), "signs": signs}
        a.out.write_text(json.dumps(pack, ensure_ascii=False, separators=(",", ":")) + "\n")
        print(f"{len(signs)} signs from {a.spml.name} → {a.out}")
    elif a.command == "png":
        want = set(a.ids.split(","))
        a.out.mkdir(parents=True, exist_ok=True)
        for s in json.loads(a.pack.read_text())["signs"]:
            if s["id"] in want:
                fsw_png(s["source"]["fsw"], a.out / (s["id"].split("/")[-1] + ".png"))
    else:
        entries = read_spml(SPML)
        learnt = learn(json.loads(ASLLEX.read_text())["signs"], puddle_index(entries), set())
        LEARNT.write_text(json.dumps(learnt, indent=1, ensure_ascii=False) + "\n")
        print(f"wrote {LEARNT.relative_to(ROOT)}: {len(learnt['shapes'])} shapes, {len(learnt['places'])} places")


if __name__ == "__main__":
    sys.exit(main())
