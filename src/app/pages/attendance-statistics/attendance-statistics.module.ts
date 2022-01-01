import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceStatisticsRoutingModule } from './attendance-statistics-routing.module';
import { AttendanceStatisticsComponent } from './attendance-statistics.component';


@NgModule({
  declarations: [
    AttendanceStatisticsComponent
  ],
  imports: [
    CommonModule,
    AttendanceStatisticsRoutingModule
  ]
})
export class AttendanceStatisticsModule { }
