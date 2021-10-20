import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountdownTimerService {
  
  private subject = new Subject<any>();
  currentTimerValue: any;
  startCountDownTimer: any;

  constructor() { }

  sendMessage(message: any) {
    this.startCountDownTimer = !this.startCountDownTimer;
    let data = {
      'count': message,
      'timerStart': this.startCountDownTimer
    }
    this.subject.next(data);
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
