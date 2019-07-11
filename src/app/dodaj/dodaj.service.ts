import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cisterna } from '../model/cisterna.model';
import { Gradski } from '../model/gradski.model';

@Injectable({
  providedIn: 'root'
})
export class DodajService {

  constructor(private http:HttpClient) { }

  postCisterna(data:Cisterna): Observable<Cisterna>{
    return this.http.post<Cisterna>('http://localhost:8585/api/cisterna',data);
  }

  getCisterna(id:number):Observable<Cisterna>{
    return this.http.get<Cisterna>(`http://localhost:8585/api/cisterna/${id}`);
  }

  postGradski(data:Gradski): Observable<Gradski>{
    return this.http.post<Gradski>('http://localhost:8585/api/gradski',data);
  }

  getGradski(id:number):Observable<Gradski>{
    return this.http.get<Gradski>(`http://localhost:8585/api/gradski/${id}`);
  }
}
