import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})


export class ClientComponent implements OnInit {

  
  date: Date;
  idclient: string;
  email: string;
  telephone: string;
  name: string;
  prenom: string;
  irdv: string;
  prix: Number;
  hrdv: null;
  public tags: any;
  public Moniteur: any; 
  public Client:any;
  public rdv:any;
  public maxmoniteur:any;
  
  title = 'Choisissez votre jour d activite';
   angForm: FormGroup;
  constructor(
    public httpClient : HttpClient,
    public fb: FormBuilder
  ){this.createForm();}

  ngOnInit(): void {
    this.getMonitor();
    this.getClient();
    this.getrdv();
  }
  getMonitor(){
    this.httpClient.get<any>('http://localhost:3000/home').subscribe(
      response => {
        this.Moniteur = response;
        console.log(this.Moniteur)
      }
    );
  }

  getrdv(){
    this.httpClient.get<any>('http://localhost:3000/home/rdv').subscribe(
      response => {
        this.rdv = response;
        console.log(this.rdv)
      }
    );
  }

  getClient(){
    this.httpClient.get<any>('http://localhost:3000/home/client').subscribe(
      response => {
        this.Client = response;
        console.log(this.Client)
      }
    );
  }

  
  createForm() {
    this.angForm = this.fb.group({
       jourrdv: ['', Validators.required ],
       name: ['', Validators.required ],
       prenom: ['', Validators.required ],
       telephone: ['', Validators.required ],
       email: [''],
    });
  }
  clickme() {
    
    
    this.date=this.angForm.get('jourrdv')?.value;
    this.name=this.angForm.get('name')?.value;
    this.prenom=this.angForm.get('prenom')?.value;
    this.telephone=this.angForm.get('telephone')?.value;
    this.email=this.angForm.get('email')?.value;

    var clientangular = {
      idclient : this.idclient,
      name: this.name,
      prenom: this.prenom,
      telephone: this.telephone,
      email: this.email
    };
    
    var count = Object.keys(this.Client).length;
    var id = parseInt(this.Client[count-1].idClient)
    id = id +1
    clientangular.idclient = String(id);
    var countM = Object.keys(this.Moniteur).length;

    this.httpClient.post<any>('http://localhost:3000/home/client/client.json', clientangular).subscribe(
          response => {
            
          }
        );
    
    var count = Object.keys(this.Moniteur).length;
    
    this.maxmoniteur = this.Moniteur[0]
    for (let i = 0; i < count-1; i++) {
      if(this.maxmoniteur.Score < this.Moniteur[i+1].Score)
      {
        this.maxmoniteur = this.Moniteur[i+1]
      }
    }
    this.hrdv = null
    this.prix = 45;
    var count = Object.keys(this.rdv).length;
    count= count+1;
    this.irdv = String(count+1);  
    var rdv = {
      idrdv : this.irdv,
      IdMoniteur: this.maxmoniteur.idMoniteur,
      IdClient: id,
      DateRdv: this.date,
      hrdv: this.hrdv,
      prix: this.prix
    };
    rdv.prix = 45;
    console.log(rdv);
    console.log(rdv.DateRdv);
    console.log(rdv.IdClient);
    this.httpClient.post<any>('http://localhost:3000/home/rdv/rdv.json', rdv).subscribe(
          response => {
          }
        );


  }

}
