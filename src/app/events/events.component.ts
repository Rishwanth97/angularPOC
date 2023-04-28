import { Component } from '@angular/core';
import { EventsService } from './shared/events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'event-details',
  template: `
    <div>
      <h1>{{ event.name }}</h1>
    </div>
  `,
  styles: [
    `
      h1 {
        color: white;
      }
    `,
  ],
})
export class EventDetailsComponent {
  event: any;
  constructor(
    private eventService: EventsService,
    private route: ActivatedRoute
  ) {
    this.event = this.eventService.getEventById(
      +this.route.snapshot.params['id']
    );
  }
}
