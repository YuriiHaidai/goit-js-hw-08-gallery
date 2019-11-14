"use strict";

import GalleryItems from "./gallery-items.js";

const gallery = document.querySelector(".js-gallery");

function CreateGalleryItems() {
  const arr = [];

  const elemLi = document.createElement("li");
  const elemA = document.createElement("a");
  const elemImg = document.createElement("img");
  const elemSpan = document.createElement("span");
  const elemI = document.createElement("i");

  elemLi.classList.add("gallery__item");
  elemA.classList.add("gallery__link");
  elemImg.classList.add("gallery__image");
  elemSpan.classList.add("gallery__icon");
  elemI.classList.add("material-icons");

  elemI.textContent = "zoom_out_map";

  elemLi.append(elemA, elemSpan);
  elemA.appendChild(elemImg);
  elemSpan.appendChild(elemI);

  GalleryItems.forEach(item => {
    elemA.href = item.original;
    elemImg.src = item.preview;
    elemImg.alt = item.description;
    elemImg.dataset.source = item.original;
    arr.push(elemLi.outerHTML);
  });
  return arr.join("");
}

gallery.insertAdjacentHTML("afterbegin", CreateGalleryItems());

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
