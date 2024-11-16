import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css',
})
// let phoneNo: number;
export class UserLoginComponent {
  userNamez: string = '';
  phoneNo: any;
  email: string = '';
  pwd: any;
  leml: any;
  lpwd: any;
  onSignup() {
    validateName(this.userNamez);
    validatePhone(this.phoneNo);
    validateEmail(this.email);
    validatepwd(this.pwd);

    function validateName(userName: any) {
      const regexName = /^[A-Za-z\s'-]{3,50}$/;
      if (regexName.test(userName)) {
        localStorage.setItem('use', userName);
      } else {
        alert('Enter valid user name');
      }
    }
    function validatePhone(phone: any) {
      const regexPhone = /^(\+?[\(\)\d\s-]){10,15}$/;
      if (regexPhone.test(phone)) {
        localStorage.setItem('pho', phone);
      } else {
        alert('please enter valid phone number');
      }
    }
    function validateEmail(email: any) {
      const regexEmail =
        /^([a-z\d-\.]+)@([a-z\d-]+)\.([a-z]{2,5})(\.[a-z]{2,5})?$/;
      if (regexEmail.test(email)) {
        localStorage.setItem('ema', email);
      } else {
        alert('invalid email address');
      }
    }
    function validatepwd(pass: any) {
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
          'Password must be 8-20 characters long, include uppercase and lowercase letters, a number, and a special character'
        );
      } else {
        localStorage.setItem('pwd', pass);
      }
    }
  }
  onLogin() {
    if (
      this.leml === localStorage.getItem('ema') &&
      this.lpwd === localStorage.getItem('pwd')
    ) {
      alert('logged in');
    } else if (this.leml != localStorage.getItem('ema')) {
      alert('wrong email');
    } else if (this.lpwd != localStorage.getItem('pwd')) {
      alert('wrong password');
    }
  }
}
