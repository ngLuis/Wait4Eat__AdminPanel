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
  @Input() itemData: any = undefined;
  @Output() formData: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    if (this.formType === Form.login ) {
      this.form = this.createFormLogin();
    } else if (this.formType === Form.filterProducts) {
      this.form = this.createFormFilterProducts();
      this.form.get('productCategoryFilter').setValue('', {
        onlySelf: true
     })
    } else if (this.formType === Form.crudProduct) {
      this.form = this.createFormCrudProduct();
      if ( this.itemData !== undefined ) {
        this.form.patchValue({
          productName: this.itemData.name,
          productPrice: this.itemData.price,
          productDescription: this.itemData.description,
          productCategory: this.itemData.category
        })
      }
    }
  }

  createFormLogin() {
    return new FormGroup({
      emailLogin: new FormControl('', [Validators.required, Validators.email]),
      passwordLogin: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  createFormCrudProduct() {
    return new FormGroup({
      productName: new FormControl('',),
      productPrice: new FormControl('', []),
      productCategory: new FormControl(''),
      productDescription: new FormControl(''),
      file: new FormControl('')
    })
  }

  createFormFilterProducts() {
    return new FormGroup({
      productNameFilter: new FormControl('',),
      productPriceFilter: new FormControl('', []),
      productCategoryFilter: new FormControl('')
    })
  }

  onResetForm() {
    this.form.reset();
  }

  onFileChange(event) {
    this.form.controls['file'].setValue('Hello');
    // if ( event.target.files.length > 0 ) {
    //   this.form.patchValue({
    //     file: event.target.files[0]
    //   })
    // }
  }

  categorySelected(category) {
    this.form.get('productCategoryFilter').setValue(category.target.value, {
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
