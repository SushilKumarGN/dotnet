import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InvoiceService } from '../services/invoice.service'; // Import the InvoiceService
import { HttpClient } from '@angular/common/http';
import { Invoice } from '../invoice'; // Import the Invoice interface

@Component({
  selector: 'app-delete-invoice',
  templateUrl: './delete-invoice.component.html',
  styleUrls: ['./delete-invoice.component.css']
})
export class DeleteInvoiceComponent {

  invoiceToDeleteId: number = 0; // ID of the invoice to be deleted

  constructor(private InvoiceService: InvoiceService, private router: Router) { }

  deleteInvoice(): void {
    if (this.invoiceToDeleteId >= 0) {
      this.InvoiceService.deleteInvoice(this.invoiceToDeleteId).subscribe(
        () => {
          console.log('Invoice deleted successfully');
          this.router.navigate(['/invoice-operations/view']); // Navigate back to the View Invoice page
        },
        (error) => {
          console.error('Error deleting invoice:', error);
        }
      );
    }
  }
}
