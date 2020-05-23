import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';

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
    this.loginService.loginUser(this.newUser.username, this.newUser.password).subscribe(data => {
     
      const isLogin = data.status;
      
      if (isLogin) {
        alert(`Bienvenid@ ${data.user.username}`);
        sessionStorage.setItem('nombre', JSON.stringify(data.user.username));
        sessionStorage.setItem('mail', JSON.stringify(data.user.email));
        sessionStorage.setItem('id', JSON.stringify(data.user.id));
        location.href = 'bienvenido'
      }
      else {
        alert('Usuario inválido')
      }
    })
  }

}
