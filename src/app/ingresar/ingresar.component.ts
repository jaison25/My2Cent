import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { Response } from '../interfaces/response';
import { LoginResponse } from '../interfaces/loginResponse';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {
  newUser = {
    username: '',
    password: ''
  }

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  userLogin() {
    this.loginService.loginUser(this.newUser.username, this.newUser.password).subscribe((response: Response<LoginResponse>) => {
      
      const isLogin = response.status;

      if (isLogin) {
        alert(`Bienvenid@ ${response.data.username}`);
        sessionStorage.setItem('nombre', JSON.stringify(response.data.username));
        sessionStorage.setItem('mail', JSON.stringify(response.data.email));
        sessionStorage.setItem('id', JSON.stringify(response.data.id));
        location.href = 'bienvenido'
      }
      else {
        alert('Usuario inválido')
      }
      
    })
  }

}
