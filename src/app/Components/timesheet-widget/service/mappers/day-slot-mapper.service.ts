import { Injectable } from '@angular/core';
import { Day } from '../../api-models/day';
import { DaySlot } from 'src/app/Components/calendar/models/day-slot';
import { DayState } from 'src/app/Components/calendar/models/day-state';

@Injectable({
  providedIn: 'root'
})
export class DaySlotMapperService {
  constructor() { }

  getDaySlot(days: Day[]): DaySlot[] {
    days = this.sortByDate(days);
    return this.mapToDaySlots(days);
  }

  private sortByDate(days: Day[]): Day[] {
    days.sort((a: Day, b: Day) => {
      return a.date.getTime() - b.date.getTime();
    });
    return days;
  }

  private mapToDaySlots(days: Day[]): DaySlot[] {
    let daysSlots: DaySlot[] = [];
    days.forEach((day) => {
      let daySlot: DaySlot = {
        date: day.date,
        hoursWorked: this.getHoursWorked(day),
        dayState: this.getDayState(day),
        isToday: this.isDateToday(day.date),
        isWeekend: false
      };
      daysSlots.push(daySlot);
    });
    daysSlots = this.addWeekends(daysSlots);
    return daysSlots;
  }

  private getHoursWorked(day: Day): number {
    let workHourEvents = day.tasks.map(x => x.events.filter(x => x.isWorkHour)).reduce((a, b) => a.concat(b));
    return workHourEvents.map(x => x.quantity).reduce((a, b) => a + b);
  }

  private getDayState(day: Day): DayState {
    if (day.tasks.length === 0) {
      return DayState.NoTasks;
    }
    if (day.tasks.some(x => x.isRejected)) {
      return DayState.Rejected;
    }
    if (day.tasks.every(x => x.isApproved)) {
      return DayState.Approved;
    }
    return DayState.Other;
  }
  private isDateToday(date: Date): boolean {
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);
    return date.getTime() === today.getTime();
  }
  
  private addWeekends(daySlots: DaySlot[]): DaySlot[] {
    let indexOfFriday = daySlots.findIndex(x => x.date.getDay() === 5);
    let saturday = new Date(daySlots[indexOfFriday].date);
    let sunday = new Date(daySlots[indexOfFriday].date);
    saturday.setDate(1);
    sunday.setDate(2);
    let saturdaySlot: DaySlot = {
      date: new Date(saturday),
      hoursWorked: 0,
      dayState: DayState.Other,
      isToday: this.isDateToday(saturday),
      isWeekend: true
    }
    let sundaySlot: DaySlot = {
      date: new Date(sunday),
      hoursWorked: 0,
      dayState: DayState.Other,
      isToday: this.isDateToday(sunday),
      isWeekend: true
    }
    daySlots.splice(indexOfFriday + 1, 0, saturdaySlot);
    daySlots.splice(indexOfFriday + 2, 0, sundaySlot);
    return daySlots;
  }
}