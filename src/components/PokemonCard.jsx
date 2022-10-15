import { useNavigate } from "react-router-dom"

export function PokemonCard({ name, id, sprite, types }) {

    const navigate = useNavigate()

    function handleBgColor(type) {
        const backgroundColor = {
            ice: ' backgroundColor: rgb(34 211 238)',
            bug: 'backgroundColor: rgb(52 211 153)',
            steel: 'rgb(156 163 175)',
            fire: ' backgroundColor: rgb(251 113 133)',
            grass: ' backgroundColor: rgb(45 212 191)',
            fairy: 'rgb(244 114 182)',
            electric: 'rgb(250 204 21)',
            poison: 'rgb(232 121 249)',
            fighter: 'rgb(248 113 113)',
            ground: 'rgb(251 191 36)',
            dragon: 'rgb(167 139 250)',
            dark: 'rgb(161 161 170)',
            ghost: 'rgb(192 132 252)',
            rock: 'rgb(168 162 158)',
            water: 'rgb(96 165 250)',
            flight: 'rgb(56 189 248)'
        }
        return backgroundColor[type]
    }

    function handleNavigate(pokemon){
        
        return navigate(`pokemon/detail/${pokemon}`)
    }
    return (
        <div>
            <div style={{cursor:'pointer'}} onClick={() => handleNavigate(name)}>
                <h2> {name} </h2>
                <img src={sprite} style={{ width: '40%' }} alt={`Pokemon: ${name}`} />
                <div>{types.map((data, index) => <span  key={index}>{data.type.name}</span>)}</div>
            </div>
        </div>
    )
}
