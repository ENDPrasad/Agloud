// Navigation Bar working
var mobile_nav_icons = document.querySelector(".mobile-nav-btn");
var header = document.querySelector(".header");

mobile_nav_icons.addEventListener("click", (e) => {
  header.classList.toggle("nav-open");
});

// Set Current Year

var copyright_year = document.getElementById("year");

var year = new Date().getFullYear();

copyright_year.textContent = year;
