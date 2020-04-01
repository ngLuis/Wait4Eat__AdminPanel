import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet, Color } from 'ng2-charts';
import { ProductsService } from 'src/app/shared/services/products.service';
import { CookieService } from 'ngx-cookie-service';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { threadId } from 'worker_threads';
import { OrdersService } from 'src/app/shared/services/orders.service';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  private idRestaurant = this.cookiService.get('w4e-restaurant');
  private months: Array<string> = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

  doughnutChartLabels: Label[] = ['Comida','Bebida'];
  doughnutChartData: MultiDataSet = [
    [
      this.productService.getNumberOfFood(parseInt(this.idRestaurant)).length,
      this.productService.getNumberOfDrink(parseInt(this.idRestaurant)).length
    ]
  ]
  doughnutChartType: ChartType = 'doughnut';
  doughnutLegend = true;

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = this.getMonthsToShow();
  barChartType: ChartType = 'bar';
  barChartLegend = true;

  barChartData: ChartDataSets[] = [
    { data: this.getOrdersNumberByMonth(this.idRestaurant), label: 'Pedidos durante este año '+new Date().getFullYear() }
  ];


  constructor(
    private productService: ProductsService,
    private orderService: OrdersService,
    private cookiService: CookieService
  ) { }

  ngOnInit(): void {
    
  }

  getMonthsToShow() {
    let monthsToShow: Array<string> = [];
    let monthNumber: number = new Date().getMonth();
    this.months.forEach((month,index) => {
      if (index <= monthNumber) {
        monthsToShow.push(month);
      }
    })
    return monthsToShow;
  }

  getOrdersNumberByMonth(idRestaurant) {
    let ordersNumber: Array<number> = [];
    let orders = this.orderService.getOrdersByMonth(idRestaurant);
    let monthNumber: number = new Date().getMonth();

    for (let i = 0; i <= monthNumber; i++) {
      ordersNumber.push(orders[i].length);
    } 

    return ordersNumber;
  }

}
