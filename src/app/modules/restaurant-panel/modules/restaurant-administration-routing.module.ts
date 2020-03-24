import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantAdministrationComponent } from './restaurant-administration.component';


const routes: Routes = [
  { path: '', component: RestaurantAdministrationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantAdministrationRoutingModule { }
