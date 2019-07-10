import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParkingComponent } from '../parking/parking.component';
import { ListaComponent } from '../lista/lista.component';
import { RouterModule } from '@angular/router';
import { DodajComponent } from '../dodaj/dodaj.component';

const routes = [

  
  {path: 'api/cisterna/id', component: ListaComponent},
  { path: '**', component: DodajComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RoutingModule { }
export const Routing = RouterModule.forRoot(routes, {
  onSameUrlNavigation: 'reload'
});

