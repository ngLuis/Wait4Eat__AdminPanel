import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Product.interface';
import { ArrayUtils } from '../utils/Array.utils';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Array<Product> = [
    {id: 0, name: 'Hamburguesa 100% vacuno', description: 'Jugosa hamburguesa', price: 9.85, category: 'food', idRestaurant: 0, imageSrc: 'assets/img/carousel/2.jpg'},
    {id: 1, name: 'Coca.Cola', description: 'Refresco con gas', price: 1.20, category: 'drink', idRestaurant: 2, imageSrc: 'assets/img/carousel/1.jpg'},
    {id: 2, name: 'Cerveza', description: 'Refresco con gas', price: 1.20, category: 'drink', idRestaurant: 0, imageSrc: 'assets/img/carousel/4.jpg'},
    {id: 3, name: 'Patatas Fritas', description: 'Patatas fritas con nuestra mejor salsa campera', price: 3.58, category: 'food', idRestaurant: 0, imageSrc: 'assets/img/carousel/2.jpg'},
  ]

  constructor() { }

  getProducts() {
      return this.products;
  }

  getProductById(id) {
    let index = this.products.findIndex( product => product.id === id);
    return this.products[index];
  }

  getProductsByIdRestaurant(idRestaurant) {
    let productsByRestaurant: Array<Product> = [];
    this.products.map( product => {
      if ( product.idRestaurant === idRestaurant ) {
        productsByRestaurant.push(product);
      }
    });
    return productsByRestaurant;
  }

  getNumberOfFood(idRestaurant) {
    return this.getProductsByIdRestaurant(idRestaurant).filter( product => product.category === 'food');
  }

  getNumberOfDrink(idRestaurant) {
    return this.getProductsByIdRestaurant(idRestaurant).filter( product => product.category === 'drink');
  }

  insert(product) {
    let length = this.products.length;
    product.id = ArrayUtils.getLastInsertId(this.products);
    this.products.splice(length, 0, product);
  }

  update(id, product) {
    let index = this.products.findIndex( product => product.id === id);
    this.products.splice(index, 1, product);
  }

  deleteProductById(id) {
    let index = this.products.findIndex( product => product.id === id);
    this.products.splice(index, 1);
  }
}
