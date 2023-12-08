//burger
const burgerButton = document.querySelector('.burger__button');
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const body = document.querySelector('.body');
const menu__list = document.querySelector('.menu__list');

function burger() {
  burgerButton.classList.toggle('_active');
  header.classList.toggle('_locked');
  nav.classList.toggle('_active');
  body.classList.toggle('_hidden');
  menu__list.classList.toggle('_active');
  menu__list.addEventListener("click", burger)
}

burgerButton.addEventListener("click", burger) 
menu__list.removeEventListener

