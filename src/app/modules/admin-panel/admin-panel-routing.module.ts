import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPage404Component } from 'src/app/shared/components/error-page404/error-page404.component';
import { AdminPanelComponent } from './admin-panel.component';
import { HomeComponent } from './components/home/home.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';


const routes: Routes = [
  { path: '', component: AdminPanelComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'restaurant-list', component: RestaurantListComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
  ]},
  { path: '**', component: ErrorPage404Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
