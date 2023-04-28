import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class GithubRepoService {
  constructor(private httpClient: HttpClient) {}

  getSearchedRepositories(searchText: string) {
    return this.httpClient
      .get('https://api.github.com/search/users?q=Q')
      .pipe(catchError(this.handleError('searchRepos', {})));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
