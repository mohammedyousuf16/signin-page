import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css',
})
export class UserLoginComponent {
  signupUsers: any[] = [];

  signupObj: any = {
    userName: '',
    phone: '',
    email: '',
    pwd: '',
  };
  loginObj: any = {
    email: '',
    pwd: '',
  };

  onSignup() {
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUser', JSON.stringify(this.signupUsers));
    this.signupObj = {
      userName: '',
      phone: '',
      email: '',
      pwd: '',
    };
  }
  onLogin() {
    const userExists = this.signupUsers.find(
      (m) => m.email == this.loginObj.email && m.pwd == this.loginObj.pwd
    );
    if (userExists != undefined) {
      alert('login successfull');
    } else {
      alert('wrong email or password');
    }
  }
}
