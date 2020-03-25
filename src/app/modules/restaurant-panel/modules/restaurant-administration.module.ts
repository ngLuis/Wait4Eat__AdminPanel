import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantAdministrationRoutingModule } from './restaurant-administration-routing.module';
import { RestaurantAdministrationComponent } from './restaurant-administration.component';
import { MenuModule } from 'src/app/shared/components/menu/menu.module';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { FilterBarModule } from 'src/app/shared/components/filter-bar/filter-bar.module';



@NgModule({
  declarations: [
    RestaurantAdministrationComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    RestaurantAdministrationRoutingModule,
    MenuModule,
    FilterBarModule,
  ]
})
export class RestaurantAdministrationModule { }
