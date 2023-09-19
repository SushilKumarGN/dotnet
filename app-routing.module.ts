import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewVendorComponent } from './view-vendor/view-vendor.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { DeleteVendorComponent } from './delete-vendor/delete-vendor.component';
import { UpdateVendorComponent } from './update-vendor/update-vendor.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { TopTwoNavigationComponent } from './top-two-navigation/top-two-navigation.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { ViewInvoiceComponent } from './view-invoice/view-invoice.component';
import { DeleteInvoiceComponent } from './delete-invoice/delete-invoice.component';
import { UpdateInvoiceComponent } from './update-invoice/update-invoice.component';
import { AddCurrencyComponent } from './add-currency/add-currency.component';
import { TopThreeNavigationComponent } from './top-three-navigation/top-three-navigation.component';
import { DeleteCurrencyComponent } from './delete-currency/delete-currency.component';
import { ViewCurrencyComponent } from './view-currency/view-currency.component';
import { UpdateCurrencyComponent } from './update-currency/update-currency.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';

const routes: Routes = [
  // Other routes...
  {
    path: 'view-vendor',
    component: ViewVendorComponent
  },
  {
    path: 'add-vendor',
    component: AddVendorComponent
  },
  { path: 'delete-vendor', component: DeleteVendorComponent },
  { path: 'update-vendor', component: UpdateVendorComponent },
  { path: 'top-navigation', component: TopNavigationComponent },
  { path: 'invoice-operation', component: TopTwoNavigationComponent },
  { path: 'add-invoice', component: AddInvoiceComponent },
  { path: 'view-invoice', component: ViewInvoiceComponent},
  {path: 'delete-invoice', component: DeleteInvoiceComponent},
  {path: 'update-invoice', component: UpdateInvoiceComponent},
  {path: 'add-currency', component: AddCurrencyComponent},
  {path: 'top-three-navigation', component:TopThreeNavigationComponent},
  {path: 'view-currency', component:ViewCurrencyComponent},
  {path: 'delete-currency', component:DeleteCurrencyComponent},
  {path: 'update-currency', component:UpdateCurrencyComponent},
  {path: 'error-dialog', component:ErrorDialogComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
