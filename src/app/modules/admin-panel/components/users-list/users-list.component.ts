import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/interfaces/User.interface';
import { AuthService } from 'src/app/shared/services/auth.service';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastService } from 'src/app/shared/services/toast.service';
import { Form } from 'src/app/shared/enums/form.enum';
import { CrudDialogComponent } from 'src/app/shared/components/crud-dialog/crud-dialog.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: Array<User> = [];
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;

  constructor(
    private authService: AuthService,
    private matDialog: MatDialog,
    private toastServie: ToastService,
  ) { }

  ngOnInit(): void {
    this.refreshData();
  }

  deleteUser(userId) {
    this.openModalConfirmation().afterClosed().subscribe( action => {
      if (action) {
        this.authService.removeUser(userId);
        this.toastServie.showSuccess('Operación realizada con éxito', 'El usuario ha sido eliminado');
      } else {
        this.toastServie.showError('Operación fallida', 'No hemos podido eliminar al usuario');
      }
    })
  }

  createUser() {
    this.openCrudDialog().afterClosed().subscribe( response => {
      if ( response !== undefined ) {
        console.log(response)
        let user = {
          id: 1050,
          username: response.userName,
          password: response.userPassword,
          email: response.userEmail,
          phoneNumber: response.userPhonenumber,
          type: parseInt(response.userType)
        }
        this.authService.createUser(user);
        this.refreshData();
        this.toastServie.showSuccess('Operación Correcta', 'El usuario se ha creado con éxito');
      } else {
        this.toastServie.showError('Operación Erronea', 'El usuario no se ha podido crear');
      }
    })
  }

  updateUser(user){
    this.openCrudDialog('update', user).afterClosed().subscribe(response => {
      if ( response !== undefined ) {
        console.log(response)
        let userUpdated = {
          id: user.id,
          username: response.userName,
          password: response.userPassword,
          email: response.userEmail,
          phoneNumber: response.userPhonenumber,
          type: parseInt(response.userType)
        }
        this.authService.updateUser(user.id, userUpdated);
        this.refreshData();
        this.toastServie.showSuccess('Operación Correcta', 'El usuario se ha actualizado con éxito');
      } else {
        this.toastServie.showError('Operación Erronea', 'El usuario no se ha podido actualizar');
      }
    })
  }

  openModalConfirmation() {
    return this.matDialog.open(ConfirmationDialogComponent, {
      width: '500px',
      height: '250px',
      data: {
        'title':'Borrar usuario',
        'description':'¿Deseas borrar el usuario?',
        'buttonText':'Eliminar'
      }
    });
  }

  openCrudDialog(type = null, product = null) {
    return this.matDialog.open(CrudDialogComponent, {
      data: {
        'title':'Crear usuario',
        'buttonText':'Crear',
        'formType': Form.crudUsers,
        'type': type,
        'itemData': product
      }
    })
  }

  refreshData() {
    this.users = this.authService.getAllUsers();
  }

}
