import { Component, OnInit } from '@angular/core';
import { Gradski } from 'src/app/model/gradski.model';
import { DodajService } from '../dodaj.service';
import { SharedService } from 'src/app/model/shared.service';

@Component({
  selector: 'app-dodaj-gradski',
  templateUrl: './dodaj-gradski.component.html',
  styleUrls: ['./dodaj-gradski.component.css']
})
export class DodajGradskiComponent implements OnInit {

  gradski = new Gradski(
    '', '', null, null, ''
  )

  id: any;


  constructor(private dodajService: DodajService, private sharedService: SharedService) { }


  ngOnInit() {
    this.sharedService.currentId.subscribe(data=>{if(data.tipVozila==='Gradski'){
      this.id =data.id;
      
    }});
  }

  dodaj(){
    this.dodajService.postGradski(this.gradski)
      .subscribe(data=> console.log("Uspesno", data),
                  error=>console.error("Error", error));
    

  }

}