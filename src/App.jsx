import './normalize.css'
import './app.css'
import SearchArtist from './Components/SearchArtist/SearchArtist'
import FilterAlbums from './Components/FilterAlbums/FilterAlbums'
import PlayGame from './Components/PlayGame/PlayGame'
import { useContext } from 'react'
import { GameContext } from './context/GameContext'

export default function App() {
  const { page } = useContext(GameContext)

  const gamePages = [
    <SearchArtist />,
    <FilterAlbums />,
    <PlayGame />
  ]

  return gamePages[page]
}