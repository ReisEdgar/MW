import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalHoursComponent } from './additional-hours.component';

describe('AdditionalHoursComponent', () => {
  let component: AdditionalHoursComponent;
  let fixture: ComponentFixture<AdditionalHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
