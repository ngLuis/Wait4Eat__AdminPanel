import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormModule } from './form/form.module';
import { MenuModule } from './menu/menu.module';
import { FilterBarModule } from './filter-bar/filter-bar.module';
import { ConfirmationDialogModule } from './confirmation-dialog/confirmation-dialog.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormModule,
    MenuModule,
    FilterBarModule,
    ConfirmationDialogModule
  ],
  exports: [
    FormModule,
    MenuModule,
    FilterBarModule,
    ConfirmationDialogModule
  ]
})
export class SharedModule { }
