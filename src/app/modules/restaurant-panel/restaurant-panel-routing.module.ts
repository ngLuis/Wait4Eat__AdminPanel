import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantPanelComponent } from './restaurant-panel.component';
import { RestaurantAdministrationComponent } from './components/restaurant-administration/restaurant-administration.component';
import { CanActivateByUserRestaurantGuard } from 'src/app/shared/services/RoutesProtection/can-activate-by-user-restaurant.service';


const routes: Routes = [
  { path: '', component: RestaurantPanelComponent },
  { path: ':id', component: RestaurantAdministrationComponent, canActivate: [CanActivateByUserRestaurantGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantPanelRoutingModule { }
