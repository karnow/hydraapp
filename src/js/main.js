"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


const buttonAdd = document.querySelector('.button-add--js');
const buttonRemove = document.querySelector('.button-remove--js');
const value = document.querySelector('.counter__value--js');

buttonAdd.addEventListener('click', (e) => {
  value.innerHTML = parseInt(value.innerHTML) + 1;
});

buttonRemove.addEventListener('click', (e) => {
  const currentValue = parseInt(value.innerHTML);
  if (currentValue > 0) {

  value.innerHTML = currentValue - 1; }
});
