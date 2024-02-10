//Buggig funktion för indikering hur lång det är skrollat och som även startar en pilanimation

let arrowEl = document.getElementById("arrow");
let bar1 = document.getElementById("scrollbar1");
let bar2 = document.getElementById("scrollbar2");
let bar3 = document.getElementById("scrollbar3");
let bar4 = document.getElementById("scrollbar4");
let bar5 = document.getElementById("scrollbar5");
let bar6 = document.getElementById("scrollbar6");
let bar7 = document.getElementById("scrollbar7");
let bar8 = document.getElementById("scrollbar8");
let bar9 = document.getElementById("scrollbar9");
let bar10 = document.getElementById("scrollbar10");
let scrollBar = document.getElementById("scrollbar");

//Används för att pilen till som visas vid skroll för att den inte ska bugga
let blocker = 1;

// variable som lagrar den längden som dokumentet kan skrollas
let scrollPotential = (document.documentElement.scrollHeight/*documentets totala höjd*/ - window.innerHeight/*fönstrets höjd*/);

//Funktion som vid scroll visar en pil på skärmen och indikerar hur långt man har skrollat
window.onscroll = () => {

  //En insats som visar en pil och sätter display none efter en timer
  if (blocker === 1) {
    blocker = 0;
    arrowEl.style.display = "block";
    setTimeout(function () {
      arrowEl.style.display = "none";
      blocker = 1;
    }, 5000);
  }

  //Värden för att avgöra vilken ruta som ska ändra färg
  let five = scrollPotential;
  let oneOfFive = (five / 5);
  let twoOfFive = (oneOfFive * 2);
  let treeOfFive = (oneOfFive * 3);
  let fourOfFive = (oneOfFive * 4);


  //En insats som visar en pil och sätter display none efter en timer
  if (window.innerWidth < 700) {

    scrollBar.style.display = "block";
    setTimeout(function () {
      scrollBar.style.display = "none";
    }, 5000);

    /*Inte det snyggaste kanske men jag försökte
    En if och en else sats för varje av de fem rutorna till scrollindikering på hemsidan
    If-satserna kontrollerar längd från toppen av skärmen och ändrar stil utifrån det.*/
    if ((document.documentElement.scrollTop) < oneOfFive) {
      bar1.style.backgroundColor = "darkred";
    } else {
      bar1.style.backgroundColor = "transparent";
    }
    if (document.documentElement.scrollTop < twoOfFive && document.documentElement.scrollTop > oneOfFive) {
      bar2.style.backgroundColor = "darkred";
    } else {
      bar2.style.backgroundColor = "transparent";
    }
    if (document.documentElement.scrollTop < treeOfFive && document.documentElement.scrollTop > twoOfFive) {
      bar3.style.backgroundColor = "darkred";
    } else {
      bar3.style.backgroundColor = "transparent";
    }
    if (document.documentElement.scrollTop < fourOfFive && document.documentElement.scrollTop > treeOfFive) {
      bar4.style.backgroundColor = "darkred";
    } else {
      bar4.style.backgroundColor = "transparent";
    }
    if (document.documentElement.scrollTop > fourOfFive) {
      bar5.style.backgroundColor = "darkred";
    } else {
      bar5.style.backgroundColor = "transparent";
    }
  }
  else {
    if ((document.documentElement.scrollTop) < oneOfFive) {
      bar1.style.backgroundColor = "darkred";
    } else {
      bar1.style.backgroundColor = "transparent";
    }
    if (document.documentElement.scrollTop < twoOfFive && document.documentElement.scrollTop > oneOfFive) {
      bar2.style.backgroundColor = "darkred";
    } else {
      bar2.style.backgroundColor = "transparent";
    }
    if (document.documentElement.scrollTop < treeOfFive && document.documentElement.scrollTop > twoOfFive) {
      bar3.style.backgroundColor = "darkred";
    } else {
      bar3.style.backgroundColor = "transparent";
    }
    if (document.documentElement.scrollTop < fourOfFive && document.documentElement.scrollTop > treeOfFive) {
      bar4.style.backgroundColor = "darkred";
    } else {
      bar4.style.backgroundColor = "transparent";
    }
    if (document.documentElement.scrollTop > fourOfFive) {
      bar5.style.backgroundColor = "darkred";
    } else {
      bar5.style.backgroundColor = "transparent";
    }

  }
}
