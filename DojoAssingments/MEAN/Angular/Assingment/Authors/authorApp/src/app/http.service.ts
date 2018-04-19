import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppModule } from './app.module';
@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) { }

  addAuthor(author){
    console.log("Service add Author", author);
    console.log("the type", typeof author);
    return this._http.post('/api/add', author);
  }
}
