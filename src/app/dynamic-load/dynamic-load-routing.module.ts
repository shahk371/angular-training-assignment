import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicLoadComponent } from './dynamic-load.component';


const routes: Routes = [
  {
    path: '',
    component: DynamicLoadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicLoadRoutingModule { }