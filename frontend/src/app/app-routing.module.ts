import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './services/guards/user.guard';

const routes: Routes = [
  
  {
    path: 'auth',
    canActivate: [UserGuard],
    loadChildren: () =>
      import('./modules/auth/auth.module').then(
        (m) => m.AuthModule
      ),
  },


{
  path: '',
  canActivate: [UserGuard],
  loadChildren: () =>
    import('./modules/dashboard/dashboard.module').then(
      (m) => m.DashboardModule
    ),
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
