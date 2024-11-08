"use strict";
// function for user name validations
let user;
let phoneNo;
let emailId;
let pwdCode;
let userB, phoneB, emailB, pwdB;
const pageTitle = document.title;

if (pageTitle === "Register") {
  function nameValidate(userName) {
    if (userName.length < 2 || userName.length > 50) {
      alert("invalid Username: atleast 2 characters");
    } else if (userName.length > 1 && userName.length < 50) {
      let userValid = false;
      for (let char of userName) {
        if (
          !(
            char === " " ||
            char === "-" ||
            char === "'" ||
            (char >= "a" && char <= "z") ||
            (char >= "A") & (char <= "Z")
          )
        ) {
          alert(
            "invalid username: username contains number or special characters"
          );
        } else {
          userValid = true;
        }
      }
      if (userValid === true) {
        user = userName;
        console.log(user);
        userB = true;
      }
    }
  }
  // Function for phone number validations
  function phoneValidate(phone) {
    if (phone.length < 10 || phone.length > 15) {
      alert("please enter valid phone number");
    }
    for (let char of phone) {
      if (
        !(
          char === "+" ||
          char === "(" ||
          char === ")" ||
          char === "-" ||
          char === " " ||
          (char >= "0" && char <= "9")
        )
      ) {
        alert("please enter valid phone number");
      } else {
        phoneNo = phone;
        console.log(phoneNo);
        phoneB = true;
      }
    }
  }
  // Function for email validation
  function emailValidate(email) {
    if (email.length > 254) {
      alert("please enter valid email address");
    } else if (
      !email.includes("@") ||
      !(
        email.includes(".com") ||
        email.includes(".org") ||
        email.includes(".in")
      )
    ) {
      alert("invalid email address");
    } else if (email.startsWith(" ") || email.endsWith(" ")) {
      alert("invalid email address");
    } else {
      emailId = email;
      console.log(emailId);
      sessionStorage.emailSS = email;
      emailB = true;
    }
  }
  // Function for password validation
  function pwdValidate(pass) {
    let u = false,
      l = false,
      n = false,
      spe = false;
    const specialChar = "!@#$%&*^";
    if (pass.length < 8 || pass.length > 20) {
      console.log("Password must be 8-20 characters long");
    } else if (pass === user) {
      alert("password should not be same as user name");
    } else if (
      pass === "12345678" ||
      pass === "123123123" ||
      pass === "password" ||
      pass === "12341234" ||
      pass === "00000000" ||
      pass === "qwertyui"
    ) {
      alert("password too week");
    }
    for (let char of pass) {
      if (char >= "A" && char <= "Z") {
        u = true;
      } else if (char >= "a" && char <= "z") {
        l = true;
      } else if (char >= "0" && char <= "9") {
        n = true;
      } else if (specialChar.includes(char)) {
        spe = true;
      }
    }

    if (!(u && l && n && spe)) {
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

    nameValidate(name);
    if (userB === true) {
      phoneValidate(phone);
    }
    if (phoneB === true) {
      emailValidate(email);
    }
    if (emailB === true) {
      pwdValidate(pwd);
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
