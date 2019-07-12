import { Component, OnInit } from '@angular/core';
import { Cisterna } from 'src/app/model/cisterna.model';
import { DodajService } from '../dodaj.service';
import { SharedService } from 'src/app/model/shared.service';
import { MatDialog } from '@angular/material';

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
  

  constructor(private dodajService:DodajService, private sharedService:SharedService, public dialog: MatDialog) { }

  ngOnInit() {
    this.cisterna = new Cisterna(
      '','',null,null
    )
    
    this.sharedService.currentId.subscribe(data=>{if(data != null && data.tipVozila==='Cisterna'){
      this.cisterna=data;
      
    }});

    console.log(this.cisterna)
    
  }
  

  dodaj(){
    this.dodajService.postCisterna(this.cisterna)
      .subscribe(data=> console.log("Uspesno", data),
                  error=>console.error("Error", error));
    // this.cisterna = new Cisterna(
    //   '','',null,null

    // )
    window.location.replace("http://localhost:4200");
  }

  

  


  
  


}
