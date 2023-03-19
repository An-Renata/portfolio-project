"use strict";

const links = document.querySelector(".nav-container");
const navButton = document.querySelector(".hamburger-menu");

navButton.addEventListener("click", () => {
  links.classList.toggle("active");
});
