import { Component, OnInit } from '@angular/core';
import { Form } from '../shared/enums/form.enum';
import { AuthService } from '../shared/services/auth.service';
import { User } from '../shared/interfaces/User.interface';
import { Router } from '@angular/router';
import { ToastService } from '../shared/services/toast.service';
import { CookieService } from '../shared/services/cookie.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formType: Form = Form.login;

  constructor(
    private auth: AuthService,
    private router: Router,
    private toastService: ToastService,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    if (this.cookieService.check('w4e-email') && this.cookieService.check('w4e-type')) {
    let type: number = parseInt(this.cookieService.getCookie('w4e-type'));
      if (type === 1) {
        this.router.navigate(['/restaurant-panel']);
      } else if (type === 2) {
        this.router.navigate(['/admin-panel']);
      }
    }
  }

  logInSystem(credentials) {
    let userLogged: User = this.auth.makeLogin(credentials.emailLogin, credentials.passwordLogin);
    if (userLogged !== undefined) {
      if (userLogged.type !== 0) {

        this.cookieService.createCookie('w4e-email', userLogged.email);
        this.cookieService.createCookie('w4e-type', userLogged.type);
        this.cookieService.createCookie('w4e-id', userLogged.id); 

        if (userLogged.type === 1) {
          this.router.navigate(['/restaurant-panel']);
          this.toastService.showSuccess('Inicio de sesión correcto', 'Ya puedes administrar tu restaurante');
        }

        if (userLogged.type === 2) {
          this.router.navigate(['/admin-panel']);
          this.toastService.showSuccess('Inicio de sesión correcto', 'Ya puedes administrar la aplicación');
        }
        
      } else {
        this.cookieService.deleteCookie('w4e-email');
        this.cookieService.deleteCookie('w4e-type');
        this.cookieService.deleteCookie('w4e-id');
        this.toastService.showError('Inicio de sesión fallido', 'Tus credenciales son correctas, pero no tienes permisos para acceder a la administración');
      }
    } else {
      this.toastService.showError('Inicio de sesión fallido', 'Las credenciales no son correctas');
    }
  }
}
