import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashierBillRoutingModule } from './cashier-bill-routing.module';
import { CashierBillComponent } from './cashier-bill.component';


@NgModule({
  declarations: [
    CashierBillComponent
  ],
  imports: [
    CommonModule,
    CashierBillRoutingModule
  ]
})
export class CashierBillModule { }
