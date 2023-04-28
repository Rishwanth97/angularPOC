import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';
import { EventsService } from '../events/shared/events.service';

@Component({
  selector: 'user-profile',
  templateUrl: './profile.template.html',
  styles: [
    `
      h1 {
        color: white;
      }
    `,
  ],
})
export class ProfileComponent implements OnInit {
  formData: any;
  names: any = ['rishi', 'sia', 'dua lipa', 'taylor'];
  constructor(
    private authService: AuthService,
    private eventsService: EventsService
  ) {}

  ngOnInit() {
    console.log(this.authService.currentUser, 'current');
    let firstName = new FormControl(
      this.authService.currentUser?.firstName
        ? this.authService.currentUser.firstName
        : ''
    );
    let lastName = new FormControl(
      this.authService.currentUser.lastName
        ? this.authService.currentUser.lastName
        : ''
    );
    this.formData = new FormGroup({
      lastName,
      firstName,
    });
  }

  updateUserInfo(values: any) {
    console.log('update', values);
    this.authService.updateUser(values.firstName, values.lastName);
  }

  addNewEvent(event: any) {
    this.eventsService.addEvent(event);
  }
}
