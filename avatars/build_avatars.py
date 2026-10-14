"""
Build the dictionary's signers: MakeHuman bodies made with MPFB from its CC0 system assets,
exported as VRM 1.0 for marionet.

Needs Blender 4.2+ with the MPFB and VRM extensions and MakeHuman's system asset pack:
  blender --online-mode --command extension install mpfb --enable
  blender --online-mode --command extension install vrm --enable
  (then, in Blender, MPFB > Apply assets > Library settings > Load pack: makehuman_system_assets_cc0.zip)

Usage:
  blender -b --python avatars/build_avatars.py -- [id ...]

Writes avatars/out/{id}.vrm for each entry of avatars/roster.json (or only the ids given).
"""
import json
import sys
from pathlib import Path

import bpy
import numpy as np

from bl_ext.blender_org.mpfb.services.exportservice import ExportService
from bl_ext.blender_org.mpfb.services.humanservice import HumanService
from bl_ext.blender_org.mpfb.services.locationservice import LocationService
from bl_ext.blender_org.mpfb.services.objectservice import ObjectService
from bl_ext.blender_org.mpfb.services.targetservice import TargetService

ROOT = Path(__file__).resolve().parent
OUT = ROOT / "out"
ROSTER = json.loads((ROOT / "roster.json").read_text())
BONES = json.loads((ROOT / "mh_vrm_bones.json").read_text())
ASSETS = Path(LocationService.get_user_data())

EYES_UUID = "1cc97a30-85a1-42e6-a9f7-b3e753732baa"  # eyes/low-poly/low-poly.mhclo
TEXTURE_SIZE = 1024
CC0 = "https://creativecommons.org/publicdomain/zero/1.0/"

SETTINGS = {
    **HumanService.get_default_deserialization_settings(),
    "subdiv_levels": 0,
    "override_skin_model": "GAMEENGINE",
    "override_eyes_model": "GAMEENGINE",
    "override_clothes_model": "GAMEENGINE",
    "override_rig": BONES["rig"],
    "material_instances": False,
}


def hex_rgb(value):
    value = value.lstrip("#")
    return np.array([int(value[i:i + 2], 16) / 255 for i in (0, 2, 4)])


def asset(subdir, name, ext):
    path = ASSETS / subdir / name / f"{name}.{ext}"
    if not path.exists():
        raise FileNotFoundError(path)
    return str(path)


def clear_scene():
    for obj in list(bpy.data.objects):
        bpy.data.objects.remove(obj, do_unlink=True)
    for block in (bpy.data.meshes, bpy.data.materials, bpy.data.images, bpy.data.armatures):
        for item in list(block):
            if item.users == 0:
                block.remove(item)


def human_info(entry):
    phenotype = {**TargetService.get_default_macro_info_dict(), **entry["phenotype"], "race": entry["race"]}
    info = {
        "name": entry["id"],
        "phenotype": phenotype,
        "targets": [],
        "skin_mhmat": asset("skins", entry["skin"], "mhmat"),
        "skin_material_type": "GAMEENGINE",
        "eyes": asset("eyes", "low-poly", "mhclo"),
        "eyes_material_type": "GAMEENGINE",
        "eyebrows": asset("eyebrows", entry["eyebrows"], "mhclo"),
        "eyelashes": asset("eyelashes", "eyelashes01", "mhclo"),
        "hair": asset("hair", entry["hair"], "mhclo"),
        "clothes": [asset("clothes", entry["top"], "mhclo")],
        "clothes_material_type": "GAMEENGINE",
        "rig": BONES["rig"],
        "proxy": "",
        "alternative_materials": {EYES_UUID: str(ASSETS / "eyes" / "materials" / f"{entry['eyes']}.mhmat")},
    }
    return info


def principled(material):
    if not material or not material.use_nodes:
        return None
    return next((n for n in material.node_tree.nodes if n.type == "BSDF_PRINCIPLED"), None)


def base_image(bsdf):
    """The image node feeding a Principled BSDF's base colour, if any."""
    socket = bsdf.inputs["Base Color"]
    if socket.is_linked and socket.links[0].from_node.type == "TEX_IMAGE":
        return socket.links[0].from_node
    return None


def recolour(image, target, name):
    """Scale the image's colours channel by channel so its median lands on the sRGB colour
    `target`, keeping every freckle and fold of the texture. Writes a new image; the asset is
    left alone. An 8-bit image's pixels read back in its own (sRGB) encoding."""
    width, height = image.size
    pixels = np.empty(width * height * 4, dtype=np.float32)
    image.pixels.foreach_get(pixels)
    pixels = pixels.reshape(-1, 4)
    rgb = pixels[:, :3]
    lum = rgb @ np.array([0.2126, 0.7152, 0.0722])
    mask = (pixels[:, 3] > 0.5) & (lum > 0.03) & (lum < 0.97)
    rgb *= target / np.maximum(np.median(rgb[mask], axis=0), 1e-4)
    np.clip(rgb, 0, 1, out=rgb)
    copy = bpy.data.images.new(name, width, height, alpha=True)
    copy.pixels.foreach_set(pixels.ravel())
    copy.file_format = "PNG"
    return copy


def set_alpha(material, bsdf, clip):
    """Opaque, or cut at half alpha (glTF MASK) for strands: no surface is alpha-blended, so a
    viewer never has to sort hair against the face it hangs over."""
    tree = material.node_tree
    alpha = bsdf.inputs["Alpha"]
    source = alpha.links[0].from_socket if alpha.is_linked else None
    for link in list(alpha.links):
        tree.links.remove(link)
    alpha.default_value = 1.0
    material.surface_render_method = "DITHERED"
    if clip and source is not None:
        cut = tree.nodes.new("ShaderNodeMath")
        cut.operation = "GREATER_THAN"
        cut.inputs[1].default_value = 0.5
        tree.links.new(source, cut.inputs[0])
        tree.links.new(cut.outputs[0], alpha)


def shrink_images(limit=TEXTURE_SIZE):
    for image in bpy.data.images:
        width, height = image.size
        if max(width, height) > limit:
            scale = limit / max(width, height)
            image.scale(int(width * scale), int(height * scale))


STRANDS = {"Hair", "Eyebrows", "Eyelashes"}


def dress(basemesh, entry):
    """Skin tone, hair colour and a plain top: the look the roster asks for."""
    rig = ObjectService.find_object_of_type_amongst_nearest_relatives(basemesh, "Skeleton")
    for obj in ObjectService.get_list_of_children(rig):
        if obj.type != "MESH":
            continue
        kind = ObjectService.get_object_type(obj)
        for slot in obj.material_slots:
            bsdf = principled(slot.material)
            if bsdf is None:
                continue
            set_alpha(slot.material, bsdf, clip=kind in STRANDS)
            image = base_image(bsdf)
            if kind == "Basemesh" and image is not None:
                image.image = recolour(image.image, hex_rgb(entry["tone"]), f"{entry['id']}-skin")
            elif kind == "Hair" and image is not None:
                image.image = recolour(image.image, hex_rgb(entry["hairColor"]), f"{entry['id']}-hair")
            elif kind == "Clothes":
                socket = bsdf.inputs["Base Color"]
                for link in list(socket.links):
                    slot.material.node_tree.links.remove(link)
                socket.default_value = (*(hex_rgb(entry["topColor"]) ** 2.2), 1.0)  # linear
                bsdf.inputs["Roughness"].default_value = 0.85


def bake(basemesh):
    """Apply helpers, hidden-under-clothes masks and the phenotype, so only plain meshes remain."""
    ExportService.bake_modifiers_remove_helpers(basemesh, bake_masks=True, bake_subdiv=False, remove_helpers=True)
    rig = ObjectService.find_object_of_type_amongst_nearest_relatives(basemesh, "Skeleton")
    for obj in ObjectService.get_list_of_children(rig):
        if obj.type == "MESH" and obj.data.shape_keys:
            bpy.ops.object.select_all(action="DESELECT")
            bpy.context.view_layer.objects.active = obj
            obj.select_set(True)
            bpy.ops.object.shape_key_remove(all=True, apply_mix=True)
    return rig


def snake(name):
    return "".join(f"_{c.lower()}" if c.isupper() else c for c in name)


def export_vrm(rig, entry, path):
    ext = rig.data.vrm_addon_extension
    ext.spec_version = "1.0"
    human_bones = ext.vrm1.humanoid.human_bones
    for vrm_bone, bone in BONES["bones"].items():
        getattr(human_bones, snake(vrm_bone)).node.bone_name = bone
    meta = ext.vrm1.meta
    meta.vrm_name = entry["label"]
    while len(meta.authors):
        meta.authors.remove(0)
    meta.authors.add().value = "marionet (MakeHuman CC0 assets via MPFB)"
    meta.avatar_permission = "everyone"
    meta.commercial_usage = "corporation"
    meta.credit_notation = "unnecessary"
    meta.allow_redistribution = True
    meta.modification = "allowModificationRedistribution"
    meta.other_license_url = CC0

    bpy.ops.object.select_all(action="DESELECT")
    bpy.context.view_layer.objects.active = rig
    result = bpy.ops.export_scene.vrm(filepath=str(path), armature_object_name=rig.name, ignore_warning=True)
    if "FINISHED" not in result or not path.exists():
        raise RuntimeError(f"VRM export failed for {entry['id']}: {result}")


def build(entry):
    clear_scene()
    basemesh = HumanService.deserialize_from_dict(human_info(entry), dict(SETTINGS))
    dress(basemesh, entry)
    rig = bake(basemesh)
    shrink_images()
    OUT.mkdir(exist_ok=True)
    path = OUT / f"{entry['id']}.vrm"
    export_vrm(rig, entry, path)
    print(f"built {path.name}  {path.stat().st_size / 1e6:.1f} MB")


def main():
    argv = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else []
    wanted = set(argv)
    entries = [e for e in ROSTER["avatars"] if not wanted or e["id"] in wanted]
    if wanted - {e["id"] for e in entries}:
        raise SystemExit(f"not in roster: {sorted(wanted - {e['id'] for e in entries})}")
    for entry in entries:
        build(entry)


if __name__ == "__main__":
    main()
