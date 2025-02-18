import './index.css';

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
  const se = parseFloat(document.getElementById('se').value);

  // Check if the entered number is within the specified range
  if (se < 0.1 || se > 0.9) {
    document.getElementById(
      'illegal-se',
    ).innerHTML = `Bitte wählen Sie einen Standardfehler zwischen 0.1 und 0.9.`;
  } else {
    window.location.href = `./instructionsA.html?ID=${subjID}&v=${version}&se=${se}`;
  }
};

button.addEventListener('click', handleContinueClick, { capture: false });
