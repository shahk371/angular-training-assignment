import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-count',
  templateUrl: './timer-count.component.html',
  styleUrls: ['./timer-count.component.css']
})
export class TimerCountComponent implements OnInit {
  @Input() startTimerCount:any;
  @Input() pausedTimerCount:any;
  constructor() { }

  ngOnInit(): void {
  }

}
