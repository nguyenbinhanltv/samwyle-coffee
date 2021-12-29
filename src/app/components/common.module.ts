import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonSpinnerComponent } from './common/common-spinner/common-spinner.component';

import { NzSpinModule } from 'ng-zorro-antd/spin';



@NgModule({
  declarations: [
    CommonSpinnerComponent
  ],
  imports: [
    CommonModule,
    NzSpinModule
  ],
  exports: [CommonSpinnerComponent]
})
export class CommonComponentModule { }
