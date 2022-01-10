import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../config/http-client.service';

@Component({
  selector: 'app-samfrservice',
  templateUrl: './samfrservice.component.html',
  styleUrls: ['./samfrservice.component.css']
})
export class SamfrserviceComponent implements OnInit {

  public cars =[];

  constructor(private httpclientService:HttpClientService) { }

  ngOnInit(): void {
    this.httpclientService.getCars().subscribe(data => this.cars = data);
   // this.httpclientService.getCars().subscribe(data => {this.cars = data;console.log(data)});
    
  }

}
