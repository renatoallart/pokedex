import { useParams, } from "react-router-dom"
import { useState, useEffect } from 'react'
import { PokemonStatsChart } from "../components/PokemonStatsChart"
import { pokedexApi } from "../api/pokedex"
import { PokemonCard } from "../components/PokemonCard"


function Error() {
  return (<div className="flex justify-center">
    <h2 className="font-bold text-2xl ">Pokemon Not Found</h2>
  </div>)
}


export function PokemonDetail() {
  const { pokemon } = useParams()

  const [pokemonDetail, setPokemonDetail] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorSearch, setErrorSearch] = useState(false)

  async function fetchPokemonData() {
    try {
      const response = await pokedexApi.get(`/pokemon/${pokemon}`)
      const { data } = response
      setPokemonDetail({
        id: data.id,
        name: data.name,
        sprite: data.sprites.other.dream_world.front_default || data.sprites.other.home.front_default,
        stats: data.stats,
        types: data.types,
      })

      setIsLoading(false)

    } catch (error) {
      setErrorSearch(true)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchPokemonData()

  }, [])

  


  if (isLoading) {
    return <div className="flex justify-center">
      <h2 className="font-bold text-2xl ">Loading....</h2>
    </div>
  }

  if (errorSearch) {
    return <Error />
  }

  return (
    <section className=" flex justify-center flex-wrap gap-4 m-4 p-4">
      <PokemonStatsChart {...pokemonDetail} />
      <PokemonCard {...pokemonDetail} detail={true} />
    </section>
  )
}
