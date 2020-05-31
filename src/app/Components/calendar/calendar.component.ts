import { Component, OnInit, Input } from '@angular/core';
import { DaySlot } from './models/day-slot';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {
  
  @Input() days: DaySlot[];
  selectedDate:Date;
  constructor() {   
    this.days = this.sortByDate(this.days);
    let today = this.days.find(x => x.isToday);
    this.selectedDate = new Date(today.date);
   }

  ngOnInit(): void {
  }

  private sortByDate(days: DaySlot[]): DaySlot[] {
    days.sort((a: DaySlot, b: DaySlot) => {
      return a.date.getTime() - b.date.getTime();
    });
    return days;
  }
}
