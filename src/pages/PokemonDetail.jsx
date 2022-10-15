import { useParams } from "react-router-dom"


export default function PokemonDetail() {
  const {pokemon} = useParams()
  return (
    <div>
      <h1> {pokemon}</h1>
    </div>
  )
}
