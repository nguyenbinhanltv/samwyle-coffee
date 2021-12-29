import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashierServiceRoutingModule } from './cashier-service-routing.module';
import { CashierServiceComponent } from './cashier-service.component';
import { CarouselComponent } from './carousel/carousel.component';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { CardItemComponent } from './card-item/card-item.component';
import { CardItemCateComponent } from './card-item-cate/card-item-cate.component';


@NgModule({
  declarations: [
    CashierServiceComponent,
    CarouselComponent,
    CardItemComponent,
    CardItemCateComponent
  ],
  imports: [
    CommonModule,
    CashierServiceRoutingModule,
    NzCarouselModule,
    NzCardModule,
    NzAvatarModule,
    NzSkeletonModule,
    NzSwitchModule,
    NzImageModule,
    NzGridModule,
  ]
})
export class CashierServiceModule { }
