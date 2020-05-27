import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  nombre : string;
  lastname: string;
  username: string;
  birth:string;
  mail: string;

  constructor() {
    this.nombre = JSON.parse(sessionStorage.getItem('nombre'));
    this.lastname = JSON.parse(sessionStorage.getItem('lastname'));
    this.username = JSON.parse(sessionStorage.getItem('username'));
    this.birth = sessionStorage.getItem('birth');
    this.mail = JSON.parse(sessionStorage.getItem('mail'));
   }

  ngOnInit(): void {
  }

}
