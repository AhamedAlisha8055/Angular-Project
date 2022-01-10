import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EdlSService } from 'src/app/services/edl-s.service';
import { Detail } from 'src/app/detail';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  header : string;


  detail:Detail= {
    id:0,
    nationality:'',
    profession:'',
    salary:0
  };




  constructor(private router:Router,private route: ActivatedRoute,private edlsservice:EdlSService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.header = this.id === 0? 'Add Details': 'Edit Details';

    if(this.id !=0){
      this.detail= this.edlsservice.onGetDetail(this.id);
    }
  }

  onSubmit(form : NgForm){

    let detail: Detail = {
      id:Number(form.value.id),
      nationality:form.value.nationality,
      profession:form.value.profession,
      salary:form.value.salary,
    }

    if(this.id === 0){
    this.edlsservice.onAdd(detail);
    }
    else{
      this.edlsservice.onUpdate(detail);

    }


    this.router.navigateByUrl('/edl');




  }

}
