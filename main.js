const API_URL = 'https://wallhaven.cc/api/v1/search?categories=100&sorting=random'
const CORS_FIX = 'https://cors-arselt.herokuapp.com/'

async function fetchWallpaper() {
    const res = await fetch(CORS_FIX + API_URL)
    const data = await res.json()

    const img = document.querySelector('img');
    return img.src = data.data[0].path
}

fetchWallpaper();