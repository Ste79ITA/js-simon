// DOM ELEMENTS
const containerDOMElement = document.querySelector('.container');
const playButtonDOMElement = document.querySelector('.play-btn');
const startButtonDOMElement = document.querySelector('.start-btn');
const numbersDOMElement = document.querySelector('.number');

let numbers = [];

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

function timer() {
  startButtonDOMElement.style.display = 'none';
  console.log('START 30s TIMER');

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
  }, 30000);
}

playButtonDOMElement.addEventListener('click', randomNumbers);
startButtonDOMElement.addEventListener('click', timer);
