import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Currency } from '../currency'; // Import the Currency model

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiUrl = 'https://localhost:7159'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  // Fetch a list of currencies
  getCurrencies(): Observable<Currency[]> {
    return this.http.get<Currency[]>(`${this.apiUrl}/api/Currency`);
  }

  // Fetch currency by ID
  getCurrencyById(currencyId: number): Observable<Currency> {
    return this.http.get<Currency>(`${this.apiUrl}/api/Currency/${currencyId}`);
  }

  // Add a new currency
  addCurrency(currency: Currency): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/Currency`, currency);
  }

  // Update an existing currency
  updateCurrency(currency: Currency): Observable<any> {
    return this.http.put(`${this.apiUrl}/api/Currency/${currency.currencyId}`, currency);
  }

  // Delete a currency by ID
  deleteCurrency(currencyId: number): Observable<void> {
    const url = `${this.apiUrl}/api/Currency/${currencyId}`;
    return this.http.delete<void>(url);
  }
}
