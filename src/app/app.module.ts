import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './components/binding/binding.component';
import { FormsModule } from '@angular/forms';
import { Ej01Component } from './components/clase01/ej01/ej01.component';
import { BienvenidoComponent } from './components/clase01/bienvenido/bienvenido.component';
import { LoginComponent } from './components/clase01/login/login.component';
import { ErrorComponent } from './components/clase01/error/error.component';

@NgModule({
  declarations: [AppComponent, BindingComponent, Ej01Component, BienvenidoComponent, LoginComponent, ErrorComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
