let arrowEl = document.getElementById("arrow");

let blocker = 1;

document.addEventListener("scroll", function (e) {    
    if (blocker === 1) {
      blocker = 0;
      arrowEl.style.display = "block";
      setTimeout(function () {
        arrowEl.style.display = "none";
        blocker = 1;
      }, 5000);
    }

})