import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashierServiceComponent } from './cashier-service.component';

const routes: Routes = [{ path: '', component: CashierServiceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashierServiceRoutingModule { }
