import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'timer',
    loadChildren: () => import('./timer/timer.module').then(m => m.TimerModule)
  },
  {
    path: 'table',
    loadChildren: () => import('./table/table.module').then(m => m.TableModule)
  },{
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },{
    path: 'countdownTimer',
    loadChildren: () => import('./countdown-timer/countdown-timer.module').then(m => m.CountdownTimerModule)
  },{
    path: 'dynamicLoad',
    loadChildren: () => import('./dynamic-load/dynamic-load.module').then(m => m.DynamicLoadModule)
  },{
    path: 'banner',
    loadChildren: () => import('./banner/banner.module').then(m => m.BannerModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
