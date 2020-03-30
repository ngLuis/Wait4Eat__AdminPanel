import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page404',
  templateUrl: './error-page404.component.html',
  styleUrls: ['./error-page404.component.scss']
})
export class ErrorPage404Component implements OnInit {

  route: string = '/login';

  constructor() { }

  ngOnInit(): void {
  }

}
