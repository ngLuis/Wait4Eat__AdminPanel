import { Component, OnInit, Input } from '@angular/core';
import { faHome, faUtensils, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { MenuOption } from '../../interfaces/MenuOption.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  faSignOutAlt = faSignOutAlt;

  @Input() options: Array<MenuOption>;

  constructor() { }

  ngOnInit(): void {
  }

}
