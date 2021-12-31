import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { IconsProviderModule } from '../../icons-provider.module';


import { ForManagerRoutingModule } from './for-manager-routing.module';
import { ForManagerComponent } from './for-manager.component';
import { CommonComponentModule } from 'src/app/components/common.module';
import { CommonService } from 'src/app/services/common.service';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ForManagerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    ForManagerRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzGridModule,
    IconsProviderModule,
    CommonComponentModule,
  ],
  providers: [CommonService]
})
export class ForManagerModule { }
