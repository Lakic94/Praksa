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

  private readonly path = 'api/parking/'

  getParkingVozila(): Observable<Vozilo []>{
    return this.http.get<Vozilo []>('http://localhost:8585/api/parking/getAllVozila');
  }

  getParkinge(): Observable<Parking []>{
    return this.http.get<Parking []>('http://localhost:8585/api/parking/getAll');
  }

  getVozilaSaParkinga(id:number):Observable<Vozilo[]>{
    return this.http.get<Vozilo []>(`http://localhost:8585/api/parking/${id}`);
  }

}
