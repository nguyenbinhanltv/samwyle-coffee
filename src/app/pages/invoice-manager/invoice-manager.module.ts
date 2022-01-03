import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceManagerRoutingModule } from './invoice-manager-routing.module';
import { InvoiceManagerComponent } from './invoice-manager.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';

import { CashierServiceModule } from '../cashier-service/cashier-service.module';
import { TableCardComponent } from './table-card/table-card.component';
import { UpdateOrderModalComponent } from './update-order-modal/update-order-modal.component';
import { CommonService } from 'src/app/services/common.service';



@NgModule({
  declarations: [
    InvoiceManagerComponent,
    TableCardComponent,
    UpdateOrderModalComponent
  ],
  imports: [
    CommonModule,
    InvoiceManagerRoutingModule,
    ReactiveFormsModule,
    CashierServiceModule,
    FormsModule,
    NzTableModule,
    NzButtonModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzBadgeModule,
    NzTagModule,
    NzStepsModule,
    NzTabsModule,
    NzInputNumberModule,
    NzPopconfirmModule,
    NzDividerModule,
    NzCardModule,
    NzEmptyModule,
    NzDescriptionsModule
  ],
  exports: [TableCardComponent],
  providers: [NzModalService, CommonService]
})
export class InvoiceManagerModule { }
