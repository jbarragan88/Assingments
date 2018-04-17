import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css'],
  providers: [ AppComponent ]
})
export class AlphaComponent implements OnInit {
  weather: any;
  city = "London"
  //title = 'app';
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    let observable = this._httpService.getWeather(this.city)
    observable.subscribe(data => {
      console.log("Data Received", data)
      this.weather = data['city'];
      console.log(this.weather)
      return this.weather;
  })
  }
  goHome() {
    this._router.navigate(['/home']);
  }

}
