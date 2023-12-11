'use strict';

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


//slider
const buttonLeft = document.querySelector('#button-left');
const buttonRight = document.querySelector('#button-right');
const sliderWrapper = document.querySelector('#slider__wrapper');
const slider = document.querySelector('#slider');
const slideLeft = document.querySelector('#slide_left');
const slideActive = document.querySelector('#slide_active');
const slideRight = document.querySelector('#slide_right');

const control__line = document.querySelectorAll('.control__line');


// slider.style.left = `200px`;
// function animation

// buttonLeft.addEventListener("click", () => {
//   slider.classList.toggle('animation-left');

// })

buttonRight.addEventListener('click', moveSlideRight);
buttonLeft.addEventListener('click', moveSlideLeft);



// slider.addEventListener('animationend', () =>{
//   slider.classList.toggle('animation-left');
// } )


// const slideWidth = 480;
let slideWidth = parseInt(window.getComputedStyle(sliderWrapper).width);
console.log(slideWidth);

let sliderPosition = (parseInt(window.getComputedStyle(slider).left)/slideWidth);

console.log(sliderPosition);

// slider.classList.add(`animation-infinite`);
function removeClass () {
  slider.classList.remove(`animation-right0`);
  slider.classList.remove(`animation-right1`);
  slider.classList.remove(`animation-right2`);
  slider.classList.remove(`animation-left0`);
  slider.classList.remove(`animation-left1`);
  slider.classList.remove(`animation-left2`);
}

function moveSlideRight() {
  sliderPosition = (sliderPosition <  2) ? sliderPosition + 1 : 0; 
  removeClass ();
  // slider.classList.remove(`animation-right0`);
  // slider.classList.remove(`animation-right1`);
  // slider.classList.remove(`animation-right2`);
  slider.classList.add(`animation-right${sliderPosition}`);
  slider.style.left = `${-sliderPosition * slideWidth}px`;
  console.log(slider.style.left);
  
    }

function moveSlideLeft() {
  sliderPosition = (sliderPosition <  2) ? sliderPosition + 1 : 0;  
  removeClass ();
  // slider.classList.remove(`animation-left0`);
  // slider.classList.remove(`animation-left1`);
  // slider.classList.remove(`animation-left2`);
  slider.classList.add(`animation-left${sliderPosition}`);
  slider.style.left = `${-sliderPosition * slideWidth}px`;
    }
   

