import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerCountComponent } from './countdown-timer-count.component';

describe('CountdownTimerCountComponent', () => {
  let component: CountdownTimerCountComponent;
  let fixture: ComponentFixture<CountdownTimerCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownTimerCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
