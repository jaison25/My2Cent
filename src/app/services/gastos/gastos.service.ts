import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GastosService {
   
   constructor(private http: HttpClient) {}
    CreateIncomes(NewIncome) {
      return this.http.post(`http://localhost:3000/incomes/`, NewIncome)
    }
    getIncomes(IdAccount) {
      return this.http.get(`http://localhost:3000/incomes/${IdAccount}`)
    
    }
}
