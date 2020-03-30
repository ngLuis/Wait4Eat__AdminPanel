import { Component, OnInit, Input } from '@angular/core';
import { faSignOutAlt, faStore } from '@fortawesome/free-solid-svg-icons';
import { MenuOption } from '../../interfaces/MenuOption.interface';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { RestaurantsService } from '../../services/restaurants.service';

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
    let restaurants = this.restaurantService.getRestaurantsByOwner(parseInt(this.cookieService.get('w4e-id')));
    if ( restaurants.length > 1 ) {
      this.showRestaurantsOption = true;
    }
  }

  logOut() {
    this.cookieService.delete('w4e-email');
    this.cookieService.delete('w4e-type');
    this.cookieService.delete('w4e-id');
    this.cookieService.delete('w4e-restaurant');
    this.router.navigate(['/login']);
  }

  backToRestaurants() {
    this.cookieService.delete('w4e-restaurant');
    this.router.navigate(['/restaurant-panel']);
  }

}
