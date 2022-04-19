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
    !isBlank(emailInput) &&
    !isBlank(phoneInput) &&
    !isBlank(productInput)
  ) {
    submitButtonBlock.style.display = "none";
  } else {
    submitButtonBlock.style.display = "block";
  }
}
