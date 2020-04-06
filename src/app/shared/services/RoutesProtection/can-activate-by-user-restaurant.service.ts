import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { RestaurantsService } from '../restaurants.service';
import { ToastService } from '../toast.service';
import { CookieService } from '../cookie.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateByUserRestaurantGuard implements CanActivate{

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private restaurantService: RestaurantsService,
    private toastService: ToastService
  ) { }

  canActivate(route: ActivatedRouteSnapshot) {
    let canActivate = false;
    let ownId = parseInt(this.cookieService.getCookie('w4e-id'));
    let restaurantIdToActivate = parseInt(route.paramMap.get('id'));
    let ownRestaurants = this.restaurantService.getRestaurantsByOwner(ownId);
    ownRestaurants.map( restaurant => {
        if ( restaurant.id === restaurantIdToActivate ) {
            canActivate = true;
            this.cookieService.createCookie('w4e-restaurant', restaurantIdToActivate);
        }
    });

    if ( !canActivate ) {
        this.toastService.showError('Acceso denegado', 'Solo puedes gestionar tus restaurantes');
        this.cookieService.deleteCookie('w4e-restaurant');
        this.router.navigate(['/restaurant-panel']);
    }

    return canActivate;
  }
}
