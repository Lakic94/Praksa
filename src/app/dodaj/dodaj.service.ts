import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cisterna } from '../model/cisterna.model';

@Injectable({
  providedIn: 'root'
})
export class DodajService {

  constructor(private http:HttpClient) { }

  postCisterna(data:Cisterna): Observable<Cisterna>{
    return this.http.post<Cisterna>('http://localhost:8585/api/cisterna',data);
  }
}
