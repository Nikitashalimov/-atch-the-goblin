(()=>{var e={562:()=>{const e=document.querySelectorAll(".hole"),t=[0,2,3,4,5,6,7,8,9,10,11,12,13,14,15];let r;setInterval((()=>function(){t.sort((()=>Math.random()-.5)),r=r===t[0]?t[1]:t[0],e[r].insertAdjacentHTML("beforeend",'<div class="goblin"></div>');const o=document.querySelector(".goblin"),n=[500,750,1e3];setTimeout((()=>o.remove()),n[Math.floor(Math.random()*n.length)])}()),1300)}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(562)})()})();