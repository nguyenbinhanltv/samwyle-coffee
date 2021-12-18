import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'default', loadChildren: () => import('./layouts/default/default.module').then(m => m.DefaultModule) },
  { path: 'cashier-service', loadChildren: () => import('./pages/cashier-service/cashier-service.module').then(m => m.CashierServiceModule) },
  { path: 'desk-manager', loadChildren: () => import('./pages/desk-manager/desk-manager.module').then(m => m.DeskManagerModule) },
  { path: 'invoice-manager', loadChildren: () => import('./pages/invoice-manager/invoice-manager.module').then(m => m.InvoiceManagerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
