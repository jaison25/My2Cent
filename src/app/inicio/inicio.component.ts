import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logOut(){
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('mail');
    sessionStorage.removeItem('nombre');
    location.href="/";
  }

}
