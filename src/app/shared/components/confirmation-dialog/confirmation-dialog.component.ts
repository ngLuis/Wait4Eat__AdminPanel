import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

  title: string;
  description: string;
  buttonText: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private matDialogRed: MatDialogRef<ConfirmationDialogComponent>
  ) { }

  ngOnInit(): void {
    this.title = this.data.title;
    this.description = this.data.description;
    this.buttonText = this.data.buttonText;
  }

  closeOnAllow() {
    this.matDialogRed.close(true);
  }

  closeOnRefuse() {
    this.matDialogRed.close(false);
  }

}
