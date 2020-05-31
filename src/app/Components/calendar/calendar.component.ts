import { Component, OnInit, Input } from '@angular/core';
import { DaySlot } from './models/day-slot';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {
  
  @Input() daySlots: DaySlot[];
  selectedDate:Date;
  constructor() {   
  }

  ngOnInit(): void {
    this.daySlots = this.sortByDate(this.daySlots);
    let selected = this.daySlots.find(x => x.isSelected);
    this.selectedDate = new Date(selected.date);    
  }

  private sortByDate(days: DaySlot[]): DaySlot[] {
    days.sort((a: DaySlot, b: DaySlot) => {
      return a.date.getTime() - b.date.getTime();
    });
    return days;
  }
}
