import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/danh-muc-san-pham' },
  { path: 'default', loadChildren: () => import('./layouts/default/default.module').then(m => m.DefaultModule) },
  { path: 'danh-muc-san-pham', loadChildren: () => import('./pages/cashier-service/cashier-service.module').then(m => m.CashierServiceModule) },
  { path: 'danh-muc-san-pham/:category', loadChildren: () => import('./pages/cashier-service/cashier-service.module').then(m => m.CashierServiceModule) },
  { path: 'quan-ly-ban', loadChildren: () => import('./pages/desk-manager/desk-manager.module').then(m => m.DeskManagerModule) },
  { path: 'quan-ly-hoa-don', loadChildren: () => import('./pages/invoice-manager/invoice-manager.module').then(m => m.InvoiceManagerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
