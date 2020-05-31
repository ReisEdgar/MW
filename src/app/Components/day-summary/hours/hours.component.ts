import { Component, OnInit, Input } from '@angular/core';
import { HoursEvent } from '../models/hoursEvent';
import { HoursEventProperties } from '../models/hoursEventsProperties';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.css']
})
export class HoursComponent implements OnInit {

  displayedColumns: string[] = ['type', 'duration'];
  @Input() set hoursEventsProperties(input: HoursEventProperties) {
    this.hoursEvents = input.hoursEvents;
    this.workStart = input.firstTaskStart;
    this.workEnd = input.lastTaskEnd;
  }
  hoursEvents: HoursEvent[];
  workStart: Date;
  workEnd: Date;

  constructor() { }

  ngOnInit(): void {
  }

}
