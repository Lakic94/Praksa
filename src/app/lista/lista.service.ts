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
        return this.http.get<Vozilo[]>('http://localhost:8585/api/parking/getAllVozila');
    
    }

    getVrstaVozila(vrsta:string): Observable<Vozilo[]>{
        return this.http.get<Vozilo[]>(`http://localhost:8585/api/parking/${vrsta}`) 
    }

    getTipVozila(tip:string):Observable<Vozilo[]>{
        return this.http.get<Vozilo[]>(`http://localhost:8585/api/${tip}`);
    }

    deleteVozilo(id:number,tip:string):Observable<Vozilo[]>{
        let a = tip.toLowerCase();
        return this.http.delete<Vozilo[]>(`http://localhost:8585/api/${a}/${id}`);
    }




}