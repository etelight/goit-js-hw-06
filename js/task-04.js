const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");
let counterValue = 0;

console.log(counterValue);

decrementEl.addEventListener("click", () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

incrementEl.addEventListener("click", () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
