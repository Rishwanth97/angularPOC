import { Component } from '@angular/core';
import { AuthService } from 'src/app/users/auth.service';

@Component({
  selector: 'header-app',
  templateUrl: './header.template.html',
  styles: [
    `
      a {
        color: #063984;
        margin: 20px 30px 0px 0px;
      }
      nav {
        padding: 23px;
      }
      h1 {
        color: white;
      }
    `,
  ],
})
export class HeaderComponent {
  constructor(public authService: AuthService) {}
}
