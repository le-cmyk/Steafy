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
<<<<<<< HEAD
    
=======
>>>>>>> 2fec1193daf07754fcddf4d8a724aa6a5ca0488c
    private httpClient : HttpClient
  ){}

  ngOnInit(): void {
    this.getMonitor();
<<<<<<< HEAD
=======
  }

  getMonitor(){
    this.httpClient.get<any>('http://localhost:3000/home').subscribe(
      response => {
        console.log(response)
        this.home = response;
      }
    );
>>>>>>> 2fec1193daf07754fcddf4d8a724aa6a5ca0488c
  }

  getMonitor(){
    this.httpClient.get<any>('http://localhost:3000/home').subscribe(
      response => {
        
        this.home = response;
      }
    );
  }
}
