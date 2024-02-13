/*hämtar sökord från inputfält och visar bästa resultat som en markör på en openstreetkarta. Koordinater hämtas med fetch api av söktjänsten nominatim och openstreetmap*/


//https://nominatim.openstreetmap.org/search?addressdetails=1&q=mittuniversitetet&format=jsonv2&limit=1

let searchBtn = document.getElementById("searchbtn");

//vid click på sökknapp samlas input in och skickas vidare till.
searchBtn.addEventListener("click", function (e) {
    let search = document.getElementById("searchinput").value;
    fetchData(search);
})

// En asynkron funktion som väntar på datan som hämtas som array av object med fetch api.
async function fetchData(search) {
    try {
        const response = await fetch('https://nominatim.openstreetmap.org/search?addressdetails=1&q=' + search + '&format=jsonv2&limit=1');
        let data = await response.json();
        writeToMap(data);
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

function writeToMap(coordinates) {
    let lat = coordinates[0].lat;
    let lon = coordinates[0].lon;
    let boxLat1 = coordinates[0].boundingbox[0];
    let boxLat2 = coordinates[0].boundingbox[1];
    let boxLon1 = coordinates[0].boundingbox[2];
    let boxLon2 = coordinates[0].boundingbox[3];

    document.getElementById("outputmap").src = ("https://www.openstreetmap.org/export/embed.html?bbox=" + boxLon1 + "%2C" + boxLat1 + "%2C" + boxLon2 + "%2C" + boxLat2 + "&layer=mapnik&marker=" + lat + "%2C" + lon);
}