import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'src/app/shared/services/restaurants.service';
import { CookieService } from 'ngx-cookie-service';
import { Restaurant } from 'src/app/shared/interfaces/Restaurant.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-panel',
  templateUrl: './restaurant-panel.component.html',
  styleUrls: ['./restaurant-panel.component.scss']
})
export class RestaurantPanelComponent implements OnInit {

  restaurants: Array<Restaurant>;

  constructor(
    private restaurantService: RestaurantsService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
    this.restaurants = this.restaurantService.getRestaurantsByOwner(parseInt(this.cookieService.get('w4e-id')));
  }

  registerRestaurantManipulation(idRestaurant) {
    this.cookieService.set('w4e-restaurant', idRestaurant.toString());
    this.router.navigate(['/restaurant-panel/'+idRestaurant]);
  }

}
