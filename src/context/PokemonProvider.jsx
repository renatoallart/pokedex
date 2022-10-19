import { useState, useEffect } from 'react'
import { createContext, useContext } from 'react'
import { pokedexApi } from '../api/pokedex'

const PokemonContext = createContext()

export function usePokemonContext() {
    return useContext(PokemonContext)
}

export function PokemonProvider({ children }) {

    const [pokemonNameList, setPokemonNameList] = useState([])
    const [pokemonData, setPokemonData] = useState([])
    const [randomList, setRandomList] = useState(false)

    async function fetchPokemonListArray() {
        try {   
             const { data } = await pokedexApi.get('pokemon/', {
                params: {
                    limit: 100000,
                    offset: 0
                }
            })
            const nameList = data.results.map(pokemon => pokemon.name)
            let randomPokemonList = []
            for (let index = 0; index < 4; index++) {
                let randomPokemon = Math.floor(Math.random() * nameList.length)
                const randomName = nameList[randomPokemon]
                randomPokemonList.push(randomName)
            }
            setPokemonNameList(randomPokemonList)

        } catch (error) {
            console.log('pokemonList Array', error)
        }
    }

    async function fetchPokemonData() {
        try {
            const response = await Promise.all(pokemonNameList.map(pokemon =>
                pokedexApi.get(`pokemon/${pokemon}`)))

            setPokemonData(response.map(responseData => {
                const { data } = responseData
                return {
                    id: data.id,
                    abilities: data.abilities,
                    name: data.name,
                    sprite: data.sprites.other.dream_world.front_default || data.sprites.other.home.front_default,
                    stats: data.stats,
                    types: data.types,
                    moves: data.moves
                }
            }))
        } catch (error) {
            console.log('fetchPokemonData',error)
        }
    }

    useEffect(() => {
        fetchPokemonListArray()
    }, [randomList])

    useEffect(()=>{
        fetchPokemonData()
    },[pokemonNameList])


    return (
        <PokemonContext.Provider value={{ pokemonData, setRandomList }}>
            {children}
        </PokemonContext.Provider>
    )
}
