import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

  public a: any; 

  constructor(
    private httpClient : HttpClient
  ){

    console.log('test');
  }

  ngOnInit(): void {
    console.log("blabla")
    this.getMonitor();
  }

  onRefresh(): void {

    console.log("On refresh")
    this.getMonitor();

  }


  getMonitor(){
    this.httpClient.get<any>('http://localhost:3000/home').subscribe(
      response => {
        console.log(response);
        this.a = response;
    });
  }

}
