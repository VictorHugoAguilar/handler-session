// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = ``;

const claveInput = document.getElementById('clave');
const valorInput = document.getElementById('valor');
const getHandler = function () {
  try {
    const result = localStorage.getItem(claveInput.value);
    appDiv.innerHTML = `${claveInput.value} vale ${result}`;
  } catch {
    appDiv.innerHTML = `error recuperando ${claveInput.value}`;
  }
};
const setHandler = function () {
  try {
    localStorage.setItem(claveInput.value, valorInput.value);
    appDiv.innerHTML = `${claveInput.value} guardado`;
  } catch {
    appDiv.innerHTML = `error recuperando ${claveInput.value}`;
  }
};
const deleteHandler = function () {
  try {
    localStorage.removeItem(claveInput.value);
    appDiv.innerHTML = `${claveInput.value} borrado`;
  } catch {
    appDiv.innerHTML = `error recuperando ${claveInput.value}`;
  }
};

const navigateHandler = function () {
  window.location.href = 'https://js-7py2hs.stackblitz.io';
};

const getBtn = document.getElementById('get');
getBtn.addEventListener('click', getHandler, false);

const setBtn = document.getElementById('set');
setBtn.addEventListener('click', setHandler, false);

const deleteBtn = document.getElementById('delete');
deleteBtn.addEventListener('click', deleteHandler, false);

const navigateBtn = document.getElementById('navigate');
navigateBtn.addEventListener('click', navigateHandler, false);
