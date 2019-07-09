import { Component, OnInit, HostBinding } from '@angular/core';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { MatDialog } from '@angular/material';
import { SharedService } from 'src/app/model/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog, private sharedService:SharedService) { }

  message:boolean;


  ngOnInit() {
    this.sharedService.currentMessage.subscribe(message=>this.message = message)
    
  }
  
  toggle(){
    
    if(this.message === false){
      this.message = true;
    }
    else{
      this.message = false;
    }
    this.newMessage();
    
  }

  newMessage(){
    this.sharedService.changeMessage(this.message);
  }
  

  openDialog(): void {
    this.dialog.open(DialogComponent, {
      width: '50%',
      height: '90%',
      data: {
        // data:this.data
      }
    })
  }

  

}
