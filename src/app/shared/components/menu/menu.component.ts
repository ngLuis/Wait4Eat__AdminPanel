import { Component, OnInit, Input } from '@angular/core';
import { faSignOutAlt, faStore } from '@fortawesome/free-solid-svg-icons';
import { MenuOption } from '../../interfaces/MenuOption.interface';
import { Router } from '@angular/router';
import { RestaurantsService } from '../../services/restaurants.service';
import { CookieService } from '../../services/cookie.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  faSignOutAlt = faSignOutAlt;
  faStore = faStore;

  showRestaurantsOption: boolean = false;

  @Input() options: Array<MenuOption>;

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private restaurantService: RestaurantsService
  ) { }

  ngOnInit(): void {
    let restaurants = this.restaurantService.getRestaurantsByOwner(parseInt(this.cookieService.getCookie('w4e-id')));
    if ( restaurants.length > 1 ) {
      this.showRestaurantsOption = true;
    }
  }

  logOut() {
    this.cookieService.deleteCookie('w4e-email');
    this.cookieService.deleteCookie('w4e-type');
    this.cookieService.deleteCookie('w4e-id');
    this.cookieService.deleteCookie('w4e-restaurant');
    this.router.navigate(['/login']);
  }

  backToRestaurants() {
    this.cookieService.deleteCookie('w4e-restaurant');
    this.router.navigate(['/restaurant-panel']);
  }

}
