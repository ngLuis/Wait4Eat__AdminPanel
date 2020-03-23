import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantPanelRoutingModule } from './restaurant-panel-routing.module';
import { RestaurantPanelComponent } from './restaurant-panel.component';
import { RestaurantAdministrationComponent } from './components/restaurant-administration/restaurant-administration.component';

@NgModule({
  declarations: [
    RestaurantPanelComponent,
    RestaurantAdministrationComponent
  ],
  imports: [
    CommonModule,
    RestaurantPanelRoutingModule
  ]
})
export class RestaurantPanelModule { }
