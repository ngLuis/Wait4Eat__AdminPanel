import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CanActivate, Router } from '@angular/router';

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
      let userType = this.cookieService.get('w4e-type');
      if (parseInt(userType) === 1) {
        canActivate = true;
        this.route.navigate(['/restaurant-panel']);
      } else {
        this.route.navigate(['/login']);
      }
    }
    return canActivate;
  }
}
