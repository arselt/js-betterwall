const API_URL = 'https://wallhaven.cc/api/v1/search?categories=100&sorting=random'
const CORS_FIX = 'https://cors-arselt.herokuapp.com/'

async function fetchWallpapers() {
    const res = await fetch(CORS_FIX + API_URL)
    const data = await res.json();

    return data.data
}

const app = document.getElementById('gridApp');

async function fetchGrid() {
    const wallpapers = await fetchWallpapers();

    const grid = wallpapers.map(wallpaper => {
        return `
            <div class="wallpaper_post">
                <img src=${wallpaper.thumbs.large}>
                <span class="wallpaper_hover">
                    <button
                        class="wallpaper_button"
                        onclick="
                            window.open(
                                '${wallpaper.short_url}','_blank'
                            )
                        "
                    >
                        Original post
                    </Button>
                </span>
            </div>
        `
    });
    app.innerHTML = grid.join('');
}

fetchGrid();