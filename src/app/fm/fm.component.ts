import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-fm',
  templateUrl: './fm.component.html',
  styleUrls: ['./fm.component.css']
})
export class FmComponent implements OnInit {
  customer: Customer = new Customer();

  constructor() { }

  ngOnInit(): void {
  }



  onSubmit(){
    console.log(this.customer);
  }

}
