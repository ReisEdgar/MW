import { Component, OnInit, Input } from '@angular/core';
import { TimesheetEvent } from './models/timesheetEvents';

@Component({
  selector: 'app-workday-info',
  templateUrl: './workday-info.component.html',
  styleUrls: ['./workday-info.component.css']
})
export class WorkdayInfoComponent implements OnInit {
  
  @Input() timesheetEvents: TimesheetEvent[];

  constructor() { }

  ngOnInit(): void {
  }

}