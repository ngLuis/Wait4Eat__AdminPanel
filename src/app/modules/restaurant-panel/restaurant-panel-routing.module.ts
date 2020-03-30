import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantPanelComponent } from './restaurant-panel.component';
import { CanActivateByUserRestaurantGuard } from 'src/app/shared/services/RoutesProtection/can-activate-by-user-restaurant.service';
import { ErrorPage404Component } from 'src/app/shared/components/error-page404/error-page404.component';


const routes: Routes = [
  { path: '', component: RestaurantPanelComponent },
  { path: ':id', loadChildren: () => import('./modules/restaurant-administration.module').then(m => m.RestaurantAdministrationModule), canActivate: [CanActivateByUserRestaurantGuard]},
  { path: '**', component: ErrorPage404Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantPanelRoutingModule { }
