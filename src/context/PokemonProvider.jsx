import { useState, useEffect } from 'react'
import { createContext, useContext } from 'react'
import { pokedexApi } from '../api/pokedex'

const PokemonContext = createContext()

export function usePokemonContext() {
    return useContext(PokemonContext)
}


export function PokemonProvider({ children }) {

    const [pokemonList, setPokemonList] = useState(["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise"])
    const [pokemonData, setPokemonData] = useState([])

    async function FetchPokemonData() {
        try {
            const response = await Promise.all(pokemonList.map(pokemon =>
                pokedexApi.get(`/pokemon/${pokemon}`)))

            setPokemonData(response.map(responseData => {
                const { data } = responseData
                return {
                    id: data.id,
                    abilities: data.abilities,
                    name: data.name,
                    sprite: data.sprites.other.dream_world.front_default,
                    stats: data.stats,
                    types: data.types,
                    moves: data.moves
                }
            }))
            console.log(pokemonData)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        FetchPokemonData()

    }, [])


    return (
        <PokemonContext.Provider value={{ pokemonData }}>
            {children}
        </PokemonContext.Provider>
    )
}
