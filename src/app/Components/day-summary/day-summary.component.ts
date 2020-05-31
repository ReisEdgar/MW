import { Component, OnInit, Input } from '@angular/core';
import { DaySummaryEvents } from './models/day-summary-events';
import { HoursEvent } from './models/hoursEvent';
import { ExpensesEvent } from './models/expensesEvent';
import { AdditionalHoursEvent } from './models/additionalHoursEvent';

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
    this.hoursEvents = input.hours;
    this.expensesEvents = input.expenses;
    this.additionalHoursEvents = input.additionalHours;
    this.selectedDate = input.date;
 }

  hoursEvents:HoursEvent[];
  expensesEvents:ExpensesEvent[];
  additionalHoursEvents:AdditionalHoursEvent[];
  selectedDate:Date;
  constructor() { }

  ngOnInit(): void {
  }

}