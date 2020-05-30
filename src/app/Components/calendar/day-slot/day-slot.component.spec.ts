import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaySlotComponent } from './day-slot.component';

describe('DaySlotComponent', () => {
  let component: DaySlotComponent;
  let fixture: ComponentFixture<DaySlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaySlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaySlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
