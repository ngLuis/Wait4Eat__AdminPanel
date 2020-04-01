import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CanActivateOwner } from './shared/services/RoutesProtection/can-activate-owner';
import { ErrorPage404Component } from './shared/components/error-page404/error-page404.component';
import { CanActivateAdmin } from './shared/services/RoutesProtection/can-activate-admin.service';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'restaurant-panel', loadChildren: () => import('./modules/restaurant-panel/restaurant-panel.module').then(m => m.RestaurantPanelModule), canActivate: [CanActivateOwner]},
  { path: 'admin-panel', loadChildren: () => import('./modules/admin-panel/admin-panel.module').then(m => m.AdminPanelModule), canActivate: [CanActivateAdmin]},

  {path: '**', component: ErrorPage404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
