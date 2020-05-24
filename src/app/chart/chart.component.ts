import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

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
   
  
    
  

  constructor() { }

  ngOnInit(): void {
  }

}
