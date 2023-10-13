import './index.css';
import { fileChecker } from './backend/fileChecker.js';
import { writeState } from './backend/writeState.js';

let continueIDOK = false;
let continueVOK = false;
let version;
let se = document.getElementById('se').value;

const button = document.getElementById('button-center-item');
const textField = document.querySelector('.mdc-text-field__input');

// define what happens on input
const handleInput = (event) => {
  event.preventDefault();
  // to get most recent value, get element fresh
  // count number of characters and display the count
  document.querySelector('.mdc-text-field-character-counter').innerHTML = `${
    document.querySelector('.mdc-text-field__input').value.length
  } / 10`;

  // FOR DEMO, ALLOW ANY LENGTH OF ID
  continueIDOK =
    document.querySelector('.mdc-text-field__input').value.length > 0;

  // enable button when at least one character is entered
  button.disabled = !(continueIDOK && continueVOK);
};

textField.addEventListener('keyup', handleInput, { capture: false });

const radioAdaptive = document.getElementById('radio-previcversion-adaptive');

radioAdaptive.onclick = () => {
  version = 'a';
  continueVOK = true;
  button.disabled = !(continueIDOK && continueVOK);

  document
    .getElementById('se-selection')
    .setAttribute('style', 'display: block;');
};

const radioOriginal = document.getElementById('radio-previcversion-original');

radioOriginal.onclick = () => {
  version = 'o';
  continueVOK = true;
  button.disabled = !(continueIDOK && continueVOK);

  document
    .getElementById('se-selection')
    .setAttribute('style', 'display: none;');
};

// define what happens on button click
const handleContinueClick = async (event) => {
  event.preventDefault();

  // save entered values
  const subjID = document.querySelector('.mdc-text-field__input').value;
  se = document.getElementById('se').value;

  // initialize UI and state
  const isFile = await fileChecker(`./data/${subjID}.json`);
  // if file does not exist, initialize it
  if (!isFile) {
    writeState({ id: subjID, trial: 0 }, subjID);
  }

  window.location.href = `./instructionsA.html?ID=${subjID}&v=${version}&se=${se}`;
};

button.addEventListener('click', handleContinueClick, { capture: false });
