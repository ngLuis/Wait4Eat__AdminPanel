import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantAdministrationRoutingModule } from './restaurant-administration-routing.module';
import { RestaurantAdministrationComponent } from './restaurant-administration.component';
import { MenuModule } from 'src/app/shared/components/menu/menu.module';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { FilterBarModule } from 'src/app/shared/components/filter-bar/filter-bar.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialogModule } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.module';
import { CrudDialogModule } from 'src/app/shared/components/crud-dialog/crud-dialog.module';



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
    MatDialogModule,
    ConfirmationDialogModule,
    CrudDialogModule
  ]
})
export class RestaurantAdministrationModule { }
