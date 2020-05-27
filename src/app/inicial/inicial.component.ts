import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css'],
})
export class InicialComponent  implements OnInit{
  nombre: string;
  
  public doughnutChartLabels = ['ingresos', 'Gastos'];
  public doughnutChartData = [70,45];
  public doughnutChartType = 'doughnut';

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive : true

  };
  public barChartLabels = ['2015','2016','2017','2018','2019','2020'];
  public barChartType = 'bar';
  public barChartLegend = true;
  
  public barChartData = [
    {data: [ 59, 80, 81, 56, 55, 40], label: 'Ingresos'},
    {data: [ 50, 40, 50, 53, 49, 37], label: 'Gastos'}
  ];
   

  constructor() { 
    this.nombre = JSON.parse(sessionStorage.getItem('nombre'));
  }
  

  ngOnInit() {
  }


  logOut(){
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('mail');
    sessionStorage.removeItem('nombre');
    location.href="/";
  }

}
