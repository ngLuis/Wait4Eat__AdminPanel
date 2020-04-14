import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantPanelRoutingModule } from './restaurant-panel-routing.module';
import { RestaurantPanelComponent } from './restaurant-panel.component';
import { MenuModule } from 'src/app/shared/components/menu/menu.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    RestaurantPanelComponent,
  ],
  imports: [
    CommonModule,
    RestaurantPanelRoutingModule,
    MenuModule,
    FontAwesomeModule
  ]
})
export class RestaurantPanelModule { }
