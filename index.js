const project1Modal = document.getElementById("project1Modal");
const project1Btn = document.getElementById("project1Btn");
const closeModal = document.getElementsByClassName("close")[0];
const navBar = document.querySelectorAll("#nav a");
const mainSections = document.querySelectorAll("body section");
var prevLinkId = "home__link";
var currLinkId = "home__link";
var prevMoonId = "home__moon";
var currMoonId = "home__moon";

window.onscroll = function () {
  activeScroll();
};

function activeScroll() {
  var fromTop = window.scrollY;

  navBar.forEach(link => {
    let section = document.querySelector(link.hash);

    if (section.offsetTop <= fromTop &&
				section.offsetTop + section.offsetHeight > fromTop) {
      currLinkId = `${section.id}__link`;
			currMoonId = `${section.id}__moon`;
    }
  });
	
  if (prevMoonId !== currMoonId) {
    replaceClass(prevMoonId, "nav__moon-active", "nav__moon-hidden");
  }
  if (prevLinkId !== currLinkId) {
    replaceClass(prevLinkId, "nav__link-active", "nav__link");
  }
  replaceClass(currLinkId, "nav__link", "nav__link-active");
  replaceClass(currMoonId, "nav__moon-hidden", "nav__moon-active");
  prevMoonId = currMoonId;
  prevLinkId = currLinkId;
}

function hamburgerNav() {
  var x = document.getElementById("nav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function replaceClass(id, oldClass, newClass) {
  var elem = document.getElementById(id);
  elem.classList.remove(oldClass);
  elem.classList.add(newClass);
}

project1Btn.onclick = function() {
	project1Modal.style.display = "block";
}

closeModal.onclick = function() {
	project1Modal.style.display = "none";
}

window.onclick = function(e) {
	if (e.target === project1Modal) {
		project1Modal.style.display = "none";
	}
}