import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';
import { EventDetailsComponent } from './events/events.component';
import { EventResolverService } from './events/shared/events.resolver.component';
import { OuterContentComponent } from './projection/outer-content.component';
import { InnerContentComponent } from './projection/inner-content.component';
import { PocComponent } from './poc/poc.component';
import { PocResolver } from './poc/shared/poc.resolver';
import { RepoDetailsComponent } from './poc/repoDetails.component';

export const appRoutes: Routes = [
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventResolverService },
  },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: 'weather', component: WeatherAppComponent },
  { path: 'test', component: OuterContentComponent },
  {
    path: 'user',
    loadChildren: () =>
      import('./users/login.module').then((m) => m.LoginModule),
  },
  { path: '', redirectTo: '/weather', pathMatch: 'full' },
  {
    path: 'poc',
    component: PocComponent,
    // resolve: { repos: PocResolver },
  },
  {
    path: 'poc/repoDetails/:ownerName/:repoName',
    component: RepoDetailsComponent,
  },
];
