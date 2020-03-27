import { Component, OnInit, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Form } from '../../enums/form.enum';

@Component({
  selector: 'app-crud-dialog',
  templateUrl: './crud-dialog.component.html',
  styleUrls: ['./crud-dialog.component.scss']
})
export class CrudDialogComponent implements OnInit {

  formType: Form;
  title: string;
  buttonText: string;
  itemData: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private matDialogRed: MatDialogRef<CrudDialogComponent>
  ) { }

  ngOnInit(): void {
    this.formType = this.data.formType;
    this.title = this.data.title;
    this.buttonText = this.data.buttonText;

    if (this.data.type === 'update') {
      this.itemData = this.data.itemData;
    }
  }

  sendToParent($event) {
    this.matDialogRed.close($event);
  }

}
