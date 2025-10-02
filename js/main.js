const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");
const sliderItems = document.querySelectorAll(".slider-item");
let sliders = document.querySelector(".slider-list");

let index = 0;
let startX = 0;
let currentX = 0;
let isDragging = false;

btnPrev.addEventListener("click", () => sliderMain(index - 1));
btnNext.addEventListener("click", () => sliderMain(index + 1));

function sliderMain(i) {
  index = (i + sliderItems.length) % sliderItems.length;
  sliders.style.transition = "transform 0.5s ease";
  sliders.style.transform = `translateX(${-index * 100}%)`;
}

sliders.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX;
  sliders.style.transition = "none";
  sliders.style.cursor = "pointer";
});

sliders.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  currentX = e.pageX;
  let moveX = currentX - startX;
  sliders.style.transform = `translateX(${
    moveX - index * window.innerWidth
  }px)`;
  sliders.style.cursor = "pointer";
});
sliders.addEventListener("mouseup", (e) => {
  isDragging = false;
  let delta = e.pageX - startX;
  if (delta > 50) {
    sliderMain(index - 1);
  } else if (delta < 50) {
    sliderMain(index + 1);
  } else {
    sliderMain(index);
  }
  sliders.style.cursor = "default";
});

setInterval(() => {
  sliderMain(index + 1);
}, 30000);

const btnMobileMenu = document.querySelector(".menu-mobile-btn");

btnMobileMenu.addEventListener("click", function () {
  shoeMenuBile();
});

const MenuMobileClose = document.querySelector(".menu-mobile-close");
const MenuMobileOverlzy = document.querySelector(".menu-mobile-overlay");
const MenuMobile = document.querySelector(".menu-mobile");
function shoeMenuBile() {
  MenuMobileClose.classList.toggle("show");
  MenuMobileOverlzy.classList.toggle("show");
  MenuMobile.classList.toggle("show");
}

// Back top
const bavkTop = document.querySelector("#backtop");
window.addEventListener("scroll", function () {
  const scrollMin = 500;
  if (window.pageYOffset > scrollMin) {
    bavkTop.classList.add("show");
  } else {
    bavkTop.classList.remove("show");
  }
});

$("#backtop").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    1000
  );
});
