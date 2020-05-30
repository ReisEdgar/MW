import { Component, OnInit } from '@angular/core';
import { TimesheetEvent } from '../workday-info/models/timesheetEvents';
import { Day } from '../calendar/models/day';
import { TimesheetEventService } from './timesheet-event..service';

@Component({
  selector: 'app-timesheet-widget',
  templateUrl: './timesheet-widget.component.html',
  styleUrls: ['./timesheet-widget.component.css']
})
export class TimesheetWidgetComponent implements OnInit {
  days: Day[] = [];
  timesheetEvents: TimesheetEvent[] = [];
  
  constructor(private eventService: TimesheetEventService) { }

  ngOnInit(): void {
  }

}
