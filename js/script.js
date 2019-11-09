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

/* Open Lightbox */

gallery.addEventListener("click", openLightbox);

const lightbox = document.querySelector(".js-lightbox");
const lightboxImage = document.querySelector(".lightbox__image");

function openLightbox(e) {
  e.preventDefault();

  const target = e.target;
  const bigImgSrc = target.dataset.source;

  lightbox.classList.add("is-open");
  lightboxImage.src = bigImgSrc;
}

/* Close Lightbox */

const lightboxButton = document.querySelector(
  'button[data-action="close-lightbox"]'
);

lightboxButton.addEventListener("click", closeLightbox);

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightboxImage.src = "";
}
