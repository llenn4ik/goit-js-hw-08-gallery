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
const lightbox = document.querySelector('.lightbox');
const lightbox_img = document.querySelector('.lightbox__image')
// open modal window
console.log('lightbox', lightbox);
console.log('lightbox_img', lightbox_img);

console.log('galleryImagesList', galleryImagesList)

galleryImagesList.addEventListener('click', event => {
  event.preventDefault();
  lightbox.classList.add('is-open');
  changeImgSrc(event.target);
  console.log('+++++++')
});

function changeImgSrc(el) {
  lightbox_img.setAttribute('src', el.dataset.source)
};
// close modal window
function closeModalWindow() {
  lightbox.classList.remove('is-open');

  lightbox_img.setAttribute('src', '');
  console.log('-+-+-')
};
// слушатель на overlay, esc, button:
const overlay = document.querySelector('.lightbox__overlay');

console.log('overlay', overlay);
overlay.addEventListener('click', handleOverlayCloseWindow)



function handleOverlayCloseWindow({
  target,
  currentTarget
}) {
  console.log('target', target);
  console.log("currentTarget", currentTarget);
  if (target === currentTarget) {
    closeModalWindow();
    console.log('---')
  }
};
window.addEventListener('keydown', handleEsc)
console.log(handleEsc);

function handleEsc(event) {
  if (event.code === 'Escape') {
    closeModalWindow()

  }
};
const button = document.querySelector('.lightbox__button');
button.addEventListener('click', handleButton)

function handleButton({
  target,
  currentTarget
}) {
  console.log('target', target);
  console.log("currentTarget", currentTarget);
  if (target === currentTarget) {


    closeModalWindow();
    console.log('click')
  }
};