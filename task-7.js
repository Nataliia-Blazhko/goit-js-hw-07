const inputFontSizecontrol = document.querySelector('input#font-size-control');
const text = document.querySelector('#text');

const changeText = event => {
  text.style.fontSize = event.target.value + 'px';
};

inputFontSizecontrol.addEventListener('input', changeText);
