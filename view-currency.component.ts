import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Currency } from '../currency'; // Import the Currency interface

@Component({
  selector: 'app-view-currency',
  templateUrl: './view-currency.component.html',
  styleUrls: ['./view-currency.component.css']
})
export class ViewCurrencyComponent implements OnInit {
  currencies: Currency[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCurrencies();
  }

  fetchCurrencies(): void {
    this.http.get<Currency[]>('https://localhost:7159/api/Currency')
      .subscribe(
        (currencies) => {
          this.currencies = currencies;
        },
        (error) => {
          console.error('Error fetching currencies:', error);
        }
      );
  }
}
