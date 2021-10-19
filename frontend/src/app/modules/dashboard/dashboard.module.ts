
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuListItemComponent } from './side-main/ui/menu-list-item/menu-list-item.component';
import { SideMainComponent } from './side-main/side-main.component';
import { MaterialModule } from 'src/app/material/material.module';
import { DashboardComponent } from './dashboard.component';
<<<<<<< HEAD
import { ClienteComponent } from './cliente/cliente.component';
import { ServicioComponent } from './servicio/servicio.component';
import { NewServicioComponent } from './new-servicio/new-servicio.component';
import { NewClienteComponent } from './new-cliente/new-cliente.component';
import { QrCodeModule } from 'ng-qrcode';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { WebcamModule } from 'ngx-webcam';
import { ModalCamaraComponent } from './modal-camara/modal-camara.component';
import { OperarioComponent } from './operario/operario.component';
import { NewOperarioComponent } from './new-operario/new-operario.component';
=======

>>>>>>> 7f303339e8629f65bdc024e2d647877ac7fb133f
@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    SideMainComponent,
    MenuListItemComponent,
<<<<<<< HEAD
    ClienteComponent,
    ServicioComponent,
    NewServicioComponent,
    NewClienteComponent,
    ModalCamaraComponent,
    OperarioComponent,
    NewOperarioComponent,
=======

>>>>>>> 7f303339e8629f65bdc024e2d647877ac7fb133f
    
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    MaterialModule,
<<<<<<< HEAD
    QrCodeModule,
    NgQrScannerModule,
    WebcamModule
=======

>>>>>>> 7f303339e8629f65bdc024e2d647877ac7fb133f
  ],

})
export class DashboardModule { }
