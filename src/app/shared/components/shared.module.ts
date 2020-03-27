import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormModule } from './form/form.module';
import { MenuModule } from './menu/menu.module';
import { FilterBarModule } from './filter-bar/filter-bar.module';
import { ConfirmationDialogModule } from './confirmation-dialog/confirmation-dialog.module';
import { CrudDialogComponent } from './crud-dialog/crud-dialog.component';



@NgModule({
  declarations: [CrudDialogComponent],
  imports: [
    CommonModule,
    FormModule,
    MenuModule,
    FilterBarModule
  ],
  exports: [
    FormModule,
    MenuModule,
    FilterBarModule,
    ConfirmationDialogModule
  ]
})
export class SharedModule { }
