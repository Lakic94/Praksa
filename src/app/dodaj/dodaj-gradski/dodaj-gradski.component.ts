import { Component, OnInit } from '@angular/core';
import { Gradski } from 'src/app/model/gradski.model';
import { DodajService } from '../dodaj.service';
import { SharedService } from 'src/app/model/shared.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-dodaj-gradski',
  templateUrl: './dodaj-gradski.component.html',
  styleUrls: ['./dodaj-gradski.component.css']
})
export class DodajGradskiComponent implements OnInit {

  gradski = new Gradski(
    '','',null,null,''
  )

  id:any;
  

  constructor(private dodajService:DodajService, private sharedService:SharedService, public dialog: MatDialog) { }

  ngOnInit() {
    this.gradski = new Gradski(
      '','',null,null,''
    )
    
    this.sharedService.currentId.subscribe(data=>{if(data != null && data.tipVozila==='Gradski'){
      this.gradski=data;
      
    }});

    console.log(this.gradski)
    
  }
  

  dodaj(){
    this.dodajService.postGradski(this.gradski)
      .subscribe(data=> console.log("Uspesno", data),
                  error=>console.error("Error", error));
   
    window.location.replace("http://localhost:4200");
  }

}