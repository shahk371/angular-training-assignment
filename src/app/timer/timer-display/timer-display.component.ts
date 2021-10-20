import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timer-display',
  templateUrl: './timer-display.component.html',
  styleUrls: ['./timer-display.component.css']
})
export class TimerDisplayComponent implements OnInit {
  @Input() timerDisplay: any;
  constructor() { }

  ngOnInit(): void {
  }

}
