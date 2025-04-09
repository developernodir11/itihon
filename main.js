document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector("#hamburger");
  const navMenu = document.querySelector(".site_items");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.querySelector(".backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.classList.add("backtop-show");
  } else {
    backtop.classList.remove("backtop-show");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("hamburger");
  const navMenu = document.querySelector(".nav");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
let modeBtn = document.querySelector(".site_moon");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "./images/sun.svg";
  } else {
    this.firstElementChild.src = "./images/moon.svg";
  }
  document.body.classList.toggle("dark");
});