import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { 
    //this.getWeather();
  }

  getWeather(city){
    //let weather = this._http.get('http://api.openweathermap.org/data/2.5/forecast?q=London&APPID=3e57c321fef500b3f917f3dd2918825f');
    //weather.subscribe(data => console.log("Data!", data));
    return this._http.get('http://api.openweathermap.org/data/2.5/forecast?q='+city+'&units=metric&APPID=3e57c321fef500b3f917f3dd2918825f');
  }
}
