export function randomPokemonList(pokemonList) {
  const pokemonNamesList = pokemonList.results.map((pokemon) => pokemon.name);
  let randomPokemonList = [];
  for (let index = 0; index < 3; index++) {
    let randomPokemon = Math.floor(Math.random() * pokemonNamesList.length);
    const randomName = pokemonNamesList[randomPokemon];
    randomPokemonList.push(randomName);
  }
  return randomPokemonList;
}
