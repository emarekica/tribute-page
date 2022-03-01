"use strict";
//// -------------------------------- HTML
//// images need a container
// all my images container have a class .img-container (4)

//// into that container add another container with CSS: {overflow: hidden} so it doesn't get out of the grid
// I will use the same container

//// add data-* custom attribute:
// data-original="rythm-0-performance" etc.

//// add <div class="modal"> in HTML
// add <img class="modal-img"/>
// add <p> with class="caption"

/* 
** performance consideration **  

when you  have multiple elements and you like to put a click handler or any type of event, it is better if you delegate that to an upper parent/container element.
Then if there are 100 images it will not put 100 click handlers but only 1 event.target can be used to decide if the handler logic should proceed or cancel.
*/

// selecting DOM elements
const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".img-container");
const original = document.querySelector(".modal-img");
const caption = document.querySelector(".img-caption");

// looping over images to open them when click
previews.forEach((preview) => {
  // attaching click-event to all imgs
  preview.addEventListener("click", () => {
    modal.classList.add("open");
  });

  // adding animation when opening
  original.classList.add("original");

  // dynamic change txt & img - get "data-original" with getAttribute
  const originalSrc = preview.getAttribute("data-original");
  // if you need to navigate to a folder with bigger imgs
  // original.src = `./full/${originalSrc}`;
  original.src = originalSrc;

  const altText = preview.alt;
  caption.textContent = altText;
});

// closing opened modal imgs
// e = event
modal.addEventListener("click", (e) => {
  // check what you're clicking on (contains() returns boolean)
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    original.classList.remove("open");
  }
});
