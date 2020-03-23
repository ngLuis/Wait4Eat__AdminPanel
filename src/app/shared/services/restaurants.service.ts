import { Injectable } from '@angular/core';
import { Restaurant } from '../interfaces/Restaurant.interface';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  restaurants: Array<Restaurant> = [
    {id: 0, name: 'Pizzeria Toni', cif: 'A54523652F', idOwner: 1},
    {id: 1, name: 'Mc Donalds', cif: 'E85632541A', idOwner: 2},
    {id: 2, name: 'Goiko Grill', cif: 'E85632541A', idOwner: 1},
  ]

  constructor() { }

  getRestaurantsByOwner(idOwner) {
    let ownerRestaurants: Array<Restaurant> = [];
    this.restaurants.map( (restaurant) => {
      if (restaurant.idOwner === idOwner) {
        ownerRestaurants.push(restaurant);
      }
    })
    return ownerRestaurants;
  }
}
