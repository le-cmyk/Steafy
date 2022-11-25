import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EquipeComponent } from './equipe/equipe.component';
const routes: Routes = [
    {path:'home',component :HomeComponent},
    {path:'equipe',component :EquipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }