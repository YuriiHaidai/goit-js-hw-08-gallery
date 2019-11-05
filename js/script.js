"use strict";

import GalleryItems from "./gallery-items.js";

const gallery = document.querySelector(".js-gallery");

function CreateGalleryItem() {
  const arr = [];

  const createLi = document.createElement("li");
  const createA = document.createElement("a");
  const createImg = document.createElement("img");
  const createSpan = document.createElement("span");
  const createI = document.createElement("i");

  createLi.classList.add("gallery__item");
  createA.classList.add("gallery__link");
  createImg.classList.add("gallery__image");
  createSpan.classList.add("gallery__icon");
  createI.classList.add("material-icons");

  createI.textContent = "zoom_out_map";

  createLi.append(createA, createSpan);
  createA.appendChild(createImg);
  createSpan.appendChild(createI);

  GalleryItems.forEach(item => {
    createA.href = item.original;
    createImg.src = item.preview;
    createImg.alt = item.description;
    createImg.dataset.source = item.original;
    arr.push(createLi.outerHTML);
  });
  return arr.join("");
}

gallery.insertAdjacentHTML("afterbegin", CreateGalleryItem());
