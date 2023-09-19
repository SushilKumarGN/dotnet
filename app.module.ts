import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewVendorComponent } from './view-vendor/view-vendor.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DeleteVendorComponent } from './delete-vendor/delete-vendor.component';
import { UpdateVendorComponent } from './update-vendor/update-vendor.component';
import { TopTwoNavigationComponent } from './top-two-navigation/top-two-navigation.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { ViewInvoiceComponent } from './view-invoice/view-invoice.component';
import { UpdateInvoiceComponent } from './update-invoice/update-invoice.component';
import { DeleteInvoiceComponent } from './delete-invoice/delete-invoice.component';
import { ViewCurrencyComponent } from './view-currency/view-currency.component';
import { AddCurrencyComponent } from './add-currency/add-currency.component';
import { UpdateCurrencyComponent } from './update-currency/update-currency.component';
import { DeleteCurrencyComponent } from './delete-currency/delete-currency.component';
import { TopThreeNavigationComponent } from './top-three-navigation/top-three-navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';

//import { AddVendorModule } from './add-vendor.module'; // Import the AddVendorModule

@NgModule({
  declarations: [
    AppComponent,
    ViewVendorComponent,
    AddVendorComponent,
    TopNavigationComponent,
    DeleteVendorComponent,
    UpdateVendorComponent,
    TopTwoNavigationComponent,
    AddInvoiceComponent,
    ViewInvoiceComponent,
    UpdateInvoiceComponent,
    DeleteInvoiceComponent,
    ViewCurrencyComponent,
    AddCurrencyComponent,
    UpdateCurrencyComponent,
    DeleteCurrencyComponent,
    TopThreeNavigationComponent,
    ErrorDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
