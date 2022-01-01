import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ForManagerComponent } from './for-manager.component';

const routes: Routes = [{
  path: '', component: ForManagerComponent, children: [
    { path: '', pathMatch: 'full', redirectTo: 'phuc-vu/danh-muc-san-pham' },
    { path: 'phuc-vu/danh-muc-san-pham', loadChildren: () => import('../../pages/cashier-service/cashier-service.module').then(m => m.CashierServiceModule) },
    { path: 'phuc-vu/danh-muc-san-pham/:category', loadChildren: () => import('../../pages/cashier-service/cashier-service.module').then(m => m.CashierServiceModule) },
    { path: 'phuc-vu/quan-ly-ban', loadChildren: () => import('../../pages/desk-manager/desk-manager.module').then(m => m.DeskManagerModule) },
    { path: 'phuc-vu/quan-ly-hoa-don', loadChildren: () => import('../../pages/invoice-manager/invoice-manager.module').then(m => m.InvoiceManagerModule) },
    { path: 'thu-ngan/thong-ke-hoa-don', loadChildren: () => import('../../pages/cashier-bill/cashier-bill.module').then(m => m.CashierBillModule) },
    { path: 'cham-cong/cham-cong-ngay', loadChildren: () => import('../../pages/time-attendance/time-attendance.module').then(m => m.TimeAttendanceModule) },
    { path: 'cham-cong/thong-ke-cham-cong', loadChildren: () => import('../../pages/attendance-statistics/attendance-statistics.module').then(m => m.AttendanceStatisticsModule) },
  ], canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForManagerRoutingModule { }
