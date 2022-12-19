import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { PokemonStatsChart } from "../components/PokemonStatsChart";
import { pokedexApi } from "../api/pokedex";
import { PokemonCard } from "../components/PokemonCard";
import { formatData } from "../../lib/formatPokemonData";

function Error() {
  return (
    <div className="flex justify-center">
      <h2 className="font-bold text-2xl ">Pokemon Not Found</h2>
    </div>
  );
}

export function PokemonDetail() {
  const { pokemon } = useParams();

  const [pokemonDetail, setPokemonDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorSearch, setErrorSearch] = useState(false);

  async function fetchPokemonData() {
    try {
      const response = await pokedexApi.get(`/pokemon/${pokemon}`);
      const { data } = response;
      let pokemonData = formatData(data);

      setPokemonDetail(pokemonData);
      setIsLoading(false);
    } catch (error) {
      setErrorSearch(true);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPokemonData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <h2 className="font-bold text-2xl ">Loading....</h2>
      </div>
    );
  }

  if (errorSearch) {
    return <Error />;
  }

  return (
    <section className=" flex  place-content-evenly flex-wrap gap-4">
      <PokemonStatsChart {...pokemonDetail} />
      <PokemonCard {...pokemonDetail} detail={true} />
    </section>
  );
}
