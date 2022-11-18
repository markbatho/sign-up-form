const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const error = document.querySelector('#error');
const form = document.querySelector('form');

const PASSWORD_MISMATCH_ERROR_MESSAGE = '* Passwords do not match';

let passwordMismatch = false;

confirmPassword.addEventListener('keyup', () => {
  if (password.value != confirmPassword.value) {
    password.classList.add('password-error');
    confirmPassword.classList.add('password-error');
    error.textContent = PASSWORD_MISMATCH_ERROR_MESSAGE;
    passwordMismatch = true;
  } else {
    password.classList.remove('password-error');
    confirmPassword.classList.remove('password-error');
    error.textContent = null;
    passwordMismatch = false;
  }
});

form.addEventListener('submit', (e) => {
  if (passwordMismatch) {
    e.preventDefault();
  }
});
