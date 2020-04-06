import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from '../cookie.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateByUserLoggedGuard implements CanActivate {

  constructor(
    private cookieService: CookieService,
    private route: Router
  ) { }

  canActivate() {
    let canActivate = false;
    if ( this.cookieService.check('w4e-email') && this.cookieService.check('w4e-type')) {
      let userType = this.cookieService.getCookie('w4e-type');
      if (parseInt(userType) === 1) {
        canActivate = true;
        this.route.navigate(['/restaurant-panel']);
      } else {
        this.route.navigate(['/admin-panel']);
      }
    }
    return canActivate;
  }
}
