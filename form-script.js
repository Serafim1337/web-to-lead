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
  var regExp = /[a-zA-Z]/g;
  if (regExp.test(phoneInput.value) || phoneInput.value.length == 0) {
    phoneInput.style.background = "red";
    document.querySelector(".phone-error").style.display = "block";
    return true;
  } else {
    phoneInput.style.background = "";
    document.querySelector(".phone-error").style.display = "none";
    return false;
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

function reloadHandler(event) {
  if (
    !isBlank(companyInput) &&
    !isBlank(firstNameInput) &&
    !isBlank(lastNameInput) &&
    !isBlank(productInput) &&
    !isValidEmail() &&
    !isValidPhone()
  ) {
    submitButtonBlock.style.display = "none";
  } else {
    submitButtonBlock.style.display = "block";
  }
}
