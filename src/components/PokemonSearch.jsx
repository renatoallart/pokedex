import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { usePokemonContext } from "../context/PokemonProvider";

export function PokemonSearch() {
  const { setRandomList } = usePokemonContext();
  const inputSearch = useRef();
  const navigate = useNavigate();

  function handleSubmit(event) {
    const { value } = inputSearch.current;
    if (value === "") return event.preventDefault();
    navigate(`pokemon/detail/${value.toLowerCase()}`);
  }
  return (
    <form
      className="flex flex-col items-center gap-2 sm:flex sm:flex-row sm:justify-center "
      onSubmit={handleSubmit}
    >
      <input
        className=" w-[400px] border-2 rounded-lg 
        placeholder:ml-4 placeholder:pl-4 focus:p-2 focus:pl-4 
        border-violet-400 outline-none h-14 sm:w-[300px]"
        ref={inputSearch}
        type="text"
        placeholder="Search Pokemon"
      />
      <div className="flex gap-2  ">
        <button
          type="submit"
          className=" font-bold bg-slate-600 w-24 rounded-lg text-white h-14 hover:text-black hover:bg-gray-400 p-2"
        >
          Search
        </button>
        <button
          onClick={() => setRandomList((oldState) => !oldState)}
          className=" font-bold bg-slate-600 w-24 rounded-lg text-white h-14 hover:text-black hover:bg-gray-400 p-2"
        >
          Surprise Me!
        </button>
      </div>
    </form>
  );
}
