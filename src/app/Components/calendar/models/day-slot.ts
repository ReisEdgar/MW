import { DayState } from './day-state';

export interface DaySlot {
    date:Date,
    hoursWorked: number,
    isWeekend: boolean,
    isToday:boolean,
    dayState:DayState,
    isSelected:boolean
}
