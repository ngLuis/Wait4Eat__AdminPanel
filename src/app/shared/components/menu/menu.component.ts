import { Component, OnInit, Input } from '@angular/core';
import { faHome, faUtensils, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { MenuOption } from '../../interfaces/MenuOption.interface';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  faSignOutAlt = faSignOutAlt;

  @Input() options: Array<MenuOption>;

  constructor(
    private router: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
  }

  logOut() {
    this.cookieService.delete('w4e-email');
    this.cookieService.delete('w4e-type');
    this.cookieService.delete('w4e-id');
    this.cookieService.delete('w4e-restaurant');
    this.router.navigate(['/login']);
  }

}
