import { Component } from '@angular/core';

@Component({
  selector: 'outer-content',
  templateUrl: './outer-content.template.html',
  styles: [
    `
      h1,
      h3,
      p,
      hr {
        color: white;
      }
    `,
  ],
})
export class OuterContentComponent {}
