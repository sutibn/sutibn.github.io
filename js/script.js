// GSAP Animations
gsap.from(".grid-item", {
  duration: 2,
  opacity: 0,
  y: 25,
  stagger: 0.2,
  ease: "expo.out"
});

// Responsive menu toggle
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}
