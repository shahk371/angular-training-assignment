import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerDisplayComponent } from './countdown-timer-display.component';

describe('CountdownTimerDisplayComponent', () => {
  let component: CountdownTimerDisplayComponent;
  let fixture: ComponentFixture<CountdownTimerDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownTimerDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
