import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GastosService {
   
   constructor(private http: HttpClient) {}
    CreateSpendins(NewGasto) {
      return this.http.post(`http://localhost:3000/spendings/`, NewGasto)
    }
    getSpendings(IdAccount) {
      return this.http.get(`http://localhost:3000/spendings/${IdAccount}`)
    
    }
}
