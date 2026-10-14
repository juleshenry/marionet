/**
 * Which signer performs a sign. Each sign draws one avatar from the roster, weighted by
 * avatars/weights.json (population share × gender share, split between the signers who stand
 * for a population), with the sign's id as the only randomness: the same sign always gets the
 * same signer, and adding signs never moves the ones already there.
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

export function assignAvatar(signId, roster, weights) {
  const table = avatarWeights(roster, weights);
  const u = fnv1a(`signer:${signId}`) / 2 ** 32;
  let reached = 0;
  for (const { id, weight } of table) {
    reached += weight;
    if (u < reached) return id;
  }
  return table[table.length - 1].id;
}
