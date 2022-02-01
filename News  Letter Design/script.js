const bx = document.querySelector('.box');
const form = document.querySelector('.form-control');
const inpt = document.querySelector('.input');
const button = document.querySelector('.btn');
const prg = document.getElementById('para');


button.addEventListener('click',(e)  => {
  e.preventDefault();
  prg.textContent = 'Thanks for subscribing to my newsletter.Enjoy your reading . 😃';  
  
});