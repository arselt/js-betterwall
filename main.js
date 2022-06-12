const API_URL = 'https://wallhaven.cc/api/v1/search?categories=100&sorting=random'
const CORS_FIX = 'https://cors-arselt.herokuapp.com/'

async function fetchWallpapers() {
    const res = await fetch(CORS_FIX + API_URL)
    const data = await res.json()

    return data.data
    // const img = document.querySelector('img');
    // return img.src = data.data[0].path
}

const app = document.getElementById('gridApp');

async function fetchGrid() {
    const wallpapers = await fetchWallpapers();

    const grid = wallpapers.map(wallpaper => {
        return `
            <img src=${wallpaper.thumbs.large}>
        `
    });
    app.innerHTML = grid.join('');
}

fetchGrid()
// fetchWallpaper();