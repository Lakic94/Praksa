import { Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  

  constructor(private http: HttpClient) { }

  private messageSource = new BehaviorSubject<boolean>(true);

  private messageid = new BehaviorSubject<Vrsta>(null);

  currentMessage = this.messageSource.asObservable();

  currentId = this.messageid.asObservable();

  changeMessage(message:boolean){
    this.messageSource.next(message)
  }

  changeId(id:number,tipVozila:string){
    this.messageid.next({id:id, tipVozila:tipVozila});
  }

  
}

export interface Vrsta{
    id:number,
    tipVozila:string
}