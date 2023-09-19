import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Currency } from '../currency'; // Import the Currency interface

@Component({
  selector: 'app-update-currency',
  templateUrl: './update-currency.component.html',
  styleUrls: ['./update-currency.component.css']
})
export class UpdateCurrencyComponent implements OnInit {
  currencyToUpdate: Currency = {
    currencyId: 0,
    currencyName: '',
    currencyCode: ''
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const currencyIdToUpdate = +params['id'];
      if (currencyIdToUpdate > 0) {
        this.getCurrencyDetails(currencyIdToUpdate);
      }
    });
  }

  getCurrencyDetails(currencyId: number): void {
    this.http.get<Currency>(`https://localhost:7159/api/Currency/${currencyId}`)
      .subscribe(
        (data) => {
          this.currencyToUpdate = data;
        },
        (error) => {
          console.error('Error fetching currency details:', error);
        }
      );
  }

  updateCurrency(): void {
    // Send PUT request to update the currency
    this.http.put(`https://localhost:7159/api/Currency/${this.currencyToUpdate.currencyId}`, this.currencyToUpdate)
      .subscribe(
        () => {
          console.log('Currency updated successfully');
          // Redirect to the view-currency page or perform any other desired action
          this.router.navigate(['/currency-operations/view']);
        },
        (error) => {
          console.error('Error updating currency:', error);
        }
      );
  }
}
