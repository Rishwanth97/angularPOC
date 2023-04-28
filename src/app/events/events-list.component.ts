import { Component, OnInit } from '@angular/core';
import { EventsService } from './shared/events.service';
import { ActivatedRoute } from '@angular/router';
import { GithubRepoService } from '../gitRepos/shared/githubRepo.service';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.template.html',
  styles: [
    `
      .events-container {
        margin: 15rem;
      }
    `,
  ],
})
export class EventsListComponent implements OnInit {
  events: any = [];
  repos: any = {};
  constructor(
    private eventService: EventsService,
    private route: ActivatedRoute,
    private githubRepoService: GithubRepoService
  ) {}

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
    this.githubRepoService
      .getSearchedRepositories('q')
      .subscribe((data) => (this.repos = data));
    console.log({ data: this.repos });
  }

  handleClickEvent(data: any) {
    console.log('Hi Rishwanth', data);
  }
}
