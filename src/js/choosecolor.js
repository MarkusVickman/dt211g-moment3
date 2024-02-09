/*För att dölja och starta animationer. Finns även en funktion för att byta bakgrundsfärg och dess textfärg */

"use strict"

let openChoose = document.getElementById("slice-container");
let yellow = document.getElementById("chooseyellow");
let blue = document.getElementById("chooseblue");
let pink = document.getElementById("choosepink");
let red = document.getElementById("choosered");
let newColor = document.getElementById("newcolor");

//vid click på egetsval av färger läses inputvärden in och funktionen changeStyle startas med dessa värden.
newColor.addEventListener("click", function (e) {    
    let font = document.getElementById("color").value;
    let bg = document.getElementById("bgcolor").value;
    changeStyle(bg, font);
})

//Vid klick på färgvalsknappen visas färgvalen och dess animation startar
openChoose.addEventListener("click", function (e) {    
      yellow.style.display = "block";
      blue.style.display = "block";
      pink.style.display = "block";
      red.style.display = "block";
})

/*En eventlistener för varje knapp för att det gick snabbt att göra så.
Dessa skickar med färgvalet och initierar funktionen changeStyle*/
red.addEventListener("click", function (e) {    
    changeStyle("#6d0000", "white");
})

pink.addEventListener("click", function (e) {    
    changeStyle("#fbe2ff", "black");
})

blue.addEventListener("click", function (e) {    
    changeStyle("#30325b", "white");
})

yellow.addEventListener("click", function (e) {    
    changeStyle("#d4d77f", "black");
})

/*Den här funktionen initieras av eventlyssnarna och godtar 2 värden. 
Den skriver till dessa värden som style i html dokumentet och döljer färgvalsknapparna igen*/
function changeStyle(bgcolor, fontcolor){
    document.body.style.backgroundColor = bgcolor;
    document.body.style.color = fontcolor;
    yellow.style.display = "none";
    blue.style.display = "none";
    pink.style.display = "none";
    red.style.display = "none";
}