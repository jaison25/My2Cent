import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { Color } from 'ng2-charts';
import { CuentasService } from "../services/cuentas/cuentas.service";
import { ChartAccountResponse } from "../interfaces/chartAccountResponse";
import { Response } from "../interfaces/response";


@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css'],
})
export class InicialComponent implements OnInit {
  nombre: string;

  public doughnutChartLabels = ['ingresos', 'Gastos'];
  public doughnutChartData = [70, 45];
  public doughnutChartType = 'doughnut';

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true

  };
  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [];


  constructor(private chartCuentas: CuentasService) {
    this.nombre = JSON.parse(sessionStorage.getItem('nombre'));
    this.getCharAccount();
  }


  ngOnInit() {
  }


  logOut() {
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('mail');
    sessionStorage.removeItem('nombre');
    location.href = "/";
  }

  getCharAccount() {
    const id = JSON.parse(sessionStorage.getItem("id"));
    this.chartCuentas.getCharAccount(id).subscribe((response: Response<ChartAccountResponse>) => {
      this.barChartLabels = response.data.accountName;
      this.barChartData = [
        { data: response.data.incomes, label: "Ingresos" },
        { data: response.data.spending, label: "Gastos" }
      ]
    })
  }

}
