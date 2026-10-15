/**
 * Which signer performs each sign. The signs share the roster in proportion to
 * avatars/weights.json (population share × gender share, split between the signers who stand for
 * a population), dealt out like parliamentary seats by the Sainte-Laguë method: each sign goes to
 * the signer whose share is least met so far. So the counts are as close to the weights as whole
 * signs allow at every size, and a small share gets its first sign early: 27 signs reach all 16
 * signers, where drawing each sign at random had given one signer 10 and seven signers none.
 * Signs are dealt in an order shuffled by their ids, so a population's signs are spread through
 * the alphabet rather than in a run; a sign passes over the signer of the sign next to it, so
 * neighbours (A and B, cat and cat-2) never look alike; and a sign that already has a signer keeps it.
 */

function fnv1a(text) {
  let hash = 0x811c9dc5;
  for (const byte of new TextEncoder().encode(text)) {
    hash ^= byte;
    hash = Math.imul(hash, 0x01000193);
  }
  // murmur3's finalizer, so ids that differ in one letter land far apart
  hash ^= hash >>> 16;
  hash = Math.imul(hash, 0x85ebca6b);
  hash ^= hash >>> 13;
  hash = Math.imul(hash, 0xc2b2ae35);
  hash ^= hash >>> 16;
  return hash >>> 0;
}

/** [{ id, weight }] for every avatar, weights summing to 1. */
export function avatarWeights(roster, weights) {
  const avatars = roster.avatars ?? roster;
  const peers = new Map();
  for (const a of avatars) {
    const key = `${a.population}|${a.gender}`;
    peers.set(key, (peers.get(key) || 0) + 1);
  }
  const raw = avatars.map((a) => ({
    id: a.id,
    weight:
      ((weights.populations[a.population] ?? 0) * (weights.gender[a.gender] ?? 0)) / peers.get(`${a.population}|${a.gender}`),
  }));
  const total = raw.reduce((sum, a) => sum + a.weight, 0);
  if (!(total > 0)) throw new Error("avatar weights sum to zero: check weights.json against the roster");
  return raw.map((a) => ({ ...a, weight: a.weight / total }));
}

/**
 * Map of sign id → avatar id for `signIds`. `kept` (sign id → avatar id, e.g. from the last
 * manifest) holds signs that already have a signer: they keep it, as long as the roster still has
 * it, and count toward its share, so adding signs never moves the ones already published.
 */
export function assignAvatars(signIds, roster, weights, kept = new Map()) {
  const table = avatarWeights(roster, weights);
  const count = new Map(table.map(({ id }) => [id, 0]));
  const assigned = new Map();
  for (const [sign, avatar] of kept) {
    if (!count.has(avatar)) continue;
    assigned.set(sign, avatar);
    count.set(avatar, count.get(avatar) + 1);
  }
  const order = (id) => fnv1a(`signer:${id}`);
  const fresh = [...new Set(signIds)].filter((id) => !assigned.has(id)).sort((a, b) => order(a) - order(b) || a.localeCompare(b));
  const alphabet = [...new Set([...signIds, ...assigned.keys()])].sort();
  const place = new Map(alphabet.map((id, i) => [id, i]));
  for (const sign of fresh) {
    const i = place.get(sign);
    const nextTo = new Set([assigned.get(alphabet[i - 1]), assigned.get(alphabet[i + 1])]);
    let best = null;
    let bestScore = -1;
    for (const { id, weight } of table) {
      if (nextTo.has(id) && table.length > 2) continue;
      const score = weight / (2 * count.get(id) + 1);
      // equal claims go by a hash of sign and signer, not by roster order
      if (score > bestScore || (score === bestScore && fnv1a(`${sign}|${id}`) < fnv1a(`${sign}|${best}`))) {
        best = id;
        bestScore = score;
      }
    }
    assigned.set(sign, best);
    count.set(best, count.get(best) + 1);
  }
  return new Map(signIds.map((id) => [id, assigned.get(id)]));
}
