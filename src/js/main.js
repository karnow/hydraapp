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
const key = new Date().toISOString().slice(0, 10);
console.log(key);

// ! - wykrzyknik zaprzecza
if (!localStorage.getItem(key)) {
  localStorage.setItem(key, 0);
  value.innerHTML= '0';

}
else { value.innerHTML= '0';
value.innerHTML = localStorage.getItem(key);

}
// stary wpis działajacy na wartosciach HTML
//   buttonAdd.addEventListener('click', (e) => {
 //  value.innerHTML = parseInt(value.innerHTML) + 1;
//   });

buttonAdd.addEventListener('click', (e) => {
  localStorage.setItem(key,parseInt( localStorage.getItem(key)) + 1);
  value.innerHTML = localStorage.getItem(key) ;
});
// Stary wpis działajacy na HTML
// buttonRemove.addEventListener('click', (e) => {
//  const currentValue = parseInt(value.innerHTML);
//  if (currentValue > 0) {
//  value.innerHTML = currentValue - 1; }
// });

buttonRemove.addEventListener('click', (e) => {
  const currentValue = parseInt(localStorage.getItem(key));
  if (currentValue > 0) {
  localStorage.setItem(key, localStorage.getItem(key) - 1);
  value.innerHTML = localStorage.getItem(key) }
});
