
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

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    SideMainComponent,
    MenuListItemComponent,
    ClienteComponent,
    ServicioComponent,
    NewServicioComponent,
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    MaterialModule,
  ],

})
export class DashboardModule { }
