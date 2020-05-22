import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../services/registro/registro.service';

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
    this.registroService.registerUser(this.newUserObject).subscribe(data => {
      const isRegister = data.status;
      
      if (isRegister) {
        alert(`Bienvenid@ ${data.data.UserName}`);
        sessionStorage.setItem('nombre', JSON.stringify(data.data.UserName));
        sessionStorage.setItem('mail', JSON.stringify(data.data.UserMail));
        sessionStorage.setItem('id', JSON.stringify(data.data.UserId));
        location.href = 'bienvenido'
      }
      else {
        alert('No fue posible realizar el registro, verifica los campos')
      }
      
    })
  }
}
