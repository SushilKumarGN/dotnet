export interface Invoice {
    invoiceId: number;
    invoiceNumber: string;
    invoiceCurrencyId: number;
    vendorId: number;
    invoiceAmount: number;
    invoiceReceivedDate: Date;
    invoiceDueDate: Date;
    isActive: string;
  }
  