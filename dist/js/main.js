!function(e){var n={};function t(l){if(n[l])return n[l].exports;var c=n[l]={i:l,l:!1,exports:{}};return e[l].call(c.exports,c,c.exports,t),c.l=!0,c.exports}t.m=e,t.c=n,t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:l})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)t.d(l,c,function(n){return e[n]}.bind(null,c));return l},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\n// service worker registration - remove if you're not going to use it\n\nif ('serviceWorker' in navigator) {\n  window.addEventListener('load', function() {\n    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {\n      // Registration was successful\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\n    }, function(err) {\n      // registration failed :(\n      console.log('ServiceWorker registration failed: ', err);\n    });\n  });\n}\n\n// place your code below\n\n\nconst buttonAdd = document.querySelector('.button-add--js');\nconst buttonRemove = document.querySelector('.button-remove--js');\nconst value = document.querySelector('.counter__value--js');\nconst key = new Date().toISOString().slice(0, 10);\nconsole.log(key);\n\n// ! - wykrzyknik zaprzecza\nif (!localStorage.getItem(key)) {\n  localStorage.setItem(key, 0);\n  value.innerHTML= '0';\n\n}\nelse { value.innerHTML= '0';\nvalue.innerHTML = localStorage.getItem(key);\n\n}\n// stary wpis działajacy na wartosciach HTML\n//   buttonAdd.addEventListener('click', (e) => {\n //  value.innerHTML = parseInt(value.innerHTML) + 1;\n//   });\n\nbuttonAdd.addEventListener('click', (e) => {\n  localStorage.setItem(key,parseInt( localStorage.getItem(key)) + 1);\n  value.innerHTML = localStorage.getItem(key) ;\n});\n// Stary wpis działajacy na HTML\n// buttonRemove.addEventListener('click', (e) => {\n//  const currentValue = parseInt(value.innerHTML);\n//  if (currentValue > 0) {\n//  value.innerHTML = currentValue - 1; }\n// });\n\nbuttonRemove.addEventListener('click', (e) => {\n  const currentValue = parseInt(localStorage.getItem(key));\n  if (currentValue > 0) {\n  localStorage.setItem(key, localStorage.getItem(key) - 1);\n  value.innerHTML = localStorage.getItem(key) }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIC0gcmVtb3ZlIGlmIHlvdSdyZSBub3QgZ29pbmcgdG8gdXNlIGl0XG5cbmlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ3NlcnZpY2V3b3JrZXIuanMnKS50aGVuKGZ1bmN0aW9uKHJlZ2lzdHJhdGlvbikge1xuICAgICAgLy8gUmVnaXN0cmF0aW9uIHdhcyBzdWNjZXNzZnVsXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCB3aXRoIHNjb3BlOiAnLCByZWdpc3RyYXRpb24uc2NvcGUpO1xuICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgLy8gcmVnaXN0cmF0aW9uIGZhaWxlZCA6KFxuICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogJywgZXJyKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbi8vIHBsYWNlIHlvdXIgY29kZSBiZWxvd1xuXG5cbmNvbnN0IGJ1dHRvbkFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tYWRkLS1qcycpO1xuY29uc3QgYnV0dG9uUmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1yZW1vdmUtLWpzJyk7XG5jb25zdCB2YWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudGVyX192YWx1ZS0tanMnKTtcbmNvbnN0IGtleSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG5jb25zb2xlLmxvZyhrZXkpO1xuXG4vLyAhIC0gd3lrcnp5a25payB6YXByemVjemFcbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIDApO1xuICB2YWx1ZS5pbm5lckhUTUw9ICcwJztcblxufVxuZWxzZSB7IHZhbHVlLmlubmVySFRNTD0gJzAnO1xudmFsdWUuaW5uZXJIVE1MID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcblxufVxuLy8gc3Rhcnkgd3BpcyBkemlhxYJhamFjeSBuYSB3YXJ0b3NjaWFjaCBIVE1MXG4vLyAgIGJ1dHRvbkFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gLy8gIHZhbHVlLmlubmVySFRNTCA9IHBhcnNlSW50KHZhbHVlLmlubmVySFRNTCkgKyAxO1xuLy8gICB9KTtcblxuYnV0dG9uQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LHBhcnNlSW50KCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSArIDEpO1xuICB2YWx1ZS5pbm5lckhUTUwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpIDtcbn0pO1xuLy8gU3Rhcnkgd3BpcyBkemlhxYJhamFjeSBuYSBIVE1MXG4vLyBidXR0b25SZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuLy8gIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHBhcnNlSW50KHZhbHVlLmlubmVySFRNTCk7XG4vLyAgaWYgKGN1cnJlbnRWYWx1ZSA+IDApIHtcbi8vICB2YWx1ZS5pbm5lckhUTUwgPSBjdXJyZW50VmFsdWUgLSAxOyB9XG4vLyB9KTtcblxuYnV0dG9uUmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgY29uc3QgY3VycmVudFZhbHVlID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG4gIGlmIChjdXJyZW50VmFsdWUgPiAwKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSAtIDEpO1xuICB2YWx1ZS5pbm5lckhUTUwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")}]);