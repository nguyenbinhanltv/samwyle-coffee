import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeAttendanceRoutingModule } from './time-attendance-routing.module';
import { TimeAttendanceComponent } from './time-attendance.component';


@NgModule({
  declarations: [
    TimeAttendanceComponent
  ],
  imports: [
    CommonModule,
    TimeAttendanceRoutingModule
  ]
})
export class TimeAttendanceModule { }
