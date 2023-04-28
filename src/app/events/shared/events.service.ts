import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EventsService {
  constructor(private httpClient: HttpClient) {}

  // https://api.github.com/search/users?q=Q
  events = [
    {
      id: 0,
      name: 'Angular Events',
    },
    {
      id: 1,
      name: 'Angular Events 2',
    },
  ];

  getEvents() {
    let subject = new Subject();
    setTimeout(() => {
      subject.next(this.events);
      subject.complete();
    }, 1000);
    return subject;
  }

  getEventById(id: number) {
    // console.log(this.events[id]);
    return this.events.find((x) => x.id === id);
  }

  addEvent(event: any) {
    this.events.push(event);
  }
}
