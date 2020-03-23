import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastr: ToastrService
  ) { }

  showSuccess(title, message) {
    this.toastr.success(message, title, {
      timeOut: 3000,
      progressBar: true,
      progressAnimation: 'increasing'
    });
  }

  showError(title, message) {
    this.toastr.error(message, title, {
      timeOut: 3000,
      progressBar: true,
      progressAnimation: 'increasing'
    });
  }
}
