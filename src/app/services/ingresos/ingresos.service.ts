import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IngresosService {

  constructor(private http: HttpClient) { }

  CreateIncome(Income) {
    return this.http.post('http://localhost:3000/incomes/', Income);
  }
}
