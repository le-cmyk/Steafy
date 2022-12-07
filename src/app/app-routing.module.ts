import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EquipeComponent } from './equipe/equipe.component';
import { ConnectionComponent } from './connection/connection.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ScoreMoniteurComponent } from './score-moniteur/score-moniteur.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { ClientComponent } from './client/client.component';


const routes: Routes = [
    {path:'home',component :HomeComponent},
    {path:'equipe',component :EquipeComponent},
    {path:'Connection',component :ConnectionComponent},
    {path: 'RegistrationForm',component:RegistrationFormComponent},
    {path: 'Score_moniteur',component:ScoreMoniteurComponent},
    {path: 'Calendrier',component:CalendrierComponent},
    {path: 'Client',component:ClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }