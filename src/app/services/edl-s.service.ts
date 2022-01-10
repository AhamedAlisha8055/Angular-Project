import { Injectable } from '@angular/core';
import { Detail } from '../detail';

@Injectable({
  providedIn: 'root'
})
export class EdlSService {

  details : Detail[] = [
    {
      id: 1,
      nationality: "India",
      profession: "Doctor",
      salary:900000
    },
    {
      id: 2,
      nationality: "Indonesia",
      profession: "Doctor",
      salary:100000
    }

  ];
  constructor() { }


  onGet(){
    return this.details;
  }
  onGetDetail(id: number){
    return this.details.find(x=>x.id === id)

  }

  onAdd(detail:Detail){
    this.details.push(detail);
  }
  onDelete(id:number){
    let detail=this.details.find(x=>x.id === id);
    let index=this.details.indexOf(detail,0);
    this.details.splice(index,1);
  }

  onUpdate(detail:Detail){
    let oldDetail=this.details.find(x=>x.id === detail.id);
    oldDetail.nationality = detail.nationality;
    oldDetail.profession = detail.profession;
    oldDetail.salary = detail.salary;
  }
}
