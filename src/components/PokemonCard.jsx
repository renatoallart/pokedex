import { useNavigate } from "react-router-dom";

export function PokemonCard({ name, sprite, types, detail }) {
  const navigate = useNavigate();

  const handleCursor = detail
    ? { cursor: "" }
    : { cursor: "pointer", width: "300px" };

  const size = detail
    ? { width: "500px", height: "180px" }
    : { width: "100%", height: "9rem" };

  const backgroundColor = {
    ice: "  rgb(34 211 238)",
    bug: " rgb(52 211 153)",
    steel: "rgb(156 163 175)",
    fire: " #dc2626",
    grass: "  #4ade80",
    fairy: "rgb(244 114 182)",
    electric: "rgb(250 204 21)",
    poison: "rgb(232 121 249)",
    fighting: "rgb(248 113 113)",
    ground: "rgb(251 191 36)",
    dragon: "rgb(167 139 250)",
    dark: "rgb(161 161 170)",
    ghost: "rgb(192 132 252)",
    rock: "rgb(168 162 158)",
    water: "rgb(96 165 250)",
    flying: "rgb(161 175 237)",
    normal: "#a3a3a3",
    psychic: "#e879f9",
  };

  function handleNavigate(pokemon) {
    if (detail) return;
    return navigate(`pokemon/detail/${pokemon}`);
  }

  return (
    <div className=" flex place-content-center">
      <div
        className="bg-gray-300 h-[330px] w-[500px]  flex flex-col gap-4 hover:bg-gray-500"
        style={handleCursor}
        onClick={() => handleNavigate(name)}
      >
        <h2 className="text-xl text-center font-bold">
          {name[0].toUpperCase() + name.substring(1)}{" "}
        </h2>
        <img style={size} src={sprite} alt={`Pokemon: ${name}`} />
        <div className="flex justify-center">
          {types.map((data, index) => {
            const { name } = data.type;
            return (
              <span
                className="text-md m-2 font-semibold p-2 rounded-md"
                style={{ backgroundColor: backgroundColor[name] }}
                key={index}
              >
                {name[0].toUpperCase() + name.substring(1)}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
