import { Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  private messageSource = new BehaviorSubject<boolean>(true);

  currentMessage = this.messageSource.asObservable();

  changeMessage(message:boolean){
    this.messageSource.next(message)
  }

  
}