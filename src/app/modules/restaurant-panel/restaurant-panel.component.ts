import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'src/app/shared/services/restaurants.service';
import { CookieService } from 'src/app/shared/services/cookie.service';
import { Restaurant } from 'src/app/shared/interfaces/Restaurant.interface';
import { Router } from '@angular/router';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-restaurant-panel',
  templateUrl: './restaurant-panel.component.html',
  styleUrls: ['./restaurant-panel.component.scss']
})
export class RestaurantPanelComponent implements OnInit {

  restaurants: Array<Restaurant>;
  faSignOutAlt = faSignOutAlt;

  constructor(
    private restaurantService: RestaurantsService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
    this.restaurants = this.restaurantService.getRestaurantsByOwner(parseInt(this.cookieService.getCookie('w4e-id')));
    if (this.restaurants.length === 1) {
      let id = this.restaurants[0].id;
      this.cookieService.createCookie('w4e-restaurnt', id);
      this.router.navigate(['/restaurant-panel/' + id]);
    }
  }

  registerRestaurantManipulation(idRestaurant) {
    this.cookieService.createCookie('w4e-restaurant', idRestaurant);
    this.router.navigate(['/restaurant-panel/'+idRestaurant]);
  }

  logOut() {
    this.cookieService.deleteCookie('w4e-email');
    this.cookieService.deleteCookie('w4e-type');
    this.cookieService.deleteCookie('w4e-id');
    this.cookieService.deleteCookie('w4e-restaurant');
    this.router.navigate(['/login']);
  }

}
