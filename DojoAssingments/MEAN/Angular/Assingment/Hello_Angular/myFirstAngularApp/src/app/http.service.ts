import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { 
   this.getTasks(), this.addTask(), this.deleteTask();
   
  }

  getTasks(){
    let tempObservable = this._http.get('/tsk');
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }

  addTask(){
    let addingObservable = this._http.get('/task/SchoolShopping');
    addingObservable.subscribe(data => console.log("Added task!", data));
  }

  deleteTask(){
    let deletingObservable = this._http.get('/remove/5acce3907a7ee62fac221592');
    deletingObservable.subscribe(data => console.log("Deleted task!", data));
  }

}
