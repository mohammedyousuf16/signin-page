"use strict";
// function for user name validations
let user;
// let userUnique = new Set(user);

function nameValidate(userName) {
  if (userName.length <= 1 || userName.length > 50) {
    console.log("invalid Username");
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
        console.log(
          "invalid username: username contains number or special characters"
        );
      } else {
        userValid = true;
      }
    }
    if (userValid === true) {
      user = userName;
    }
  }
}
// nameValidate("pa8222");
nameValidate("aladinbaba");
// Function for phone number validations
function phoneValidate(phone) {
  if (phone.length < 10 || phone.length > 15) {
    console.log("please enter valid phone number");
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
      console.log("please enter valid phone number");
    }
  }
}
// phoneVlaidate("123-456-7890");
// Function for email validation
function emailValidate(email) {
  if (email.length > 254) {
    console.log("please enter valid email address");
  } else if (
    !email.includes("@") ||
    !(email.includes(".com") || email.includes(".org") || email.includes(".in"))
  ) {
    console.log("invalid email address");
  } else if (email.startsWith(" ") || email.endsWith(" ")) {
    console.log("invalid email address");
  }
}
// emailVlaidate("you@.com");

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
    console.log("password should not be same as user name");
  } else if (
    pass === "12345678" ||
    pass === "123123123" ||
    pass === "password" ||
    pass === "12341234" ||
    pass === "00000000" ||
    pass === "qwertyui"
  ) {
    console.log("password too week");
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
    console.log(
      "Password must be 8-20 characters long, include uppercase and lowercase letters, a number, and a special character"
    );
  } else {
    console.log("password accepted");
  }
}
// pwdValidate("Aaladin@123");
