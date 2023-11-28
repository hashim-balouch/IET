const btn = document.querySelector("#hamburger");
const line2 = document.querySelector(".second");
const line3 = document.querySelector(".third");
const main = document.querySelector(".main");
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
  scrollPosition = window.scrollY;
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

  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 600);
  main.style.animation =
    "800ms   cubic-bezier(0.5, 0.1, 1, 0.1) 0s 1 normal forwards animatemain";

  slide_1.style.animation =
    "600ms   cubic-bezier(0.5, 0.1, 1, 0.1) 0s 1 normal forwards animateslides";

  slide_2.style.animation =
    "150ms linear 900ms 1 normal forwards animateslides";

  slide_3.style.animation =
    "150ms linear 1500ms 1 normal forwards animateslides";

  setTimeout(() => {
    setDisplay(nav, "inline-block");
    nav.style.animation = "600ms ease-out 0s 1 normal forwards animateslides";
    for (let index = 0; index < liElements.length; index++) {
      setTimeout(() => {
        liElements[index].style.animation =
          "250ms ease-out 100ms 1 normal forwards running navitems";
      }, 600 + index * 100);
    }
  }, 2000);
}
function insertReverseTransitions() {
  nav.style.left = "0";
  slide_1.style.left = "0";
  slide_2.style.left = "0";
  slide_3.style.left = "0";
  liElements.forEach((liElement) => {
    liElement.style.opacity = "1";
  });
  document.querySelector("body").style.overflowY = "auto";

  nav.style.animation =
    "600ms cubic-bezier(0.5, 0.1, 1, 0.1) 0s 1 normal forwards animatenavrev";
  slide_3.style.animation =
    "150ms linear 800ms 1 normal forwards animateslidesrev";
  slide_2.style.animation =
    "150ms linear 1150ms 1 normal forwards animateslidesrev";
  slide_1.style.animation =
    "150ms linear 1500ms 1 normal forwards animateslidesrev";
  setTimeout(() => {
    setDisplay(nav, "none");
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
  main.style.animation = "none";
  liElements.forEach((liElement) => {
    liElement.style.animation = "none";
  });
}

function Clickbtn() {
  ClearAnimations();

  btn.classList.toggle("hover");
  if (btn.classList.contains("clicked")) {
    insertReverseTransitions();

    window.scrollBy(0, scrollPosition);
    console.log("hey");
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
const element = document.querySelector(".sliderauto");
function anchors(button, location) {
  button.addEventListener("click", () => {
    Clickbtn();

    setTimeout(() => {
      document
        .querySelector(location)
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }, 600);
  });
}
anchors(home, ".typewriter");

anchors(events, ".eventsdiv");
anchors(team, ".wrapTeam");
anchors(news, "article");
anchors(faqs, ".faqs");
anchors(contact, "footer");

//Add the REST...

const hammertime = new Hammer(element);

const ChildOfElm = Array.from(element.children);
let count = 1;

function NextSlide() {
  if (count < ChildOfElm.length - 2) {
    ChildOfElm[count - 1].classList.remove("goaway", "comeback");
    ChildOfElm[count].classList.remove("goaway", "comeback");
    ChildOfElm[count].classList.add("rightslide");
    if (count !== 0) {
      ChildOfElm[count - 1].classList.add("leftslide");
      ChildOfElm[count - 1].classList.remove("rightslide");
    }
    count++;
  }
}
hammertime.on("swipeleft", NextSlide);
function PreviousSlide() {
  if (count !== 1) {
    --count;

    ChildOfElm[count].classList.remove("leftslide", "rightslide", "comeback");
    ChildOfElm[count].classList.add("goaway");
    if (count !== 0) {
      ChildOfElm[count - 1].classList.remove("leftslide");
      ChildOfElm[count - 1].classList.add("comeback");
    }
  }
}

hammertime.on("swiperight", PreviousSlide);
const sliderPreviousBtn = document.querySelector(".previous");

sliderPreviousBtn.addEventListener("click", PreviousSlide);
const sliderNextBtn = document.querySelector(".next");

sliderNextBtn.addEventListener("click", NextSlide);
setInterval(() => {
  if (count === 1) {
    sliderPreviousBtn.style.display = "none";
  } else {
    sliderPreviousBtn.style.display = "flex";
  }
  if (count === 5) {
    sliderNextBtn.style.display = "none";
  } else {
    sliderNextBtn.style.display = "flex";
  }
}, 100);
