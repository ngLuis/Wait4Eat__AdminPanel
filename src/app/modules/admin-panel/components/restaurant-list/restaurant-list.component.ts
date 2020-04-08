import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'src/app/shared/services/restaurants.service';
import { Restaurant } from 'src/app/shared/interfaces/Restaurant.interface';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { ToastService } from 'src/app/shared/services/toast.service';
import { Form } from 'src/app/shared/enums/form.enum';
import { CrudDialogComponent } from 'src/app/shared/components/crud-dialog/crud-dialog.component';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {

  restaurants: Array<Restaurant> = [];
  formType: Form = Form.filterRestaurants;

  constructor(
    private restaurantService: RestaurantsService,
    private matDialog: MatDialog,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.refreshData();
  }

  createNewRestaurant() {
    this.openCrudDialog(null, null, 'Crear Restaurante').afterClosed().subscribe(response => {
      if ( response !== undefined ) {
        console.log(response)
        let restaurant = {
          id: 1050,
          name: response.restaurantName,
          cif: response.restaurantCif,
          idOwner: parseInt(response.restaurantOwner)
        }
        this.restaurantService.createRestaurant(restaurant);
        this.refreshData();
        this.toastService.showSuccess('Operación Correcta', 'El restaurante se ha creado con éxito');
      } else {
        this.toastService.showError('Operación Fallida', 'No hemos podido crear el restaurante');
      }
    })
  }

  updateRestaurant(restaurant) {
    this.openCrudDialog('update', restaurant, 'Actualizar Restaurante').afterClosed().subscribe( response => {
      if ( response !== undefined ) {
        console.log(response)
        let restaurantNew = {
          id: restaurant.id,
          name: response.restaurantName,
          cif: response.restaurantCif,
          idOwner: parseInt(response.restaurantOwner)
        }
        this.restaurantService.updateRestaurant(restaurant.id, restaurantNew);
        this.refreshData();
        this.toastService.showSuccess('Operación Correcta', 'El restaurante se ha actualizado con éxito');
      } else {
        this.toastService.showError('Operación Fallida', 'No hemos podido actualizar el restaurante');
      }
    });
  }

  deleteRestaurant(restaurant) {
    this.openModalConfirmation().afterClosed().subscribe(dialogResponse => {
      if (dialogResponse) {
        this.restaurantService.deleteRestaurant(restaurant.id);
        this.toastService.showSuccess('Borrado','El restaurante ha sido borrado correctamente');
      } else {
        this.toastService.showError('Operación Fallida','No se ha podido borrar el restaurante');
      }
    })
  }

  openModalConfirmation() {
    return this.matDialog.open(ConfirmationDialogComponent, {
      width: '500px',
      height: '250px',
      data: {
        'title':'Borrar restaurante',
        'description':'¿Deseas borrar el restaurante?',
        'buttonText':'Eliminar'
      }
    });
  }

  openCrudDialog(type = null, product = null, title) {
    return this.matDialog.open(CrudDialogComponent, {
      data: {
        'title': title,
        'buttonText':'Crear',
        'formType': Form.crudRestaurant,
        'type': type,
        'itemData': product
      }
    })
  }

  refreshData() {
    this.restaurants = this.restaurantService.getAllRestaurants();
  }

  filterData(filtering) {
    this.refreshData();

    let name = filtering.restaurantNameFilter;
    let cif = filtering.restaurantCifFilter;
    let restaurantsFiltered: Array<Restaurant> = [];

    let arrayName: Array<Restaurant> = [];
    let arrayCif: Array<Restaurant> = [];

    let queryName = name.toLowerCase();
    arrayName = this.filterOneArray('name', queryName);


    let queryCif = cif.toLowerCase();
    arrayCif = this.filterOneArray('cif', queryCif);

    restaurantsFiltered = this.intersect(arrayName, arrayCif);

    this.restaurants = restaurantsFiltered;
  }

  clearData($event) {
    if ($event) {
      this.refreshData();
    }
  }

  intersect(arr1, arr2) {
    return arr1.filter( element => arr2.indexOf(element) > -1);
  }

  filterOneArray(productFilter, query) {
    let array: Array<Restaurant> = [];
    this.restaurants.filter( product => {
      if ( productFilter === 'name' ) {
        if ( product.name.toLowerCase().indexOf(query) >= 0 ) {
          array.push(product);
        }
      } else if ( productFilter === 'cif' ) {
        if ( product.cif.toString().toLowerCase().indexOf(query) >= 0 ) {
          array.push(product);
        }
      }
    })
    return array;
  }

}
