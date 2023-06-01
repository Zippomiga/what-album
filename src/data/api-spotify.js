const REQ_TOKEN = async () => {
	try {
		const getToken = await fetch("https://accounts.spotify.com/api/token", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Authorization': 'Basic ' + btoa('801007975b0f442cafb3a9be05ca372f:669ee8c593dd4032b76c2b333ed85c3a')
			},
			body: 'grant_type=client_credentials'
		})

		const TOKEN = await getToken.json()
		return TOKEN.access_token

	} catch (error) {
		console.log(error)
	}
}


const REQ_ALBUMS = async (artistID) => {
	try {
		const getAlbums = await fetch(`https://api.spotify.com/v1/artists/${artistID}/albums?include_groups=album&market=ES&limit=50&offset=0`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + await REQ_TOKEN()
			}
		})

		const ALBUMS = await getAlbums.json()
		return ALBUMS.items

	} catch (error) {
		console.log(error)
	}
}


const REQ_TRACKS = async (albumID, signal) => {
	try {
		const getTracks = await fetch(`https://api.spotify.com/v1/albums/${albumID}/tracks?market=ES&limit=50&offset=0`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + await REQ_TOKEN()
			},
			signal: signal
		})

		const TRACKS = await getTracks.json()		
		return TRACKS.items

	} catch (error) {
		console.log(error)
	}
}

export const Api = {
	REQ_ALBUMS,
	REQ_TRACKS
}