import { Component, OnInit } from '@angular/core';
import { CuentasService } from '../services/cuentas/cuentas.service';
import { Response } from '../interfaces/response';
import { AccountResponse } from '../interfaces/accountResponse';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {
  nombre: string;

  listaAccounts = [];
  miscuentas = [];
  newAccountObject = {
    AccountName: '',
    AccountUserId: '',
    AccountTotal: ''
  }

  constructor(private allaccounts: CuentasService) { 
    this.nombre = JSON.parse(sessionStorage.getItem('nombre'));
    this.getAllAccounts();
  }
  
  getAllAccounts(){
    const idUser = JSON.parse(sessionStorage.getItem('id'));
    this.allaccounts.getAllAccounts(idUser).subscribe((response: Response<[AccountResponse]>) => {
        const arrayAccounts = response.data.map(cuenta => {
          return {
            idAccount: cuenta.AccountId,
            name: cuenta.AccountName,
            total: cuenta.AccountTotal
          }
        });

        this.miscuentas = arrayAccounts
    })
  }

  

  ngOnInit(): void {
    var btnAbrirPopup = document.getElementById("btn-agregar"),
    overlay = document.getElementById("overlay"),
    popup = document.getElementById("popup"),
    btnCerrarPopup = document.getElementById("btn-cerrar-popup");
    btnAbrirPopup.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active');

  });
  btnCerrarPopup.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
  });
  window.addEventListener("keyup",function(e){
    if(e.keyCode==27) {
      overlay.classList.remove('active');
      popup.classList.remove('active');
    }
    });
  }
  CreateAccount() {
    this.allaccounts.CreateAccounts(this.newAccountObject).subscribe((response: Response<AccountResponse>) => {
      this.newAccountObject.AccountUserId = JSON.parse(sessionStorage.getItem('id'));
      const isRegister = response.status;
           
    })
  }
  
}




