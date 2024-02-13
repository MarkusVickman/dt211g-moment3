/*hämtar sökord från inputfält och visar bästa resultat som en markör på en openstreetkarta. Koordinater hämtas med fetch api av söktjänsten nominatim och openstreetmap*/


https://nominatim.openstreetmap.org/search?addressdetails=1&q=mittuniversitetet&format=jsonv2&limit=1

let search = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchbtn");
let outputMap = document.getElementById("outputmap");

//vid click på sökknapp samlas input in och skickas vidare till.
searchBtn.addEventListener("click", function (e) {    
    let search = document.getElementById("searchInput").value;
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

function writeToMap(coordinates){
    let lat = coordinates.lat;
    let lon = coordinates.lon;
    console.log(lat);

    outputMap.style.src = ("https://www.openstreetmap.org/export/embed.html?bbox=" + lat + "%2C" + lon + "%2C" + lat + "%2C" + lon + "&amp;layer=mapnik&amp;marker=" + lat + "%2C" + lon);
}