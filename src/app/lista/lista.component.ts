import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ListaService } from './lista.service';
import { Vozilo } from '../model/vozilo.model';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material';
import { SharedService } from '../model/shared.service';







@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private listaService: ListaService, public dialog: MatDialog,private sharedService:SharedService) { }


  public vrstaVozila = [
    { name: 'Sva vozila' },
    { name: 'Kamion' },
    { name: 'Autobus' },
    { name: 'Putnicki' }
  ]

  public tipVozila = [
    { vrstaVozila: 'Kamion', name: 'Sleper' },
    { vrstaVozila: 'Kamion', name: 'Cisterna' },
    { vrstaVozila: 'Autobus', name: 'Prigradski' },
    { vrstaVozila: 'Autobus', name: 'Gradski' },
    { vrstaVozila: 'Putnicki', name: 'Klasicni' },
    { vrstaVozila: 'Putnicki', name: 'Kabriolet' }
  ]

  

  prikazuList = "Prikazi Listu";

  message:boolean;

  listaTipova = [];

  id:number;


  public vozila = [];

  displayedColumns: string[] = ['id', 'name', 'vrstaVozila', 'tipVozila','delete','update'];
  dataSource = new MatTableDataSource<Vozilo>(this.vozila);

  //Ne dirati
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;




  ngOnInit() {

    this.listaService.getVozila()
      .subscribe(data => this.dataSource = new MatTableDataSource(data));
    
    this.dataSource = new MatTableDataSource(this.vozila);
    
    this.sharedService.currentMessage.subscribe(message=>this.message = message)
    
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

}

  //Ne dirati
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getVrstaVozila(vred: any) {
    if (vred === 'Sva vozila') {
      this.listaService.getVozila()
        .subscribe(data => this.dataSource = new MatTableDataSource(data));

    }
    
    this.listaTipova = this.tipVozila.filter(p => p.vrstaVozila === vred);

  }

  getTipVozila(vred: any) {
    let a = vred.toLowerCase();
    this.listaService.getTipVozila(a).subscribe(data => this.dataSource = new MatTableDataSource(data));
  }


  delete(id:number,tip:string){
    this.listaService.deleteVozilo(id,tip).subscribe();
    setTimeout(() => {
      this.loadData();
    }, 200);
    
  }

  loadData(){
    this.listaService.getVozila()
      .subscribe(data => this.dataSource = new MatTableDataSource(data));
      
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


  

  prosledi(row){

    this.sharedService.changeId(row);

    

  }
  

}