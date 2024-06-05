const buttonLogin = document.getElementById(`buttonLogin`);
const buttonSignUp = document.getElementById(`buttonSignUp`);
let inputUsername;
let inputPassword;

buttonLogin.addEventListener(`click`, (event) => {
  event.preventDefault();

  inputUsername = document.getElementById(`nome`).value;
  inputPassword = document.getElementById(`senha`).value;
});

buttonSignUp.addEventListener(`click`, (event) => {
  event.preventDefault();

  inputUsername = document.getElementById(`nome`).value;
  inputPassword = document.getElementById(`senha`).value;

  console.log(inputUsername);
  console.log(inputPassword);
});
