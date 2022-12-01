import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public a: any; 

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
        this.a = response;
    });
  }

}
