import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppModule } from './app.module';

@Injectable()
export class HttpService {
userCoins = 0;
coinValue = 8888.39288;
userHistory= [];
  constructor(private _http: HttpClient) { 
    
  }

  //some function to serve
  getAlgorithm(num){
    console.log("Number In service file:", num)
    return this._http.get('/api/algorithm/'+ num);
  }

  moreCoins(num){
    this.userCoins += 1;
    this.userHistory.push({Action: "Mined", Amount: 1, Value: this.coinValue, Id: Math.floor(Math.random()*10000)})
    return this._http.get('/api/algorithm/'+ num);
  }

  getCoins(){
    return this._http.get('/api/number/'+ this.userCoins);
  }

  getValue(){
    return this._http.get('/api/number/'+ this.coinValue);
  }
  getHistory(){
    return this._http.post('/api/history/', this.userHistory);
  }

  buyCoins(bought){
    console.log("User wants to buy", bought, "?")
    var addition = Number(bought);
    this.userCoins += addition;
    this.coinValue = this.coinValue + ((0.02 * addition)* this.coinValue)
    this.userHistory.push({Action: "Bought", Amount: addition, Value: this.coinValue, Id: Math.floor(Math.random()*10000)})
    return this._http.get('/api/buy/'+ bought);
  }

  sellCoins(sold){
    console.log("User wants to sell", sold, "?")
    var subtraction = Number(sold);
    this.userCoins = this.userCoins - subtraction;
    this.coinValue = this.coinValue - ((0.02 * subtraction)* this.coinValue)
    this.userHistory.push({Action: "Sold", Amount: subtraction, Value: this.coinValue, Id: Math.floor(Math.random()*10000})
    return this._http.get('/api/buy/'+ sold);
  }

  getDetail(id){
    console.log("Serice Id:", id);
    return this._http.post('/api/one/'+id, this.userHistory);
  }

}
