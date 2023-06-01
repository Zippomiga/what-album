import './albumPic.css'
import { useContext } from "react"
import { GameContext } from '../../context/GameContext'


export default function AlbumPic({ album }) {
  const { selectedAlbums, setSelectedAlbums} = useContext(GameContext)
  const { id, selected, name, image } = album

  function toggleSelectedAlbum() {
    const selectedAlbum = [...selectedAlbums].find(album => album.id === id)
    selectedAlbum.selected = !selectedAlbum.selected
    setSelectedAlbums([...selectedAlbums])
  }

  return (
    <li
      id={id}
      className={selected ? 'album-pic enabled' : 'album-pic disabled'}
      onClick={toggleSelectedAlbum}
    >
      <img
        src={image}
        alt={name}
      />
      <span>
        {name}
      </span>
    </li>
  )
}