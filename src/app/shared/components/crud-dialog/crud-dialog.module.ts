import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudDialogComponent } from './crud-dialog.component';
import { FormModule } from '../form/form.module';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [CrudDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    FormModule
  ],
  exports: [CrudDialogComponent]
})
export class CrudDialogModule { }
