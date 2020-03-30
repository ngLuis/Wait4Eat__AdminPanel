import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/shared/services/orders.service';
import { Order } from 'src/app/shared/interfaces/Order.interface';
import { CookieService } from 'ngx-cookie-service';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { ScannerModalComponent } from 'src/app/shared/components/scanner-modal/scanner-modal.component';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  orders: Array<Order> = [];
  qrCode: IconDefinition = faQrcode;

  constructor(
    private orderService: OrdersService,
    private coockieService: CookieService,
    private matDialog: MatDialog,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.orders = this.orderService.getAllOrders(this.coockieService.get('w4e-restaurant'));
  }

  payOrder(id) {
    this.orderService.payOrder(id);
  }

  validateOrder(idOrder) {
    this.openModalConfirmation().afterClosed().subscribe( validate => {
      if (validate) {
        this.payOrder(idOrder);
        this.showToastSuccess();
      } else {
        this.showToastError();
      }
    });
  }

  validateOrderWithReader() {
    this.openModalScanner().afterClosed().subscribe( validate => {
      if ( validate === 'H-542-6') {
        this.payOrder(1038);
        this.showToastSuccess();
      } else {
        this.showToastError();
      }
    });
  }

  openModalConfirmation() {
    return this.matDialog.open(ConfirmationDialogComponent, {
      width: '500px',
      height: '250px',
      data: {
        'title':'Validar pago',
        'description':'¿Deseas validar el pago?',
        'buttonText':'Validar'
      }
    });
  }

  openModalScanner() {
    return this.matDialog.open(ScannerModalComponent, {
      width: '250px',
      height: '250px',
    });
  }

  showToastSuccess() {
    this.toastService.showSuccess('Pago Exitoso', 'Pago realizado exitosamente');
  }

  showToastError() {
    this.toastService.showError('Pago Erroneo', 'El pago no se ha podido realizar');
  }

}
