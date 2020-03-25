import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantAdministrationRoutingModule } from './restaurant-administration-routing.module';
import { RestaurantAdministrationComponent } from './restaurant-administration.component';
import { MenuModule } from 'src/app/shared/components/menu/menu.module';
import { ProductsListComponent } from './components/products-list/products-list.component';



@NgModule({
  declarations: [
    RestaurantAdministrationComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    RestaurantAdministrationRoutingModule,
    MenuModule,
  ]
})
export class RestaurantAdministrationModule { }
