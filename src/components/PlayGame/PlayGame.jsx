import './play-game.css'
import { useContext } from 'react'
import { GameContext } from '../../context/GameContext'
import AlbumCard from './AlbumCard'
import MediaPlayer from './MediaPlayer'
import Button from '../Button/Button'
import WinOrLose from './WinOrLose'


export default function PlayGame() {
  const { setPage, items } = useContext(GameContext)

  return (
    <main>
      <Button
        className="btn-back"
        onClick={() => setPage(1)}
      />
      <section className="albums-container">
        {
          items?.albums?.map(album => (
            <AlbumCard
              key={album.id}
              album={album}
            />
          ))
        }
      </section>
      <MediaPlayer />
      <WinOrLose />
    </main>
  )
}