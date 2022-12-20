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
  const [pokemonData, setPokemonData] = useState([]);

  async function fetchPokemonList() {
    try {
      const { data } = await pokedexApi.get("pokemon/", {
        params: {
          limit: 100000,
          offset: 0,
        },
      });
      return randomPokemonList(data);
      // setPokemonNameList(randomNames);
    } catch (error) {
      console.log("pokemonList Array", error);
    }
  }

  async function fetchPokemonData() {
    let pokemonNameList = await fetchPokemonList();
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
    fetchPokemonData();
  }, []);

  // console.log(pokemonNameList, "list");

  return (
    <PokemonContext.Provider value={{ pokemonData, fetchPokemonData }}>
      {children}
    </PokemonContext.Provider>
  );
}
