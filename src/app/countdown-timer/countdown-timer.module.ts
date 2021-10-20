import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';
import { CountdownTimerCountComponent } from '../countdown-timer/countdown-timer-count/countdown-timer-count.component';
import { CountdownTimerDisplayComponent } from '../countdown-timer/countdown-timer-display/countdown-timer-display.component';
import { CountdownTimerLogComponent } from '../countdown-timer/countdown-timer-log/countdown-timer-log.component';
import { CountdownTimerStartPauseFunctionalityComponent } from '../countdown-timer/countdown-timer-start-pause-functionality/countdown-timer-start-pause-functionality.component';
import { CountdownTimerRoutingModule } from '../countdown-timer/countdown-timer-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CountdownTimerComponent,
    CountdownTimerCountComponent,
    CountdownTimerDisplayComponent,
    CountdownTimerLogComponent,
    CountdownTimerStartPauseFunctionalityComponent
  ],
  imports: [
    CommonModule,
    CountdownTimerRoutingModule,
    FormsModule
  ]
})
export class CountdownTimerModule { }
