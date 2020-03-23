import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantPanelRoutingModule } from './restaurant-panel-routing.module';
import { RestaurantPanelComponent } from './restaurant-panel.component';

@NgModule({
  declarations: [
    RestaurantPanelComponent,
  ],
  imports: [
    CommonModule,
    RestaurantPanelRoutingModule
  ]
})
export class RestaurantPanelModule { }
