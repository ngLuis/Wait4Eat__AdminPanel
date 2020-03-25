import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Product } from 'src/app/shared/interfaces/Product.interface';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Array<Product>;

  constructor(
    private productService: ProductsService,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.refreshProductsList();
  }

  deleteProduct(product) {
    this.productService.deleteProductById(product.id);
    this.refreshProductsList();
  }

  updateProduct(product) {

  }

  refreshProductsList() {
    this.products = this.productService.getProductsByIdRestaurant(parseInt(this.cookieService.get('w4e-restaurant')));
  }

}
