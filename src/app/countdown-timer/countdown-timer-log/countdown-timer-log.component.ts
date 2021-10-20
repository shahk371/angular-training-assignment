import { Component, OnInit } from '@angular/core';
import { CountdownTimerService } from '../countdown-timer.service';

@Component({
  selector: 'app-countdown-timer-log',
  templateUrl: './countdown-timer-log.component.html',
  styleUrls: ['./countdown-timer-log.component.css']
})
export class CountdownTimerLogComponent implements OnInit {
  
  logMessages:Array<any> = [];
  constructor(private countdownTimerService: CountdownTimerService) { }

  ngOnInit(): void {
    let message, date = new Date();
    this.countdownTimerService.getMessage().subscribe(counterData => {
      message = counterData.timerStart ? ('Started at ' + date) : ('Paused at ' + date);
      this.logMessages.push(message)
    });
  }

}
