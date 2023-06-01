import './search-artist.css'
import InsertURL from '../../assets/Insert-URL.png'
import { useRef, useContext } from 'react'
import { GameContext } from '../../context/GameContext'
import Button from '../Button/Button'
import { Api } from '../../data/api-spotify'


export default function SearchArtist() {
  const { setPage, setSelectedAlbums } = useContext(GameContext)
  const urlRef = useRef()

  async function sendData(e) {
    e.preventDefault()
    const artistID = urlRef.current.value.slice(-22) // 22 is the length of the ID
    const albumsList = await Api.REQ_ALBUMS(artistID)

    if (!urlRef.current.value) {
      urlRef.current.value = 'Por favor, inserte una URL'
    } else if (!albumsList) {
      urlRef.current.value = 'URL inválida 😭'
    } else {
      setSelectedAlbums(
        albumsList.map(album => {
          return {
            id: album.id,
            name: album.name,
            image: album.images[0].url,
            selected: true
          }
        })
      )
      setPage(1)
    }
  }

  return (
    <>
      <h1 className='search-artist-title'>
        Inserte la URL del artista
      </h1>
      <div className='form-container'>
        <form className='form-input'>
          <input
            autoFocus
            className="input-insert-URL"
            onClick={() => urlRef.current.value = ''}
            placeholder='https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2'
            ref={urlRef}
            type="text"
          />
          <Button
            className="btn-insert-URL"
            onClick={sendData}
          />
        </form>
        <span className='instruction'>
          Vaya al Spotify del artista y copie la URL 👇
        </span>
        <img
          src={InsertURL}
          alt="Insertar URL del Artista"
          className='illustration'
        />
      </div>
    </>
  )
}