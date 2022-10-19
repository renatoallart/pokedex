import { usePokemonContext } from '../context/PokemonProvider'
import { PokemonCard } from './PokemonCard'

export function PokemonList() {
    const { pokemonData } = usePokemonContext()


    
    return (
        <div className='flex flex-wrap gap-2 justify-center'>
            {pokemonData.map(pokemon =>
                <PokemonCard key={pokemon.id} {...pokemon} detail={false} />
            )}
        </div>
    )
}
