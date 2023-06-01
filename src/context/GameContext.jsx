import { createContext, useEffect, useRef, useState } from "react";
import { Aux } from "../data/game-functions";

export const GameContext = createContext()

export function GameContextProvider(props) {
  const [page, setPage] = useState(0)
  const [selectedAlbums, setSelectedAlbums] = useState([])
  const [filteredAlbums, setFilteredAlbums] = useState([])
  const [items, setItems] = useState({})
  const [scoreBar, setScoreBar] = useState([])

  const initScore = Array(10).fill({ image: null, point: null })

  useEffect(() => {
    Aux.refreshGame(filteredAlbums, setItems)
  }, [scoreBar])


  return (
    <GameContext.Provider value={{
      page,
      setPage,
      selectedAlbums,
      setSelectedAlbums,
      filteredAlbums,
      setFilteredAlbums,
      items,
      setItems,
      scoreBar,
      setScoreBar,
      initScore
    }}>
      {props.children}
    </GameContext.Provider>
  )
}