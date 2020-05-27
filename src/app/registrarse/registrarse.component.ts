import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../services/registro/registro.service';
import { Response } from '../interfaces/response';
import { LoginResponse } from '../interfaces/loginResponse';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
  newUserObject = {
    UserName: '',
    UserLastName: '',
    UserNickName: '',
    UserMail: '',
    UserBirth: '',
    UserPassword: '',
    UserGender: ''
  }

  constructor(private registroService: RegistroService) { }

  ngOnInit(): void {
  }

  userRegister() {
    this.registroService.registerUser(this.newUserObject).subscribe((response: Response<LoginResponse>) => {
     const isRegister = response.status;
      
     if (isRegister) {
        alert(`Bienvenid@ ${response.data.username}`);
        sessionStorage.setItem('nombre', JSON.stringify(response.data.username));
        sessionStorage.setItem('mail', JSON.stringify(response.data.email));
        sessionStorage.setItem('id', JSON.stringify(response.data.id));
        location.href = 'bienvenido'
      }
      else {
        alert('No fue posible realizar el registro, verifica los campos')
      }
      
    })
  }
}
