import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceManagerRoutingModule } from './invoice-manager-routing.module';
import { InvoiceManagerComponent } from './invoice-manager.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InvoiceManagerComponent
  ],
  imports: [
    CommonModule,
    InvoiceManagerRoutingModule,
    ReactiveFormsModule,
    NzTableModule,
    NzButtonModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule
  ]
})
export class InvoiceManagerModule { }
