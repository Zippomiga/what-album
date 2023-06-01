import './media-player.css'
import { useContext } from 'react'
import { GameContext } from '../../context/GameContext'
import ScoreBar from './ScoreBar'

export default function MediaPlayer() {
  const { items } = useContext(GameContext)

  return (
    items.trackID && (
      <footer className="media-player">
        <span className='media-player-mask' />
        <iframe
          className='media-player-spotify'
          src={`https://open.spotify.com/embed/track/${items.trackID}?utm_source=generator&theme=0`}
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; fullscreen; picture-in-picture"
          loading="lazy"
        />
        <ScoreBar />
      </footer>
    )
  )
}