import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkdayInfoComponent } from './workday-info.component';

describe('WorkdayInfoComponent', () => {
  let component: WorkdayInfoComponent;
  let fixture: ComponentFixture<WorkdayInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkdayInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkdayInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
