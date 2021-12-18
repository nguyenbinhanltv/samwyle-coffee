import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceManagerRoutingModule } from './invoice-manager-routing.module';
import { InvoiceManagerComponent } from './invoice-manager.component';


@NgModule({
  declarations: [
    InvoiceManagerComponent
  ],
  imports: [
    CommonModule,
    InvoiceManagerRoutingModule
  ]
})
export class InvoiceManagerModule { }
