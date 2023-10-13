import './index.css';

const button = document.getElementById('button-center-item');

const subjID =
  new URL(document.location.href).searchParams.get('ID') || 'testID';
const version = new URL(document.location.href).searchParams.get('v') || 'o';
const se = new URL(document.location.href).searchParams.get('se') || '0.4';

// define what happens on button click
const handleContinueClick = (event) => {
  event.preventDefault();

  if (version === 'o') {
    window.location.href = `./previc.html?ID=${subjID}`;
  } else if (version === 'a') {
    window.location.href = `./previc_adaptive.html?ID=${subjID}&se=${se}`;
  }
};

button.addEventListener('click', handleContinueClick, { capture: false });
