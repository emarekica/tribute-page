"use strict";

// selecting DOM elements
const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".img-container img");
const original = document.querySelector(".modal-img");
const caption = document.querySelector(".caption");

// open
previews.forEach((preview) => {
  // event listener
  preview.addEventListener("click", () => {
    modal.classList.add("open");
    console.log(preview);

    // animation
    original.classList.add("original");

    // dyanmical change of img & txt
    const originalSrc = preview.getAttribute("data-original");
    console.log(originalSrc);
    // original.src = `${originalSrc}`;
    original.src = originalSrc;

    const altText = preview.alt;
    caption.textContent = altText;
  });
});

// close
modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    original.classList.remove("open");
  }
});
