import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceManagerComponent } from './invoice-manager.component';

const routes: Routes = [{ path: '', component: InvoiceManagerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceManagerRoutingModule { }
