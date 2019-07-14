import { Component, OnInit } from '@angular/core';
import { Sleper } from 'src/app/model/sleper';
import { DodajService } from '../dodaj.service';
import { SharedService } from 'src/app/model/shared.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-dodaj-sleper',
  templateUrl: './dodaj-sleper.component.html',
  styleUrls: ['./dodaj-sleper.component.css']
})
export class DodajSleperComponent implements OnInit {

  sleper = new Sleper(
    '','',null,null
  )

  id:any;

  constructor(private dodajService:DodajService, private sharedService:SharedService, public dialog: MatDialog) { }

  ngOnInit() {
    this.sleper = new Sleper(
      '','',null,null
    )
    
    this.sharedService.currentId.subscribe(data=>{if(data != null && data.tipVozila==='Sleper'){
      this.sleper=data;
      
    }});
    
  }
  

  dodaj(){
    this.dodajService.postSleper(this.sleper)
      .subscribe(data=> console.log("Uspesno", data),
                  error=>console.error("Error", error));
    
    window.location.replace("http://localhost:4200");
  }

}
