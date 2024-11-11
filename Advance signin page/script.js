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
      console.log("bad");
    }
  }
  // Function for phone number validations
  function validatePhone(phone) {
    const regexPhone = /^(\+?[\(\)\d\s-]){10,15}$/;
    if (regexPhone.test(phone)) {
      phoneNo = phone;
      phoneB = true;
    } else {
      console.log("bad");
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
      console.log("bad e");
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
      console.log("good password");
      uppercase = true;
      lowercase = true;
      number = true;
      specialCha = true;
    } else {
      console.log("bad password");
    }

    // const specialChar = "!@#$%&*^";
    // if (pass.length < 8 || pass.length > 20) {
    //   console.log("Password must be 8-20 characters long");
    // } else if (pass.includes(user) && pass.includes(email)) {
    //   alert("password should not be same as user name");
    // } else if (
    //   pass === "12345678" ||
    //   pass === "123123123" ||
    //   pass === "password" ||
    //   pass === "12341234" ||
    //   pass === "00000000" ||
    //   pass === "qwertyui"
    // ) {
    //   alert("password too week");
    // }
    // for (let char of pass) {
    //   if (char >= "A" && char <= "Z") {
    //     uppercase = true;
    //   } else if (char >= "a" && char <= "z") {
    //     lowercase = true;
    //   } else if (char >= "0" && char <= "9") {
    //     number = true;
    //   } else if (specialChar.includes(char)) {
    //     specialCha = true;
    //   }
    // }

    if (!(uppercase && lowercase && number && specialCha)) {
      alert(
        "Password must be 8-20 characters long, include uppercase and lowercase letters, a number, and a special character"
      );
    } else {
      pwdCode = pass;
      console.log(pwdCode);
      sessionStorage.pwdSS = pass;
      pwdB = true;
    }
  }

  document.getElementById("regButton").onclick = function regButton() {
    const name = document.reg.namebox.value;
    const phone = document.reg.phonebox.value;
    const email = document.reg.emailbox.value;
    const pwd = document.reg.pwdbox.value;

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
