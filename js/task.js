'use strict';
import images from './gallery-items.js';

const galleryImagesList = document.querySelector('.js-gallery');
// создать li:
const createListImages = images.map((im) => {
  const li = document.createElement('li');
  li.insertAdjacentHTML(
    'beforeend',

    `<a class="gallery__link" href="${im.original}">
    <img
      class="gallery__image"
      src="${im.preview}"
 data-source="${im.original}"
      alt="${im.description}"
    />
  </a>`

  );

  return li;
});
// добавить li в ul:
galleryImagesList.append(...createListImages);
console.dir(galleryImagesList);
//  модальное окно
const lightbox = galleryImagesList.querySelector('.js-lightbox');
const lightbox_img = lightbox.querySelector('.lightbox__image')
// open modal window
lightbox.addEventListener('click', event => {
  lightbox.classList.add('.is-open');
  changeImgSrc(el);
});

function changeImgSrc(el) {
  lightbox_img.setAttribute('src', el.dataset.source)
};
// close modal window
function closeModalWindow() {
  lightbox.classList.remove('.is-open');

  lightbox_img.setAttribute('src', '${im.preview}')
};
// слушатель на overlay, esc, button:
const overlay = galleryImagesList.querySelector('.lightbox__overlay')
overlay.addEventListener('click', handleOverlayCloseWindow)

function handleOverlayCloseWindow(target, currentTarget) {
  if (target === currentTarget) {
    closeModalWindow()
  }
}