import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  userCoins: any;
  coinValue: any;
  userSell: 0;
  sold: any;
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
    userSelling(){
      if(this.userCoins == 0){
        this.sold = "You have no coins"
        return false
      }
      else if(this.userSell > this.userCoins){
        this.sold = "You don't have enough coins to sell"
        return false
      }
      console.log("GOing to server ts file")
      let observable = this._httpService.sellCoins(this.userSell);
        observable.subscribe(data => {
          console.log("Data Received:", data);
          this.sold = data['data'];
        })
    }

}
