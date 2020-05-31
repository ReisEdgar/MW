import { ExpensesEvent } from './expensesEvent';
import { AdditionalHoursEvent } from './additionalHoursEvent';
import { HoursEventProperties } from './hoursEventsProperties';

export interface DaySummaryEvents {
    date:Date,
    hoursEventProperties: HoursEventProperties,
    expensesEvents: ExpensesEvent[],
    additionalHoursEvents: AdditionalHoursEvent[]
}