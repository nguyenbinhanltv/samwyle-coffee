import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ForManagerComponent } from './for-manager.component';

const routes: Routes = [{
  path: '', component: ForManagerComponent, children: [
    { path: '', pathMatch: 'full', redirectTo: '/danh-muc-san-pham' },
    { path: 'danh-muc-san-pham', loadChildren: () => import('../../pages/cashier-service/cashier-service.module').then(m => m.CashierServiceModule) },
    { path: 'danh-muc-san-pham/:category', loadChildren: () => import('../../pages/cashier-service/cashier-service.module').then(m => m.CashierServiceModule) },
    { path: 'quan-ly-ban', loadChildren: () => import('../../pages/desk-manager/desk-manager.module').then(m => m.DeskManagerModule) },
    { path: 'quan-ly-hoa-don', loadChildren: () => import('../../pages/invoice-manager/invoice-manager.module').then(m => m.InvoiceManagerModule) },
  ], canActivate: [AuthGuard], canActivateChild: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForManagerRoutingModule { }
