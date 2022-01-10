import { Component, OnInit } from '@angular/core';
import { EdlSService } from '../services/edl-s.service';
import { Detail } from '../detail';

@Component({
  selector: 'app-edl',
  templateUrl: './edl.component.html',
  styleUrls: ['./edl.component.css']
})
export class EdlComponent implements OnInit {
  details:Detail[];

  constructor(private edlsservice:EdlSService) { }

  ngOnInit(): void {


    this.details=this.edlsservice.onGet();
  }

  onDelete(id:number){
    this.edlsservice.onDelete(id);
  }
}
