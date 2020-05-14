import { Injectable } from '@angular/core';
import { Order } from '../interfaces/Order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  ordersList: Array<Order> = [
    {id: 1025, date: '10/1/2020', time: '22:22', state: 1, price: 35.85, idRestaurant: 0},
    {id: 1026, date: '12/1/2020', time: '22:22', state: 1, price: 35.85, idRestaurant: 0},
    {id: 1027, date: '13/2/2020', time: '22:22', state: 1, price: 35.85, idRestaurant: 0},
    {id: 1028, date: '14/3/2020', time: '22:22', state: 1, price: 35.85, idRestaurant: 0},
    {id: 1029, date: '16/3/2020', time: '22:22', state: 1, price: 35.85, idRestaurant: 0},
    {id: 1030, date: '16/4/2020', time: '22:22', state: 1, price: 35.85, idRestaurant: 0},
    {id: 1031, date: '18/4/2020', time: '22:22', state: 1, price: 35.85, idRestaurant: 0},
    {id: 1032, date: '20/4/2020', time: '22:22', state: 1, price: 35.85, idRestaurant: 0},
    {id: 1033, date: '21/4/2020', time: '22:22', state: 1, price: 35.85, idRestaurant: 0},
    {id: 1034, date: '25/4/2020', time: '22:22', state: 0, price: 35.85, idRestaurant: 0},
    {id: 1035, date: '10/4/2020', time: '22:22', state: 0, price: 35.85, idRestaurant: 0},
    {id: 1036, date: '10/4/2020', time: '22:22', state: 0, price: 35.85, idRestaurant: 0},
    {id: 1037, date: '10/4/2020', time: '22:22', state: 0, price: 35.85, idRestaurant: 0},
    {id: 1038, date: '10/4/2020', time: '22:22', state: 0, price: 35.85, idRestaurant: 0},
    {id: 1039, date: '10/3/2020', time: '22:22', state: 0, price: 35.85, idRestaurant: 2},
    {id: 1040, date: '10/3/2020', time: '22:22', state: 0, price: 35.85, idRestaurant: 2},
    {id: 1041, date: '10/4/2020', time: '22:22', state: 0, price: 35.85, idRestaurant: 2},
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

  getOrdersByState(idRestaurant, state) {
    return this.getAllOrders(idRestaurant).filter( order => order.state === state);
  }

  getOrdersByMonth(idRestaurant) {
    let allPayedOrders = this.getOrdersByState(idRestaurant, 1);
    let orderByMonth = [[],[],[],[],[],[],[],[],[],[],[],[]];

    allPayedOrders.map(order => {
      let dateSplitted = order.date.split('/');
      let dateParsed = new Date(parseInt(dateSplitted[2]),parseInt(dateSplitted[1]),parseInt(dateSplitted[0]));
      orderByMonth[dateParsed.getMonth()-1].push(order);
    })

    return orderByMonth;
  }
}
