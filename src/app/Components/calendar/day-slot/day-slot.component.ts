import { Component, OnInit, Input } from '@angular/core';
import { DaySlot } from '../models/day-slot';
import { DayState } from '../models/day-state';

@Component({
  selector: 'app-day-slot',
  templateUrl: './day-slot.component.html',
  styleUrls: ['./day-slot.component.css']
})
export class DaySlotComponent implements OnInit {

  @Input() day: DaySlot;
  constructor() { }

  ngOnInit(): void {
  }

  daySelected(selected:boolean){
    this.day.isSelected = selected;
  }

  getConditionalClasses(day:DaySlot):string[]{
    let classes: string[];
    if(day.isToday){
      classes.push("today");
    }
    if(day.isSelected){
      classes.push("selected");
    }
    if(day.isWeekend){
      classes.push("weekend")
    }
    return classes;
  }

  getDayState(day:DaySlot):string{
    if(day.dayState === DayState.Approved){
      return "day-state-approved";
    }
    if(day.dayState === DayState.Rejected){
      return "day-state-rejected";
    }
    if(day.dayState === DayState.NoTasks){
      return "day-state-noTasks";
    }
    if(day.dayState === DayState.Other){
      return "day-state-other";
    }
  } 
}
