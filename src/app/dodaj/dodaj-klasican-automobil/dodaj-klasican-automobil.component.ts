import { Component, OnInit } from '@angular/core';
import { Klasican } from 'src/app/model/klasican';
import { DodajService } from '../dodaj.service';
import { SharedService } from 'src/app/model/shared.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-dodaj-klasican-automobil',
  templateUrl: './dodaj-klasican-automobil.component.html',
  styleUrls: ['./dodaj-klasican-automobil.component.css']
})
export class DodajKlasicanAutomobilComponent implements OnInit {

  klasican = new Klasican(
    '','',null,null,''
  )

  id:any;

  constructor(private dodajService:DodajService, private sharedService:SharedService, public dialog: MatDialog) { }

  ngOnInit() {
    this.klasican = new Klasican(
      '','',null,null,''
    )
    
    this.sharedService.currentId.subscribe(data=>{if(data != null && data.tipVozila==='Klasicni'){
      this.klasican=data;
      
    }});

    
    
  }
  

  dodaj(){
    this.dodajService.postKlasican(this.klasican)
      .subscribe(data=> console.log("Uspesno", data),
                  error=>console.error("Error", error));
    
    window.location.replace("http://localhost:4200");
  }
}
