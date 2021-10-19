
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuListItemComponent } from './side-main/ui/menu-list-item/menu-list-item.component';
import { SideMainComponent } from './side-main/side-main.component';
import { MaterialModule } from 'src/app/material/material.module';
import { DashboardComponent } from './dashboard.component';
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
import { ZXingScannerModule } from '@zxing/ngx-scanner';
@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    SideMainComponent,
    MenuListItemComponent,
    ClienteComponent,
    ServicioComponent,
    NewServicioComponent,
    NewClienteComponent,
    ModalCamaraComponent,
    OperarioComponent,
    NewOperarioComponent,

  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    MaterialModule,
    QrCodeModule,
    NgQrScannerModule,
    WebcamModule,
    ZXingScannerModule
  ],

})
export class DashboardModule { }
