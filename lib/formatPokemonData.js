export function formatData(data) {
  return {
    id: data.id,
    abilities: data.abilities,
    name: data.name,
    sprite:
      data.sprites.other.dream_world.front_default ||
      data.sprites.other.home.front_default ||
      data.sprites.front_default,
    stats: data.stats,
    types: data.types,
    moves: data.moves,
  };
}
