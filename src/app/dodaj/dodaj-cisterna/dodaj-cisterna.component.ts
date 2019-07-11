import { Component, OnInit } from '@angular/core';
import { Cisterna } from 'src/app/model/cisterna.model';
import { DodajService } from '../dodaj.service';
import { SharedService } from 'src/app/model/shared.service';

@Component({
  selector: 'app-dodaj-cisterna',
  templateUrl: './dodaj-cisterna.component.html',
  styleUrls: ['./dodaj-cisterna.component.css']
})
export class DodajCisternaComponent implements OnInit {

  cisterna = new Cisterna(
    '','',null,null
  )

  id:any;
  

  constructor(private dodajService:DodajService, private sharedService:SharedService) { }

  ngOnInit() {
    this.sharedService.currentId.subscribe(id=>this.id = id);

    this.dodajService.getCisterna(this.id).subscribe(data => console.log(data));
    //console.log(this.cisterna)
    
  }

  dodaj(){
    this.dodajService.postCisterna(this.cisterna)
      .subscribe(data=> console.log("Uspesno", data),
                  error=>console.error("Error", error));
    this.cisterna = new Cisterna(
      '','',null,null
    )

  }

  prikazi(){
    
    
  }


  
  


}
