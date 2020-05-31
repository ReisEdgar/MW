import { Injectable } from '@angular/core';
import { Day } from '../../api-models/day';
import { ExpensesEvent } from 'src/app/Components/day-summary/models/expensesEvent';
import { TaskEvent } from '../../api-models/taskEvent';
import { HoursEvent } from 'src/app/Components/day-summary/models/hoursEvent';
import { AdditionalHoursEvent } from 'src/app/Components/day-summary/models/additionalHoursEvent';
import { DaySummaryEvents } from 'src/app/Components/day-summary/models/day-summary-events';

@Injectable({
    providedIn: 'root'
})
export class DaySummaryMapperService {
    constructor() { }


    mapToDaySummaryEvents(days: Day[]): DaySummaryEvents[] {
        let daySummaryEvents: DaySummaryEvents[] = [];
        days.forEach(day => {
            let daySummaryEvent: DaySummaryEvents;
            let events = day.tasks.map(x => x.events).reduce((a, b) => a.concat(b));
            daySummaryEvent.date = day.date;
            daySummaryEvent.hours = this.mapToHoursEvents(events);
            daySummaryEvent.expenses = this.mapToExpensesEvents(events);
            daySummaryEvent.additionalHours = this.mapToAdditionalHoursEvents(events);
            daySummaryEvents.push(daySummaryEvent);
        });
        return daySummaryEvents;
    }

    private mapToAdditionalHoursEvents(events: TaskEvent[]): AdditionalHoursEvent[] {
        let additionalHoursTaskEvent = events.filter(x => x.isAdditionalHoursEventType);
        let additionalHoursEvents: AdditionalHoursEvent[] = [];

        additionalHoursTaskEvent.forEach(element => {
            let additionalHoursEvent: AdditionalHoursEvent = {
                type: element.eventTypeName,
                amount: element.quantity
            };
            additionalHoursEvents.push(additionalHoursEvent);
        });
        return additionalHoursEvents;
    }

    private mapToHoursEvents(events: TaskEvent[]): HoursEvent[] {
        let hoursTaskEvent = events.filter(x => x.isHoursEventType);
        let hoursEvents: HoursEvent[] = [];

        hoursTaskEvent.forEach(element => {
            let hoursEvent: HoursEvent = {
                type: element.eventTypeName,
                duration: element.quantity
            };
            hoursEvents.push(hoursEvent);
        });
        return hoursEvents;
    }

    private mapToExpensesEvents(events: TaskEvent[]): ExpensesEvent[] {
        let expenseTaskEvents = events.filter(x => x.isExpenseType);
        let expenseEvents: ExpensesEvent[] = [];
        expenseTaskEvents.forEach(element => {
            let expenseEvent: ExpensesEvent = {
                type: element.eventTypeName,
                quantity: element.quantity,
                price: element.price,
                total: element.price * element.quantity
            };
            expenseEvents.push(expenseEvent);
        });
        return expenseEvents;
    }

}