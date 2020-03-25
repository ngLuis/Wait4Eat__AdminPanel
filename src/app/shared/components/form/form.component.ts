import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Form } from '../../enums/form.enum';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  form: FormGroup;
  submitted: boolean;

  @Input() formType: Form;
  @Input() buttonText: string;
  @Input() formTitle: string;
  @Output() formData: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    if (this.formType === Form.login ) {
      this.form = this.createFormLogin();
    } else if (this.formType === Form.filterProducts) {
      this.form = this.createFormFilterProducts();
      this.form.get('productCategory').setValue('', {
        onlySelf: true
     })
    }
  }

  createFormLogin() {
    return new FormGroup({
      emailLogin: new FormControl('', [Validators.required, Validators.email]),
      passwordLogin: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  createFormFilterProducts() {
    return new FormGroup({
      productName: new FormControl('',),
      productPrice: new FormControl('', []),
      productCategory: new FormControl('')
    })
  }

  onResetForm() {
    this.form.reset();
  }

  categorySelected(category) {
    this.form.get('productCategory').setValue(category.target.value, {
      onlySelf: true
   })
   this.sendForm();
  }

  sendForm() {
    this.submitted = true;
    if (this.form.valid) {
      this.formData.emit(this.form.value);
    }
  }
  
}
