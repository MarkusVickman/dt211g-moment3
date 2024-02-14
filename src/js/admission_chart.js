/*JavaScript som hämtar data med hjälp av FetchAPI och async/await och skriver ut detta till chart.js.
Från datan skrivs information ut i form att mest sökta kurser och utbildningar.*/

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

/*För att hitta i datan gjorde jag 2 nya arrayer som tar emot den filtrerade datan utifrån om typen är kurs eller program.*/
function chart(data) {
    let courseData = data.filter((course) => {
        return course.type.toLowerCase().includes("kurs");
    });
    let programData = data.filter((program) => {
        return program.type.toLowerCase().includes("program");
    });

    /*Datan sorteras från största antal sökande till lägsta*/
    courseData.sort((a, b) => (b.applicantsTotal - a.applicantsTotal));
    programData.sort((a, b) => (b.applicantsTotal - a.applicantsTotal));

    //2 nya arrayer som är de arrayer som blir diagram
    let coureMostApplicants = [];
    let programMostApplicants = [];

    /*För att lista de 6 första så loopar jag igenom de 6 första värderna i arrayen med kurser och pushar dessa till de nyskapade arrayerna */
    for (let i = 0; i < 6; i++) {
        coureMostApplicants.push(courseData[i]);
    }

    /*För att lista de 5 första så loopar jag igenom de 5 första värderna i arrayen med program och pushar dessa till de nyskapade arrayerna */
    for (let i = 0; i < 5; i++) {
        programMostApplicants.push(programData[i]);
    }

    buildChart(coureMostApplicants, programMostApplicants);
}

/*funktion som bygger diagram med hjälp av chart.js*/
function buildChart(course, program) {
    Chart.defaults.font.size = 16;
    Chart.defaults.font.weight = 600;
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



