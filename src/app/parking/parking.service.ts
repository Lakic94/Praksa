import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Parking } from '../model/parking';
import { Vozilo } from '../model/vozilo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  constructor(private http:HttpClient) { }

  private readonly path = 'http://localhost:8585/api/parking/'

  getParkingVozila(): Observable<Vozilo []>{
    return this.http.get<Vozilo []>('getAllVozila');
  }

  getParkinge(): Observable<Parking []>{
    return this.http.get<Parking []>('getAll');
  }

  getVozilaSaParkinga(id:number):Observable<Vozilo[]>{
    return this.http.get<Vozilo []>(this.path+`${id}`);
  }

}
