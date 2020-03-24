import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormModule } from './form/form.module';
import { MenuModule } from './menu/menu.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormModule,
    MenuModule
  ],
  exports: [
    FormModule,
    MenuModule
  ]
})
export class SharedModule { }
