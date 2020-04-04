import { Component, OnInit } from '@angular/core';
import { MenuOption } from 'src/app/shared/interfaces/MenuOption.interface';
import { faStore, faHome, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  constructor() { }

  regularUrl = '/admin-panel/';

  options: Array<MenuOption> = [
    {name: 'Inicio', icon: faHome, routeLink: this.regularUrl + '/home'},
    {name: 'Restaurantes', icon: faStore, routeLink: this.regularUrl + '/restaurant-list'},
    {name: 'Usuarios', icon: faUsers, routeLink: this.regularUrl + '/'}
  ]

  ngOnInit(): void {
  }

}
