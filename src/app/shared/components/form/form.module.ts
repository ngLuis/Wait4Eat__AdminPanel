import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserTypeModule } from '../../pipes/user-type.module';



@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserTypeModule
  ],
  exports: [
    FormComponent
  ]
})
export class FormModule { }
