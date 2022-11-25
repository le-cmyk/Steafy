import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EquipeComponent } from './equipe/equipe.component';
import { HomeComponent } from './home/home.component';
import { ConnectionComponent } from './connection/connection.component';


@NgModule({
  declarations: [
    AppComponent,
    EquipeComponent,
    HomeComponent,
    ConnectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 