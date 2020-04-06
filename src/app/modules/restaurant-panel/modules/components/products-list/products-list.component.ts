import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Product } from 'src/app/shared/interfaces/Product.interface';
import { Form } from 'src/app/shared/enums/form.enum';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { CrudDialogComponent } from 'src/app/shared/components/crud-dialog/crud-dialog.component';
import { ToastService } from 'src/app/shared/services/toast.service';
import { CookieService } from 'src/app/shared/services/cookie.service';

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
    private matDialog: MatDialog,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.refreshProductsList();
  }

  deleteProduct(product) {
    this.openModalConfirmation().afterClosed().subscribe(dialogResponse => {
      if (dialogResponse) {
        this.productService.deleteProductById(product.id);
        this.refreshProductsList();
        this.toastService.showSuccess('Operación Correcta', 'Producto borrado satisfactoriamente');
      } else {
        this.toastService.showError('Operación Fallida', 'No hemos podido eliminar el producto');
      }
    })
  }

  updateProduct(product) {
    this.openCrudDialog('update', product).afterClosed().subscribe(response => {
      if ( response !== undefined ) {
        let productToUpdate: Product = {
          id: product.id, 
          name: response.productName, 
          description: response.productDescription,
          price: response.productPrice, 
          category: response.productCategory, 
          idRestaurant: parseInt(this.cookieService.getCookie('w4e-restaurant'))
        };
        this.productService.update(product.id, productToUpdate);
        this.refreshProductsList();
        this.toastService.showSuccess('Operación Exitosa', 'Producto actualizado correctamente');
      } else {
        this.toastService.showError('Operación Fallida', 'No hemos podido actualizar el producto');
      }
    })
  }

  refreshProductsList() {
    this.products = this.productService.getProductsByIdRestaurant(parseInt(this.cookieService.getCookie('w4e-restaurant')));
  }

  openModalConfirmation() {
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

  createNewProduct() {
    this.openCrudDialog().afterClosed().subscribe(response => {
      if (response !== undefined ) {
        let product: Product = {
          id: 60, 
          name: response.productName, 
          description: response.productDescription,
          price: response.productPrice, 
          category: response.productCategory, 
          idRestaurant: parseInt(this.cookieService.getCookie('w4e-restaurant'))
        };
        this.productService.insert(product);
        this.refreshProductsList();
        this.toastService.showSuccess('Operación Correcta', 'El producto se ha creado satisfactoriamente');
      } else {
        this.toastService.showError('Operación fallida', 'El producto no se ha podido crear');
      }
    });
  }

  openCrudDialog(type = null, product = null) {
    return this.matDialog.open(CrudDialogComponent, {
      data: {
        'title':'Crear producto',
        'buttonText':'Crear',
        'formType': Form.crudProduct,
        'type': type,
        'itemData': product
      }
    })
  }

  clearData(clearData) {
    if (clearData) {
      this.refreshProductsList();
    }
  }

  filterData(filtering) {
    this.refreshProductsList();

    let name = filtering.productNameFilter;
    let price = filtering.productPriceFilter;
    let category = filtering.productCategoryFilter;
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
