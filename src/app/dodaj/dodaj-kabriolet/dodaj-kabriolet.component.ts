import { Component, OnInit } from '@angular/core';
import { Kabriolet } from 'src/app/model/kabriolet.model';
import { DodajService } from '../dodaj.service';
import { SharedService } from 'src/app/model/shared.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-dodaj-kabriolet',
  templateUrl: './dodaj-kabriolet.component.html',
  styleUrls: ['./dodaj-kabriolet.component.css']
})
export class DodajKabrioletComponent implements OnInit {

  kabriolet = new Kabriolet(
    '','','',null,''
  )

  id:any;

  constructor(private dodajService:DodajService, private sharedService:SharedService, public dialog: MatDialog) { }

  ngOnInit() {
    this.kabriolet = new Kabriolet(
      '','','',null,''
    )
    
    this.sharedService.currentId.subscribe(data=>{if(data != null && data.tipVozila==='Kabriolet'){
      this.kabriolet=data;
      
    }});

    
    
  }
  

  dodaj(){
    this.dodajService.postKabriolet(this.kabriolet)
      .subscribe(data=> console.log("Uspesno", data),
                  error=>console.error("Error", error));
    
    window.location.replace("http://localhost:4200");
  }
}
