import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParkingComponent } from '../parking/parking.component';
import { ListaComponent } from '../lista/lista.component';
import { RouterModule } from '@angular/router';
import { DodajComponent } from '../dodaj/dodaj.component';
import { DodajCisternaComponent } from '../dodaj/dodaj-cisterna/dodaj-cisterna.component';
import { DodajGradskiComponent } from '../dodaj/dodaj-gradski/dodaj-gradski.component';
import { DodajKabrioletComponent } from '../dodaj/dodaj-kabriolet/dodaj-kabriolet.component';
import { DodajSleperComponent } from '../dodaj/dodaj-sleper/dodaj-sleper.component';

const routes = [
  {path:'api/Sleper/id', component:DodajSleperComponent},
  {path:'api/Kabriolet/id', component:DodajKabrioletComponent},
  {path: 'api/Cisterna/id', component: DodajCisternaComponent},
  {path: 'api/Gradski/id', component: DodajGradskiComponent},
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

