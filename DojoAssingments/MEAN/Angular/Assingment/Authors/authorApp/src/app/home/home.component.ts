import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Authors: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    let observable =  this._httpService.getAuthors();
    observable.subscribe(data => {
      console.log("Home Componenent Data That was received from server", data['data'])
      this.Authors = data['data'];
    })
  }
  authorDelete(id){
    console.log("Clicked")
    let observable =  this._httpService.deleteAuthor(id);
    observable.subscribe(data => {
      console.log("Deleted?", data['message'])
      if(data['message'] == "Success"){
        console.log("in???")
        let observablee =  this._httpService.getAuthors();
        observablee.subscribe(data => {
          console.log("Home Componenent Data That was received from server", data['data'])
          this.Authors = data['data'];
        })
      }
    })
  }

}
