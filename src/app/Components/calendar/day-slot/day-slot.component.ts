import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DaySlot } from '../models/day-slot';
import { DayState } from '../models/day-state';

@Component({
  selector: 'app-day-slot',
  templateUrl: './day-slot.component.html',
  styleUrls: ['./day-slot.component.css']
})
export class DaySlotComponent implements OnInit {

  @Input() day: DaySlot;
  
  @Output() daySelected = new EventEmitter<DaySlot>();

  onDaySelected(day:DaySlot): void {
    this.daySelected.next(day);
  }

  constructor() { }

  ngOnInit(): void {
  }

  getConditionalClasses(day:DaySlot):string[]{
    let classes: string[]= [];
    if(day.isToday){
      classes.push("today");
    }
    if(day.isSelected){
      classes.push("selected");
    }
    return classes;
  }

  getDayState(day:DaySlot):string{
    let className = "day-state";
    if(day.dayState === DayState.Approved){
      return `${className} day-state-approved`;
    }
    if(day.dayState === DayState.Rejected){
      return `${className} day-state-rejected`;
    }
    if(day.dayState === DayState.Other){
      return `${className} day-state-other`;
    }
    return className;
  } 
}
