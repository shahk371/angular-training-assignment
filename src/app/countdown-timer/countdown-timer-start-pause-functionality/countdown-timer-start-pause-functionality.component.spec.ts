import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerStartPauseFunctionalityComponent } from './countdown-timer-start-pause-functionality.component';

describe('CountdownTimerStartPauseFunctionalityComponent', () => {
  let component: CountdownTimerStartPauseFunctionalityComponent;
  let fixture: ComponentFixture<CountdownTimerStartPauseFunctionalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownTimerStartPauseFunctionalityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerStartPauseFunctionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
