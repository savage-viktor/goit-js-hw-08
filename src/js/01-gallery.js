// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const basicLightbox = require("basiclightbox")

const galleryDivRef = document.querySelector(".gallery")

galleryDivRef.innerHTML = galleryItems.map(({ preview, original, description }) => {

  return `<div class="gallery__item" href="${original}" >
        <a class="gallery__link" >
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
</div >`
}).join("")

function openModalBigImg(event) {
  event.preventDefault();
  if (event.target === galleryDivRef) {
    return
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

  instance.show()

}

galleryDivRef.addEventListener("click", openModalBigImg)