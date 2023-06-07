const validationInput = document.querySelector("#validation-input");
validationInput.addEventListener("blur", (event) => {
  const trimValue = event.target.value.trim();
  if (trimValue.length === Number(validationInput.dataset.length)) {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
    return;
  }
  event.target.classList.add("invalid");
  event.target.classList.remove("valid");
});
