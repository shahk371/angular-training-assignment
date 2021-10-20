import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicLoadComponent } from './dynamic-load.component';
import { DynamicLoadRoutingModule } from './dynamic-load-routing.module';


@NgModule({
  declarations: [DynamicLoadComponent],
  imports: [
    CommonModule,
    DynamicLoadRoutingModule
  ]
})
export class DynamicLoadModule { }
