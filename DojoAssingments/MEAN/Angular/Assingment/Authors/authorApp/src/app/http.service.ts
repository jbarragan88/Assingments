import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppModule } from './app.module';
@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) { }

  addAuthor(author){
    console.log("Service add Author", author);
    return this._http.post('/api/add', author);
  }
  getAuthors(){
    console.log("Sevice Looking For Authors");
    return this._http.get('/api/findAll');
  }
  deleteAuthor(id){
    console.log("Server Delete Author:", id);
    return this._http.get('/api/delete/'+ id);
  }
  getAuthor(id){
    console.log("Sevice Looking For Authors", id);
    return this._http.get('/api/find/'+id);
  }
  editAuthor(info){
    console.log("Service New Author name", info);
    var id = info.id;
    return this._http.post('/api/edit/'+id, info);
  }
}
