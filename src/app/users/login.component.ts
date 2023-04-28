import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: '<login-form>',
  templateUrl: './login.template.html',
  styles: [
    `
      .submit {
        color: green;
        padding: 20px;
      }
      .cancel {
        color: red;
        padding: 20px;
      }
      label {
        color: white;
      }
      .buttons {
        padding: 30px;
      }
      .inputDiv {
        margin-bottom: 20px;
      }
    `,
  ],
})
export class LoginFormComponent implements OnInit {
  userName: any;
  password: any;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userName = 'Rishwanth';
    this.password = 'Hiiii';
  }

  login(formValues: any) {
    console.log({
      username: formValues.userName,
      password: formValues.password,
    });
    this.authService.loginUser(formValues.userName, formValues.password);
  }
}
