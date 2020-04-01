import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantAdministrationComponent } from './restaurant-administration.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { ErrorPage404Component } from 'src/app/shared/components/error-page404/error-page404.component';
import { ChartComponent } from './components/chart/chart.component';


const routes: Routes = [
  { path: '', component: RestaurantAdministrationComponent, children: [
    {path: 'products', component: ProductsListComponent},
    {path: 'home', component: ChartComponent},
    {path: 'orders', component: OrdersListComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
  ]},
  { path: '**', component: ErrorPage404Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantAdministrationRoutingModule { }
