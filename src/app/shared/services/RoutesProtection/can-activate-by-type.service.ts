import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateByTypeGuard implements CanActivate{

  constructor(
    private cookieService: CookieService,
    private router: Router
  ) { }

  canActivate() {
    let canActivate = false;
    if (parseInt(this.cookieService.get('w4e-type')) === 1) {
        canActivate = true;
    } else {
      this.router.navigate(['/']);
    }
    return canActivate;
  }
}
