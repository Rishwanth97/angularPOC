import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'events-list-thumbnail',
  template: `<div>
    <h1>{{ event.name | uppercase }}</h1>
    <div><button (click)="handleClick()">Click me</button></div>
  </div>`,
  styles: [
    `
      button {
        padding: 20px;
      }
      h1 {
        color: aliceblue;
      }
    `,
  ],
})
export class EventsListThumbnailComponent {
  @Input() event: any;
  @Output() eventClick = new EventEmitter();
  constructor(private router: Router) {}
  handleClick() {
    // this.eventClick.emit(this.event.name);
    this.router.navigate(['events', `${this.event.id}`]);
  }
}
