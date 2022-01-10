import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';



export interface Cars{
  name: string;
  brand: string;
  model: string;
  cost: number
}


const ELEMENT_DATA: Cars[]= [
  {name:'Mustang' ,brand:'Ford' , model:'GT' ,cost:8000000},
  {name:'Range Rover' ,brand:'Land Rover' , model:'Evoque' ,cost:13000000},
  {name:'Swift' ,brand:'Maruthi Suzuki' , model:'ZDI' ,cost:800000},
  {name:'Demon' ,brand:'Dodge' , model:'Hell Cat' ,cost:15000000},
  {name:'Audi Q5' ,brand:'Audi' , model:'AMG' ,cost:5000000},
  {name:'Audi Q7' ,brand:'Audi' , model:'GT' ,cost:900000},
  {name:'BMW X7' ,brand:'BMW' , model:'GT' ,cost:12000000},
  {name:'BMW X8' ,brand:'' , model:'GT' ,cost:14000000},
  
  ]
@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component implements OnInit {

  //deifining columns inside displayed columns variable
  //initialising columns

  displayedColumns: string[]= ['name','brand','model','cost'];

  //INITIALIZING THE DATASOURCE
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
