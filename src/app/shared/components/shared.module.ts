import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormModule } from './form/form.module';
import { MenuModule } from './menu/menu.module';
import { FilterBarModule } from './filter-bar/filter-bar.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormModule,
    MenuModule,
    FilterBarModule
  ],
  exports: [
    FormModule,
    MenuModule,
    FilterBarModule
  ]
})
export class SharedModule { }
