"use strict";

const links = document.querySelector(".nav-container");
const navButton = document.querySelector(".hamburger-menu");
const accordionHeaders = document.querySelectorAll(".accordion-heading");

navButton.addEventListener("click", () => {
  links.classList.toggle("active");
});

accordionHeaders.forEach((accordionHeader) => {
  accordionHeader.addEventListener("click", () => {
    const currentlyActive = document.querySelector(".accordion-heading.active");
    if (currentlyActive && currentlyActive !== accordionHeader) {
      currentlyActive.classList.toggle("active");
      currentlyActive.nextElementSibling.style.maxHeight = 0;
    }

    accordionHeader.classList.toggle("active");
    const accordionBody = accordionHeader.nextElementSibling;

    if (accordionHeader.classList.contains("active")) {
      accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
    } else {
      accordionBody.style.maxHeight = 0;
    }
  });
});
