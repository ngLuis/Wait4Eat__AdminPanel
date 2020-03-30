import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormModule } from './form/form.module';
import { MenuModule } from './menu/menu.module';
import { FilterBarModule } from './filter-bar/filter-bar.module';
import { ConfirmationDialogModule } from './confirmation-dialog/confirmation-dialog.module';
import { ScannerModalModule } from './scanner-modal/scanner-modal.module';
import { ErrorPage404Component } from './error-page404/error-page404.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormModule,
    MenuModule,
    FilterBarModule,
    ConfirmationDialogModule,
    ScannerModalModule,
    ErrorPage404Component
  ],
  exports: [
    FormModule,
    MenuModule,
    FilterBarModule,
    ConfirmationDialogModule,
    ScannerModalModule,
    ErrorPage404Component
  ]
})
export class SharedModule { }
