import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DaySlot } from './models/day-slot';
import { environment } from 'src/environments/environment';
import { areDatesEqual } from '../helpers/date-helper';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {
  
  selectedDate:Date;
  private _daySlots:DaySlot[];
  @Output() daySelected = new EventEmitter<Date>();


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

  goToToday(){
    let today = this.daySlots.find(x => areDatesEqual(x.date, environment.today));
    this.onDaySelected(today);
  }

  onDaySelected(day:DaySlot){
    this.daySlots.forEach(element => {
      element.isSelected = false;
    });
    this.daySlots.find(x => x === day).isSelected = true;
    this.selectedDate = new Date(day.date);    
    this.daySelected.next(day.date);
  }
 
  private sortByDate(days: DaySlot[]): DaySlot[] {
    days.sort((a: DaySlot, b: DaySlot) => {
      return a.date.getTime() - b.date.getTime();
    });
    return days;
  }
}
