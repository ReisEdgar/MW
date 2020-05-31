import { ExpensesEvent } from './expensesEvent';
import { HoursEvent } from './hoursEvent';
import { AdditionalHoursEvent } from './additionalHoursEvent';

export interface DaySummaryEvents {
    date: Date,
    hours: HoursEvent[],
    expenses: ExpensesEvent[],
    additionalHours: AdditionalHoursEvent[]
}