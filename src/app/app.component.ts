import { Component } from '@angular/core';
import { Day } from './Components/calendar/models/day';
import { TimesheetEvent } from './Components/workday-info/models/timesheetEvents';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  days: Day[] = [];
  timesheetEvents: TimesheetEvent[] = [];
  title = 'MW';
}
