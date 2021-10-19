import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { NewClienteComponent } from './new-cliente/new-cliente.component';
import { NewOperarioComponent } from './new-operario/new-operario.component';
import { NewServicioComponent } from './new-servicio/new-servicio.component';
import { OperarioComponent } from './operario/operario.component';
import { ServicioComponent } from './servicio/servicio.component';
=======

>>>>>>> 7f303339e8629f65bdc024e2d647877ac7fb133f

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '', component: HomeComponent,
      },
<<<<<<< HEAD
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
      {
        path: 'operario', component: OperarioComponent
      },
      {
        path: 'new-operario', component: NewOperarioComponent
      },
    
    
=======
>>>>>>> 7f303339e8629f65bdc024e2d647877ac7fb133f
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
