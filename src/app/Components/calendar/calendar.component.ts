import { Component, OnInit, Input } from '@angular/core';
import { DaySlot } from './models/day-slot';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {
  
  selectedDate:Date;
  private _daySlots:DaySlot[];

  @Input() set daySlots(input: DaySlot[]) {
    if(input === undefined){
      return;
    }

    this._daySlots = this.sortByDate(input);
    
    let selected = this.daySlots.find(x => x.isSelected);
    if(selected !== undefined){
    this.selectedDate = new Date(selected.date);    
    }
 }
  get daySlots():DaySlot[]{
    return this._daySlots;
  }

  constructor() {   
  }

  ngOnInit(): void {

  }

  onDaySelected(day:DaySlot){
    this.daySlots.forEach(element => {
      element.isSelected = false;
    });
    this.daySlots.find(x => x === day).isSelected = true;
  }
 
  private sortByDate(days: DaySlot[]): DaySlot[] {
    days.sort((a: DaySlot, b: DaySlot) => {
      return a.date.getTime() - b.date.getTime();
    });
    return days;
  }
}
