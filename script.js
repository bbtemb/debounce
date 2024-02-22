'use strict';

const input = document.querySelector('#input');
const output = document.querySelector('#output');

function debounce(callback, timeout) {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, timeout);
  };
}

function getOutput() {
  output.textContent = input.value;
}

input.addEventListener('input', debounce(getOutput, 300));
