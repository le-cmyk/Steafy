import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-score-moniteur',
  templateUrl: './score-moniteur.component.html',
  styleUrls: ['./score-moniteur.component.css']
})
export class ScoreMoniteurComponent implements OnInit {
  Idmoniteur: string = "";
  Score: string = "";
  a: string;
  public tags: any;
  public Moniteur: any; 
  title = 'Changement Scores';
   angForm: FormGroup;
  constructor(
    public httpClient : HttpClient,
    public fb: FormBuilder
  ){this.createForm();}

  ngOnInit(): void {
    this.getMonitor();
  }

  getMonitor(){
    this.httpClient.get<any>('http://localhost:3000/home').subscribe(
      response => {
        this.Moniteur = response;
        
        console.log(this.Moniteur)
      }
    );
  }

  createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       address: ['', Validators.required ],
    });
  }
  clickme() {

    var count = Object.keys(this.Moniteur).length;
    this.Idmoniteur=this.angForm.get('name')?.value;
    this.Score=this.angForm.get('address')?.value;
    console.log(this.Idmoniteur)
    console.log(this.Score)

    for (let i = 0; i < count; i++) {
      
      if(Number(this.Idmoniteur) == Number(this.Moniteur[i].IdMoniteur))
      {
        console.log(this.Moniteur[i].idMoniteur)
        console.log("Moniteur existe dans la DB")
      }
      else
      {
        console.log(this.Moniteur[i].idMoniteur)
        console.log("ERROR : Moniteur n'existe pas ")
      }
    }
  }

}
