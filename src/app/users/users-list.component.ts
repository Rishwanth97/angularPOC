import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.template.html',
  styles: [
    `
      p {
        color: white;
      }
    `,
  ],
})
export class UsersListComponent implements OnInit {
  @Input() names: any;
  @Output() addEvent = new EventEmitter();
  constructor() {
    console.log(this.names, 'names');
  }

  ngOnInit() {
    console.log(this.names, 'oninit');
  }

  save() {
    this.addEvent.emit({
      id: 3,
      name: 'Angular Events 3333',
    });
  }
}
