import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerStartPauseFunctionalityComponent } from './timer-start-pause-functionality.component';

describe('TimerStartPauseFunctionalityComponent', () => {
  let component: TimerStartPauseFunctionalityComponent;
  let fixture: ComponentFixture<TimerStartPauseFunctionalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerStartPauseFunctionalityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerStartPauseFunctionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
