const body = document.body;
const submitButtonBlock = document.querySelector(".disabled-button-block");
const submitButton = document.querySelector(".submit-button");
const companyInput = document.querySelector("#company");
const firstNameInput = document.querySelector("#first_name");
const lastNameInput = document.querySelector("#last_name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const productInput = document.querySelector(".lead-select");

submitButtonBlock.addEventListener("click", submitHandler);
body.addEventListener("mousemove", reloadHandler);

function submitHandler(event) {
  notifyOfBlankInput(companyInput);
  notifyOfBlankInput(firstNameInput);
  notifyOfBlankInput(lastNameInput);
  notifyOfBlankInput(emailInput);
  notifyOfBlankInput(phoneInput);
  notifyOfBlankInput(productInput);
  notifyOfCaptchaUnchecked();
}

function isBlank(inputElement) {
  if (inputElement.value.length == 0) {
    return true;
  } else {
    return false;
  }
}

function isValidEmail() {
  if (
    emailInput.value.includes("@") &&
    emailInput.value.includes(".com") &&
    emailInput.value.length != 0
  ) {
    emailInput.style.background = "";
    document.querySelector(".email-error").style.display = "none";
    return false;
  } else {
    emailInput.style.background = "red";
    document.querySelector(".email-error").style.display = "block";
    return true;
  }
}

function isValidPhone() {
  let regExp = /[a-zA-Z]/g;
  if (
    regExp.test(phoneInput.value) ||
    phoneInput.value.length == 0 ||
    phoneInput.value.length < 12
  ) {
    phoneInput.style.background = "red";
    document.querySelector(".phone-error").style.display = "block";
    return true;
  } else {
    phoneInput.style.background = "";
    document.querySelector(".phone-error").style.display = "none";
    return false;
  }
}

function isValidFirstName() {
  let regExp = /^(?=.{1,20}$)[a-z]+$/i;
  if (
    regExp.test(firstNameInput.value) &&
    firstNameInput.value.length >= 2 &&
    firstNameInput.value.slice(0, 1) ==
      firstNameInput.value.slice(0, 1).toUpperCase()
  ) {
    firstNameInput.style.background = "";
    document.querySelector(".first-name-error").style.display = "none";
    return false;
  } else {
    firstNameInput.style.background = "red";
    document.querySelector(".first-name-error").style.display = "block";
    return true;
  }
}

function isValidLastName() {
  let regExp = /^(?=.{1,40}$)[a-z]+$/i;
  if (
    regExp.test(lastNameInput.value) &&
    lastNameInput.value.length >= 2 &&
    lastNameInput.value.slice(0, 1) ==
      lastNameInput.value.slice(0, 1).toUpperCase()
  ) {
    lastNameInput.style.background = "";
    document.querySelector(".last-name-error").style.display = "none";
    return false;
  } else {
    lastNameInput.style.background = "red";
    document.querySelector(".last-name-error").style.display = "block";
    return true;
  }
}

function isCaptchaChecked() {
  let response = grecaptcha.getResponse();
  if (response.length > 0) {
    return false;
  } else {
    return true;
  }
}

function notifyOfBlankInput(inputElement) {
  if (isBlank(inputElement)) {
    alert(
      "Please, enter information in field: " +
        (inputElement.placeholder == undefined
          ? "Product"
          : inputElement.placeholder)
    );
  }
}

function notifyOfCaptchaUnchecked() {
  if (isCaptchaChecked()) {
    alert("Please, check the captcha before submitting your form");
  }
}

function reloadHandler(event) {
  if (
    !isBlank(companyInput) &&
    !isBlank(productInput) &&
    !isValidFirstName() &&
    !isValidLastName() &&
    !isValidEmail() &&
    !isValidPhone() &&
    !isCaptchaChecked()
  ) {
    submitButtonBlock.style.display = "none";
  } else {
    submitButtonBlock.style.display = "block";
  }
}
