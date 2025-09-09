// ==== Burger panel popup ====
const menuBurger = document.querySelector(".menu-burger");
const lines = document.querySelectorAll(".line");
const panelMobile = document.querySelector(".panel-mobile");

menuBurger.addEventListener("click", function () {
    lines.forEach(line => {
        line.classList.toggle("active");
    });
    panelMobile.classList.toggle("active");
})

// ==== Reveal effect ====
document.querySelectorAll(".container-card").forEach(container => {
  const cards = container.querySelectorAll(".card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const index = [...cards].indexOf(card); // index local
        card.style.transitionDelay = `${index * 150}ms`;
        card.classList.add("revealed");
        observer.unobserve(card);
      }
    });
  }, {
    root: null,
    rootMargin: "0px 0px -50px 0px", // déclenche plus tôt
    threshold: 0
  });

  cards.forEach(card => observer.observe(card));
});

