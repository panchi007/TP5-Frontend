import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //   para el ngmodel [()]
import { HttpClientModule } from '@angular/common/http'; //  petciones http

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavvarComponent } from './components/navvar/navvar.component';
import { Punto3Component } from './components/punto3/punto3.component';
import { Punto3FormComponent } from './components/punto3-form/punto3-form.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto1FormComponent } from './components/punto1-form/punto1-form.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { Punto2FormComponent } from './components/punto2-form/punto2-form.component';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';

@NgModule({
  declarations: [
    AppComponent,
    NavvarComponent,
    Punto3Component,
    Punto3FormComponent,
    Punto1Component,
    Punto1FormComponent,
    Punto2Component,
    Punto2FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AlifeFileToBase64Module

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
