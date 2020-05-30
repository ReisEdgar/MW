import { HoursEvent } from '../../workday-info/models/hoursEvent';
import { ExpensesEvent } from '../../workday-info/models/expensesEvent';
import { AdditionalHoursComponent } from '../../workday-info/additional-hours/additional-hours.component';
import { AdditionalHoursEvent } from '../../workday-info/models/additionalHoursEvent';

export interface GroupedTimesheetEvent{
    hourEvents: HoursEvent[],
    expenseEvents: ExpensesEvent[],
    AdditionalHoursComponent: AdditionalHoursEvent[]
}