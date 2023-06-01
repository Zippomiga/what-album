import './album-card.css'
import { useContext } from 'react'
import { GameContext } from '../../context/GameContext'


export default function AlbumCard({ album }) {
  const { items, scoreBar, setScoreBar } = useContext(GameContext)
  const { id, name, image } = album

  const point = items.albumID === id

  function updatePicPoints() {
    const index = [...scoreBar].findIndex(score => score.image === null)
    const scoreFilled = { image, point }
    const newScore = [...scoreBar].fill(scoreFilled, index, index + 1)
    setScoreBar(newScore)
  }


  return (
    <figure
      className='album-card'
      onClick={updatePicPoints}
    >
      <img
        className='album-card-image'
        src={image}
        alt={name}
      />
      <figcaption className='album-card-name'>
        {name}
      </figcaption>
    </figure>
  )
}