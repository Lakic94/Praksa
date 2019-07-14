import { Component, OnInit } from '@angular/core';
import { Prigradski } from 'src/app/model/prigradski';
import { DodajService } from '../dodaj.service';
import { SharedService } from 'src/app/model/shared.service';

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
  

  constructor(private dodajService:DodajService, private sharedService:SharedService) { }


  ngOnInit() {
    this.sharedService.currentId.subscribe(data=>{if(data.tipVozila==='Prigradski'){
      this.id =data.id;
      
    }});
  }

  dodaj(){
    this.dodajService.postPrigradski(this.prigradski)
      .subscribe(data=> console.log("Uspesno", data),
                  error=>console.error("Error", error));
    

  }

}
