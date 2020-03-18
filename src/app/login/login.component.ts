import { Component, OnInit } from '@angular/core';
import { Form } from '../shared/enums/form.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formType: Form = Form.login;

  constructor() { }

  ngOnInit() {
  }

  logInSystem(credentials) {
    console.log(credentials);
  }

}
