import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantAdministrationComponent } from './restaurant-administration.component';
import { RestaurantAdministrationRoutingModule } from './restaurant-administration-routing.module';



@NgModule({
  declarations: [
    RestaurantAdministrationComponent
  ],
  imports: [
    CommonModule,
    RestaurantAdministrationRoutingModule
  ]
})
export class RestaurantAdministrationModule { }
