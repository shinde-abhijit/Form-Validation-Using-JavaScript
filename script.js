let errorUsername = document.getElementById("errorUsername");
let errorEmail = document.getElementById("errorEmail");
let errorMobile = document.getElementById("errorMobile");
let errorPassword = document.getElementById("errorPassword");
let errorAadhar = document.getElementById("errorAadhar");
let errorPancard = document.getElementById("errorPancard");
let errorSubmit = document.getElementById("errorSubmit");

function validateUsername() {
  var username = document.getElementById("usernameField").value;

  if (username.length == 0) {
    errorUsername.innerHTML = "Required Field.";
    return false;
  }
  if (username.length <= 7) {
    errorUsername.innerHTML = "Minimum 8 Character";
    return false;
  }
  errorUsername.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}
function validateEmail() {
  var email = document.getElementById("emailField").value;

  if (email.length == 0) {
    errorEmail.innerHTML = "Required Field.";
    return false;
  }
  //if(!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    errorEmail.innerHTML = "Not an email address";
    return false;
  }
  errorEmail.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}
function validateMobile() {
  var mobile = document.getElementById("mobileField").value;
  if (mobile.length == 0) {
    errorMobile.innerHTML = "Required Field.";
    return false;
  }
  if (mobile.length !== 10) {
    errorMobile.innerHTML = "Must be 10 Digits only";
    return false;
  }
  if (!mobile.match(/^[0-9]{10}$/)) {
    errorMobile.innerHTML = "Should Be Numeric";
    return false;
  }
  errorMobile.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}
function validatePassword() {
  var password = document.getElementById("passwordField").value;
  if (password.length == 0) {
    errorPassword.innerHTML = "Required Field.";
    return false;
  }
  if (password.length <= 7) {
    errorPassword.innerHTML = "Atleast 8 Character's";
    return false;
  }
  errorPassword.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}
function validateAadhar() {
  var aadhar = document.getElementById("aadharField").value;
  if (aadhar.length == 0) {
    errorAadhar.innerHTML = "Required Field.";
    return false;
  }
  if (!aadhar.match(/^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/)) {
    errorAadhar.innerHTML = "12 Digit";
    return false;
  }
  errorAadhar.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}
function validatePancard() {
  var pancard = document.getElementById("pancardField").value;
  if (pancard.length == 0) {
    errorPancard.innerHTML = "Required Field.";
    return false;
  }
  if (!pancard.match(/[A-Z]{5}[0-9]{4}[A-Z]{1}/)) {
    errorPancard.innerHTML = "Alphanumeric 10 Character.";
    return false;
  }
  errorPancard.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}

function validateForm() {
  if (
    !validateUsername() ||
    !validateEmail() ||
    !validateMobile() ||
    !validatePassword() ||
    !validateAadhar() ||
    !validatePancard()
  ) {
    errorSubmit.style.display = "block";
    errorSubmit.innerHTML = "Fix error's.";
    setTimeout(function () {
      errorSubmit.style.display = "none";
    }, 3000);
    return false;
  }
}





// For Clock

window.onload = () => {
  function clockFunc(){
      
      const date = new Date();

      let hour = date.getHours() % 12 || 12; 
      let minute = date.getMinutes(); 
      let second = date.getSeconds();
      
      document.querySelector('#hourDiv').innerHTML = "0" + hour;
      document.querySelector('#minuteDiv').innerText = minute;
      document.querySelector('#secondDiv').innerText = second;

      setTimeout(clockFunc, 1000);
  }
  clockFunc();
}