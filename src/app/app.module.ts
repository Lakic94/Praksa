import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common"

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule,MatFormFieldModule } from '@angular/material';
import { ListaService } from './lista/lista.service';
import {HttpClientModule} from '@angular/common/http';
import { ParkingComponent } from './parking/parking.component';
import {RouterModule} from '@angular/router';
import { Routing } from './routing/routing.module';
import { HeaderComponent } from './header/header/header.component';
import {CdkTableModule} from '@angular/cdk/table';
import { DodajComponent } from './dodaj/dodaj.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DodajCisternaComponent } from './dodaj/dodaj-cisterna/dodaj-cisterna.component';
import { DodajSleperComponent } from './dodaj/dodaj-sleper/dodaj-sleper.component';
import { DodajPrigradskiComponent } from './dodaj/dodaj-prigradski/dodaj-prigradski.component';
import { DodajGradskiComponent } from './dodaj/dodaj-gradski/dodaj-gradski.component';
import { DodajKlasicanAutomobilComponent } from './dodaj/dodaj-klasican-automobil/dodaj-klasican-automobil.component';
import { DodajKabrioletComponent } from './dodaj/dodaj-kabriolet/dodaj-kabriolet.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    ParkingComponent,
    HeaderComponent,
    DodajComponent,
    DialogComponent,
    DodajCisternaComponent,
    DodajSleperComponent,
    DodajPrigradskiComponent,
    DodajGradskiComponent,
    DodajKlasicanAutomobilComponent,
    DodajKabrioletComponent
    
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    Routing,
    CommonModule,
    FormsModule,
    CdkTableModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatIconModule,
    RouterModule.forRoot([])
  ],
  exports:[MatSortModule, MatPaginatorModule],
  providers: [ListaService],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogComponent
  ]
})
export class AppModule { }
