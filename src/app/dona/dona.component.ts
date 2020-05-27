import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {
  nombre: string;

  public doughnutChartLabels = ['ingresos', 'Gastos'];
  public doughnutChartData = [70,45];
  public doughnutChartType = 'doughnut';
  constructor() {
    this.nombre = JSON.parse(sessionStorage.getItem('nombre'));
   }

  ngOnInit(): void {
  }

}
