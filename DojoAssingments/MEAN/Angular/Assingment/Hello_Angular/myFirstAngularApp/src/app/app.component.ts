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

  constructor(private _httpService: HttpService){
    
  }
  ngOnInit(){
    this.getTasks()
  }
  getTasks(){
    let observable = this._httpService.getTasks()
    observable.subscribe(data => {
      console.log("Data Received", data)
      this.tasks = data['data'];
    })
  }
}
