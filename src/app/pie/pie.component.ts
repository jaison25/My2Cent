import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  nombre: string;

  public pieChartLabels = ['ingresos', 'Gastos'];
  public pieChartData = [70,45];
  public pieChartType = 'pie';

  constructor() {
    this.nombre = JSON.parse(sessionStorage.getItem('nombre'));
   }

  ngOnInit(): void {
  }

}
