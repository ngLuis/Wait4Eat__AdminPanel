import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Form } from '../../enums/form.enum';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/User.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  form: FormGroup;
  submitted: boolean;
  users: Array<User> = [];

  userTypes: Array<Number> = [0,1,2]

  @Input() formType: Form;
  @Input() buttonText: string;
  @Input() formTitle: string;
  @Input() itemData: any = undefined;
  @Output() formData: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private authService: AuthService,
  ) { }

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
    } else if (this.formType === Form.filterOrder) {
      this.form = this.createFormFilterOrder();
    } else if (this.formType === Form.filterRestaurants) {
      this.form = this.createFormFilterRestaurants();
    } else if (this.formType === Form.crudRestaurant) {
      this.users = this.authService.getUsersByType(1);
      this.form = this.createFormRestaurants();
      if ( this.itemData !== undefined ) {
        this.form.patchValue({
          restaurantName: this.itemData.name,
          restaurantCif: this.itemData.cif,
          restaurantOwner: this.itemData.idOwner,
        })
      }
    } else if (this.formType === Form.crudUsers) {
      this.form = this.createFormUsers();
      if ( this.itemData !== undefined ) {
        this.form.patchValue({
          userName: this.itemData.username,
          userPassword: this.itemData.password,
          userEmail: this.itemData.email,
          userPhonenumber: this.itemData.phoneNumber,
          userType: this.itemData.type
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
      productName: new FormControl('', [Validators.required]),
      productPrice: new FormControl('', [Validators.required]),
      productCategory: new FormControl('', [Validators.required]),
      productDescription: new FormControl('', [Validators.required]),
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

  createFormFilterOrder() {
    return new FormGroup({
      orderState: new FormControl(''),
    })
  }

  createFormFilterRestaurants() {
    return new FormGroup({
      restaurantNameFilter: new FormControl('',),
      restaurantCifFilter: new FormControl('', [])
    })
  }

  createFormRestaurants() {
    return new FormGroup({
      restaurantName: new FormControl('', [Validators.required]),
      restaurantCif: new FormControl('', [Validators.required]),
      restaurantOwner: new FormControl('', [Validators.required, Validators.required])
    })
  }

  createFormUsers() {
    return new FormGroup({
      userName: new FormControl('', [Validators.required]),
      userPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      userPhonenumber: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
      userType: new FormControl('', [Validators.required]),
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
