import './previc.css';
import downloadData from './backend/downloadData.js';
import wordData from './backend/wordDataSelected.js';
// https://github.com/gajus/swing
import * as Swing from 'swing';

// ---------------------------------------------------------------------------------------------------------------------
// INITIALIZE ELEMENTS/OBJECTS
// ---------------------------------------------------------------------------------------------------------------------
const devmode = false;
const subjID =
  new URL(document.location.href).searchParams.get('ID') || 'testID';
const counter = document.getElementById('counter');
const buttonNo = document.getElementById('button-no');
const buttonYes = document.getElementById('button-yes');

// An instance of the Stack is used to attach event listeners.
const stack = Swing.Stack();

// get html element for UL for words
const cards = document.getElementById('stack');

// ---------------------------------------------------------------------------------------------------------------------
//  FIND OUT AT WHICH TRIAL TO START
// ---------------------------------------------------------------------------------------------------------------------
let item = 0;

// read in word data
const data = JSON.parse(wordData());
const trials = data.length;

counter.textContent = `${item + 1} von ${trials} Wörtern`;

data.splice(data.length - item, item);

for (let i = 0; i < data.length; i++) {
  const newLI = document.createElement('li');
  newLI.classList.add(`${data[i].pos}`);
  newLI.appendChild(document.createTextNode(data[i].word));
  cards.appendChild(newLI);
}

// prepare the cards in the stack for iteration
[].forEach.call(
  document.querySelectorAll('#stack li'),
  function (targetElement) {
    // add card element to the stack
    stack.createCard(targetElement);

    targetElement.classList.add('in-deck');
  },
);

let responseLog = {
  // get ID out of URL parameter
  meta: {
    subjID: subjID,
  },
  data: [],
};

// ---------------------------------------------------------------------------------------------------------------------
// FUNCTION FOR LOGGING RESPONSES
// ---------------------------------------------------------------------------------------------------------------------
function logResponse() {
  responseLog.data[item] = {
    // get word
    word: cards.lastElementChild.innerText,

    // throwDirection returns e.g. Symbol(RIGHT)
    // to get direction as string, get the description of the symbol
    // score 0 if child doesn't know word; score 1 if child knows word
    // score: e.throwDirection.description === 'LEFT' ? 0 : 1,
    score: '',
    pos: cards.lastElementChild.classList[0],
    timestamp: new Date().toISOString(),
    trial: item + 1,
  };

  // increase counter
  item++;
  counter.textContent = `${item + 1} von ${trials} Wörtern`;

  // Remove card from stack and hide
  cards.lastElementChild.classList.remove('in-deck');
  cards.lastElementChild.remove();
}

// Add event listener for when a card is thrown out of the stack.
stack.on('throwout', (e) => {
  logResponse();
  responseLog.data[item - 1].score =
    e.throwDirection.description === 'LEFT' ? 0 : 1;

  // if all words were shown, save responses
  if (document.querySelectorAll('#stack li').length === 0) {
    downloadData(responseLog, responseLog.meta.subjID);
    setTimeout(() => (window.location.href = `./goodbye.html`), 1000);
  }
});

const handleNoClick = (e) => {
  logResponse();
  responseLog.data[item - 1].score = 0;

  // if all words were shown, save responses
  if (document.querySelectorAll('#stack li').length === 0) {
    downloadData(responseLog, responseLog.meta.subjID);
    setTimeout(() => (window.location.href = `./goodbye.html`), 1000);
  }
};

const handleYesClick = (e) => {
  logResponse();
  responseLog.data[item - 1].score = 1;

  // if all words were shown, save responses
  if (document.querySelectorAll('#stack li').length === 0) {
    downloadData(responseLog, responseLog.meta.subjID);
    setTimeout(() => (window.location.href = `./goodbye.html`), 1000);
  }
};

// ---------------------------------------------------------------------------------------------------------------------
// EVENTLISTENER
// ---------------------------------------------------------------------------------------------------------------------
document.addEventListener('keydown', (e) => {
  e = e || window.event;
  if (e.key === 'ArrowLeft') {
    handleNoClick();
  } else if (e.key === 'ArrowRight') {
    handleYesClick();
  }
});

buttonNo.addEventListener('click', handleNoClick, { capture: true });
buttonYes.addEventListener('click', handleYesClick, { capture: true });
