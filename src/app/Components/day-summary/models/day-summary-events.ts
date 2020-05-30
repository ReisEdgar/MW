import { ExpensesEvent } from './expensesEvent';
import { HoursEvent } from './hoursEvent';
import { AdditionalHoursEvent } from './additionalHoursEvent';

export interface DaySummaryEvents {
    hours: HoursEvent[],
    expenses: ExpensesEvent[],
    additionalHours: AdditionalHoursEvent[]
}