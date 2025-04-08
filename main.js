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
