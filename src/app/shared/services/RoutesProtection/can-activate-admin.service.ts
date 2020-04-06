import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from '../cookie.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateAdmin implements CanActivate{

  constructor(
    private cookieService: CookieService,
    private router: Router
  ) { }

  canActivate() {
    let canActivate = false;
    if (parseInt(this.cookieService.getCookie('w4e-type')) === 2) {
        canActivate = true;
    } else {
      this.router.navigate(['/']);
    }
    return canActivate;
  }
}
