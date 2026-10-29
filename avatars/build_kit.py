"""
Build the parts of the avatar maker: each body the signers are made from, with no hair, and every
hairstyle fitted to it, all in neutral colours that the player tints (src/maker.js).

Needs what build_avatars.py needs (Blender 4.2+ with the VRM extension).

Usage:
  blender -b --python avatars/build_kit.py -- [body ...]

Writes avatars/kit/{body}.vrm and avatars/kit/{body}/{style}.vrm for each style but "crop" (the
painted scalp is the body's), and copies avatars/kit.json beside them: it names them for the maker,
with the colours offered. The folder is what a site hosts.

A body goes through what a signer goes through (build_avatars.build): every hairstyle is put on
it at once and fixed to the head, so growing it up reshapes them all alike; then each is exported
on its own, as a VRM holding the rig and that hair only. The player binds the hair to the body's
bones by name. Colours are neutral, so the player sets them with the materials' colour factors:
  - skin scaled channel by channel so its median is NEUTRAL_SKIN (sRGB): the player multiplies by
    linear(tone) / linear(NEUTRAL_SKIN), as recolour_skin() scales the median onto the tone;
  - hair, brows and irises tinted grey with a linear median of NEUTRAL_TINT: the player multiplies
    by linear(colour) / NEUTRAL_TINT, which is exactly what tint() gives;
  - the top white: the player multiplies by linear(colour).
"""
import shutil
import sys
from pathlib import Path

import bpy
import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parent))
import build_avatars as ba  # noqa: E402

KIT = ba.ROOT / "kit"
NEUTRAL_SKIN = 0.7
NEUTRAL_TINT = 0.25

# The bodies of the roster, in the order the maker lists them.
BODIES = ["Sendagaya_Shino", "AvatarSample_D", "Base_Female", "Base_Male", "Sakurada_Fumiriya"]

# id, where the hair comes from, whether its bangs stay. Saved avatars name these ids: keep them.
STYLES = [
    ("shino", "Sendagaya_Shino", True),
    ("shino-back", "Sendagaya_Shino", False),
    ("shibu", "AvatarSample_D", True),
    ("shibu-back", "AvatarSample_D", False),
    ("victoria", "AvatarSample_G", True),
    ("victoria-back", "AvatarSample_G", False),
    ("fumiriya", "Sakurada_Fumiriya", True),
    ("short", "HairSample_Male", True),
    ("afro", "afro", True),
    ("hightop", "hightop", True),
    ("puffs", "puffs", True),
    ("crop", "crop", True),
]


def grey(srgb):
    return np.array([srgb] * 3)


def dress_neutral(objects, sid):
    """dress() with neutral colours (see the module's docstring)."""
    skin = grey(NEUTRAL_SKIN)
    tinted = ba.to_srgb(grey(NEUTRAL_TINT))
    for obj in ba.meshes(objects):
        ba.delete_faces(obj, "Accessory")
    done = set()
    for obj in ba.meshes(objects):
        for slot in obj.material_slots:
            material = slot.material
            if material is None or material in done:
                continue
            done.add(material)
            name = material.name
            if "_SKIN" in name:
                ba.repaint(material, lambda image, f: ba.recolour_skin(image, skin, f"{sid}-{image.name}"))
            elif "_HAIR" in name:
                ba.repaint(material, lambda image, f: ba.tint(image, f, tinted, f"{sid}-{image.name}"), shade=(0.6, 0.58, 0.66))
                material.vrm_addon_extension.mtoon1.emissive_factor = tuple(grey(NEUTRAL_TINT) * 0.7 + 0.025)
            elif "FaceBrow" in name:
                ba.repaint(material, lambda image, f: ba.tint(image, f, tinted, f"{sid}-{image.name}"), shade=(1, 1, 1))
            elif "EyeIris" in name:
                ba.repaint(material, lambda image, f: ba.tint(image, f, tinted, f"{sid}-{image.name}"))
            elif "Tops" in name or "Onepice" in name:
                ba.repaint(material, lambda image, f: ba.flat(image, grey(1.0), f"{sid}-top"), shade=(0.72, 0.72, 0.78))
            elif "Bottoms" in name:
                ba.repaint(material, lambda image, f: ba.flat(image, ba.hex_rgb(ba.BOTTOMS), f"{sid}-bottoms"), shade=(1, 1, 1))
                mtoon = material.vrm_addon_extension.mtoon1.extensions.vrmc_materials_mtoon
                mtoon.outline_width_mode = "none"
                mtoon.matcap_factor = (0.0, 0.0, 0.0)
                mtoon.matcap_texture.index.source = None


def copy_of(obj, name):
    twin = obj.copy()
    twin.data = obj.data.copy()
    twin.name = name
    bpy.context.scene.collection.objects.link(twin)
    return twin


def hairs_for(body, rig, objects, own):
    """Every style's hair on this body, by style id (crop has none)."""
    head = ba.Head(objects)
    if own is not None:
        ba.drop_ahoge(own, head.top)
    sources = {}
    hairs = {}
    for style, source, fringe in STYLES:
        if source == "crop":
            continue
        if source in ba.DRAWN:
            hair = ba.drawn_hair(source, head, rig, ba.named(objects, "Body"))
        else:
            if source not in sources:
                sources[source] = own if source == body else ba.borrow_hair(source, rig)
            hair = copy_of(sources[source], f"Hair_{style}")
            if not fringe:
                ba.trim_fringe(hair, head)
        hair.name = f"Hair_{style}"
        hairs[style] = hair
    for name in {hair.name for hair in sources.values()} | ({own.name} if own is not None else set()):
        bpy.data.objects.remove(bpy.data.objects[name], do_unlink=True)
    return hairs


def keep_only(rig, wanted, hair):
    """Remove every mesh but `wanted`; for a hair, also what the rig says of the face."""
    for obj in list(bpy.data.objects):
        if obj.type == "MESH" and obj.name not in wanted:
            bpy.data.objects.remove(obj, do_unlink=True)
    vrm1 = rig.data.vrm_addon_extension.vrm1
    if hair:
        for expression in vrm1.expressions.all_name_to_expression_dict().values():
            expression.morph_target_binds.clear()
            expression.material_color_binds.clear()
            expression.texture_transform_binds.clear()
        vrm1.first_person.mesh_annotations.clear()
    for image in list(bpy.data.images):
        if image.users == 0:
            bpy.data.images.remove(image)


def build(body):
    gender = ba.BASES[body]["gender"]
    ba.clear_scene()
    rig, objects = ba.import_vrm(ba.base_path(body))
    own = ba.hair_of(objects)
    if own is not None:
        objects.remove(own)
    hairs = hairs_for(body, rig, objects, own)
    for hair in hairs.values():
        ba.fix_to_head(hair, rig)
        objects.append(hair)
    objects = [obj for obj in objects if obj.type != "EMPTY"]
    ba.drop_springs(rig)
    ba.prune_morphs(rig, objects)
    ba.trousers(rig, objects)
    ba.grow_up(rig, objects, gender)
    dress_neutral(objects, body)
    for image in list(bpy.data.images):
        if image.users == 0:
            bpy.data.images.remove(image)
    ba.shrink_images()

    KIT.mkdir(exist_ok=True)
    (KIT / body).mkdir(exist_ok=True)
    blend = KIT / f"{body}.blend"
    # Repainted and shrunk images live only in memory: pack them, or reopening loses them.
    for image in bpy.data.images:
        image.pack()
    bpy.ops.wm.save_as_mainfile(filepath=str(blend))
    rig_name = rig.name
    parts = [(None, KIT / f"{body}.vrm")] + [(style, KIT / body / f"{style}.vrm") for style in hairs]
    hair_names = {style: hair.name for style, hair in hairs.items()}
    body_meshes = [obj.name for obj in bpy.data.objects if obj.type == "MESH" and obj.name not in hair_names.values()]
    for style, path in parts:
        bpy.ops.wm.open_mainfile(filepath=str(blend))
        rig = bpy.data.objects[rig_name]
        keep_only(rig, body_meshes if style is None else [hair_names[style]], hair=style is not None)
        label = body if style is None else f"{body} {style}"
        ba.export_vrm(rig, {"id": label, "label": label}, path)
        print(f"built {path.relative_to(ba.ROOT)}  {path.stat().st_size / 1e6:.1f} MB")
    blend.unlink()
    for leftover in KIT.glob(f"{body}.blend1"):
        leftover.unlink()


def main():
    argv = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else []
    unknown = set(argv) - set(BODIES)
    if unknown:
        raise SystemExit(f"not a body: {sorted(unknown)}")
    for body in [b for b in BODIES if not argv or b in argv]:
        build(body)
    shutil.copy(ba.ROOT / "kit.json", KIT / "kit.json")


if __name__ == "__main__":
    main()
