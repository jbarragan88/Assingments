import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
algorithm: any;
list = ["How Many?", "Count?","What is of ?"];
answer = [8, 63, "fruit"];
correct: any;
userAnswer: any;
result: any;
//userCoins: number;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    let observable = this._httpService.getAlgorithm(this.list.length);
    observable.subscribe(data => {
      console.log("Data Received:", data);
      this.algorithm = this.list[data['data']];
      this.correct = this.answer[data['data']];
    })
  }

  checkAnswer(){
    if(this.userAnswer == this.correct){
      //tell user they were correct
      this.result = "correct";
      //Add a coin to the user
      //this.userCoins++
      //change question and answer
      let observable = this._httpService.moreCoins(this.list.length);
      observable.subscribe(data => {
        console.log("Data Received:", data);
        this.algorithm = this.list[data['data']];
        this.correct = this.answer[data['data']];
      })
    }
    else{
      //tell user they were correct
      this.result = "Wrong";
      let observable = this._httpService.getAlgorithm(this.list.length);
      observable.subscribe(data => {
        console.log("Data Received:", data);
        this.algorithm = this.list[data['data']];
        this.correct = this.answer[data['data']];
      })
    }
  }

}
