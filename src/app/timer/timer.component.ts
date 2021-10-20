import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  timerValue: any;
  interval: any;
  startCountDownTimer: Boolean = false;
  logDateTime: Boolean = false;
  startTimerCount: number = 0;
  pausedTimerCount: number = 0;
  logMessages: Array<any> = [];
  pausedValue: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

  getTimerValue(event: Event) {
    let message, date = new Date();
    this.logDateTime = true;
    this.startCountDownTimer = !this.startCountDownTimer;
    if (event) {
      if (this.startCountDownTimer) {
        this.timerValue = event;
        this.interval = setInterval(() => {
          this.timerValue--;
        },1000)
        this.startTimerCount += 1;
        message = 'Started at ' + date;
      } else {
        clearInterval(this.interval);
        this.pausedTimerCount += 1;
        message = 'Paused at ' + date;
      }
      this.logMessages.push(message);
    } else {
      this.timerValue = 0;
      clearInterval(this.interval);
    }
  }

}


