import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashierBillComponent } from './cashier-bill.component';

const routes: Routes = [{ path: '', component: CashierBillComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashierBillRoutingModule { }
