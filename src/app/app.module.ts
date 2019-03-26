import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { Routing } from './app.routes';

import { DataService } from './api/data.service';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MainDetailsComponent } from './main-details/main-details.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainDetailsComponent
  ],
  imports: [
    Routing,
    HttpClientModule,
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
