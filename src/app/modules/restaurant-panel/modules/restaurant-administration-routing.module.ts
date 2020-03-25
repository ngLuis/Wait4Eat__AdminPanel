import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantAdministrationComponent } from './restaurant-administration.component';
import { ProductsListComponent } from './components/products-list/products-list.component';


const routes: Routes = [
  { path: '', component: RestaurantAdministrationComponent, children: [
    {path: 'products', component: ProductsListComponent},
    {path: 'home', component: ProductsListComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantAdministrationRoutingModule { }
