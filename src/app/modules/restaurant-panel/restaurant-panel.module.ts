import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantPanelRoutingModule } from './restaurant-panel-routing.module';
import { RestaurantPanelComponent } from './restaurant-panel.component';
import { MenuModule } from 'src/app/shared/components/menu/menu.module';

@NgModule({
  declarations: [
    RestaurantPanelComponent,
  ],
  imports: [
    CommonModule,
    RestaurantPanelRoutingModule,
    MenuModule,
  ]
})
export class RestaurantPanelModule { }
