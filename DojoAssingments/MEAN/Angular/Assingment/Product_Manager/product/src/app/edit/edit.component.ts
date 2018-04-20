import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product= {title: "", price: 0, image: "", id: 0};
  id: any;
  error: any;
  private sub: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe(params =>{
      this.id = params['id'];
      console.log("component parameter id:", this.id);
    })

    let observable =  this._httpService.getProduct(this.id);
    observable.subscribe(data => {
      console.log("Edit Componenent Data That was received from server", data['data'])
      this.product.title = data['data']['title'];
      this.product.price = data['data']['price'];
      this.product.image = data['data']['image'];
      this.product.id = data['data']['_id'];
    })
  }

  editProduct(){
    let observable =  this._httpService.editProduct(this.product);
    observable.subscribe(data => {
      console.log("Edit Componenent Data That was received from server", data['data'])
      if(data['message'] == "Error"){
        this.error = {title: "", price: ""};
        if(data['price'] == "Invalid"){
          this.error.price = "Price Required"
        }
        this.error.title = data['data']['errors']['title']['message'];
        console.log("Edit Componenet Error Creating:", data)
      }
      else{
        this._router.navigate(['/home']);
      }
    })
  }


}
