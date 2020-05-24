import { Component, OnInit } from '@angular/core';
import { CuentasService } from '../services/cuentas/cuentas.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {

  listaAccounts = [];
  miscuentas = [];
  IdUser = '1';

  constructor(private allaccounts: CuentasService) { }
  
  getAllAccounts(){
    this.allaccounts.getAllAccounts(
      data => {
        console.log(data)
        const arrayAccounts = data.cuentas.map(cuenta => {
          return {
            idAccount: cuenta.idAccount,
            name: cuenta.name,
            total: cuenta.user.total
          }
        });
        this.miscuentas = arrayAccounts
      }
    )
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

  

}
