import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  weather: any;
  city = "Seattle"
  temp: any;
  tempHigh: any;
  tempLow: any;
  status: any;
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
      this.temp = (data['list'][0]['main']['temp']);
      this.tempHigh = (data['list'][0]['main']['temp_max']);
      this.tempLow = (data['list'][0]['main']['temp_min']);
      this.status = (data['list'][0]['weather'][0]['description']);
      console.log(this.weather)
      return this.weather;
    })
  }
}
