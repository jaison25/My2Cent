import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {

  public doughnutChartLabels = ['ingresos', 'Gastos'];
  public doughnutChartData = [70,45];
  public doughnutChartType = 'doughnut';
  constructor() { }

  ngOnInit(): void {
  }

}
