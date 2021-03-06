import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { 
   //this.getTasks(), this.addTask(), this.deleteTask();
   //this.addTask();
   
  }

  getTasks(){
    //let tempObservable = this._http.get('/tsk');
    //tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('/tsk');
  }
  getTask(title){
    //let tempObservable = this._http.get('/tsk');
    //tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get(`/`+title);
  }
  createTask(task, description){
    //let tempObservable = this._http.get('/tsk');
    //tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get(`/task/`+task+`/`+description);
  }
  deleteTask(id){
    //let tempObservable = this._http.get('/tsk');
    //tempObservable.subscribe(data => console.log("Got our tasks!", data));
    console.log("Service ts id:", id)
    return this._http.get(`/remove/`+id);
  }
  findTask(id){
    //let tempObservable = this._http.get('/tsk');
    //tempObservable.subscribe(data => console.log("Got our tasks!", data));
    console.log("Service ts id:", id)
    return this._http.get(`/find/`+id);
  }
  updateTask(data){
    console.log("Updating data:", data)
    return this._http.get(`/update/`+data._id+`/`+data.title+`/`+data.description);
  }

  //addTask(){
    //let addingObservable = this._http.get('/task/Eaaaaaaat');
    //addingObservable.subscribe(data => console.log("Added task!", data));
  //}

  //deleteTask(){
    //let deletingObservable = this._http.get('/remove/5acce3907a7ee62fac221592');
    //deletingObservable.subscribe(data => console.log("Deleted task!", data));
  //}

}
