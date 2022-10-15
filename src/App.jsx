import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PokemonDetail from './pages/PokemonDetail'
import { PokemonProvider } from './context/PokemonProvider'

export function App() {

  return (
    <main>
      <h1>Pokedex</h1>
      <PokemonProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pokemon/detail/:pokemon' element={<PokemonDetail />} />
          </Routes>
        </BrowserRouter>
      </PokemonProvider>
    </main>
  )
}
