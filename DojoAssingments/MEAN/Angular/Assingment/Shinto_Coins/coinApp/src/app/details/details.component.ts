import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  ledgerDetail: any;
  id: any;
  private sub: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { 
  }

  ngOnInit() {
    this.sub = this._route.params.subscribe(params => {
      this.id = +params['id']
    })
    let observable = this._httpService.getDetail(this.id);
    observable.subscribe(data => {
      console.log("Data Received:", data);
      this.ledgerDetail= [data['data']];
      console.log("Ledger?", this.ledgerDetail)
    })
  }

}
