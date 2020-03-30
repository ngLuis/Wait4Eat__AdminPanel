import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScannerModalComponent } from './scanner-modal.component';



@NgModule({
  declarations: [ScannerModalComponent],
  imports: [
    CommonModule
  ],
  exports: [ScannerModalComponent]
})
export class ScannerModalModule { }
