import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weather: any;
  city = "Burbank";
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
      console.log("San Jose's Data:", data)
      this.weather = data['city'];
      this.temp = this.fahrenheit(data['list'][0]['main']['temp']);
      this.tempHigh = this.fahrenheit(data['list'][0]['main']['temp_max']);
      this.tempLow = this.fahrenheit(data['list'][0]['main']['temp_min']);
      this.status = (data['list'][0]['weather'][0]['description']);
      console.log(this.weather)
      return this.weather;
    })
  }
  fahrenheit(temp){
    return Math.floor((9/5)*(temp - 273) + 32)
  }

}
