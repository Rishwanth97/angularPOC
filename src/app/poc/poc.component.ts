import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { PocService } from './shared/poc.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Page } from 'ngx-pagination/dist/pagination-controls.directive';

@Component({
  selector: 'poc',
  templateUrl: './poc.template.html',
  styles: [
    `
      .pocBody {
        margin: 20px;
      }
      .repo {
        background-color: white;
        color: black;
        border-radius: 8px;
        margin: 10px;
      }
      .repo div {
        margin: 20px;
      }
      p {
        font-weight: bold;
      }
      .repo span {
        font-weight: 400;
        padding-left: 10px;
      }
      .gridDiv {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        height: calc(100vh - 295px);
        overflow-y: auto;
        border-radius: 5px;
        margin-bottom: 10px;
      }
      table {
        background-color: white;
      }
      .select-by {
        border-radius: 5px;
        margin-right: 10px;
        border: 0;
        padding: 10px;
        background-color: white;
        width: 15%;
      }
      .search-bar {
        width: 40%;
        margin-right: 10px;
      }
      .form-div {
        padding-bottom: 3rem;
        display: flex;
      }
      .sort-div {
        position: absolute;
        right: 10px;
        top: 138px;
      }
      .sort-div select {
        border-radius: 5px;
        border: 0;
      }
      .form-div button {
        background-color: #0d6efd;
        margin-left: 10px;
        border-radius: 5px;
        color: white;
        border: 0;
      }
      table {
        width: 100%;
        border-radius: 8px 8px 0px 0px;
        overflow: hidden !important;
      }
      tr {
        cursor: pointer;
      }
      .mat-paginator {
        border-radius: 0px 0px 8px 8px;
      }
      th {
        text-transform: capitalize;
      }
      @media only screen and (max-width: 760px) {
        .gridDiv {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
      }
      @media only screen and (max-width: 550px) {
        .gridDiv {
          display: grid;
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class PocComponent {
  data: any = [];
  dataSourceWithObjectColumn: any = [];
  repo: any = {};
  searchText: string = '';
  p: number = 1;
  searchBy: string = '';
  totalCount: number = 0;
  displayedColumns: string[] = [
    'name',
    'description',
    'owner',
    'created_at',
    'updated_at',
  ];
  pageState = {
    pageSize: 10,
    pageIndex: 0,
  };
  math = Math;

  constructor(private pocService: PocService, private router: Router) {}

  @ViewChild('sort') sort = new MatSort();
  @ViewChild('sortWithObject') sortWithObject = new MatSort();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    console.log(
      this.pocService.searchObject,
      this.pocService.searchObject.searchBy !== '',
      this.pocService.searchObject.searchText !== ''
    );
    if (
      this.pocService.searchObject.searchBy !== '' &&
      this.pocService.searchObject.searchText !== ''
    ) {
      let functionCall;
      if (this.pocService.searchObject.searchBy === 'repository')
        functionCall = this.pocService.getRepositoriesUsingSearchText(
          this.pocService.searchObject.searchText,
          this.pocService.pageObject
        );

      if (this.pocService.searchObject.searchBy === 'language')
        functionCall = this.pocService.getRepositoriesUsingLanguage(
          this.pocService.searchObject.searchText,
          this.pocService.pageObject
        );

      functionCall?.subscribe((data: any) => {
        this.data = data.items.map((x: any) => {
          return {
            name: x.name,
            description: x.description,
            created_at: x.created_at,
            updated_at: x.updated_at,
            owner: x.owner?.login,
          };
        });
        this.dataSourceWithObjectColumn = this.data;

        this.totalCount = data.total_count;
      });
      this.pageState = {
        pageSize: this.pocService.pageObject.pageSize,
        pageIndex: this.pocService.pageObject.pageIndex,
      };
      this.searchBy = this.pocService.searchObject.searchBy;
      this.searchText = this.pocService.searchObject.searchText;
    }
  }

  ngAfterViewInit() {
    this.data.sort = this.sort;
    this.dataSourceWithObjectColumn.sort = this.sortWithObject;
    this.dataSourceWithObjectColumn.paginator = this.paginator;

    this.dataSourceWithObjectColumn.sortingDataAccessor = (
      row: any,
      columnName: string
    ): string => {
      console.log({ row, columnName });
      if (columnName == 'project.name') return row.project.name;
      var columnValue = row[columnName] as string;
      return columnValue;
    };
  }

  searchForRepos(value: any) {
    this.pocService.searchObject.searchBy = '';
    this.pocService.searchObject.searchText = '';
    if (this.searchBy === '') {
      alert('Please select the type to search with');
    } else {
      this.searchText = value;

      let functionCall;
      if (this.searchBy === 'repository')
        functionCall = this.pocService.getRepositoriesUsingSearchText(
          value,
          this.pageState
        );

      if (this.searchBy === 'language')
        functionCall = this.pocService.getRepositoriesUsingLanguage(
          value,
          this.pageState
        );

      functionCall?.subscribe((data: any) => {
        console.log(data);
        this.data = data.items.map((x: any) => {
          return {
            name: x.name,
            description: x.description,
            created_at: x.created_at,
            updated_at: x.updated_at,
            owner: x.owner?.login,
          };
        });
        this.dataSourceWithObjectColumn = this.data;

        this.totalCount = data.total_count;
      });
    }
  }

  repoDetails(repo: any) {
    console.log({ repo }, this.totalCount);
    this.repo = repo;
    this.router.navigate(['repositoryDetails', repo.name, repo.owner.login]);
  }

  sortData(sortState: Sort) {
    console.log({ sortState, data: this.data });
    const result = this.dataSourceWithObjectColumn.slice();
    this.dataSourceWithObjectColumn = result.sort((a: any, b: any) => {
      const isAsc = sortState.direction === 'asc';
      switch (sortState.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'description':
          return compare(a.description, b.description, isAsc);
        case 'owner':
          return compare(a.owner, b.owner, isAsc);
        case 'created_at':
          return compare(a.created_at, b.created_at, isAsc);
        case 'updated_at':
          return compare(a.updated_at, b.updated_at, isAsc);
        default:
          return 0;
      }
    });
  }

  pageChanged(pageState: any) {
    console.log({ pageState }, this.searchBy);
    this.pageState = pageState;
    let functionCall;
    if (this.searchBy === 'repository')
      functionCall = this.pocService.getRepositoriesUsingSearchText(
        this.searchText,
        pageState
      );

    if (this.searchBy === 'language')
      functionCall = this.pocService.getRepositoriesUsingLanguage(
        this.searchText,
        pageState
      );
    if (functionCall)
      functionCall.subscribe((data: any) => {
        this.dataSourceWithObjectColumn = data.items.map((x: any) => {
          return {
            name: x.name,
            description: x.description,
            created_at: x.created_at,
            updated_at: x.updated_at,
            owner: x.owner?.login,
          };
        });
        this.totalCount = data.total_count;
      });
  }
  clickedRows(row: any) {
    console.log({ row });
    this.pocService.searchObject.searchBy = this.searchBy;
    this.pocService.searchObject.searchText = this.searchText;
    this.pocService.pageObject.pageSize = this.pageState.pageSize;
    this.pocService.pageObject.pageIndex = this.pageState.pageIndex;
    this.router.navigate(['poc', 'repoDetails', row.owner, row.name]);
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
