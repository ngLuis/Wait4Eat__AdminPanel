import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CanActivateByTypeGuard } from './shared/services/RoutesProtection/can-activate-by-type.service';
import { CanActivateByUserLoggedGuard } from './shared/services/RoutesProtection/can-activate-by-user-logged.service';
import { ErrorPage404Component } from './shared/components/error-page404/error-page404.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'restaurant-panel', loadChildren: () => import('./modules/restaurant-panel/restaurant-panel.module').then(m => m.RestaurantPanelModule), canActivate: [CanActivateByTypeGuard]},
  {path: '**', component: ErrorPage404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
