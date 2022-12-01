import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EquipeComponent } from './equipe/equipe.component';
import { ConnectionComponent } from './connection/connection.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
const routes: Routes = [
    {path:'home',component :HomeComponent},
    {path:'equipe',component :EquipeComponent},
    {path:'Connection',component :ConnectionComponent},
    {path: 'RegistrationForm',component:RegistrationFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }