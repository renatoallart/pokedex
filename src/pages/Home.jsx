import React from "react";
import { PokemonList } from "../components/PokemonList";
import { PokemonSearch } from "../components/PokemonSearch";

export default function Home() {
  return (
    <section className="flex flex-col gap-4">
      <PokemonSearch />
      <PokemonList />
    </section>
  );
}
