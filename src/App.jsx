import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { PokemonDetail } from "./pages/PokemonDetail";
import { PokemonProvider } from "./context/PokemonProvider";
import { Link } from "react-router-dom";

export function App() {
  return (
    <main>
      <PokemonProvider>
        <BrowserRouter>
          <h1 className=" text-center text-4xl font-bold m-4 hover:text-gray-500">
            <Link to="/">Pokédex</Link>
          </h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/pokemon/detail/:pokemon"
              element={<PokemonDetail />}
            />
          </Routes>
        </BrowserRouter>
      </PokemonProvider>
    </main>
  );
}
