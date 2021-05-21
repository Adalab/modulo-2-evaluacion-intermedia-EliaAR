"use strict";

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

let inputText = document.querySelector('input[name="inputText"]');
let buttonRamnom = document.querySelector(".js-button");

let max = getRandomNumber(100);
console.log(max);
let paragraphOne = document.querySelector(".js-paragraph");
let paragraphTwo = document.querySelector(".js-paragraph2");
let number = 0;

function printInParagraphOne(text) {
  paragraphOne.innerText = text;
}

function countAttempts() {
  paragraphTwo.innerText = `Número de intentos: ${++number}`;
}

function appearMessages() {
  let valid = inputText.value.match(/^[1-9][0-9]?$|^100$/);
  if (!valid) {
    printInParagraphOne("El número debe estar entre 1 y 100.");
  } else {
    let value = parseInt(inputText.value);
    if (value > max) {
      printInParagraphOne("Demasiado alto");
    } else if (value < max) {
      printInParagraphOne("Demasiado bajo");
    } else if (value === max) {
      printInParagraphOne("¡¡¡Has ganado campeona!!!");
    }
  }
}

function changeInput(event) {
  event.preventDefault();
  appearMessages();
  countAttempts();
}
buttonRamnom.addEventListener("click", changeInput);
