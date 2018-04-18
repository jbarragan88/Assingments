import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
 userCoins: any;
 coinValue: any;
 userBuy = 0;
 bought: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    let observable = this._httpService.getCoins();
    observable.subscribe(data => {
      console.log("Data Received:", data);
      this.userCoins= [data['data']];
    })
    let observablee = this._httpService.getValue();
    observablee.subscribe(data => {
      console.log("Data Received:", data);
      this.coinValue= [data['data']];
    })
  }

  userBuying(){
    console.log("GOing to server ts file")
    let observable = this._httpService.buyCoins(this.userBuy);
      observable.subscribe(data => {
        console.log("Data Received:", data);
        this.bought = data['data'];
      })
  }

}
