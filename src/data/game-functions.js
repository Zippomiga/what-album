import { Api } from "./api-spotify"

const randomize = albums => (
	albums.sort(() => 0.5 - Math.random()).slice(0, 4)
)

const index = item => (
	Math.floor(Math.random() * item.length)
)

async function refreshGame(filtered, setItems) {
	if (!filtered.length) return

	const controller = new AbortController()

	const albums = randomize(filtered)
	const albumIdx = index(albums)
	const albumID = albums[albumIdx].id

	const tracks = await Api.REQ_TRACKS(albumID, controller.signal)
	const trackIdx = index(tracks)
	const trackID = tracks[trackIdx].id

	setItems({ albums, albumID, trackID })

	return controller.abort()
}


const score = (scoreBar, bool, score) => (
	[...scoreBar].filter(sc => sc.point === bool).length === score
)

export const Aux = {
	refreshGame,
	score
}