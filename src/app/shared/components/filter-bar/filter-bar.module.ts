import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterBarComponent } from './filter-bar.component';
import { FormModule } from '../form/form.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [FilterBarComponent],
  imports: [
    CommonModule,
    FormModule,
    FontAwesomeModule
  ],
  exports: [
    FilterBarComponent
  ]
})
export class FilterBarModule { }
