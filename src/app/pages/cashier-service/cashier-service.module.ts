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

import { CardItemComponent } from './card-item/card-item.component';


@NgModule({
  declarations: [
    CashierServiceComponent,
    CarouselComponent,
    CardItemComponent
  ],
  imports: [
    CommonModule,
    CashierServiceRoutingModule,
    NzCarouselModule,
    NzCardModule,
    NzAvatarModule,
    NzSkeletonModule,
    NzSwitchModule,
    NzImageModule
  ]
})
export class CashierServiceModule { }
