import { Injectable } from '@angular/core';
import { Kabriolet } from '../model/kabriolet.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vozilo } from '../model/vozilo.model';

@Injectable()
export class ListaService{

    private readonly path ;

    constructor(private http: HttpClient){}

    getVozila(): Observable<Vozilo[]> {
        return this.http.get<Vozilo[]>('/api/parking/getAllVozila');
    
    }

    getVrstaVozila(vrsta:string): Observable<Vozilo[]>{
        return this.http.get<Vozilo[]>(`api/parking/${vrsta}`) 
    }

    getTipVozila(tip:string):Observable<Vozilo[]>{
        return this.http.get<Vozilo[]>(`api/${tip}`);
    }




}