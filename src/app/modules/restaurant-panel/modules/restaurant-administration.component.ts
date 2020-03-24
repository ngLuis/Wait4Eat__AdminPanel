import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/shared/enums/form.enum';
import { MenuOption } from 'src/app/shared/interfaces/MenuOption.interface';
import { faHome, faUtensils } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-restaurant-administration',
  templateUrl: './restaurant-administration.component.html',
  styleUrls: ['./restaurant-administration.component.scss']
})
export class RestaurantAdministrationComponent implements OnInit {

  options: Array<MenuOption> = [
    {name: 'Inicio', icon: faHome, routeLink: '/login'},
    {name: 'Productos', icon: faUtensils, routeLink: '/products'}
  ]

  constructor() { }

  ngOnInit() {
  }
}
