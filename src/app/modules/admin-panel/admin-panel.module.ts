import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel.component';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { MenuModule } from 'src/app/shared/components/menu/menu.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    AdminPanelComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    MenuModule,
    FontAwesomeModule
  ]
})
export class AdminPanelModule { }
