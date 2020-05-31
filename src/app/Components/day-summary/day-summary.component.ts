import { Component, OnInit, Input } from '@angular/core';
import { DaySummaryEvents } from './models/day-summary-events';
import { HoursEvent } from './models/hoursEvent';
import { ExpensesEvent } from './models/expensesEvent';
import { AdditionalHoursEvent } from './models/additionalHoursEvent';
import { HoursEventProperties } from './models/hoursEventsProperties';

@Component({
  selector: 'app-day-summary',
  templateUrl: './day-summary.component.html',
  styleUrls: ['./day-summary.component.css']
})
export class DaySummaryComponent implements OnInit {
  
  @Input() set daySummaryEvents(input: DaySummaryEvents) {
    if(input === undefined){
      return;
    }
    this.hoursEventsProperties = input.hoursEventProperties;
    this.expensesEvents = input.expensesEvents;
    this.additionalHoursEvents = input.additionalHoursEvents;
 }

  hoursEventsProperties:HoursEventProperties;
  expensesEvents:ExpensesEvent[];
  additionalHoursEvents:AdditionalHoursEvent[];
  selectedDate:Date;
  constructor() { }

  ngOnInit(): void {
  }

}