import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `<header-app></header-app>
    <div class="body-content"><router-outlet></router-outlet></div>`,
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
