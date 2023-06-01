import './filter-albums.css'
import { Aux } from '../../data/game-functions'
import AlbumPic from './AlbumPic'
import { useContext } from 'react'
import { GameContext } from '../../context/GameContext'
import Button from '../Button/Button'


export default function FilterAlbums() {
  const {
    setPage,
    selectedAlbums,
    setSelectedAlbums,
    setFilteredAlbums,
    setScoreBar,
    initScore
  } = useContext(GameContext)

  function disableAll() {
    setSelectedAlbums([...selectedAlbums].map(album => ({ ...album, selected: false })))
  }

  function enableAll() {
    setSelectedAlbums([...selectedAlbums].map(album => ({ ...album, selected: true })))
  }

  function playGame() {
    setFilteredAlbums([...selectedAlbums].filter(album => album.selected))
    setScoreBar(initScore)
    setPage(2)
  }

  return (
    <>
      <Button
        className="btn-back"
        onClick={() => setPage(0)}
      />
      <h1 className='filter-albums-title'>
        Filtra los albums con los que quieras jugar
      </h1>
      <ul className="albums-list">
        {
          selectedAlbums?.map(album => (
            <AlbumPic
              key={album.id}
              album={album}
            />
          ))
        }
      </ul>
      <div className="buttons">
        <Button
          className="btn-disable-all"
          onClick={disableAll}
        />
        <Button
          className="btn-enable-all"
          onClick={enableAll}
        />
        <Button
          className="btn-play"
          onClick={playGame}
        />
      </div>
    </>
  )
}