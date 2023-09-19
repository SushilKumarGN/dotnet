import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyService } from '../services/currency.service'; // Import the CurrencyService or a service relevant to currency
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-currency',
  templateUrl: './delete-currency.component.html',
  styleUrls: ['./delete-currency.component.css']
})
export class DeleteCurrencyComponent {
  currencyToDeleteId: number = 0; // ID of the currency to be deleted

  constructor(private CurrencyService: CurrencyService, private router: Router) { }

  deleteCurrency(): void {
    if (this.currencyToDeleteId > 0) {
      this.CurrencyService.deleteCurrency(this.currencyToDeleteId).subscribe(
        () => {
          console.log('Currency deleted successfully');
          this.router.navigate(['/currency-operations/view']); // Navigate back to the View Currency page
        },
        (error) => {
          console.error('Error deleting currency:', error);
        }
      );
    }
  }
}
