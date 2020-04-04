import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel.component';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { MenuModule } from 'src/app/shared/components/menu/menu.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/home/home.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FilterBarModule } from 'src/app/shared/components/filter-bar/filter-bar.module';



@NgModule({
  declarations: [
    AdminPanelComponent,
    HomeComponent,
    RestaurantListComponent
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    MenuModule,
    FontAwesomeModule,
    MatDialogModule,
    FilterBarModule
  ]
})
export class AdminPanelModule { }
