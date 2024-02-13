/*JavaScript som hämtar data med hjälp av FetchAPI och async/await och skriver ut detta till chart.js.
Datan går att sortera efter kurskod, namn och progression. Det går även att filtrera igenom datan.*/

"use strict"


//initierar funktion för att hämta kurslista
fetchData();

// En asynkron funktion som väntar på datan som hämtas som array av object med fetch api.
async function fetchData() {
    try {
        const response = await fetch('https://studenter.miun.se/~mallar/dt211g/');
        let data = await response.json();
        chart(data);
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

/*Funktion som bygger en tabell av den datan som följer med som argument.*/
function chart(data) {
    let courseData = data.filter((course) => {
        return course.type.toLowerCase().includes("kurs");
    });
    let programData = data.filter((program) => {
        return program.type.toLowerCase().includes("program");
    });

    courseData.sort((a, b) => (b.applicantsTotal - a.applicantsTotal));
    programData.sort((a, b) => (b.applicantsTotal - a.applicantsTotal));
    
    let coureMostApplicants = [];
    let programMostApplicants = [];

    for (let i = 0; i < 6; i++ ){
        coureMostApplicants.push(courseData[i]);
    }

    for (let i = 0; i < 5; i++ ){
        programMostApplicants.push(programData[i]);
    }
    //let highest = courseData;

    buildChart(coureMostApplicants, programMostApplicants);
}

function buildChart(course, program){

 new Chart(
    document.getElementById('barChart'),
    {
      type: 'bar',
      data: {
        labels: course.map(row => row.name),
        datasets: [
          {
            label: 'Antal sökande per kurs',
            data: course.map(row => row.applicantsTotal)
          }
        ]
      }
    }
  );
  new Chart(
    document.getElementById('circleChart'),
    {
      type: 'pie',
      data: {
        labels: program.map(row => row.name),
        datasets: [
          {
            label: 'Antal sökande per kurs',
            data: program.map(row => row.applicantsTotal)
          }
        ]
      }
    }
  );
}



