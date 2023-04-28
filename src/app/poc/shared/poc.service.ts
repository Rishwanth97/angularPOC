import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PocService {
  searchObject: any;
  pageObject: any;
  constructor(private httpClient: HttpClient) {
    this.searchObject = {
      searchText: '',
      searchBy: '',
    };
    this.pageObject = {
      pageSize: 10,
      pageIndex: 0,
    };
  }

  getRepositoriesUsingSearchText(searchText: string, pageState: IPageState) {
    return this.httpClient.get(
      `https://api.github.com/search/repositories?q=${searchText}&per_page=${
        pageState.pageSize
      }&page=${pageState.pageIndex + 1}`
    );
  }

  getUsersUsingSearchText(searchText: string, pageState: IPageState) {
    return this.httpClient.get(
      `https://api.github.com/search/users?q=${searchText}&per_page=${
        pageState.pageSize
      }&page=${pageState.pageIndex + 1}`
    );
  }

  getRepositoriesUsingLanguage(searchText: string, pageState: IPageState) {
    return this.httpClient.get(
      `https://api.github.com/search/repositories?q=language:${searchText}&per_page=${
        pageState.pageSize
      }&page=${pageState.pageIndex + 1}`
    );
  }

  getRepository(ownerName: string, repoName: string) {
    return this.httpClient.get(
      `https://api.github.com/repos/${ownerName}/${repoName}`
    );
  }
}

export interface IPageState {
  length?: number;
  pageIndex: number;

  pageSize?: number;

  previousPageIndex?: number;
}
