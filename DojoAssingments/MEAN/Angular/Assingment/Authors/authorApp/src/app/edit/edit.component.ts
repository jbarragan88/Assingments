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
  authorName = {name: "", id: 0};
  error: any;
  id: any;
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

    let observable =  this._httpService.getAuthor(this.id);
    observable.subscribe(data => {
      console.log("Home Componenent Data That was received from server", data['data'])
      this.authorName.name = data['data']['Name'];
      this.authorName.id = data['data']['_id'];
    })
  }

  editAuthor(){
    let observable =  this._httpService.editAuthor(this.authorName);
    observable.subscribe(data => {
      console.log("Home Componenent Data That was received from server", data)
      if(data['messagee'] == "Error"){
        this.error = "Author Name Must Be More Than 3 Characters Long";
        console.log("Create Component Error:", this.error);
      }
      else{
        this._router.navigate(['/home']);
      }
    })
  }

}
