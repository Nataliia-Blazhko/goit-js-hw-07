const text = document.querySelector('#value');
const incrementBtn = document.querySelector(
  "#counter button[data-action='increment']",
);
const decrementBtn = document.querySelector(
  "#counter button[data-action='decrement']",
);
let counterValue = 0;

const textUpdate = () => {
  text.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  textUpdate();
};

const decrement = () => {
  counterValue -= 1;
  textUpdate();
};

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);

// // Version 2:
// const btnClickHandler = event => {
//   counterValue += event.target.dataset.action === 'increment' ? 1 : -1;
//   renderValue();
// };

// decrementBtnRef.addEventListener('click', btnClickHandler);
// incrementBtnRef.addEventListener('click', btnClickHandler);

// Version 3

// const text = document.querySelector("#value");
// const buttons = document.querySelectorAll("#counter > button");

// buttons.forEach((b) => {
//   b.addEventListener("click", (e) => {
//     let n = +text.textContent;
//     text.textContent = e.target.dataset.action === "increment" ? n+1 : n-1;
//   });
// });
