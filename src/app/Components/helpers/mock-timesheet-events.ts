import { Day } from '../timesheet-widget/api-models/day';
import { environment } from 'src/environments/environment';

let day7 = new Date(environment.today);
let day6 = new Date(environment.today);
let day5 = new Date(environment.today);
let day4 = new Date(environment.today);
let day3 = new Date(environment.today);
let day2 = new Date(environment.today);

let days: Date[] = [
    day7, day6, day5, day4, day3
];
let isWeekend = false;
for(let i = 1; i < days.length; i++){
days[i].setDate(days[i].getDate() - i);

if(isWeekend){
    days[i].setDate(days[i].getDate() - 2);
}
while(days[i].getDay() === 6 ||days[i].getDay() === 0){
    days[i].setDate(days[i].getDate() - 1);
isWeekend = true;
}
}

export const MockData: Day[] = [
    {
        date: days[0],
        firstTaskStart: days[0],
        lastTaskEnd: days[0],
        taskCount: 3,
        tasks: [
            {
                isApproved: true, isRejected: false, events: [
                    { quantity: 7.5, price: 2, eventTypeName: "Arbeidstid", isExpenseType: false, isHoursEventType: true, isAdditionalHoursEventType: false, isWorkHour: true },
                    { quantity: 1, price: 2, eventTypeName: "Overtid 50%", isExpenseType: false, isHoursEventType: true, isAdditionalHoursEventType: false, isWorkHour: true },

                ]
            },
            {
                isApproved: true, isRejected: false, events: [
                    { quantity: 2, price: 2, eventTypeName: "Liftleie dagpris", isExpenseType: true, isHoursEventType: false, isAdditionalHoursEventType: false, isWorkHour: false },
                ]
            },
            {
                isApproved: true, isRejected: false, events: [
                    { quantity: 2.5, price: 2, eventTypeName: "Liftleie timepris", isExpenseType: false, isHoursEventType: false, isAdditionalHoursEventType: true, isWorkHour: false },
                    { quantity: 6, price: 2, eventTypeName: "Løfte", isExpenseType: false, isHoursEventType: false, isAdditionalHoursEventType: true, isWorkHour: false },
                ]
            },
        ]
    },
    {
        date: days[1],
        firstTaskStart: days[1],
        lastTaskEnd: days[1],
        taskCount: 3,
        tasks: [
            {
                isApproved: false, isRejected: true, events: [
                    { quantity: 7.5, price: 2, eventTypeName: "Arbeidstid", isExpenseType: false, isHoursEventType: true, isAdditionalHoursEventType: false, isWorkHour: true },
                    { quantity: 1, price: 2, eventTypeName: "Overtid 50%", isExpenseType: false, isHoursEventType: true, isAdditionalHoursEventType: false, isWorkHour: true },

                ]
            },
            {
                isApproved: true, isRejected: false, events: [
                    { quantity: 2, price: 2, eventTypeName: "Liftleie dagpris", isExpenseType: true, isHoursEventType: false, isAdditionalHoursEventType: false, isWorkHour: false },
                ]
            },
            {
                isApproved: true, isRejected: false, events: [
                    { quantity: 2.5, price: 2, eventTypeName: "Liftleie timepris", isExpenseType: false, isHoursEventType: false, isAdditionalHoursEventType: true, isWorkHour: false },
                    { quantity: 6, price: 2, eventTypeName: "Løfte", isExpenseType: false, isHoursEventType: false, isAdditionalHoursEventType: true, isWorkHour: false },
                ]
            },
        ]
    },
    {
        date: days[2],
        firstTaskStart: days[2],
        lastTaskEnd: days[2],
        taskCount: 3,
        tasks: [
            {
                isApproved: true, isRejected: false, events: [
                    { quantity: 7.5, price: 2, eventTypeName: "Arbeidstid", isExpenseType: false, isHoursEventType: true, isAdditionalHoursEventType: false, isWorkHour: true },
                    { quantity: 1, price: 2, eventTypeName: "Overtid 50%", isExpenseType: false, isHoursEventType: true, isAdditionalHoursEventType: false, isWorkHour: true },

                ]
            },
            {
                isApproved: true, isRejected: false, events: [
                    { quantity: 2, price: 2, eventTypeName: "Liftleie dagpris", isExpenseType: true, isHoursEventType: false, isAdditionalHoursEventType: false, isWorkHour: false },
                ]
            },
            {
                isApproved: true, isRejected: false, events: [
                    { quantity: 2.5, price: 2, eventTypeName: "Liftleie timepris", isExpenseType: false, isHoursEventType: false, isAdditionalHoursEventType: true, isWorkHour: false },
                    { quantity: 6, price: 2, eventTypeName: "Løfte", isExpenseType: false, isHoursEventType: false, isAdditionalHoursEventType: true, isWorkHour: false },
                ]
            },
        ]
    },
    {
        date: days[3],
        firstTaskStart: days[3],
        lastTaskEnd: days[3],
        taskCount: 3,
        tasks: [
            {
                isApproved: true, isRejected: false, events: [
                    { quantity: 7.5, price: 2, eventTypeName: "Arbeidstid", isExpenseType: false, isHoursEventType: true, isAdditionalHoursEventType: false, isWorkHour: false },
                    { quantity: 1, price: 2, eventTypeName: "Overtid 50%", isExpenseType: false, isHoursEventType: true, isAdditionalHoursEventType: false, isWorkHour: false },

                ]
            },
            {
                isApproved: true, isRejected: false, events: [
                    { quantity: 2, price: 2, eventTypeName: "Liftleie dagpris", isExpenseType: true, isHoursEventType: false, isAdditionalHoursEventType: false, isWorkHour: false },
                ]
            },
            {
                isApproved: true, isRejected: false, events: [
                    { quantity: 2.5, price: 2, eventTypeName: "Liftleie timepris", isExpenseType: false, isHoursEventType: false, isAdditionalHoursEventType: true, isWorkHour: false },
                    { quantity: 6, price: 2, eventTypeName: "Løfte", isExpenseType: false, isHoursEventType: false, isAdditionalHoursEventType: true, isWorkHour: false },
                ]
            },
        ]
    },
    {
        date: days[4],
        firstTaskStart: days[4],
        lastTaskEnd: days[4],
        taskCount: 3,
        tasks: [
            {
                isApproved: false, isRejected: false, events: [
                    { quantity: 2, price: 2, eventTypeName: "myTest", isExpenseType: false, isHoursEventType: true, isAdditionalHoursEventType: false, isWorkHour: true },

                ]
            },
            {
                isApproved: true, isRejected: false, events: [
                    { quantity: 2, price: 2, eventTypeName: "Lorem  dagpris", isExpenseType: true, isHoursEventType: false, isAdditionalHoursEventType: false, isWorkHour: false },
                ]
            },
            {
                isApproved: true, isRejected: false, events: [
                    { quantity: 5, price: 5, eventTypeName: "Liftleie test timepris", isExpenseType: false, isHoursEventType: false, isAdditionalHoursEventType: true, isWorkHour: false },
                    { quantity: 1, price: 14, eventTypeName: "Lorem ipsum Løfte", isExpenseType: false, isHoursEventType: false, isAdditionalHoursEventType: true, isWorkHour: false },
                ]
            },
        ]
    }
];