import { Component, OnInit } from '@angular/core';
import { Prigradski } from 'src/app/model/prigradski';
import { DodajService } from '../dodaj.service';
import { SharedService } from 'src/app/model/shared.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-dodaj-prigradski',
  templateUrl: './dodaj-prigradski.component.html',
  styleUrls: ['./dodaj-prigradski.component.css']
})
export class DodajPrigradskiComponent implements OnInit {

  prigradski = new Prigradski(
    '','',null,null,null
  )

  id:any;
  

  constructor(private dodajService:DodajService, private sharedService:SharedService, public dialog: MatDialog) { }

  ngOnInit() {
    this.prigradski = new Prigradski(
      '','',null,null,null
    )
    
    this.sharedService.currentId.subscribe(data=>{if(data != null && data.tipVozila==='Prigradski'){
      this.prigradski=data;
      
    }});

    console.log(this.prigradski)
    
  }
  

  dodaj(){
    this.dodajService.postPrigradski(this.prigradski)
      .subscribe(data=> console.log("Uspesno", data),
                  error=>console.error("Error", error));
   
    window.location.replace("http://localhost:4200");
  }

}
