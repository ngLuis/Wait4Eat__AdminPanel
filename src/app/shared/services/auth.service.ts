import { Injectable } from '@angular/core';
import { User } from '../interfaces/User.interface';
import { ArrayUtils } from '../utils/Array.utils';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usersArray: Array<User> = [
    {id: 0, username: 'luis', password: 'adminadmin', email: 'luis@gmail.com', phoneNumber: 524123658, type: 0, image: 'default'},
    {id: 1, username: 'toni', password: 'adminadmin', email: 'toni@gmail.com', phoneNumber: 452985632, type: 1, image: 'default'},
    {id: 2, username: 'josemi', password: 'adminadmin', email: 'josemi@gmail.com', phoneNumber: 852852741, type: 2, image: 'default'},
    {id: 3, username: 'cesar', password: 'adminadmin', email: 'cesar@gmail.com', phoneNumber: 632563236, type: 1, image: 'default'},
  ]

  constructor() { }

  makeLogin(email, password): User {
    let user: User = this.findUser(email);

    if (user !== undefined) {
      if (!(user.email === email && user.password === password)) {
        user = undefined;
      }
    }

    return user;
  }

  findUser(email): User {
    let userIndex = this.usersArray.findIndex( (user) => user.email === email);
    return this.usersArray[userIndex];
  }

  createUser(user) {
    user.id = ArrayUtils.getLastInsertId(this.usersArray);
    this.usersArray.push(user);
  }

  updateUser(userId, user) {
    let userIndex = this.usersArray.findIndex( (user) => user.id === userId);
    this.usersArray.splice(userIndex, 1, user);
  }

  removeUser(userId) {
    let userIndex = this.usersArray.findIndex( (user) => user.id === userId);
    this.usersArray.splice(userIndex, 1);
  }

  getAllUsers() {
    return this.usersArray;
  }

  getUsersByType(type) {
    return this.usersArray.filter(user => user.type === type)
  }

  isEmailInUse(email) {
    return this.usersArray.find( user => user.email.toLowerCase() === email.toLowerCase());
  }
}
