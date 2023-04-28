import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PocService } from './shared/poc.service';

@Component({
  selector: 'repo-details',
  templateUrl: './repoDetails.template.html',
  styles: [
    `
      .details-card {
        margin: 20px;
        background: white;
        border-radius: 5px;
        padding: 20px;
      }
      p {
        font-weight: bold;
      }
      .details-card span {
        font-weight: 400;
        padding-left: 10px;
      }
    `,
  ],
})
export class RepoDetailsComponent implements OnInit {
  ownerName: string = '';
  repoName: string = '';
  repoDetails: any = {};
  constructor(private route: ActivatedRoute, private pocService: PocService) {}

  ngOnInit() {
    console.log(this.route.snapshot.params);
    this.ownerName = this.route.snapshot.params[`ownerName`];
    this.repoName = this.route.snapshot.params[`repoName`];
    this.pocService
      .getRepository(this.ownerName, this.repoName)
      .subscribe((data) => {
        this.repoDetails = data;
      });
  }
}
