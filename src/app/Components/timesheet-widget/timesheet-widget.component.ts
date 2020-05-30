import { Component, OnInit } from '@angular/core';
import { TimesheetEvent } from '../workday-info/models/timesheetEvents';
import { Day } from '../calendar/models/day';

@Component({
  selector: 'app-timesheet-widget',
  templateUrl: './timesheet-widget.component.html',
  styleUrls: ['./timesheet-widget.component.css']
})
export class TimesheetWidgetComponent implements OnInit {
  days: Day[] = [];
  timesheetEvents: TimesheetEvent[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
