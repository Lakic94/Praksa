import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cisterna } from '../model/cisterna.model';
import { Gradski } from '../model/gradski.model';
import { Kabriolet } from '../model/kabriolet.model';
import { Sleper } from '../model/sleper';
import { Prigradski } from '../model/prigradski';
import { Klasican } from '../model/klasican';

@Injectable({
  providedIn: 'root'
})
export class DodajService {

  constructor(private http: HttpClient) { }

  //Cisterna

  postCisterna(data: Cisterna): Observable<Cisterna> {
    return this.http.post<Cisterna>('http://localhost:8585/api/cisterna', data);
  }

  getCisterna(id: number): Observable<Cisterna> {
    return this.http.get<Cisterna>(`http://localhost:8585/api/cisterna/${id}`);
  }

  //Gradski

  postGradski(data: Gradski): Observable<Gradski> {
    return this.http.post<Gradski>('http://localhost:8585/api/gradski', data);
  }

  getGradski(id: number): Observable<Gradski> {
    return this.http.get<Gradski>(`http://localhost:8585/api/gradski/${id}`);
  }

  //Kabriolet

  postKabriolet(data: Kabriolet): Observable<Kabriolet> {
    return this.http.post<Kabriolet>('http://localhost:8585/api/kabriolet', data)
  }

  //Sleper

  postSleper(data: Sleper): Observable<Sleper> {
    return this.http.post<Sleper>('http://localhost:8585/api/sleper', data)
  }

  //Prigradski

  postPrigradski(data: Prigradski): Observable<Prigradski> {
    return this.http.post<Prigradski>('http://localhost:8585/api/prigradski', data)
  }

  //Klasican

  postKlasican(data:Klasican):Observable<Klasican>{
    return this.http.post<Klasican>('http://localhost:8585/api/klasicni', data)
  }

}
