const loginForm = document.getElementById("login-form");
const loginMessage = document.getElementById("login-message");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  loginMessage.textContent =
    " Login submitted!";
});
