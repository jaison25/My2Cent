import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {

  constructor(private http: HttpClient) { }

  getAllAccounts(IdUser) {
    return this.http.get(`http://localhost:3000/accounts/${IdUser}`)
  }
}