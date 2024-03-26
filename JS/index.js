const btn = document.querySelector("#hamburger");
const line2 = document.querySelector(".second");
const line3 = document.querySelector(".third");
const main = document.querySelector("main");
const slides = document.querySelector(".slides");
const slide_1 = document.querySelector(".slide_1");
const slide_2 = document.querySelector(".slide_2");
const slide_3 = document.querySelector(".slide_3");
const nav = document.querySelector("nav");
const liElements = document.querySelectorAll("li");
const home = document.getElementById("home");
const events = document.getElementById("events");
const team = document.getElementById("team");
const news = document.getElementById("news");
const joinIn = document.getElementById("joinin");
const faqs = document.getElementById("faqs");
const contact = document.getElementById("contacts");
let scrollPosition;

function setDisplay(element, param) {
  element.style.display = param;
}
function insertTransitions() {
  setDisplay(slide_1, "inline-block");
  setDisplay(slide_2, "inline-block");
  setDisplay(slide_3, "inline-block");

  nav.style.left = "100vw";
  slide_1.style.left = "100vw";
  slide_2.style.left = "100vw";
  slide_3.style.left = "100vw";
  document.querySelector("body").style.overflow = "hidden";
  liElements.forEach((liElement) => {
    liElement.style.opacity = "0";
  });

  // main.style.animation =
  //   "animatemain 1.8s cubic-bezier(1,0,1,.44) 0s 1 normal forwards";

  slide_1.style.animation =
    "600ms ease-in-out 400ms 1 normal forwards animateslides";

  slide_2.style.animation =
    "150ms linear 1600ms 1 normal forwards animateslides";

  slide_3.style.animation =
    "150ms linear 2200ms 1 normal forwards animateslides";

  setTimeout(() => {
    setDisplay(nav, "flex");
    nav.style.animation = "300ms ease-out 0s 1 normal forwards animateslides";
    for (let index = 0; index < liElements.length; index++) {
      setTimeout(() => {
        liElements[index].style.animation =
          "250ms ease-out 100ms 1 normal forwards running navitems";
      }, 600 + index * 100);
    }
  }, 2450);
}
function insertReverseTransitions() {
  nav.style.left = "0";
  slide_1.style.left = "0";
  slide_2.style.left = "0";
  slide_3.style.left = "0";
  liElements.forEach((liElement) => {
    liElement.style.opacity = "1";
  });

  nav.style.animation =
    "600ms cubic-bezier(0.5, 0.1, 1, 0.1) 0s 1 normal forwards animatenavrev";
  slide_3.style.animation =
    "150ms linear 800ms 1 normal forwards animateslidesrev";
  slide_2.style.animation =
    "150ms linear 1150ms 1 normal forwards animateslidesrev";
  slide_1.style.animation =
    "150ms linear 1500ms 1 normal forwards animateslidesrev";
  setTimeout(() => {
    document.querySelector("body").style.overflowY = "auto";
    window.scrollBy(0, scrollPosition);
  }, 800);
  setTimeout(() => {
    setDisplay(nav, "none");
  }, 600);
  setTimeout(() => {
    setDisplay(slide_1, "none");
    setDisplay(slide_2, "none");
    setDisplay(slide_3, "none");
  }, 3000);
}
function ClearAnimations() {
  nav.style.animation = "none";
  slide_1.style.animation = "none";
  slide_2.style.animation = "none";
  slide_3.style.animation = "none";
  liElements.forEach((liElement) => {
    liElement.style.animation = "none";
  });
}

function Clickbtn() {
  ClearAnimations();

  btn.classList.toggle("hover");
  if (btn.classList.contains("clicked")) {
    insertReverseTransitions();
  } else {
    insertTransitions();
  }
  if (
    btn.classList.contains("clicked") ||
    btn.classList.contains("clicked-rev")
  ) {
    btn.classList.toggle("clicked-rev");
    line2.classList.toggle("anime-rev");
    line3.classList.toggle("anime-rev");
  }
  btn.classList.toggle("clicked");
  line2.classList.toggle("anime");
  line3.classList.toggle("anime0");
  btn.removeEventListener("click", Clickbtn);
  setTimeout(() => {
    btn.addEventListener("click", Clickbtn);
  }, 3000);
}
btn.addEventListener("click", Clickbtn);
