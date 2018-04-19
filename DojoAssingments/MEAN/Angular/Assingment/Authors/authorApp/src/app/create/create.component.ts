import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
 authorName = {name: ""};
 error = {bad: ""};
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
  }

  addAuthor(){
    console.log(":Create Component:", this.authorName)
    let observable = this._httpService.addAuthor(this.authorName);
      observable.subscribe(data => {
        console.log("Data Received:", data);
        if(data['messagee'] == "Error"){
          this.error.bad = data['data']['message'];
          console.log("Create Component Error:", this.error.bad);
        }
        else{
          this._router.navigate(['/home']);
        }
      })
  }

}
