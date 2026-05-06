// Admin Kontrolü İçin Firebase Veri Yapısı (Örnek)
const adminRef = db.ref('rooms/' + activeRoomId + '/control');

// Admin videoyu durdurduğunda veya oynattığında
function syncVideo(status, currentTime) {
    adminRef.set({
        isPlaying: status, // true veya false
        seekTime: currentTime, // Videonun hangi saniyede olduğu
        lastUpdated: Date.now()
    });
}

// TMDB API ile Film Arama (Batın'ın verdiği anahtar ile)
async function searchMovie(query) {
    const apiKey = '212de16fcc7b6974c874e40687b0425a'; //
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`);
    const data = await response.json();
    // Gelen veriyi (Afiş, Link vb.) listeleme ve odaya gönderme
}
