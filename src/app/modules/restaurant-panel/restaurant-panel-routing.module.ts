import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantPanelComponent } from './restaurant-panel.component';


const routes: Routes = [
  { path: '', component: RestaurantPanelComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantPanelRoutingModule { }
