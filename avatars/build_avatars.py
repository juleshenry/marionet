"""
Build the dictionary's signers: anime-style bodies from VRoid Project's sample models, given the
skin, hair, eyes and plain top each roster entry asks for, exported as VRM 1.0 for marionet.

Needs Blender 4.2+ with the VRM extension:
  blender --online-mode --command extension install vrm --enable

Usage:
  blender -b --python avatars/build_avatars.py -- [id ...]

Fetches the bases (avatars/bases.json) into avatars/bases/ the first time, and writes
avatars/out/{id}.vrm for each entry of avatars/roster.json (or only the ids given).

A signer is its `body` base with:
  - hair: the body's own, another base's (moved onto this head; "fringe": false takes its bangs
    off), or one drawn here: afro, puffs, hightop, or crop (the painted scalp alone). All hair is
    fixed to the head, with no spring bones, so a looping video ends exactly where it began.
  - skin scaled to `tone`, irises to `eyes`, hair and brows to `hairColor`;
  - a plain top in `topColor`, as signers wear on camera; ties and bows taken off.
"""
import hashlib
import io
import json
import math
import sys
import urllib.request
import zipfile
from pathlib import Path

import bmesh
import bpy
import numpy as np
from mathutils import Matrix, Vector

ROOT = Path(__file__).resolve().parent
OUT = ROOT / "out"
BASES_DIR = ROOT / "bases"
BASES = json.loads((ROOT / "bases.json").read_text())["models"]
ROSTER = json.loads((ROOT / "roster.json").read_text())

HEAD = "J_Bip_C_Head"
DRAWN = {"afro", "puffs", "hightop", "crop"}
TEXTURE_SIZE = 1024
NORMAL_SIZE = 512  # toon shading barely shows a normal map's detail
HAIR_FACES = 6000  # per drawn hairstyle
BOTTOMS = "#2b2b33"
# The licence VRoid Hub gives the sample models (as embedded in them): use, modify, redistribute,
# commercially too, no credit needed.
LICENCE = ("https://hub.vroid.com/license?allowed_to_use_user=everyone&characterization_allowed_user=everyone"
           "&corporate_commercial_use=allow&credit=unnecessary&modification=allow&personal_commercial_use=profit"
           "&redistribution=allow&sexual_expression=allow&version=1&violent_expression=allow")


# ---- bases ----

def base_path(name):
    """The base's .vrm, downloaded and checked the first time."""
    model = BASES[name]
    path = BASES_DIR / model["file"]
    if path.exists():
        return path
    BASES_DIR.mkdir(exist_ok=True)
    print(f"fetching {model['url']}")
    request = urllib.request.Request(model["url"], headers={"User-Agent": "marionet-avatars"})
    data = urllib.request.urlopen(request, timeout=300).read()
    digest = hashlib.sha256(data).hexdigest()
    if digest != model["sha256"]:
        raise SystemExit(f"{model['url']}: sha256 {digest}, expected {model['sha256']}")
    with zipfile.ZipFile(io.BytesIO(data)) as archive:
        member = next(n for n in archive.namelist() if Path(n).name == model["file"])
        path.write_bytes(archive.read(member))
    return path


def clear_scene():
    for obj in list(bpy.data.objects):
        bpy.data.objects.remove(obj, do_unlink=True)
    for block in (bpy.data.meshes, bpy.data.materials, bpy.data.images, bpy.data.armatures, bpy.data.metaballs):
        for item in list(block):
            block.remove(item)


def import_vrm(path):
    """Import a .vrm; its armature and the objects it brought."""
    before = set(bpy.data.objects)
    result = bpy.ops.import_scene.vrm(filepath=str(path))
    if "FINISHED" not in result:
        raise RuntimeError(f"could not import {path}")
    objects = [obj for obj in bpy.data.objects if obj not in before]
    rig = next(obj for obj in objects if obj.type == "ARMATURE")
    return rig, objects


def meshes(objects):
    return [obj for obj in objects if obj.type == "MESH"]


def named(objects, prefix):
    return next((obj for obj in meshes(objects) if obj.name.startswith(prefix)), None)


def hair_of(objects):
    return next((obj for obj in meshes(objects) if obj.name.startswith("Hair")), None)


def head_position(rig):
    return rig.matrix_world @ rig.data.bones[HEAD].head_local


def world_points(obj, material_part=None):
    """The object's vertices in world space, or only those of faces whose material's name
    contains `material_part`."""
    matrix = obj.matrix_world
    if material_part is None:
        return np.array([matrix @ v.co for v in obj.data.vertices])
    slots = [part_of(slot.material, material_part) for slot in obj.material_slots]
    ids = {i for poly in obj.data.polygons if slots[poly.material_index] for i in poly.vertices}
    return np.array([matrix @ obj.data.vertices[i].co for i in sorted(ids)])


def part_of(material, part):
    return material is not None and part in material.name


# ---- hair ----

def fix_to_head(obj, rig):
    """Weight every vertex to the head bone alone and hang the mesh on `rig`."""
    obj.vertex_groups.clear()
    obj.vertex_groups.new(name=HEAD).add(list(range(len(obj.data.vertices))), 1.0, "REPLACE")
    modifier = next((m for m in obj.modifiers if m.type == "ARMATURE"), None) or obj.modifiers.new("Armature", "ARMATURE")
    modifier.object = rig
    matrix = obj.matrix_world.copy()
    obj.parent = rig
    obj.matrix_world = matrix


def borrow_hair(name, rig):
    """Another base's hair, moved from its head to this one (the bases' heads are one size)."""
    donor, objects = import_vrm(base_path(name))
    hair = hair_of(objects)
    if hair is None:
        raise SystemExit(f"{name} has no hair to lend")
    offset = head_position(rig) - head_position(donor)
    matrix = hair.matrix_world.copy()
    hair.data.transform(matrix.inverted() @ Matrix.Translation(offset) @ matrix)
    hair.parent = None
    hair.matrix_world = matrix
    body = named(objects, "Body")
    scalp = world_points(body, "HairBack")  # HairSample_Male has none: then the top of the head
    drop_ahoge(hair, (scalp if len(scalp) else world_points(body))[:, 2].max() + offset.z)
    for obj in objects:
        if obj is not hair:
            bpy.data.objects.remove(obj, do_unlink=True)
    hair.name = f"Hair_{name}"
    return hair


def trim_fringe(hair, head):
    """Take the bangs off borrowed hair: the strands that hang over the forehead, so long hair is
    worn swept back from the face."""
    matrix = hair.matrix_world
    bm = bmesh.new()
    bm.from_mesh(hair.data)
    reach = head.brow + 0.6 * (head.top - head.brow)
    doomed = []
    for f in bm.faces:
        x, y, z = matrix @ f.calc_center_median()
        if y < head.front + 0.3 * head.depth and abs(x - head.centre.x) < 0.42 * head.width and z < reach:
            doomed.append(f)
    bmesh.ops.delete(bm, geom=doomed, context="FACES")
    bm.to_mesh(hair.data)
    bm.free()


def drop_ahoge(hair, scalp_top):
    """Take off the strands that stand up from the crown on their own (ahoge), which mark an anime
    character as a child: the loose pieces of hair that lie wholly above the top of the scalp they
    were made for."""
    matrix = hair.matrix_world
    bm = bmesh.new()
    bm.from_mesh(hair.data)
    seen, doomed = set(), []
    for start in bm.verts:
        if start in seen:
            continue
        island, stack = [], [start]
        seen.add(start)
        while stack:
            vert = stack.pop()
            island.append(vert)
            for edge in vert.link_edges:
                other = edge.other_vert(vert)
                if other not in seen:
                    seen.add(other)
                    stack.append(other)
        if min((matrix @ v.co).z for v in island) > scalp_top - 0.005:
            doomed.extend(island)
    bmesh.ops.delete(bm, geom=doomed, context="VERTS")
    bm.to_mesh(hair.data)
    bm.free()


class Head:
    """Where the scalp and face are, for drawing hair on them."""

    def __init__(self, objects):
        body, face = named(objects, "Body"), named(objects, "Face")
        scalp = world_points(body, "HairBack")
        self.face = world_points(face)
        self.left, self.right = scalp[:, 0].min(), scalp[:, 0].max()
        self.front, self.back = scalp[:, 1].min(), scalp[:, 1].max()  # VRM faces -Y in Blender
        self.top = scalp[:, 2].max()
        self.width = self.right - self.left
        self.depth = self.back - self.front
        self.chin = self.face[:, 2].min()
        brows = world_points(face, "FaceBrow")
        self.brow = brows[:, 2].max()
        self.centre = Vector(((self.left + self.right) / 2, (self.front + self.back) / 2, (self.top + self.chin) / 2))


def fibonacci(n):
    """n points spread evenly over the unit sphere."""
    golden = math.pi * (3 - math.sqrt(5))
    for i in range(n):
        z = 1 - 2 * (i + 0.5) / n
        r = math.sqrt(1 - z * z)
        yield Vector((math.cos(golden * i) * r, math.sin(golden * i) * r, z))


def cloud(name, bumps, bump_size, low=-1.0):
    """A cloud-edged blob: a core metaball ringed with smaller balls, as a mesh in unit space,
    the core spanning about -1..1. Bumps lower than `low` are left out."""
    meta = bpy.data.metaballs.new(name)
    meta.resolution = meta.render_resolution = 0.06
    meta.threshold = 0.6
    element = meta.elements.new(type="BALL")
    element.radius = 1.4
    for point in fibonacci(bumps):
        if point.z < low:
            continue
        ball = meta.elements.new(type="BALL")
        ball.co = point * 1.0
        ball.radius = bump_size
    obj = bpy.data.objects.new(name, meta)
    bpy.context.scene.collection.objects.link(obj)
    mesh = bpy.data.meshes.new_from_object(obj.evaluated_get(bpy.context.evaluated_depsgraph_get()))
    bpy.data.objects.remove(obj, do_unlink=True)
    bpy.data.metaballs.remove(meta)
    return mesh


def fit(mesh, lo, hi):
    """Scale and move the mesh so its bounding box is lo..hi."""
    points = np.array([v.co for v in mesh.vertices])
    a, b = points.min(axis=0), points.max(axis=0)
    scale = (np.array(hi) - np.array(lo)) / (b - a)
    mesh.transform(Matrix.Translation(Vector(lo)) @ Matrix.Diagonal((*scale, 1)) @ Matrix.Translation(Vector(-a)))


def cut(mesh, point, normal):
    """Remove the part of the mesh on the side `normal` points to."""
    bm = bmesh.new()
    bm.from_mesh(mesh)
    bmesh.ops.bisect_plane(bm, geom=bm.verts[:] + bm.edges[:] + bm.faces[:], plane_co=point, plane_no=normal,
                           clear_outer=True)
    bm.to_mesh(mesh)
    bm.free()


def drawn_hair(style, head, rig, body):
    """Hair drawn as a toon cloud around the scalp: an afro, two puffs, or a high-top."""
    w, d = head.width, head.depth
    c = head.centre
    parts = []
    if style == "afro":
        mesh = cloud("afro", 70, 0.42)
        fit(mesh, (c.x - 0.95 * w, head.front - 0.05 * d, head.chin + 0.3 * (head.brow - head.chin)),
            (c.x + 0.95 * w, head.back + 0.42 * d, head.top + 0.5 * w))
        cut(mesh, (0, head.front + 0.12 * d, 0), (0, -1, 0))
        parts.append(mesh)
    elif style == "hightop":
        mesh = cloud("hightop", 110, 0.3)
        fit(mesh, (c.x - 0.7 * w, head.front - 0.02 * d, head.chin + 0.2 * (head.brow - head.chin)),
            (c.x + 0.7 * w, head.back + 0.25 * d, head.top + 0.3 * w))
        cut(mesh, (0, head.front + 0.12 * d, 0), (0, -1, 0))
        cut(mesh, (0, 0, head.brow - 0.05 * (head.top - head.brow)), (0, 0, -1))
        parts.append(mesh)
    elif style == "puffs":
        for side in (-1, 1):
            mesh = cloud(f"puff{side}", 40, 0.45)
            x = c.x + side * 0.42 * w
            r = 0.38 * w
            z = head.top - 0.02 * w
            y = c.y + 0.12 * d
            fit(mesh, (x - r, y - r, z - r), (x + r, y + r, z + r))
            parts.append(mesh)
    else:
        raise SystemExit(f"no drawn hair called {style}")

    bm = bmesh.new()
    for mesh in parts:
        bm.from_mesh(mesh)
        bpy.data.meshes.remove(mesh)
    mesh = bpy.data.meshes.new(f"Hair_{style}")
    bm.to_mesh(mesh)
    bm.free()
    obj = bpy.data.objects.new(f"Hair_{style}", mesh)
    bpy.context.scene.collection.objects.link(obj)
    decimate = obj.modifiers.new("Decimate", "DECIMATE")
    decimate.ratio = min(1.0, HAIR_FACES / max(len(mesh.polygons), 1))
    obj.data = bpy.data.meshes.new_from_object(obj.evaluated_get(bpy.context.evaluated_depsgraph_get()))
    obj.modifiers.remove(decimate)
    bpy.data.meshes.remove(mesh)
    obj.data.name = f"Hair_{style}"
    obj.data.shade_smooth()
    obj.data.uv_layers.new(name="UVMap")

    # The scalp's own material, made opaque and plain: dress() tints it with the rest of the hair.
    scalp = next(s.material for s in body.material_slots if part_of(s.material, "HairBack"))
    material = scalp.copy()
    material.name = f"Drawn_{style}_HAIR"
    mt = material.vrm_addon_extension.mtoon1
    mt.alpha_mode = "OPAQUE"
    mt.double_sided = True
    mt.normal_texture.index.source = None
    plain = bpy.data.images.new(f"{style}-plain", 4, 4)
    plain.pixels.foreach_set(np.ones(64, dtype=np.float32))
    mt.pbr_metallic_roughness.base_color_texture.index.source = plain
    mt.extensions.vrmc_materials_mtoon.shade_multiply_texture.index.source = plain
    outline = mt.extensions.vrmc_materials_mtoon
    outline.outline_width_mode = "worldCoordinates"
    outline.outline_width_factor = 0.0008
    outline.outline_width_multiply_texture.index.source = None
    obj.data.materials.append(material)
    return obj


# ---- colour ----

def hex_rgb(value):
    value = value.lstrip("#")
    return np.array([int(value[i:i + 2], 16) / 255 for i in (0, 2, 4)])


def to_linear(c):
    return np.where(c <= 0.04045, c / 12.92, ((c + 0.055) / 1.055) ** 2.4)


def to_srgb(c):
    c = np.clip(c, 0, 1)
    return np.where(c <= 0.0031308, c * 12.92, 1.055 * c ** (1 / 2.4) - 0.055)


def read(image):
    """An image's pixels, (n, 4), in its own (sRGB) encoding for an 8-bit image."""
    width, height = image.size
    pixels = np.empty(width * height * 4, dtype=np.float32)
    image.pixels.foreach_get(pixels)
    return pixels.reshape(-1, 4)


def written(name, like, pixels):
    width, height = like.size
    image = bpy.data.images.new(name, width, height, alpha=True)
    image.pixels.foreach_set(pixels.astype(np.float32).ravel())
    image.file_format = "PNG"
    return image


def recolour_skin(image, target, name):
    """Scale the skin's colours channel by channel so their median lands on `target`, keeping
    the blush and shading painted into it."""
    pixels = read(image)
    rgb = pixels[:, :3]
    lum = rgb @ np.array([0.2126, 0.7152, 0.0722])
    mask = (pixels[:, 3] > 0.5) & (lum > 0.03) & (lum < 0.97)
    rgb *= target / np.maximum(np.median(rgb[mask], axis=0), 1e-4)
    np.clip(rgb, 0, 1, out=rgb)
    return written(name, image, pixels)


def tint(image, factor, target, name):
    """One colour with the image's light and dark: its luminance (under the material's own colour
    factor) scaled so the median lands on `target`. Hair, brows and irises lose their own hue."""
    pixels = read(image)
    lum = (to_linear(pixels[:, :3]) * np.asarray(factor[:3])) @ np.array([0.2126, 0.7152, 0.0722])
    mask = (pixels[:, 3] > 0.5) & (lum > 1e-5)
    middle = np.median(lum[mask]) if mask.any() else 1.0
    pixels[:, :3] = to_srgb(to_linear(target)[None, :] * np.clip(lum / max(middle, 1e-5), 0, 4)[:, None])
    return written(name, image, pixels)


def flat(image, colour, name):
    """`colour` everywhere the image is, keeping its alpha."""
    pixels = read(image)
    pixels[:, :3] = colour
    return written(name, image, pixels)


def textures(material):
    mt = material.vrm_addon_extension.mtoon1
    return mt.pbr_metallic_roughness.base_color_texture.index, mt.extensions.vrmc_materials_mtoon.shade_multiply_texture.index


def repaint(material, make, shade=None):
    """Give the material the image `make(image, factor)` makes from its base colour texture, as
    lit and shaded colour, with the colour factor folded in."""
    mt = material.vrm_addon_extension.mtoon1
    base, shaded = textures(material)
    if base.source is None:
        return
    factor = tuple(mt.pbr_metallic_roughness.base_color_factor)
    image = make(base.source, factor)
    base.source = image
    shaded.source = image
    mt.pbr_metallic_roughness.base_color_factor = (1.0, 1.0, 1.0, factor[3])
    if shade is not None:
        mt.extensions.vrmc_materials_mtoon.shade_color_factor = shade


def delete_faces(obj, part):
    slots = [part_of(slot.material, part) for slot in obj.material_slots]
    if not any(slots):
        return
    bm = bmesh.new()
    bm.from_mesh(obj.data)
    bmesh.ops.delete(bm, geom=[f for f in bm.faces if slots[f.material_index]], context="FACES")
    bm.to_mesh(obj.data)
    bm.free()


def dress(entry, objects):
    tone, hair, eyes, top = (hex_rgb(entry[k]) for k in ("tone", "hairColor", "eyes", "topColor"))
    sid = entry["id"]
    for obj in meshes(objects):
        delete_faces(obj, "Accessory")
    done = set()
    for obj in meshes(objects):
        for slot in obj.material_slots:
            material = slot.material
            if material is None or material in done:
                continue
            done.add(material)
            name = material.name
            if "_SKIN" in name:
                repaint(material, lambda image, f: recolour_skin(image, tone, f"{sid}-{image.name}"))
            elif "_HAIR" in name:
                repaint(material, lambda image, f: tint(image, f, hair, f"{sid}-{image.name}"), shade=(0.6, 0.58, 0.66))
                # VRoid draws hair's sheen as emission in the hair's own colour
                material.vrm_addon_extension.mtoon1.emissive_factor = tuple(to_linear(hair) * 0.7 + 0.025)
            elif "FaceBrow" in name:
                repaint(material, lambda image, f: tint(image, f, hair * 0.9, f"{sid}-{image.name}"), shade=(1, 1, 1))
            elif "EyeIris" in name:
                repaint(material, lambda image, f: tint(image, f, eyes, f"{sid}-{image.name}"))
            elif "Tops" in name or "Onepice" in name:
                repaint(material, lambda image, f: flat(image, top, f"{sid}-top"), shade=(0.72, 0.72, 0.78))
            elif "Bottoms" in name:
                # one flat colour with no outline or sheen, so a skirt's school pleats don't show
                repaint(material, lambda image, f: flat(image, hex_rgb(BOTTOMS), f"{sid}-bottoms"), shade=(1, 1, 1))
                mtoon = material.vrm_addon_extension.mtoon1.extensions.vrmc_materials_mtoon
                mtoon.outline_width_mode = "none"
                mtoon.matcap_factor = (0.0, 0.0, 0.0)
                mtoon.matcap_texture.index.source = None


# ---- grown up ----

# VRoid's samples are drawn as teenagers: a head about a sixth of the body and eyes half the face.
# A smaller head and smaller eyes make the same faces read as adults.
HEAD_SCALE = {"woman": 0.84, "man": 0.87}
EYE_SCALE = (0.9, 0.76)  # across, high
EYE_PARTS = ("EyeWhite", "EyeIris", "EyeHighlight", "EyeExtra", "FaceEyeline", "FaceEyelash")


def reshape(obj, move):
    """Move the mesh's vertices and every shape key alike: move(points) takes and returns world-space
    (n, 3) arrays, one row per vertex."""
    matrix = np.array(obj.matrix_world)
    inverse = np.linalg.inv(matrix)
    count = len(obj.data.vertices)

    def apply(collection):
        flat_co = np.empty(count * 3)
        collection.foreach_get("co", flat_co)
        world = flat_co.reshape(count, 3) @ matrix[:3, :3].T + matrix[:3, 3]
        local = move(world) @ inverse[:3, :3].T + inverse[:3, 3]
        collection.foreach_set("co", local.ravel())

    apply(obj.data.vertices)
    if obj.data.shape_keys:
        for block in obj.data.shape_keys.key_blocks:
            apply(block.data)
    obj.data.update()


def narrow_eyes(face, across, high):
    """Draw each eye smaller about its own centre, and lower the brow over it by part of the drop."""
    names = [slot.material.name if slot.material else "" for slot in face.material_slots]
    parts = {}
    for poly in face.data.polygons:
        name = names[poly.material_index]
        part = next((p for p in (*EYE_PARTS, "FaceBrow") if p in name), None)
        if part:
            parts.setdefault(part, set()).update(poly.vertices)
    points = world_points(face)
    mid = (points[:, 0].min() + points[:, 0].max()) / 2
    eye = np.array(sorted(set().union(*(parts.get(p, set()) for p in EYE_PARTS))))
    brow = np.array(sorted(parts.get("FaceBrow", set())))
    whites = np.array(sorted(parts["EyeWhite"]))
    lashes = np.array(sorted(parts["FaceEyelash"]))
    count = len(points)
    scale_x, scale_z, centre_x, centre_z, drop = np.ones(count), np.ones(count), np.zeros(count), np.zeros(count), np.zeros(count)
    for side in (-1, 1):
        on = lambda ids: ids[(points[ids, 0] - mid) * side > 0]
        white = points[on(whites)]
        cx = (white[:, 0].min() + white[:, 0].max()) / 2
        cz = (white[:, 2].min() + white[:, 2].max()) / 2
        ids = on(eye)
        scale_x[ids], scale_z[ids], centre_x[ids], centre_z[ids] = across, high, cx, cz
        top = points[on(lashes), 2].max()
        drop[on(brow)] = 0.6 * (top - cz) * (high - 1)

    def move(p):
        q = p.copy()
        q[:, 0] = centre_x + (p[:, 0] - centre_x) * scale_x
        q[:, 2] = centre_z + (p[:, 2] - centre_z) * scale_z + drop
        return q

    reshape(face, move)


def shrink_head(rig, objects, scale):
    """Scale the head, and the hair and eyes it carries, about the top of the neck. A vertex shared
    by neck and head moves by its weight on the head, so the neck tapers into the smaller head."""
    head = rig.data.bones[HEAD]
    carried = {head.name, *(bone.name for bone in head.children_recursive)}
    local_pivot = head.head_local.copy()
    pivot = np.array(rig.matrix_world @ local_pivot)
    for obj in meshes(objects):
        groups = {group.index for group in obj.vertex_groups if group.name in carried}
        if not groups:
            continue
        weight = np.array([min(1.0, sum(g.weight for g in v.groups if g.group in groups)) for v in obj.data.vertices])
        factor = (1 + weight * (scale - 1))[:, None]
        reshape(obj, lambda p: pivot + (p - pivot) * factor)
    bpy.context.view_layer.objects.active = rig
    bpy.ops.object.mode_set(mode="EDIT")
    for bone in rig.data.edit_bones:
        if bone.name in carried:
            bone.head = local_pivot + (bone.head - local_pivot) * scale
            bone.tail = local_pivot + (bone.tail - local_pivot) * scale
    bpy.ops.object.mode_set(mode="OBJECT")
    look_at = rig.data.vrm_addon_extension.vrm1.look_at
    look_at.offset_from_head_bone = tuple(Vector(look_at.offset_from_head_bone) * scale)


def grow_up(rig, objects, gender):
    narrow_eyes(named(objects, "Face"), *EYE_SCALE)
    shrink_head(rig, objects, HEAD_SCALE[gender])


# ---- export ----

def drop_springs(rig):
    ext = rig.data.vrm_addon_extension
    secondary = ext.vrm0.secondary_animation
    secondary.bone_groups.clear()
    secondary.collider_groups.clear()
    springs = ext.spring_bone1
    springs.springs.clear()
    springs.collider_groups.clear()
    springs.colliders.clear()
    for obj in list(bpy.data.objects):
        if obj.type == "EMPTY":
            bpy.data.objects.remove(obj, do_unlink=True)


def shrink_images():
    for image in bpy.data.images:
        width, height = image.size
        limit = NORMAL_SIZE if image.name.endswith("_nml") else TEXTURE_SIZE
        if max(width, height) > limit:
            scale = limit / max(width, height)
            image.scale(int(width * scale), int(height * scale))


def prune_morphs(rig, objects):
    """Drop the face's shape keys no expression uses (VRoid ships ~55; the presets use 14)."""
    expressions = rig.data.vrm_addon_extension.vrm1.expressions
    used = {bind.index for expression in expressions.all_name_to_expression_dict().values()
            for bind in expression.morph_target_binds}
    for obj in meshes(objects):
        keys = obj.data.shape_keys
        if keys is None:
            continue
        for block in list(keys.key_blocks)[1:]:
            if block.name not in used:
                obj.shape_key_remove(block)


def export_vrm(rig, entry, path):
    ext = rig.data.vrm_addon_extension
    ext.spec_version = ext.SPEC_VERSION_VRM1
    meta = ext.vrm1.meta
    meta.vrm_name = entry["label"]
    while len(meta.authors):
        meta.authors.remove(0)
    meta.authors.add().value = "marionet, from VRoid Project's sample models"
    meta.copyright_information = ""
    meta.avatar_permission = "everyone"
    meta.commercial_usage = "corporation"
    meta.credit_notation = "unnecessary"
    meta.allow_redistribution = True
    meta.modification = "allowModificationRedistribution"
    meta.other_license_url = LICENCE
    meta.thumbnail_image = None  # the base's own character art
    ext.vrm0.meta.texture = None

    bpy.ops.object.select_all(action="DESELECT")
    bpy.context.view_layer.objects.active = rig
    result = bpy.ops.export_scene.vrm(filepath=str(path), armature_object_name=rig.name, ignore_warning=True)
    if "FINISHED" not in result or not path.exists():
        raise RuntimeError(f"VRM export failed for {entry['id']}: {result}")


def build(entry):
    clear_scene()
    rig, objects = import_vrm(base_path(entry["body"]))
    own = hair_of(objects)
    style = entry["hair"]
    if style == entry["body"]:
        hair = own
    else:
        if own is not None:
            objects.remove(own)
            bpy.data.objects.remove(own, do_unlink=True)
        if style in DRAWN:
            hair = None if style == "crop" else drawn_hair(style, Head(objects), rig, named(objects, "Body"))
        else:
            hair = borrow_hair(style, rig)
            if entry.get("fringe") is False:
                trim_fringe(hair, Head(objects))
    if hair is not None and hair is own:
        drop_ahoge(hair, Head(objects).top)
    if hair is not None:
        fix_to_head(hair, rig)
        if hair not in objects:
            objects.append(hair)
    objects = [obj for obj in objects if obj.type != "EMPTY"]  # the spring colliders, gone next
    drop_springs(rig)
    prune_morphs(rig, objects)
    grow_up(rig, objects, entry["gender"])
    dress(entry, objects)
    for image in list(bpy.data.images):
        if image.users == 0:
            bpy.data.images.remove(image)
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
