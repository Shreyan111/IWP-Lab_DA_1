//index.js

const form = document.getElementById("form");
const username = document.getElementById("username");
const regno = document.getElementById("regno");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

// ADD  EVENT

form.addEventListener("submit", (e) => {
    e.preventDefault();

    validate();
});

const sendData = (usernameVal, sRate, count) => {
    if(sRate === 5){
        alert("Registration Successful");
        swal("Welcome! " + usernameVal, "Registration Successful", "success");
    }
}

// For final data validation
const successMsg = (usernameVal) => {
    let formCon = document.getElementsByClassName("form_control");
    var count = formCon.length - 1;
    for(var i=0; i<formCon.length; i++) {
        if( formCon[i].className === "form_control success"){
            var sRate = 0 + i;
            sendData(usernameVal, sRate, count);
        }
        else {
            return false;
        }
    }

}

//More Email Validation

const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    if (atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf(".");
    if(dot <= atSymbol + 2) return false;
    if(dot === emailVal.length - 1) return false;
    return true;
}

//Registration Validation
const isRegistration = (regVal) => {
    let pattern = /^[0-9]{2}\[A-Z]{3}\d{4}$/;
    let result = pattern.test(regVal);
    if(!result) return true;
    return false;
}

const isPhone = (phoneVal) => {
    let pattern = /^[6-9]\d{9}$/;
    let result = pattern.test(phoneVal);
    if(result) return true;
    return false;
}


// Defining the validate function
const validate = () => {
    const usernameVal = username.value.trim();
    const regVal = regno.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    
    // Validating Username
    if (usernameVal === ""){
        setErrorMsg(username, "Username cannot be blank");
    }
    else if (usernameVal.length <= 2) {
        setErrorMsg(username, "Min. 3 characters required");
    }
    else {
        setSuccessMsg(username);
    }

    console.log(regVal);
    //Vaidating regno
    if (regVal === ""){
        setErrorMsg(regno, "Registration Number cannot be blank");
    }
    else if (regVal.length <= 8 || regVal.length >= 10) {
        setErrorMsg(regno, "Only 9 characters required");
    }
    else if (!isRegistration(regVal)) {
        setErrorMsg(regno, "Enter a valid Registration Number ");
    }
    else {
        setSuccessMsg(regno);
    }

    // Validating Email-Id
    if (emailVal === ""){
        setErrorMsg(email, "Email cannot be blank");
    }
    else if (!isEmail(emailVal)) {
        setErrorMsg(email, "Enter a valid Email ");
    }
    else {
        setSuccessMsg(email);
    }

     // Validating Phone Number
    if (phoneVal === ""){
        setErrorMsg(phone, "Phone Number cannot be blank");
    }
    else if (phoneVal.length != 10) {
        setErrorMsg(phone, "10 digits phone number required");
    }
    else if (!isPhone(phoneVal)) {
        setErrorMsg(phone, "Enter a valid Phone Number ");
    }
    else {
        setSuccessMsg(phone);
    }

    // Validating Password
   if (passwordVal === ""){
       setErrorMsg(password, "Password cannot be blank");
   }
   else if (passwordVal.length <= 5) {
       setErrorMsg(password, "Min. 6 characters required");
   }
   else {
       setSuccessMsg(password);
   }

   // Validating Confirm Password

  if (cpasswordVal === ""){
      setErrorMsg(cpassword, "Confirm password cannot be blank");
  }
  else if (passwordVal != cpasswordVal) {
      setErrorMsg(cpassword, "Password does not match");
  }
  else {
      setSuccessMsg(cpassword);
  }

  successMsg(usernameVal);
}

function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form_control error"
    small.innerText = errormsgs;
}

function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form_control success"
}
