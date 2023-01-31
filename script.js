// Setting up form validation

const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone-number");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password-confirm");

// Error messages

const firstNameError = document.querySelector("#first-name-error");
const lastNameError = document.querySelector("#last-name-error");
const emailError = document.querySelector("#email-error");
const phoneNumberError = document.querySelector("#phone-number-error");
const passwordError = document.querySelector("#password-error");
const passwordConfirmError = document.querySelector("#password-confirm-error");

// Error messages functions

firstName.addEventListener("input", (e) => {
  if (firstName.value === "") {
    firstNameError.textContent = "Please provide your name";
    firstName.style.border = "2px solid red";
  } else {
    firstNameError.textContent = "";
    firstName.style.border = "2px solid rgba(0, 0, 0, 0.4)";
  }
});

lastName.addEventListener("input", (e) => {
  if (lastName.value === "") {
    lastNameError.textContent = "Please provide your last name";
    lastName.style.border = "2px solid red";
  } else {
    lastNameError.textContent = "";
    lastName.style.border = "2px solid rgba(0, 0, 0, 0.4)";
  }
})

email.addEventListener("input", (e) => {
  if (email.validity.typeMismatch) {
    emailError.textContent = "Please enter a valid email.\ne.g. johndoe@domain.com";
    email.style.border = "2px solid red";
  } else {
    emailError.textContent = "";
    email.style.border = "2px solid rgba(0, 0, 0, 0.4)";
  }
})

phoneNumber.addEventListener("input", (e) => {
  if (phoneNumber.validity.patternMismatch) {
    phoneNumberError.textContent = "Please enter a 9 digit phone number";
    phoneNumber.style.border = "2px solid red";
  } else {
    phoneNumberError.textContent = "";
    phoneNumber.style.border = "2px solid rgba(0, 0, 0, 0.4)";
  }
})

password.addEventListener("input", (e) => {
  if (password.validity.patternMismatch) {
    passwordError.textContent = "Please enter a password consisting of at least one Uppercase letter, one Lowercase letter, one Number and one Special character";
    password.style.border = "2px solid red";
  } else {
    passwordError.textContent = "";
    password.style.border = "2px solid rgba(0, 0, 0, 0.4)"
  }
})

passwordConfirm.addEventListener("input", (e) => {
  if (password.value === passwordConfirm.value) {
    passwordConfirmError.textContent = "";
    passwordConfirm.style.border = "2px solid rgba(0, 0, 0, 0.4)";
  } else {
    passwordConfirmError.textContent = "Passwords do not match";
    passwordConfirm.style.border = "2px solid red";
  }
})