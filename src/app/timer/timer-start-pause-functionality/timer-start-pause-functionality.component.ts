import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-timer-start-pause-functionality',
  templateUrl: './timer-start-pause-functionality.component.html',
  styleUrls: ['./timer-start-pause-functionality.component.css']
})
export class TimerStartPauseFunctionalityComponent implements OnInit {

  @Input() currentTimerValue: any;
  @Output() buttonclicked = new EventEmitter<any>();
  pauseMessage: Array<any> = [];
  startTimer: any;
  timeLimit: any;
  isReset: Boolean = false;

  constructor() {
  }
  
  ngOnInit(): void {
  }

  setCurrentValue() {
    this.currentTimerValue = this.timeLimit;
  }

  setTimer() {
    this.startTimer = !this.startTimer;
    if (!this.startTimer && !this.isReset) {
      let message = 'Paused at ' + this.currentTimerValue;
      this.pauseMessage.push(message);
    }
    this.isReset = false;
    let timeLimit = this.currentTimerValue ? this.currentTimerValue : this.timeLimit;
    this.buttonclicked.emit(timeLimit);
  }

  resetTimer() {
    this.isReset = true;
    this.buttonclicked.emit(0);
  }

}
