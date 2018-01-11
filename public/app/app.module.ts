import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule }  from './app.routing';
import {AppComponent} from  './app.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, ReactiveFormsModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap:    [ AppComponent]
})

export class AppModule { }