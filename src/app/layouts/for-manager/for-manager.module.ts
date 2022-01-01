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

import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzStepsModule } from 'ng-zorro-antd/steps';

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
    NzBadgeModule,
    NzDropDownModule,
    NzMessageModule,
    NzStepsModule
  ],
  providers: [CommonService]
})
export class ForManagerModule { }
