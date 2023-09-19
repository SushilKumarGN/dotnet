import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Invoice } from '../invoice'; // Import the Invoice interface

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent {
  newInvoice: Invoice = {} as Invoice; // Initialize an empty Invoice object

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.http.post<Invoice>('https://localhost:7159/api/Invoice', this.newInvoice).subscribe(
      (response) => {
        console.log('Invoice added successfully:', response);
        // Optionally, you can reset the form fields or show a success message here
      },
      (error) => {
        console.error('Error adding invoice:', error);
        // Handle error, show error message, etc.
      }
    );
  }
}
