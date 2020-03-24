import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/shared/enums/form.enum';

@Component({
  selector: 'app-restaurant-administration',
  templateUrl: './restaurant-administration.component.html',
  styleUrls: ['./restaurant-administration.component.scss']
})
export class RestaurantAdministrationComponent implements OnInit {

  formType: Form = Form.login;

  constructor() { }

  ngOnInit() {
  }
}
