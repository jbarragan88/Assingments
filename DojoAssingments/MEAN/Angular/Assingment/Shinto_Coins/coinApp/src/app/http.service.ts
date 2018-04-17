import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { 

  }

  //some function to serve
  getAlgorithm(){
    return this._http.get('/api/algorithm');
  }

}
