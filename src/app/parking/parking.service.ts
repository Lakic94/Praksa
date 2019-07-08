import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parking } from '../model/parking';
import { Vozilo } from '../model/vozilo.model';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  constructor(private http:HttpClient) { }

  private readonly path = 'api/parking/'

  getParkingVozila(): Observable<Vozilo []>{
    return this.http.get<Vozilo []>('api/parking/getAllVozila');
  }

  getParkinge(): Observable<Parking []>{
    return this.http.get<Parking []>('api/parking/getAll');
  }

  getVozilaSaParkinga(id:number):Observable<Vozilo[]>{
    return this.http.get<Vozilo []>(`api/parking/${id}`);
  }

}
