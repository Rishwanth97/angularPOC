import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { PocService } from './poc.service';

@Injectable()
export class PocResolver implements Resolve<any> {
  constructor(private pocService: PocService) {}
  resolve() {
    // in resolvers you dont have to subscribe observables
    // return this.pocService.getRepositoriesUsingSearchText('');
  }
}
