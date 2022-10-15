import { usePokemonContext } from '../context/PokemonProvider'
import { PokemonCard } from './PokemonCard'

export function PokemonList() {
    const { pokemonData } = usePokemonContext()
    return (
        <div>
            {pokemonData.map(pokemon =>
                <PokemonCard key={pokemon.id} {...pokemon} />
            )}
        </div>
    )
}
