import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/dang-nhap' },
  { path: 'dang-nhap', loadChildren: () => import('./layouts/default/default.module').then(m => m.DefaultModule) },
  { path: '', loadChildren: () => import('./layouts/for-manager/for-manager.module').then(m => m.ForManagerModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
