const navBar = document.querySelectorAll("#nav a");

window.onscroll = function () {
  myFunction();
};

var prevLinkId = "home__link";
var prevMoonId = "home__moon";

function myFunction() {
  var dist = document.documentElement.scrollTop;
  var size = window.innerHeight;
  //console.log(dist, size)
  if (dist < size) {
    currLinkId = "home__link";
    currMoonId = "home__moon";
  } else if (dist < size * 2) {
    currLinkId = "supplies__link";
    currMoonId = "supplies__moon";
  } else if (dist < size * 4) {
    currLinkId = "themes__link";
    currMoonId = "themes__moon";
  }
  if (prevMoonId != currMoonId) {
    replaceClass(prevMoonId, "nav__moon-active", "nav__moon-hidden");
  }
  if (prevLinkId != currLinkId) {
    replaceClass(prevLinkId, "nav__link-active", "nav__link");
  }
  replaceClass(currLinkId, "nav__link", "nav__link-active");
  replaceClass(currMoonId, "nav__moon-hidden", "nav__moon-active");
  prevMoonId = currMoonId;
  prevLinkId = currLinkId;
}

function replaceClass(id, oldClass, newClass) {
  var elem = document.getElementById(id);
  elem.classList.remove(oldClass);
  elem.classList.add(newClass);
}