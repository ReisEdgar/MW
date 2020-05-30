
import { ApiTimesheetEvent } from './timesheet-event';

export interface GroupedTimesheetEvent{
    date: Date,
    hoursEvents: ApiTimesheetEvent[],
    expensesEvents: ApiTimesheetEvent[],
    additionalHoursEvents: ApiTimesheetEvent[]
}