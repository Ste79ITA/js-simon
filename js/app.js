// DOM ELEMENTS
const containerDOMElement = document.querySelector('.container');
const playButtonDOMElement = document.querySelector('.play-btn');
const startButtonDOMElement = document.querySelector('.start-btn');
const numbersDOMElement = document.querySelector('.number');

let numbers = [];

// Funzione che genera 5 numeri random, crea 5 oggetti html e li posizione nel container
function randomNumbers() {
  containerDOMElement.innerHTML = '';
  containerDOMElement.style.display = 'flex';
  playButtonDOMElement.style.display = 'none';
  for (let i = 0; i < 5; i++) {
    let number = Math.floor(Math.random() * 100 + 1);
    if (!numbers.includes(number)) {
      numbers.push(number);
    }
    containerDOMElement.innerHTML += `<div class="number">${numbers[i]}</div>`;
  }
  startButtonDOMElement.style.display = 'flex';
}

// Fa partire un timer di 30 secondi, nasconde i numeri e al termine chiede all'utente di scrivere i numeri
function timer() {
  startButtonDOMElement.style.display = 'none';
  console.log('START 30s TIMER');
  console.log(numbers);

  containerDOMElement.innerHTML = '';

  let timer = 30;
  containerDOMElement.innerHTML += `<div class="number">${timer}</div>`;
  setInterval(() => {
    if (timer > 0) {
      timer--;
      containerDOMElement.innerHTML = '';
      containerDOMElement.innerHTML += `<div class="number">${timer}</div>`;
    }
  }, 1000);
  setTimeout(() => {
    containerDOMElement.innerHTML = '';
    userInput();
  }, 31000);
}

// funzione che colleziona i numeri scritti dall'utente e li confronta con i numeri nell array

function userInput() {
  let userInput = [];
  let rightNumbers = [];
  let textNumbers = '';

  while (userInput.length < 5) {
    userInput.push(parseInt(prompt('Inserisci i 5 numeri')));
  }
  console.log(userInput);
  for (let i = 0; i < 5; i++) {
    if (numbers[i] === userInput[i]) {
      rightNumbers.push(userInput[i]);
    }
  }
  console.log(rightNumbers);
  for (i = 0; i < rightNumbers.length; i++) {
    textNumbers += ' ' + rightNumbers[i] + ' ';
    console.log(textNumbers);
  }

  containerDOMElement.innerHTML += `<div class="results">Hai indovinato ${rightNumbers.length} numeri! ${textNumbers}</div>`;
}

playButtonDOMElement.addEventListener('click', randomNumbers);
startButtonDOMElement.addEventListener('click', timer);
