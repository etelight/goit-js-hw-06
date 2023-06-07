const loginFormEl = document.querySelector(".login-form");
const emailInputEl = loginFormEl.elements.email;
const passwordInputEl = loginFormEl.elements.password;

loginFormEl.addEventListener("submit", (e) => {
  e.preventDefault();

  if (emailInputEl.value && passwordInputEl.value) {
    console.log({
      email: emailInputEl.value,
      password: passwordInputEl.value,
    });
    loginFormEl.reset();
    return;
  }

  alert("Заповніть усі поля!");
});
