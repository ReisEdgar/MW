import { TestBed } from '@angular/core/testing';

import { TimesheetEventService } from './timesheet-event.service';

describe('TimesheetEventService', () => {
  let service: TimesheetEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimesheetEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
