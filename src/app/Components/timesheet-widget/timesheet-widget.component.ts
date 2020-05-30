import { Component, OnInit } from '@angular/core';
import { TimesheetEventService } from './service/timesheet-event.service';
import { DaySlot } from '../calendar/models/day-slot';
import { DaySummaryEvents } from '../day-summary/models/day-summary-events';

@Component({
  selector: 'app-timesheet-widget',
  templateUrl: './timesheet-widget.component.html',
  styleUrls: ['./timesheet-widget.component.css']
})
export class TimesheetWidgetComponent implements OnInit {

  days:DaySlot[];
  daySummaryEvents:DaySummaryEvents;
  constructor(private eventService: TimesheetEventService) { }

  ngOnInit(): void {
  }

}
