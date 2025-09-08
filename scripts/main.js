const menuBurger  = document.querySelector(".menu-burger");
const lines       = document.querySelectorAll(".line");
const panelMobile = document.querySelector(".panel-mobile");

menuBurger.addEventListener("click", function () {
  lines.forEach(line => {
    line.classList.toggle("active");
  });
  panelMobile.classList.toggle("active");
})

