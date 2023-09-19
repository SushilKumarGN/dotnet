import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Currency } from '../currency'; // Import the Currency interface
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Component({
  selector: 'app-add-currency',
  templateUrl: './add-currency.component.html',
  styleUrls: ['./add-currency.component.css']
})
export class AddCurrencyComponent implements OnInit {
  newCurrency: Currency = {
    currencyId: 0,
    currencyName: '',
    currencyCode: ''
  };

  constructor(private http: HttpClient,private router: Router, private dialog: MatDialog
    ) {}

  ngOnInit(): void {}

  // addCurrency(): void {
  //   // Send POST request to add the new currency
  //   this.http.post('https://localhost:7159/api/Currency', this.newCurrency)
  //     .subscribe(
  //       () => {
  //         console.log('Currency added successfully');
  //         // Redirect to the view-currency page or perform any desired action
  //         this.router.navigate(['/currency-operations/view']);
  //       },
  //       (error) => {
  //         console.error('Error adding currency:', error);
  //       }
  //     );
  // }
  openErrorDialog(errorMessage: string): void {
    this.dialog.open(ErrorDialogComponent, {
      width: '300px',
      data: { errorMessage }
    });
  }

  addCurrency(): void {
    // Send POST request to add the new currency
    this.http.post('https://localhost:7159/api/Currency', this.newCurrency).subscribe(
      () => {
        console.log('Currency added successfully');
        // Redirect to the view-currency page or perform any desired action
        this.router.navigate(['/currency-operations/view']);
      },
      (error) => {
        console.error('Error adding currency:', error);
        this.openErrorDialog('An error occurred while adding the currency.');
      }
    );
  }
  
}
