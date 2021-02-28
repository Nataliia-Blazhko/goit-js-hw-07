const inputText = document.querySelector('input#name-input');
const outputText = document.querySelector('span#name-output');

inputText.addEventListener('input', e => {
  // outputText.textContent = e.target.value || "незнакомец";
  if (e.target.value === '') {
    outputText.textContent = 'незнакомец';
  } else {
    outputText.textContent = e.target.value;
  }
});
