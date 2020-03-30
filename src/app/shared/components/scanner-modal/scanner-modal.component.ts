import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-scanner-modal',
  templateUrl: './scanner-modal.component.html',
  styleUrls: ['./scanner-modal.component.scss']
})
export class ScannerModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private matDialogRed: MatDialogRef<ScannerModalComponent>
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.matDialogRed.close('H-542-6');
    }, 3000) 
  }

}
