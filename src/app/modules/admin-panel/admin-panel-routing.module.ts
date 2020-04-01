import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPage404Component } from 'src/app/shared/components/error-page404/error-page404.component';
import { AdminPanelComponent } from './admin-panel.component';


const routes: Routes = [
  { path: '', component: AdminPanelComponent },
  { path: '**', component: ErrorPage404Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
