import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { NewClienteComponent } from './new-cliente/new-cliente.component';
import { NewServicioComponent } from './new-servicio/new-servicio.component';
import { ServicioComponent } from './servicio/servicio.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '', component: HomeComponent,
      },
      {
        path: 'cliente', component: ClienteComponent
      },
      {
        path: 'servicio', component: ServicioComponent
      },
      {
        path: 'new-servicio', component: NewServicioComponent
      },
      {
        path: 'new-cliente', component: NewClienteComponent
      },
    
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
