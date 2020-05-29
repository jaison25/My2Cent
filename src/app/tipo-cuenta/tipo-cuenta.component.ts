import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CuentasService } from '../services/cuentas/cuentas.service';
import { IngresosService } from '../services/ingresos/ingresos.service';
import { GastosService } from '../services/gastos/gastos.service';
import { AccountResponse} from '../interfaces/accountResponse';
import { IncomesResponse } from "../interfaces/incomesResponce";
import { SpendingResponse } from "../interfaces/spendingResponse";
import { Response } from '../interfaces/response';


@Component({
  selector: 'app-tipo-cuenta',
  templateUrl: './tipo-cuenta.component.html',
  styleUrls: ['./tipo-cuenta.component.css']
})
export class TipoCuentaComponent implements OnInit {
  nombre: string;
  nombreCuenta: String;
  idAccount: string;
  total:number;

  misGastos = [];
  misIngresos = [];

  newIncomesObject = {
    IncomeName: '',
    IncomeAmount: '',
    IncomeAccountID: 0
  }
  newSpendingObject = {
    SpendingName: '',
    SpendingAmount: '',
    SpendingAccountID: 0
  }

  constructor(private route: ActivatedRoute, private accounts: CuentasService, private incomes: IngresosService, private spendigs: GastosService, private navigator: Router) {   
    this.nombre = JSON.parse(sessionStorage.getItem('nombre'));
    this.idAccount = this.route.snapshot.paramMap.get('id');
    this.getDetailAccounts();
    this.getAllIncomes();
    this.getAllSpendings();
  }

  ngOnInit(): void {
    var btnAbrirPopupIngresos = document.getElementById("btn-agregarIngresos" ),
        overlayIngresos = document.getElementById("overlayIngresos"),
        popupIngresos = document.getElementById("popupIngresos"),
        btnCerrarPopupIngresos = document.getElementById("btn-cerrar-popupIngresos");

    btnAbrirPopupIngresos.addEventListener('click', function(){
        overlayIngresos.classList.add('active');
        popupIngresos.classList.add('active');
    });

    btnCerrarPopupIngresos.addEventListener('click', function(){
      overlayIngresos.classList.remove('active');
      popupIngresos.classList.remove('active');
    });

    window.addEventListener("keyup",function(e){
      if(e.keyCode==27) {
        overlayIngresos.classList.remove('active');
        popupIngresos.classList.remove('active');
      }
    });
    var btnAbrirPopupGastos = document.getElementById("btn-agregarGastos" ),
        overlayGastos = document.getElementById("overlayGastos"),
        popupGastos = document.getElementById("popupGastos"),
        btnCerrarPopupGastos = document.getElementById("btn-cerrar-popupGastos");

    btnAbrirPopupGastos.addEventListener('click', function(){
        overlayGastos.classList.add('active');
        popupGastos.classList.add('active');
    });

    btnCerrarPopupGastos.addEventListener('click', function(){
      overlayGastos.classList.remove('active');
      popupGastos.classList.remove('active');
    });

    window.addEventListener("keyup",function(e){
      if(e.keyCode==27) {
        overlayGastos.classList.remove('active');
        popupGastos.classList.remove('active');
      }
    });
  }
  getDetailAccounts(){
    this.accounts.getAccounts(this.idAccount).subscribe((response: Response<AccountResponse>) => {
      this.nombreCuenta = response.data.AccountName;
      this.total = response.data.AccountTotal;
      })
  }
  getAllIncomes(){
    this.incomes.getIncome(this.idAccount).subscribe((response: Response<[IncomesResponse]>) => {
      console.log(response)
        const arrayIncomes = response.data.map(income => {
          return {
            idAccount: income.IncomeAccountID,
            name: income.IncomeName,
            total: income.IncomeAmount,
            idincome: income.IncomeId
          }
          
        });

        this.misIngresos = arrayIncomes
    })
  }
  getAllSpendings(){
    this.spendigs.getSpendings(this.idAccount).subscribe((response: Response<[SpendingResponse]>) => {
        const arraySpendins = response.data.map(spending => {
          return {
            idAccount: spending.SpendingAccountID,
            name: spending.SpendingName,
            total: spending.SpendingAmount,
            idspending: spending.SpendingId
          }
          
        });

        this.misGastos = arraySpendins
    })
  }
  CreateIncome() {
    this.newIncomesObject.IncomeAccountID = JSON.parse(this.idAccount);
    this.incomes.CreateIncome(this.newIncomesObject).subscribe((response: Response<IncomesResponse>) => {
     const isRegister = response.status;
     const btnCerrarPopupIngresos = document.getElementById("btn-cerrar-popupIngresos");
     btnCerrarPopupIngresos.click(); 
     this.getAllIncomes();
     this.getDetailAccounts();
    })
  }
  CreateSpending() {
    this.newSpendingObject.SpendingAccountID = JSON.parse(this.idAccount);
    this.spendigs.CreateSpendins(this.newSpendingObject).subscribe((response: Response<SpendingResponse>) => {
     const isRegister = response.status;
     const btnCerrarPopupGastos = document.getElementById("btn-cerrar-popupGastos");
     btnCerrarPopupGastos.click(); 
     this.getAllSpendings();
     this.getDetailAccounts();    
    })
  }

  

}
