import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Invoice } from '../invoice'; // Import the Invoice interface

@Component({
  selector: 'app-view-invoice',
  templateUrl: './view-invoice.component.html',
  styleUrls: ['./view-invoice.component.css']
})
export class ViewInvoiceComponent implements OnInit {
  invoices: Invoice[] = []; // Use the Invoice interface as the type for invoices

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Load invoices from your API when the component initializes
    this.loadInvoices();
  }

  loadInvoices() {
    // Replace the URL with your actual API endpoint for fetching invoices
    this.http.get<Invoice[]>('https://localhost:7159/api/Invoice').subscribe(
      (invoices) => {
        this.invoices = invoices;
      },
      (error) => {
        console.error('Error loading invoices:', error);
      }
    );
  }
}
