/////////////////////////////////////////////////
// Navigation Bar working
var mobile_nav_icons = document.querySelector(".mobile-nav-btn");
var header = document.querySelector(".header");

mobile_nav_icons.addEventListener("click", (e) => {
  header.classList.toggle("nav-open");
});

///////////////////////////////////////////////
// Set Current Year

var copyright_year = document.getElementById("year");

var year = new Date().getFullYear();

copyright_year.textContent = year;

/////////////////////////////////////////////////
// Close the Nav bar after clicking the nav items

var navItems = document.querySelectorAll(".main-nav-link");

navItems.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.toggle("nav-open");
  });
});

////////////////////////////////////////////////
// Sticky Nav bar

const hero_section = document.querySelector(".section-hero");
const header_section = document.querySelector(".header");

const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
  }
);

obs.observe(hero_section);
