import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-score-moniteur',
  templateUrl: './score-moniteur.component.html',
  styleUrls: ['./score-moniteur.component.css']
})
export class ScoreMoniteurComponent implements OnInit {

  public tags: any;
  public home: any; 
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
        console.log()
        this.home = response;
       
      }
    );
  }

  createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       address: ['', Validators.required ],
    });
  }

}
