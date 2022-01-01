import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceStatisticsComponent } from './attendance-statistics.component';

const routes: Routes = [{ path: '', component: AttendanceStatisticsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceStatisticsRoutingModule { }
