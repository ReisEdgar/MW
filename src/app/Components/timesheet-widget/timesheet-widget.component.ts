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
  const numberOfPreviousDays = 7;
  const initialDate = new Date();
export class TimesheetWidgetComponent implements OnInit {
   
  days:DaySlot[];
  daySummaryEvents:DaySummaryEvents[];
  currentDaySummaryEvent:DaySummaryEvents;
  
  constructor(private eventService: TimesheetEventService, private daySlotMapper: DaySlotMapperService,
    private daySummaryMapper: DaySummaryMapperService) {
      eventService.getTimesheetEvents(numberOfPreviousDays, initialDate).subscribe((response) =>{
        this.days = daySlotMapper.getDaySlot(response);
        this.daySummaryEvents = daySummaryMapper.mapToDaySummaryEvents(response);
        this.onDaySelection(this.days.find(x => x.date === initialDate));
      });
     }

  ngOnInit(): void {
  }
  
  onDaySelection(day:DaySlot){
    this.currentDaySummaryEvent = this.daySummaryEvents.find(x => x.date === day.date);
    this.days.forEach(element => {
      element.isSelected = false;
    });
    this.days.find(x => x.date === day.date).isSelected = true;
  }
}
