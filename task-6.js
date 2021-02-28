const inputSymbols = document.querySelector('input#validation-input');

inputSymbols.addEventListener('blur', e => {
  if (e.target.value.length === Number(inputSymbols.dataset.length)) {
    e.target.classList.remove('invalid');
    e.target.classList.add('valid');
  } else if (e.target.value.length === 0) {
    e.target.classList.remove('invalid', 'valid');
  } else {
    e.target.classList.add('invalid');
    e.target.classList.remove('valid');
  }
});
