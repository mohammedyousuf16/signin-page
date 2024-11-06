"use strict";

let users = [];

document.getElementById("regButton").onclick = function register() {
  const name = document.reg.namebox.value;
  const phone = document.reg.phonebox.value;
  const email = document.reg.emailbox.value;
  const passwd = document.reg.pwdbox.value;
  const at = email.indexOf("@");
  if (name === null || name === "") {
    alert("please enter your name");
  } else if (isNaN(phone)) {
    alert("enter number");
  } else if (phone.length < 10 || phone.length > 10) {
    alert("please enter 10 digit number");
  } else if (at < 1) {
    alert("please enter valid email");
  } else if (passwd.length < 6) {
    alert("password should be atleat 6 charecters");
  } else {
    alert("registration Successfull");
    users.push(name, email, phone, passwd);
  }
};

document.getElementById("logbtn").onclick = function () {
  const email = document.logs.eml.value;
  const pas = document.logs.pas.value;
  const emailCheck = users.find((element) => element === email);
  const pasChecker = users.find((element) => element === pas);
  if (emailCheck !== undefined) {
    console.log("email is there");
  } else {
    alert("Wrong email address");
  }

  if (pasChecker !== undefined) {
    console.log("password correct");
  } else {
    alert("wrong password");
  }
};
