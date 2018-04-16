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

  constructor(private _httpService: HttpService){
    
  }
  ngOnInit(){
    //this.onButtonGetTasks()
    this.task = {title: ""}
  }
  //getTasks(){
    //let observable = this._httpService.getTasks()
    //observable.subscribe(data => {
      //console.log("Data Received", data)
      //this.tasks = data['data'];
    //})
  //}
  onButtonGetTasks(): void {
    let observable = this._httpService.getTasks()
    observable.subscribe(data => {
      console.log("Data Received", data)
      this.tasks = data['data'];
  })
  }
  getTask() {
    //let observable = this._httpService.getTask(title:"")
    //observable.subscribe(data => {
      //console.log("Task Received", data)
      //this.task = {title: ""};
      console.log(this.task.title)
      let observable = this._httpService.getTask(this.task.title)
      observable.subscribe(data => {
      console.log("Task Received", data)
      this.gotTask = data['data'];
  })
  }
  

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
