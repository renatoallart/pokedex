import { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import { pokedexApi } from "../api/pokedex";
import { formatData } from "../../lib/formatPokemonData";
import { randomPokemonList } from "../../lib/randomPokemonList";

const PokemonContext = createContext();

export function usePokemonContext() {
  return useContext(PokemonContext);
}

export function PokemonProvider({ children }) {
  const [pokemonNameList, setPokemonNameList] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);
  const [randomList, setRandomList] = useState(false);

  async function fetchPokemonListArray() {
    try {
      const { data } = await pokedexApi.get("pokemon/", {
        params: {
          limit: 100000,
          offset: 0,
        },
      });
      let randomNames = randomPokemonList(data);
      setPokemonNameList(randomNames);
    } catch (error) {
      console.log("pokemonList Array", error);
    }
  }

  async function fetchPokemonData() {
    try {
      const response = await Promise.all(
        pokemonNameList.map((pokemon) => pokedexApi.get(`pokemon/${pokemon}`))
      );

      setPokemonData(
        response.map((responseData) => {
          const { data } = responseData;
          return formatData(data);
        })
      );
    } catch (error) {
      console.log("fetchPokemonData", error);
    }
  }

  useEffect(() => {
    fetchPokemonListArray();
  }, [randomList]);

  useEffect(() => {
    fetchPokemonData();
  }, [pokemonNameList]);

  // console.log(pokemonNameList, "list");

  return (
    <PokemonContext.Provider value={{ pokemonData, setRandomList }}>
      {children}
    </PokemonContext.Provider>
  );
}
