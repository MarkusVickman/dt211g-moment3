let openChoose = document.getElementById("slice-container");
let yellow = document.getElementById("chooseyellow");
let blue = document.getElementById("chooseblue");
let pink = document.getElementById("choosepink");
let red = document.getElementById("choosered");

openChoose.addEventListener("click", function (e) {    
      yellow.style.display = "block";
      blue.style.display = "block";
      pink.style.display = "block";
      red.style.display = "block";
})

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

function changeStyle(bgcolor, fontcolor){
    document.body.style.backgroundColor = bgcolor;
    document.body.style.color = fontcolor;

    yellow.style.display = "none";
    blue.style.display = "none";
    pink.style.display = "none";
    red.style.display = "none";

}


/*
class="colorscheme"
class="menu-link"
*/