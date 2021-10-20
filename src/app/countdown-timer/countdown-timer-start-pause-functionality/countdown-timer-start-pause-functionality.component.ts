import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CountdownTimerService } from '../countdown-timer.service';

@Component({
  selector: 'app-countdown-timer-start-pause-functionality',
  templateUrl: './countdown-timer-start-pause-functionality.component.html',
  styleUrls: ['./countdown-timer-start-pause-functionality.component.css']
})
export class CountdownTimerStartPauseFunctionalityComponent implements OnInit {
  
  timeLimit:any;
  startTimer: any;
  pauseMessage: Array<any> = [];
  constructor(private countdownTimerService: CountdownTimerService) { }

  ngOnInit(): void {
  }

  setTimer() {
    this.startTimer = !this.startTimer;
    let timerValue = this.countdownTimerService.currentTimerValue ? this.countdownTimerService.currentTimerValue : this.timeLimit;
    if (!this.startTimer) {
      let message = 'Paused at ' + timerValue;
      this.pauseMessage.push(message);
    }
    this.countdownTimerService.sendMessage(timerValue);
  }

  resetTimer() {
    this.countdownTimerService.sendMessage(0);
  }

}
