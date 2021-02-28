const inputNumber = document.querySelector('#controls > input');
const buttonRender = document.querySelector(
  "#controls button[data-action='render']",
);
const buttonDestroy = document.querySelector(
  "#controls button[data-action='destroy']",
);
const divBoxes = document.querySelector('#boxes');

let boxSize = 30;
const createBoxes = amount => {
  for (let i = 0; i < amount; i += 1) {
    divBoxes.insertAdjacentHTML(
      'beforeend',
      `<div style='background-color: rgb(${Math.random() * 255}, ${
        Math.random() * 255
      }, ${
        Math.random() * 255
      }); width: ${boxSize}px; height:${boxSize}px;'>  </div>`,
    );
    boxSize += 10;
  }
};

const destroyBoxes = () => {
  divBoxes.innerHTML = '';
  inputNumber.value = 0;
  boxSize = 30;
};

buttonRender.addEventListener('click', event => {
  createBoxes(inputNumber.value);
});

buttonDestroy.addEventListener('click', destroyBoxes);
