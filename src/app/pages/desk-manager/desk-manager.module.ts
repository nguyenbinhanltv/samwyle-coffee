import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeskManagerRoutingModule } from './desk-manager-routing.module';
import { DeskManagerComponent } from './desk-manager.component';


@NgModule({
  declarations: [
    DeskManagerComponent
  ],
  imports: [
    CommonModule,
    DeskManagerRoutingModule
  ]
})
export class DeskManagerModule { }
