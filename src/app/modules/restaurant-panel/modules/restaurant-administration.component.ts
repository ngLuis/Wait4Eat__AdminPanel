import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/shared/enums/form.enum';
import { MenuOption } from 'src/app/shared/interfaces/MenuOption.interface';
import { faHome, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-administration',
  templateUrl: './restaurant-administration.component.html',
  styleUrls: ['./restaurant-administration.component.scss']
})
export class RestaurantAdministrationComponent implements OnInit {

  regularUrl = '/restaurant-panel/' + this.router.snapshot.params['id'];

  options: Array<MenuOption> = [
    {name: 'Inicio', icon: faHome, routeLink: this.regularUrl + '/home'},
    {name: 'Productos', icon: faUtensils, routeLink: this.regularUrl + '/products'}
  ]

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
  }
}