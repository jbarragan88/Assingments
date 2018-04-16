import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MEAN';
  tasks = [];
  task : any;
  gotTask = [];
  updateTask : any;

  constructor(private _httpService: HttpService){
    
  }
  ngOnInit(){
    //this.onButtonGetTasks()
    this.task = {title: "", description: ""}
  }
  //getTasks(){
    //let observable = this._httpService.getTasks()
    //observable.subscribe(data => {
      //console.log("Data Received", data)
      //this.tasks = data['data'];
    //})
  //}
  onButtonGetTasks(): void {
    console.log("anythimg")
    let observable = this._httpService.getTasks()
    observable.subscribe(data => {
      console.log("Data Received", data)
      this.tasks = data['data'];
  })
  }

  getTask() {
      console.log(this.task.title)
      let observable = this._httpService.getTask(this.task.title)
      observable.subscribe(data => {
      console.log("Task Received", data)
      this.gotTask = data['data']
  })
  }

  createTask() {
      console.log(this.task.title)
      let observable = this._httpService.createTask(this.task.title, this.updateTask)
      observable.subscribe(data => {
      console.log("Task Created", data)
      this.tasks = data['data'];
  })
  }
  updatingTask() {
      console.log(this.task.title)
      let observable = this._httpService.updateTask(this.updateTask)
      observable.subscribe(data => {
      console.log("Task Created", data)
      this.tasks = data['data'];
  })
  }
  onButtonBeginUpdateTask(id){
    console.log(`Click event is working and id is: ${id}`)
    let observable = this._httpService.findTask(id)
    observable.subscribe(data => {
      console.log("A Task", data)
      this.updateTask = data['data']
  })
  }
  onButtonDeleteTask(id){
    console.log(`Click event is working and id is: ${id}`)
    let observable = this._httpService.deleteTask(id)
    observable.subscribe(data => {
      console.log("Task Created", data)
  })
  }
//
//
//
  onButtonClick(): void {
    console.log(`Click event is working`);
  }
  onButtonClickParam(num: Number): void { 
    console.log(`Click event is working with num param: ${num}`);
  }
  onButtonClickParams(num: Number, str: String): void { 
      console.log(`Click event is working with num param: ${num} and str param: ${str}`);
  }
  onButtonClickEvent(event: any): void { 
      console.log(`Click event is working with event: `, event);
  }
}
