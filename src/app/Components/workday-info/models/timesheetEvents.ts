import { ExpensesEvent } from './expensesEvent';
import { HoursEvent } from './hoursEvent';
import { AdditionalHoursEvent } from './additionalHoursEvent';

export interface TimesheetEvent {
    hours: HoursEvent[],
    expenses: ExpensesEvent[],
    additionalHours: AdditionalHoursEvent[]
}