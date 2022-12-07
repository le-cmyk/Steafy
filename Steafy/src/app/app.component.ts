import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  public home: any; 

  constructor(
    private httpClient : HttpClient
  ){}

  ngOnInit(): void {
    this.getMonitor();
  }

  getMonitor(){
    this.httpClient.get<any>('http://localhost:3000/home').subscribe(
      response => {
        console.log(response);
        this.home = response;
        
      }
    );
  }


}
