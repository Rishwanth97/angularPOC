import { Component } from '@angular/core';

@Component({
  selector: 'weather-app',
  templateUrl: './weather-app.template.html',
})
export class WeatherAppComponent {
  ngOnInit() {
    console.log('OnInit');
  }

  ngOnChanges() {
    console.log('sanju samson');
  }
}
