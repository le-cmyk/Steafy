import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EquipeComponent } from './equipe/equipe.component';

const routes: Routes = [
  {path:'home',component :AppComponent},
];

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
/* . . . */
    ])],
  declarations: [ AppComponent, EquipeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
