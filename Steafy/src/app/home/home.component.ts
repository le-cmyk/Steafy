import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
        console.log(response)
        this.home = response;
      }
    );
  }

}
