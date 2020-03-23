import { Component } from '@angular/core';
import { CanActivateByUserLoggedGuard } from './shared/services/RoutesProtection/can-activate-by-user-logged.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wait4eatAdmin';

  constructor(
    private userLoggedRegirect: CanActivateByUserLoggedGuard
  ){
    // this.userLoggedRegirect.canActivate();
  }
}
