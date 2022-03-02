# MODAL

## HTML

<br>

Images need a container.

```js
<div class="img-container fame">
```

<br>

Add `data-*` custom attribute.
Make it same as `src` so it is easier to select them later in JS.

```js
data-original="img/balkan-baroque.png"
```

<br>

Make a separate `div` at the bottom of the HTML document:

```js
<div class="modal">
  <img src="" alt="" class="modal-img" />
  <p class="caption">Test caption</p>
</div>
```

<br>

The content of the `alt` will later be used in JS to display the caption.

```js
alt = "Artist is present performance";
```

<br><br>

## JS

<br>

Select DOM elements:

```js
const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".img-container");
const original = document.querySelector(".modal-img");
const caption = document.querySelector(".caption");
```

<br><br>

- Loop through the images.
- Add event listener.
- Dynamically display image and text.

```js
// loop over imgs
previews.forEach((preview) => {
  // event listener on all imgs
  preview.addEventListener("click", () => {
    modal.classList.add("open");
  });

  // add animation when opening
  original.classList.add("original");

  // dynamic change of txt & img
  // get "data-original" with getAttribute
  const originalSrc = preview.getAttribute("data-original");
  // if you need to navigate to a folder with bigger imgs
  // original.src = `./full/${originalSrc}`;
  original.src = originalSrc;

  const altText = preview.alt;
  caption.textContent = altText;
});
```

<br><br>

Closing modal.

```js
// closing opened modal imgs
// e = event
modal.addEventListener("click", (e) => {
  // check what you're clicking on (contains() returns boolean)
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    original.classList.remove("open");
  }
});
```

<br><br>

## CSS

<br>

Make sure to change the background, opacity or blurryness of the background.

`background-color: rgba(0, 0, 0, 0.5);`

<br>

Change `pointer-events` from `none` to `all`. This will make it possible to make a click.
It will be used for openi the img by clicking on it and closing it by clicking on the background.

```
.modal {
  pointer-events: none;
}

.modal.open {
  pointer-events: all;
}
```

<br><br>

---

<br>

### **Performance consideration**

<br>

When you have multiple elements and you like to put a click handler or any type of event, it is better if you delegate that to an upper parent/container element.
Then if there are 100 images it will not put 100 click handlers but only 1 event.target can be used to decide if the handler logic should proceed or cancel.

<br>

### **Source**

[Dev Ed Youtube Channel](https://www.youtube.com/watch?v=4SQXOA8Z-lo)
