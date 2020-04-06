import { Injectable } from '@angular/core';
import * as Cookies from 'js-cookie';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() { }

  createCookie(key, value) {
    Cookies.set(key, value);
  }

  getCookie(key) {
    return Cookies.get(key);
  }

  deleteCookie(key) {
    Cookies.remove(key);
  }

  check(key) {
   return Cookies.get(key) !== undefined ? true : false;
  }
}
