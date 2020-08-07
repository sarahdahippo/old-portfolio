const navBar = document.querySelectorAll("#nav a");

window.onscroll = function () {
  myFunction();
};

var prevLinkId = "home__link";

function myFunction() {
  var dist = document.documentElement.scrollTop;
  var size = window.innerHeight;
  console.log(dist, size)
  if (dist < size) {
    currLinkId = "home__link";
  } else if (dist < size * 2) {
    currLinkId = "supplies__link";
  } else if (dist < size * 4) {
    currLinkId = "themes__link";
  }
  
  if (prevLinkId != currLinkId) {
    replaceClass(prevLinkId, "nav__link-active", "nav__link");
  }
  replaceClass(currLinkId, "nav__link", "nav__link-active");
  prevLinkId = currLinkId;
}

function replaceClass(id, oldClass, newClass) {
  var elem = document.getElementById(id);
  elem.classList.remove(oldClass);
  elem.classList.add(newClass);
}