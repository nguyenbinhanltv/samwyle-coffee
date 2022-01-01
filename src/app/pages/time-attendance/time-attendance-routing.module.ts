import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeAttendanceComponent } from './time-attendance.component';

const routes: Routes = [{ path: '', component: TimeAttendanceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeAttendanceRoutingModule { }
