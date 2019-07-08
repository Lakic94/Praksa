import { Component, OnInit, ViewChild } from '@angular/core';
import { ParkingService } from './parking.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Parking } from '../model/parking';
import { Vozilo } from '../model/vozilo.model';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {

  constructor(private parkingService: ParkingService) { }

  

  


  public vozila = [];

  public parking = [];
  

  displayedColumns: string[] = ['id', 'name', 'vrstaVozila', 'tipVozila'];
  dataSource = new MatTableDataSource<Vozilo>(this.vozila);

  //Ne dirati
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;




  ngOnInit() {
    this.parkingService.getParkinge().subscribe(data => this.parking = data);
    
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

  getParking(id:number) {
    this.parkingService.getVozilaSaParkinga(id)
      .subscribe(data => this.dataSource = new MatTableDataSource(data));
      
    
  }





}
