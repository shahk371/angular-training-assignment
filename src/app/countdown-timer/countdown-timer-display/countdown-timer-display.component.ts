import { Component, OnInit } from '@angular/core';
import { CountdownTimerService } from '../countdown-timer.service';

@Component({
  selector: 'app-countdown-timer-display',
  templateUrl: './countdown-timer-display.component.html',
  styleUrls: ['./countdown-timer-display.component.css']
})
export class CountdownTimerDisplayComponent implements OnInit {
  
  timerValue: any;
  interval:any;
  startCountDownTimer:any;
  startTimerCount: number = 0;
  pausedTimerCount: number = 0;
  logMessages: Array<any> = [];

  constructor(private countdownTimerService: CountdownTimerService) { }

  ngOnInit(): void {
    this.countdownTimerService.getMessage().subscribe(counterData => {
      this.startCountDownTimer = !this.startCountDownTimer;
      if (this.startCountDownTimer && counterData.count != 0) {
        this.timerValue = counterData.count;
        this.interval = setInterval(() => {
          this.timerValue--;
          this.countdownTimerService.currentTimerValue = this.timerValue;
        },1000);
      } else {
        this.timerValue = counterData.count;
        clearInterval(this.interval);
      }
    }); 
  }

}
