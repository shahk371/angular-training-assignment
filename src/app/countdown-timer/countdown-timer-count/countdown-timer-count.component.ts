import { Component, OnInit } from '@angular/core';
import { CountdownTimerService } from '../countdown-timer.service';

@Component({
  selector: 'app-countdown-timer-count',
  templateUrl: './countdown-timer-count.component.html',
  styleUrls: ['./countdown-timer-count.component.css']
})
export class CountdownTimerCountComponent implements OnInit {
  
  startTimerCount: number = 0;
  pausedTimerCount: number = 0;

  constructor(private countdownTimerService: CountdownTimerService) { }

  ngOnInit(): void {
    this.countdownTimerService.getMessage().subscribe(counterData => {
      if (counterData.timerStart) {
        this.startTimerCount += 1;
      } else {
        this.pausedTimerCount += 1;
      }
    });

  }

}
