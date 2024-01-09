'use strict';

const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');

const overlayFunc = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//console.log(btnOpenModal);

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', overlayFunc);

overlay.addEventListener('click', overlayFunc);

document.querySelector('body').addEventListener('keydown', function (e) {
  // console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.add('hidden')) overlayFunc();
});
