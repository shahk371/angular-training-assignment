import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerRoutingModule } from './timer-routing.module';
import { TimerComponent } from './timer.component';
import { TimerDisplayComponent } from './timer-display/timer-display.component';
import { TimerStartPauseFunctionalityComponent } from './timer-start-pause-functionality/timer-start-pause-functionality.component';
import { TimerLogComponent } from './timer-log/timer-log.component';
import { TimerCountComponent } from './timer-count/timer-count.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TimerComponent, TimerDisplayComponent, TimerStartPauseFunctionalityComponent, TimerLogComponent, TimerCountComponent],
  imports: [
    CommonModule,
    TimerRoutingModule,
    FormsModule
  ]
})
export class TimerModule { }
