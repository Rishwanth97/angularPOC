import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  currentUser: any;
  constructor(private router: Router) {
    this.currentUser = {
      firstName: '',
      lastName: '',
    };
  }
  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'Rishi',
      lastName: 'I',
    };
    this.router.navigate(['user', 'profile']);
  }

  isAuthenticated() {
    console.log('returning', this.currentUser);
    return !!this.currentUser;
  }

  updateUser(firstName: string, lastName: string) {
    console.log('came', firstName, lastName);
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
    console.log(this.currentUser, 'user');
  }
}
