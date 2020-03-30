import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPage404Component } from './error-page404.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ErrorPage404Component],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ErrorPage404Component]
})
export class ErrorPage404Module { }
