import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userType'
})
export class UserTypePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let userType: string = 'Normal';

    if (value === 1 || value === '1') {
      userType = 'Propietario';
    } else if (value === 2 || value === '2') {
      userType = 'Admin';
    }

    return userType;
  }

}
