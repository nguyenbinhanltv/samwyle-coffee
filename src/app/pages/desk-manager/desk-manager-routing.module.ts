import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeskManagerComponent } from './desk-manager.component';

const routes: Routes = [{ path: '', component: DeskManagerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeskManagerRoutingModule { }
