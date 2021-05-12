"use strict";

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

let int = document.querySelector('input[name="inputText"]');
let buttonRamnom = document.querySelector(".js-button");

let max = getRandomNumber(100);
console.log(max);
let pUno = document.querySelector(".paragraph");
let pDos = document.querySelector(".paragraph2");
let number = 0;
function inputChange(event) {
  event.preventDefault();
  let valid = int.value.match(/^[1-9][0-9]?$|^100$/);
  if (!valid) {
    pUno.innerText = "El número debe estar entre 1 y 100.";
    pDos.innerText = `Número de intentos: ${++number}`;
  } else {
    let value = parseInt(int.value);
    if (value > max) {
      pUno.innerText = "Demasiado alto";
      pDos.innerText = `Número de intentos: ${++number}`;
    } else if (value < max) {
      pUno.innerText = "Demasiado bajo";
      pDos.innerText = `Número de intentos: ${++number}`;
    } else if (value === max) {
      pUno.innerText = "¡¡¡Has ganado campeona!!!";
    }
  }
}
buttonRamnom.addEventListener("click", inputChange);
