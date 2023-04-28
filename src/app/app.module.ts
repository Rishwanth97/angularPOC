import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { EventsListThumbnailComponent } from './events/events-list-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';
import { EventsService } from './events/shared/events.service';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { EventDetailsComponent } from './events/events.component';
import { EventResolverService } from './events/shared/events.resolver.component';
import { AuthService } from './users/auth.service';
import { LoginModule } from './users';
import { InnerContentComponent } from './projection/inner-content.component';
import { OuterContentComponent } from './projection/outer-content.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubRepoService } from './gitRepos/shared/githubRepo.service';
import { PocComponent } from './poc/poc.component';
import { PocService } from './poc/shared/poc.service';
import { PocResolver } from './poc/shared/poc.resolver';
import { NgxPaginationModule } from 'ngx-pagination';
import { RepoDetailsComponent } from './poc/repoDetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsListThumbnailComponent,
    WeatherAppComponent,
    HeaderComponent,
    EventDetailsComponent,
    InnerContentComponent,
    OuterContentComponent,
    PocComponent,
    RepoDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    LoginModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [
    EventsService,
    EventResolverService,
    AuthService,
    GithubRepoService,
    PocService,
    PocResolver,
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}
