import { Injectable } from '@angular/core';
import { Order } from '../interfaces/Order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  ordersList: Array<Order> = [
    {id: 1025, date: '10/5/2020', time: '22:22', state: 1, price: 35.85, idRestaurant: 0},
    {id: 1026, date: '10/5/2020', time: '22:22', state: 1, price: 35.85, idRestaurant: 0},
    {id: 1027, date: '10/5/2020', time: '22:22', state: 1, price: 35.85, idRestaurant: 0},
    {id: 1028, date: '10/5/2020', time: '22:22', state: 1, price: 35.85, idRestaurant: 0},
    {id: 1029, date: '10/5/2020', time: '22:22', state: 1, price: 35.85, idRestaurant: 0},
    {id: 1030, date: '10/5/2020', time: '22:22', state: 1, price: 35.85, idRestaurant: 0},
    {id: 1031, date: '10/5/2020', time: '22:22', state: 1, price: 35.85, idRestaurant: 0},
    {id: 1032, date: '10/5/2020', time: '22:22', state: 1, price: 35.85, idRestaurant: 0},
    {id: 1033, date: '10/5/2020', time: '22:22', state: 1, price: 35.85, idRestaurant: 0},
    {id: 1034, date: '10/5/2020', time: '22:22', state: 0, price: 35.85, idRestaurant: 0},
    {id: 1035, date: '10/5/2020', time: '22:22', state: 0, price: 35.85, idRestaurant: 0},
    {id: 1036, date: '10/5/2020', time: '22:22', state: 0, price: 35.85, idRestaurant: 0},
    {id: 1037, date: '10/5/2020', time: '22:22', state: 0, price: 35.85, idRestaurant: 0},
    {id: 1038, date: '10/5/2020', time: '22:22', state: 0, price: 35.85, idRestaurant: 0},
    {id: 1039, date: '10/5/2020', time: '22:22', state: 0, price: 35.85, idRestaurant: 2},
    {id: 1040, date: '10/5/2020', time: '22:22', state: 0, price: 35.85, idRestaurant: 2},
    {id: 1041, date: '10/5/2020', time: '22:22', state: 0, price: 35.85, idRestaurant: 2},
  ]

  constructor() { }

  getAllOrders(idRestaurant) {
    return this.ordersList.filter( order => order.idRestaurant === parseInt(idRestaurant));
  }

  payOrder(id) {
    this.ordersList.map( order => {
      if (order.id === id) {
        order.state = 1;
      }
    });
  }
}
