const bars = document.querySelector(".bars");
const navbar = document.querySelector(".header_nav");
const bgact = document.querySelector(".remove_nav");

bars.addEventListener("click", function () {
  navbar.classList.add("navbar_active");
  bgact.classList.add("remove_nav_active");
  bars.classList.add("bars_active");
  document.body.style.overflow = "hidden";
});
bgact.addEventListener("click", function () {
  navbar.classList.remove("navbar_active");
  bgact.classList.remove("remove_nav_active");
  document.body.style.overflow = "visible";
});
window.addEventListener("resize", function () {
  if (window.innerWidth > 1400) {
    navbar.classList.remove("navbar_active");
    bgact.classList.remove("remove_nav_active");
    document.body.style.overflow = "visible";
  }
});
