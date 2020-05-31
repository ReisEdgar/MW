import { Component, OnInit } from '@angular/core';
import { TimesheetEventService } from './service/timesheet-event.service';
import { DaySlot } from '../calendar/models/day-slot';
import { DaySummaryEvents } from '../day-summary/models/day-summary-events';
import { DaySlotMapperService } from './service/mappers/day-slot-mapper.service';
import { DaySummaryMapperService } from './service/mappers/day-summary-mapper.service';

@Component({
  selector: 'app-timesheet-widget',
  templateUrl: './timesheet-widget.component.html',
  styleUrls: ['./timesheet-widget.component.css']
})

export class TimesheetWidgetComponent implements OnInit {
  readonly numberOfPreviousDays = 7;
  readonly initialDate;

  daySlots:DaySlot[];
  daySummaryEvents:DaySummaryEvents[];
  currentDaySummaryEvent:DaySummaryEvents;
  
  constructor(private eventService: TimesheetEventService, private daySlotMapper: DaySlotMapperService,
    private daySummaryMapper: DaySummaryMapperService) {  
      let today = new Date();
      today.setHours(0,0,0,0);
      this.initialDate = today;

      eventService.getTimesheetEvents(this.numberOfPreviousDays, this.initialDate).subscribe((response) =>{
        this.daySlots = daySlotMapper.getDaySlot(response);
        this.daySummaryEvents = daySummaryMapper.mapToDaySummaryEvents(response);
        this.onDateSelection(this.daySlots.find(x => this.areDatesEqual(x.date, this.initialDate)));
      });
     }

  ngOnInit(): void {
  }
  
  onDateSelection(day:DaySlot){
    this.currentDaySummaryEvent = this.daySummaryEvents.find(x => this.areDatesEqual(x.date, day.date));

    this.daySlots.forEach(element => {
      element.isSelected = false;
    });

    this.daySlots.find(x => x.date === day.date).isSelected = true;
  }

  private areDatesEqual(date1:Date, date2: Date):boolean{
    return date1.getFullYear() === date2.getFullYear() 
    && date1.getMonth() === date2.getMonth() 
    && date1.getDate() === date2.getDate()
}
}
