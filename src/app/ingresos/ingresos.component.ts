import { Component, OnInit } from '@angular/core';
import { IngresosService } from '../services/ingresos/ingresos.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  NewIncome = {
    IncomeName: '',
    IncomeAmount: '',
    IncomeAccountID: '',
    IncomeDate: '',
    IncomePeriod: ''
  }
  constructor(private IngresosService: IngresosService) { }

  ngOnInit(): void {
  }

  CreateIncome() {
    this.IngresosService.CreateIncome(this.NewIncome).subscribe(data => {
    
      
    })
  }

}
