import { Component, OnInit } from '@angular/core';
import { TimesheetEventService } from './service/timesheet-event.service';
import { DaySlot } from '../calendar/models/day-slot';
import { DaySummaryEvents } from '../day-summary/models/day-summary-events';
import { DaySlotMapperService } from './service/mappers/day-slot-mapper.service';
import { DaySummaryMapperService } from './service/mappers/day-summary-mapper.service';
import { environment } from 'src/environments/environment';
import { areDatesEqual } from '../helpers/date-helper';
import { _getOptionScrollPosition } from '@angular/material/core';

@Component({
  selector: 'app-timesheet-widget',
  templateUrl: './timesheet-widget.component.html',
  styleUrls: ['./timesheet-widget.component.css']
})

export class TimesheetWidgetComponent implements OnInit {
  readonly numberOfPreviousDays = 5;
  readonly initialDate = environment.today;

  daySlots:DaySlot[];
  daySummaryEvents:DaySummaryEvents[];
  currentDaySummaryEvents:DaySummaryEvents;
  
  constructor(private eventService: TimesheetEventService, private daySlotMapper: DaySlotMapperService,
    private daySummaryMapper: DaySummaryMapperService) {  
      let today = new Date(environment.today);
      today.setHours(0,0,0,0);
      this.initialDate = today;

      eventService.getTimesheetEvents(this.numberOfPreviousDays, this.initialDate).subscribe((response) =>{
        this.daySlots = daySlotMapper.getDaySlots(response);
        this.daySummaryEvents = daySummaryMapper.mapToDaySummaryEvents(response);
        this.onDaySelected(this.daySlots.find(x => areDatesEqual(x.date, this.initialDate)).date);

        this.setInitialDate(this.daySlots, this.initialDate);
        this.onDaySelected(this.daySlots.find(x => x.isSelected).date);
      });
     }

  ngOnInit(): void {
  }
  
  setInitialDate(days:DaySlot[], initialDate:Date):DaySlot[]{
    days.forEach(element => {
      element.isSelected = false;
    });

    this.daySlots.find(x => areDatesEqual(x.date, initialDate)).isSelected = true;
    return days;
  }

  onDaySelected(date:Date){
    let events = this.daySummaryEvents.find(x => areDatesEqual(x.date, date));
    if(events === undefined){
      events = {
        hoursEventProperties:{
          hoursEvents: [],
          firstTaskStart:null,
          lastTaskEnd:null
        },
        additionalHoursEvents:[],
        expensesEvents:[],
        date:date
      }
    }
    this.currentDaySummaryEvents = events;
  }
}
