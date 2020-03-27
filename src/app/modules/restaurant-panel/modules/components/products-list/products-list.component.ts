import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Product } from 'src/app/shared/interfaces/Product.interface';
import { CookieService } from 'ngx-cookie-service';
import { Form } from 'src/app/shared/enums/form.enum';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Array<Product>;
  formType: Form = Form.filterProducts;

  constructor(
    private productService: ProductsService,
    private cookieService: CookieService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.refreshProductsList();
  }

  deleteProduct(product) {
    this.openModalConfirmation().afterClosed().subscribe(dialogResponse => {
      if (dialogResponse) {
        this.productService.deleteProductById(product.id);
        this.refreshProductsList();
      }
    })
  }

  updateProduct(product) {
  }

  refreshProductsList() {
    this.products = this.productService.getProductsByIdRestaurant(parseInt(this.cookieService.get('w4e-restaurant')));
  }

  openModalConfirmation() {
    const dialogConfig = new MatDialogConfig();
    return this.matDialog.open(ConfirmationDialogComponent, {
      width: '500px',
      height: '250px',
      data: {
        'title':'Borrar producto',
        'description':'¿Deseas borrar el producto?',
        'buttonText':'Eliminar'
      }
    });
  }

  clearData(clearData) {
    if (clearData) {
      this.refreshProductsList();
    }
  }

  filterData(filtering) {
    this.refreshProductsList();

    let name = filtering.productName;
    let price = filtering.productPrice;
    let category = filtering.productCategory;
    let productsFiltered: Array<Product> = [];

    let arrayName: Array<Product> = [];
    let arrayPrice: Array<Product> = [];
    let arrayCategory: Array<Product> = [];

    let queryName = name.toLowerCase();
    arrayName = this.filterOneArray('name', queryName);


    let queryPrice = price.toLowerCase();
    arrayPrice = this.filterOneArray('price', queryPrice);
    
    let queryCategory = category.toLowerCase();
    arrayCategory = this.filterOneArray('category', queryCategory);

    productsFiltered = this.intersect(arrayName, arrayPrice);
    productsFiltered = this.intersect(productsFiltered, arrayCategory);

    this.products = productsFiltered;
  }

  intersect(arr1, arr2) {
    return arr1.filter( element => arr2.indexOf(element) > -1);
  }

  filterOneArray(productFilter, query) {
    let array: Array<Product> = [];
    this.products.filter( product => {
      if ( productFilter === 'name' ) {
        if ( product.name.toLowerCase().indexOf(query) >= 0 ) {
          array.push(product);
        }
      } else if ( productFilter === 'price' ) {
        if ( product.price.toString().toLowerCase().indexOf(query) >= 0 ) {
          array.push(product);
        }
      } else if ( productFilter === 'category' ) {
        if ( product.category.toLowerCase().indexOf(query) >= 0 ) {
          array.push(product);
        }
      }
    })
    return array;
  }
}
