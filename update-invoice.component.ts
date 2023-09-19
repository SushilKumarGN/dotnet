import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Invoice } from '../invoice'; // Import the Invoice interface

@Component({
  selector: 'app-update-invoice',
  templateUrl: './update-invoice.component.html',
  styleUrls: ['./update-invoice.component.css']
})
export class UpdateInvoiceComponent implements OnInit {
  invoiceToUpdate: Invoice = {
    invoiceId: 0,
    invoiceNumber: '',
    invoiceCurrencyId: 0,
    vendorId: 0,
    invoiceAmount: 0,
    invoiceReceivedDate: new Date(),
    invoiceDueDate: new Date(),
    isActive: ''
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const invoiceIdToUpdate = +params['id'];
      if (invoiceIdToUpdate > 0) {
        this.getInvoiceDetails(invoiceIdToUpdate);
      }
    });
  }

  getInvoiceDetails(invoiceId: number): void {
    this.http.get<Invoice>(`https://localhost:7159/api/Invoice/${invoiceId}`)
      .subscribe(
        (data) => {
          this.invoiceToUpdate = data;
        },
        (error) => {
          console.error('Error fetching invoice details:', error);
        }
      );
  }

  updateInvoice(): void {
    // Send PUT request to update the invoice
    this.http.put(`https://localhost:7159/api/Invoice/${this.invoiceToUpdate.invoiceId}`, this.invoiceToUpdate)
      .subscribe(
        () => {
          console.log('Invoice updated successfully');
          // Redirect to the view-invoice page
          this.router.navigate(['/invoice-operations/view']);
        },
        (error) => {
          console.error('Error updating invoice:', error);
        }
      );
  }
}
