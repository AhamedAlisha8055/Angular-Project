import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICar } from '../car';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  private url: string = "/assets/data/cars.json";

  constructor(private http:HttpClient) { }

  getCars():Observable<ICar[]>{
    return this.http.get<ICar[]>(this.url);
  }
}
