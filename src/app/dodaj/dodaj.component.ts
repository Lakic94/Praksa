import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dodaj',
  templateUrl: './dodaj.component.html',
  styleUrls: ['./dodaj.component.css']
})
export class DodajComponent implements OnInit {

  constructor() { }

  public vrstaVozila = [
    { name: 'Kamion' },
    { name: 'Autobus' },
    { name: 'Putnicki' }
  ]

  public tipVozila = [
    { vrstaVozila: 'Kamion', name: 'Sleper' },
    { vrstaVozila: 'Kamion', name: 'Cisterna' },
    { vrstaVozila: 'Autobus', name: 'Prigradski' },
    { vrstaVozila: 'Autobus', name: 'Gradski' },
    { vrstaVozila: 'Putnicki', name: 'KlasicanAutomobil' },
    { vrstaVozila: 'Putnicki', name: 'Kabriolet' }
  ]

  public listaTipova = [];

  

  unos:string = '';

  ngOnInit() {
  }
  
  getVrstaVozila(event:any){
    this.listaTipova = this.tipVozila.filter(p => p.vrstaVozila === event);
  }

  print(event:any){
    
    this.unos=event;
    
  }
}
