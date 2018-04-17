import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';
import { GammaComponent } from './gamma/gamma.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { WashingtonComponent } from './washington/washington.component';
import { ChicagoComponent } from './chicago/chicago.component';
//import { ComponentNameComponent, ComponentNameComponent } from './componentname/componentname.component';
//import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent, AlphaComponent, BetaComponent, GammaComponent, PageNotFoundComponent, BurbankComponent, DallasComponent, WashingtonComponent, ChicagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
