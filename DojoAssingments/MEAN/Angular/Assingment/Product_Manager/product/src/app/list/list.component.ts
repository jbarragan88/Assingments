import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products = [];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    let observable =  this._httpService.getProducts();
    observable.subscribe(data => {
      console.log("List Componenent Data That was received from server", data['data'])
      this.products = data['data'];
    })
  }

  productDelete(id){
    let observable = this._httpService.deleteProduct(id);
    observable.subscribe(data => {
      console.log("Deleted?", data['message'])
      this.products = data['data'];
      if(data['message'] == "Success"){
        console.log("in???")
        let observablee =  this._httpService.getProducts();
        observablee.subscribe(data => {
          console.log("Home Componenent Data That was received from server", data['data'])
          this.products = data['data'];
        })
      }
    })
  }

}
