import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ListaService } from './lista.service';
import { Vozilo } from '../model/vozilo.model';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material';







@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private listaService: ListaService, public dialog: MatDialog) { }


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
    { vrstaVozila: 'Putnicki', name: 'KlasicanAutomobil' },
    { vrstaVozila: 'Putnicki', name: 'Kabriolet' }
  ]

  prikazi:boolean = false;

  prikazuList = "Prikazi Listu";



  listaTipova = [];


  public vozila = [];

  displayedColumns: string[] = ['id', 'name', 'vrstaVozila', 'tipVozila'];
  dataSource = new MatTableDataSource<Vozilo>(this.vozila);

  //Ne dirati
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;




  ngOnInit() {
    this.listaService.getVozila()
      .subscribe(data => this.dataSource = new MatTableDataSource(data));
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource = new MatTableDataSource(this.vozila);
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

  toggle(event){
    if(this.prikazi === false){
      this.prikazi = true;
    }
    else{
      this.prikazi = false;
    }
  }

  openDialog(): void {
    this.dialog.open(DialogComponent, {
      width: '80%',
      height: '80%',
      data: {
        // data:this.data
      }
    }).afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}