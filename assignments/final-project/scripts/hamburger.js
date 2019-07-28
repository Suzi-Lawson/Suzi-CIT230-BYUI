function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

function toggleDropMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }