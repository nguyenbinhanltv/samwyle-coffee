import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeskManagerRoutingModule } from './desk-manager-routing.module';
import { DeskManagerComponent } from './desk-manager.component';
import { InvoiceManagerModule } from '../invoice-manager/invoice-manager.module';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    DeskManagerComponent
  ],
  imports: [
    CommonModule,
    DeskManagerRoutingModule,
    InvoiceManagerModule,
    NzGridModule,
    NzDrawerModule,
    NzDividerModule,
    NzDescriptionsModule,
    NzButtonModule,
    NzIconModule
  ]
})
export class DeskManagerModule { }
