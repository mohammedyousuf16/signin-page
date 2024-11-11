"use strict";
// function for user name validations
let user;
let phoneNo;
let emailId;
let pwdCode;
let userB, phoneB, emailB, pwdB;
const pageTitle = document.title;

if (pageTitle === "Register") {
  function validateName(userName) {
    const regexName = /^[A-Za-z\s'-]{1,50}$/;
    if (regexName.test(userName)) {
      user = userName;

      userB = true;
    } else {
      alert("Enter valid user name");
    }
  }
  // Function for phone number validations
  function validatePhone(phone) {
    const regexPhone = /^(\+?[\(\)\d\s-]){10,15}$/;
    if (regexPhone.test(phone)) {
      phoneNo = phone;
      phoneB = true;
    } else {
      alert("please enter valid phone number");
    }
  }
  // Function for email validation
  function validateEmail(email) {
    const regexEmail =
      /^([a-z\d-\.]+)@([a-z\d-]+)\.([a-z]{2,5})(\.[a-z]{2,5})?$/;
    if (regexEmail.test(email)) {
      emailId = email;
      sessionStorage.emailSS = email;
      emailB = true;
    } else {
      alert("invalid email address");
    }
  }
  // Function for password validation
  function validatepwd(pass) {
    let uppercase = false,
      lowercase = false,
      number = false,
      specialCha = false;

    const regexPwd =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*])[A-Za-z\d@#$%^&*]{8,20}$/;

    if (regexPwd.test(pass)) {
      uppercase = true;
      lowercase = true;
      number = true;
      specialCha = true;
    }

    if (!(uppercase && lowercase && number && specialCha)) {
      alert(
        "Password must be 8-20 characters long, include uppercase and lowercase letters, a number, and a special character"
      );
    } else {
      pwdCode = pass;
      sessionStorage.pwdSS = pass;
      pwdB = true;
    }
  }
  const patten = {
    name: /^[A-Za-z\s'-]{1,50}$/,
    phone: /^(\+?[\(\)\d\s-]){10,15}$/,
    email: /^([a-z\d-\.]+)@([a-z\d-]+)\.([a-z]{2,5})(\.[a-z]{2,5})?$/,
    pwd: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*])[A-Za-z\d@#$%^&*]{8,20}$/,
  };
  const inputs = document.querySelectorAll("input");
  function validateOnSpot(field, regex) {
    if (regex.test(field.value)) {
      field.className = "valid";
    } else {
      field.className = "invalid";
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
      validateOnSpot(e.target, patten[e.target.attributes.name.value]);
    });
  });

  document.getElementById("regButton").onclick = function regButton() {
    const name = document.reg.name.value;
    const phone = document.reg.phone.value;
    const email = document.reg.email.value;
    const pwd = document.reg.pwd.value;

    validateName(name);
    if (userB === true) {
      validatePhone(phone);
    }
    if (phoneB === true) {
      validateEmail(email);
    }
    if (emailB === true) {
      validatepwd(pwd);
    }

    if (userB && phoneB && emailB && pwdB) {
      alert("Successfully Registered");
    }
  };
} else if (pageTitle === "Login") {
  document.getElementById("logbtn").onclick = function checkUser() {
    const eml = document.logs.eml.value;
    const pas = document.logs.pas.value;
    const myeml = sessionStorage.getItem("emailSS");
    const mypas = sessionStorage.getItem("pwdSS");

    if (!(eml === myeml)) {
      alert("Wrong email id");
    } else if (!(pas === mypas)) {
      alert("Wrong password");
    } else {
      alert("Login Successful");
    }
  };
}
