import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { RestaurantsService } from '../restaurants.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateByUserRestaurant implements CanActivate{

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private restaurantService: RestaurantsService
  ) { }

  canActivate(route: ActivatedRouteSnapshot) {
    let canActivate = false;
    let ownId = parseInt(this.cookieService.get('w4e-id'));
    let restaurantIdToActivate = parseInt(route.paramMap.get('id'));
    let ownRestaurants = this.restaurantService.getRestaurantsByOwner(ownId);

    ownRestaurants.map( restaurant => {
        if ( restaurant.id === restaurantIdToActivate ) {
            canActivate = true;
        }
    });

    if ( !canActivate ) {
        this.router.navigate(['/restaurant-panel']);
    }

    return canActivate;
  }
}
