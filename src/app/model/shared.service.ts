import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private messageSource = new BehaviorSubject<boolean>(true);

  currentMessage = this.messageSource.asObservable();

  changeMessage(message:boolean){
    this.messageSource.next(message)
  }
}
