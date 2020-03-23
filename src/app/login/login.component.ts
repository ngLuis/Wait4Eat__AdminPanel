import { Component, OnInit } from '@angular/core';
import { Form } from '../shared/enums/form.enum';
import { AuthService } from '../shared/services/auth.service';
import { User } from '../shared/interfaces/User.interface';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formType: Form = Form.login;

  constructor(
    private auth: AuthService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logInSystem(credentials) {
    let userLogged: User = this.auth.makeLogin(credentials.emailLogin, credentials.passwordLogin);
    if (userLogged !== undefined) {
      if (userLogged.type !== 0) {

        this.cookieService.set('w4e-email', userLogged.email);
        this.cookieService.set('w4e-type', userLogged.type.toString());

        if (userLogged.type === 1) {
          this.router.navigate(['/restaurant-panel']);
        }
        
      } else {
        this.cookieService.set('w4e-email', '');
        this.cookieService.set('w4e-type', '');
      }
    }
  }

}
