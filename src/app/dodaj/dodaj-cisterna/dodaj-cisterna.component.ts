import { Component, OnInit } from '@angular/core';
import { Cisterna } from 'src/app/model/cisterna.model';
import { DodajService } from '../dodaj.service';

@Component({
  selector: 'app-dodaj-cisterna',
  templateUrl: './dodaj-cisterna.component.html',
  styleUrls: ['./dodaj-cisterna.component.css']
})
export class DodajCisternaComponent implements OnInit {

  cisterna = new Cisterna(
    '','',0,0
  )
  

  constructor(private dodajService:DodajService) { }

  ngOnInit() {
  }

  dodaj(){
    this.dodajService.postCisterna(this.cisterna)
      .subscribe(data=> console.log("Uspesno", data),
                  error=>console.error("Error", error));
  }
  


}
