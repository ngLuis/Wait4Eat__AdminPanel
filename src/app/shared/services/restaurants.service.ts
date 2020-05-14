import { Injectable } from '@angular/core';
import { Restaurant } from '../interfaces/Restaurant.interface';
import { ArrayUtils } from '../utils/Array.utils';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  restaurants: Array<Restaurant> = [
    {id: 0, name: 'Pizzeria Toni', cif: 'A54523652F', idOwner: 1},
    {id: 1, name: 'Mc Donalds', cif: 'E85632541A', idOwner: 1},
    {id: 2, name: 'Goiko Grill', cif: 'E85632541A', idOwner: 1},
  ]

  constructor() { }

  getRestaurantsByOwner(idOwner) {
    let ownerRestaurants: Array<Restaurant> = [];
    this.restaurants.map( (restaurant) => {
      if (restaurant.idOwner === parseInt(idOwner)) {
        ownerRestaurants.push(restaurant);
      }
    })
    return ownerRestaurants;
  }

  getAllRestaurants() {
    return this.restaurants;
  }

  createRestaurant(restaurant) {
    restaurant.id = ArrayUtils.getLastInsertId(this.restaurants);
    this.restaurants.splice(this.restaurants.length, 0, restaurant);
  }

  updateRestaurant(idRestaurant, newRestaurant) {
    let index = this.restaurants.findIndex( restaurant => restaurant.id === idRestaurant);
    this.restaurants.splice(index, 1, newRestaurant);
  }

  deleteRestaurant(idRestaurant) {
    let index = this.restaurants.findIndex( restaurant => restaurant.id === idRestaurant);
    this.restaurants.splice(index, 1);
  }
}
