import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserTypePipe } from './user-type.pipe';



@NgModule({
  declarations: [
    UserTypePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserTypePipe
  ]
})
export class UserTypeModule { }
