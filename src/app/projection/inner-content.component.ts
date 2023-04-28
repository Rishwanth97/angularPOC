import { Component } from '@angular/core';
@Component({
  selector: 'inner-content',
  templateUrl: './inner-content.template.html',
  styles: [
    `
      h1,
      h3 {
        color: white;
      }
      p,
      hr {
        color: white;
      }
    `,
  ],
})
export class InnerContentComponent {}
