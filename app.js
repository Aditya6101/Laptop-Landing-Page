// ! Grabbing html stuff

const logoImg = document.querySelectorAll(".logo-circle");
const logoTxt = document.querySelector(".logo-text");
const cartImgBg = document.querySelector(".cart-circle");
const navLinks = document.querySelectorAll(".nav-link");
const heading = document.querySelector(".intro-text h1");
const selectBtn = document.querySelector(".cta-select");
const addBtn = document.querySelector(".cta-add");
const coverImg = document.querySelector(".cover-img");
const dots = document.querySelectorAll(".dots");
const dot1 = document.querySelector(".dot-1");
const dot2 = document.querySelector(".dot-2");
const dot3 = document.querySelector(".dot-3");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const eclipseImages = document.querySelectorAll("stop");

// ? Creating array of dots and array of colors
// * Converting nodeList to an array
const dotArr = [...dots];

const colors = ["#c36cbb", "#0f5c5f", "#36063d"];

// ! Creating defaults

dot1.style.fill = "none";
logoImg.forEach((circle) => (circle.style.fill = "#c36cbb"));
eclipseImages.forEach((eclipse) => (eclipse.style.stopColor = "#c36cbb"));
cartImgBg.style.fill = "#c36cbb";

// ! Defining a function for changing all the stuff of the page

const changeItems = (accentColor) => {
  const color = accentColor;
  logoImg.forEach((circle) => (circle.style.fill = color));
  logoTxt.style.color = color;
  navLinks.forEach((navLink) => {
    navLink.style.borderColor = color;
    navLink.style.color = color;
  });
  heading.style.color = color;
  cartImgBg.style.fill = color;
  selectBtn.style.color = color;
  selectBtn.style.borderColor = color;
  addBtn.style.background = color;
  eclipseImages.forEach((eclipse) => (eclipse.style.stopColor = color));
};

// ! Event listener for dots

dots.forEach((dot) => dot.addEventListener("click", selector));
function selector(e) {
  dots.forEach((dot) =>
    e.target !== dot ? (dot.style.fill = "#585772") : (dot.style.fill = "none")
  );
  const targetIndex = dotArr.indexOf(e.target);
  coverImg.src = `images/matebook-${targetIndex}.png`;
  const accentColor = colors[targetIndex];
  changeItems(accentColor);
}

// ! Creating event listener for the right arrow

rightArrow.addEventListener("click", (e) => {});
