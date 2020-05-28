import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CuentasService } from '../services/cuentas/cuentas.service';
import { AccountResponse} from '../interfaces/accountResponse';
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

  constructor(private route: ActivatedRoute, private accounts: CuentasService) {   
    this.nombre = JSON.parse(sessionStorage.getItem('nombre'));
    this.idAccount = this.route.snapshot.paramMap.get('id');
    this.getDetailAccounts();
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
  getDetailAccounts(){
    this.accounts.getAccounts(this.idAccount).subscribe((response: Response<AccountResponse>) => {
      this.nombreCuenta = response.data.AccountName;
      this.total = response.data.AccountTotal;
      })
  }

}
