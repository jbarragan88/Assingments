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
  product = {title: "", price: 0, image: ""};
  error = {title: "", price: ""};
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
  }

  addProduct(){
    let observable = this._httpService.addProduct(this.product);
    observable.subscribe(data => {
      console.log("Create Component Data Received When Creating Product:", data);
      if(data['message'] == "Error"){
        this.error = {title: "", price: ""};
        if(data['price'] == "Invalid"){
          this.error.price = "Price Required"
        }
        this.error.title = data['data']['errors']['title']['message'];
        console.log("Create Componenet Error Creating:", data)
      }
      else{
        this._router.navigate(['/home']);
      }
    })
  }

}
