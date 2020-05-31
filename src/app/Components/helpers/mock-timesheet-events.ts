import { Day } from '../timesheet-widget/api-models/day';

let day7 = new Date();
let day6 = new Date(new Date().setDate(new Date().getDate() - 1))
let day5 = new Date(new Date().setDate(new Date().getDate() - 2))
let day4 = new Date(new Date().setDate(new Date().getDate() - 3))
let day3 = new Date(new Date().setDate(new Date().getDate() - 4))
let day2 = new Date(new Date().setDate(new Date().getDate() - 5))
let day1 = new Date(new Date().setDate(new Date().getDate() - 6))
export const MockData: Day[] = [
    {
        date: day7,
        firstTaskStart:day7,
        lastTaskEnd:day7,
        taskCount: 1,
        tasks: [
            {
                isApproved: true, isRejected: false, events: [
                    { quantity: 7.5, price: 2, eventTypeName: "Arbeidstid", isExpenseType: false, isHoursEventType: true, isAdditionalHoursEventType: false, isWorkHour: true },
                    { quantity: 1, price: 2, eventTypeName: "Overtid 50%", isExpenseType: false, isHoursEventType: true, isAdditionalHoursEventType: false, isWorkHour: true },

                ]
            }
        ]
    }];/*
        hoursEvents: [
            { date: day7, quantity: 7.5, price: 2, eventTypeName: "Arbeidstid", isExpenseType: false, isHoursEventType: true, isAdditionalHoursEventType: false, isWorkHour: true, isApproved: true, isRejected: false, tasksCount: 3, firstTaskStart: day7, lastTaskEnd: day7 },
            { date: day7, quantity: 1, price: 2, eventTypeName: "Overtid 50%", isExpenseType: false, isHoursEventType: true, isAdditionalHoursEventType: false, isWorkHour: true, isApproved: true, isRejected: false, tasksCount: 3, firstTaskStart: day7, lastTaskEnd: day7 },
        ],
        expensesEvents: [
            { date: day7, quantity: 2, price: 2, eventTypeName: "Liftleie dagpris", isExpenseType: true, isHoursEventType: false, isAdditionalHoursEventType: false, isWorkHour: true, isApproved: true, isRejected: false, tasksCount: 3, firstTaskStart: day7, lastTaskEnd: day7 },
        ],
        additionalHoursEvents: [
            { date: day7, quantity: 2.5, price: 2, eventTypeName: "Liftleie timepris", isExpenseType: false, isHoursEventType: false, isAdditionalHoursEventType: true, isWorkHour: true, isApproved: true, isRejected: false, tasksCount: 3, firstTaskStart: day7, lastTaskEnd: day7 },
            { date: day7, quantity: 6, price: 2, eventTypeName: "Løfte", isExpenseType: false, isHoursEventType: false, isAdditionalHoursEventType: true, isWorkHour: true, isApproved: true, isRejected: false, tasksCount: 3, firstTaskStart: day7, lastTaskEnd: day7 },
        ]
    },


    {
        date: day6,
        hoursEvents: [
            { date: day6, quantity: 7.5, price: 2, eventTypeName: "Arbeidstid", isExpenseType: false, isHoursEventType: true, isAdditionalHoursEventType: false, isWorkHour: true, isApproved: true, isRejected: false, tasksCount: 3, firstTaskStart: day6, lastTaskEnd: day6 },
            { date: day6, quantity: 1, price: 2, eventTypeName: "Overtid 50%", isExpenseType: false, isHoursEventType: true, isAdditionalHoursEventType: false, isWorkHour: true, isApproved: true, isRejected: false, tasksCount: 3, firstTaskStart: day6, lastTaskEnd: day6 },
        ],
        expensesEvents: [
            { date: day6, quantity: 2, price: 2, eventTypeName: "Liftleie dagpris", isExpenseType: true, isHoursEventType: false, isAdditionalHoursEventType: false, isWorkHour: true, isApproved: true, isRejected: false, tasksCount: 3, firstTaskStart: day6, lastTaskEnd: day6 },
        ],
        additionalHoursEvents: [
            { date: day6, quantity: 2.5, price: 2, eventTypeName: "Liftleie timepris", isExpenseType: false, isHoursEventType: false, isAdditionalHoursEventType: true, isWorkHour: true, isApproved: true, isRejected: false, tasksCount: 3, firstTaskStart: day6, lastTaskEnd: day6 },
            { date: day6, quantity: 6, price: 2, eventTypeName: "Løfte", isExpenseType: false, isHoursEventType: false, isAdditionalHoursEventType: true, isWorkHour: true, isApproved: true, isRejected: false, tasksCount: 3, firstTaskStart: day6, lastTaskEnd: day6 },
        ]
    },


    {
        date: day5,
        hoursEvents: [
            { date: day5, quantity: 7.5, price: 2, eventTypeName: "Arbeidstid", isExpenseType: false, isHoursEventType: true, isAdditionalHoursEventType: false, isWorkHour: true, isApproved: true, isRejected: false, tasksCount: 3, firstTaskStart: day5, lastTaskEnd: day5 },
            { date: day5, quantity: 1, price: 2, eventTypeName: "Overtid 50%", isExpenseType: false, isHoursEventType: true, isAdditionalHoursEventType: false, isWorkHour: true, isApproved: true, isRejected: false, tasksCount: 3, firstTaskStart: day5, lastTaskEnd: day5 },
        ],
        expensesEvents: [
            { date: day5, quantity: 2, price: 2, eventTypeName: "Liftleie dagpris", isExpenseType: true, isHoursEventType: false, isAdditionalHoursEventType: false, isWorkHour: true, isApproved: true, isRejected: false, tasksCount: 3, firstTaskStart: day5, lastTaskEnd: day5 },
        ],
        additionalHoursEvents: [
            { date: day5, quantity: 2.5, price: 2, eventTypeName: "Liftleie timepris", isExpenseType: false, isHoursEventType: false, isAdditionalHoursEventType: true, isWorkHour: true, isApproved: true, isRejected: false, tasksCount: 3, firstTaskStart: day5, lastTaskEnd: day5 },
            { date: day5, quantity: 6, price: 2, eventTypeName: "Løfte", isExpenseType: false, isHoursEventType: false, isAdditionalHoursEventType: true, isWorkHour: true, isApproved: true, isRejected: false, tasksCount: 3, firstTaskStart: day5, lastTaskEnd: day5 },
        ]
    },



    {
        date: day4,
        hoursEvents: [
            { date: day4, quantity: 7.5, price: 2, eventTypeName: "Arbeidstid", isExpenseType: false, isHoursEventType: true, isAdditionalHoursEventType: false, isWorkHour: true, isApproved: true, isRejected: false, tasksCount: 3, firstTaskStart: day4, lastTaskEnd: day4 },
            { date: day4, quantity: 1, price: 2, eventTypeName: "Overtid 50%", isExpenseType: false, isHoursEventType: true, isAdditionalHoursEventType: false, isWorkHour: true, isApproved: true, isRejected: false, tasksCount: 3, firstTaskStart: day4, lastTaskEnd: day4 },
        ],
        expensesEvents: [
            { date: day4, quantity: 2, price: 2, eventTypeName: "Liftleie dagpris", isExpenseType: true, isHoursEventType: false, isAdditionalHoursEventType: false, isWorkHour: true, isApproved: true, isRejected: false, tasksCount: 3, firstTaskStart: day4, lastTaskEnd: day4 },
        ],
        additionalHoursEvents: [
            { date: day4, quantity: 2.5, price: 2, eventTypeName: "Liftleie timepris", isExpenseType: false, isHoursEventType: false, isAdditionalHoursEventType: true, isWorkHour: true, isApproved: true, isRejected: false, tasksCount: 3, firstTaskStart: day4, lastTaskEnd: day4 },
            { date: day4, quantity: 6, price: 2, eventTypeName: "Løfte", isExpenseType: false, isHoursEventType: false, isAdditionalHoursEventType: true, isWorkHour: true, isApproved: true, isRejected: false, tasksCount: 3, firstTaskStart: day4, lastTaskEnd: day4 },
        ]
    },



    {
        date: day3,
        hoursEvents: [
            { date: day3, quantity: 7.5, price: 2, eventTypeName: "Arbeidstid", isExpenseType: false, isHoursEventType: true, isAdditionalHoursEventType: false, isWorkHour: true, isApproved: true, isRejected: false, tasksCount: 3, firstTaskStart: day3, lastTaskEnd: day3 },
            { date: day3, quantity: 1, price: 2, eventTypeName: "Overtid 50%", isExpenseType: false, isHoursEventType: true, isAdditionalHoursEventType: false, isWorkHour: true, isApproved: true, isRejected: false, tasksCount: 3, firstTaskStart: day3, lastTaskEnd: day3 },
        ],
        expensesEvents: [
            { date: day3, quantity: 2, price: 2, eventTypeName: "Liftleie dagpris", isExpenseType: true, isHoursEventType: false, isAdditionalHoursEventType: false, isWorkHour: true, isApproved: true, isRejected: false, tasksCount: 3, firstTaskStart: day3, lastTaskEnd: day3 },
        ],
        additionalHoursEvents: [
            { date: day3, quantity: 2.5, price: 2, eventTypeName: "Liftleie timepris", isExpenseType: false, isHoursEventType: false, isAdditionalHoursEventType: true, isWorkHour: true, isApproved: true, isRejected: false, tasksCount: 3, firstTaskStart: day3, lastTaskEnd: day3 },
            { date: day3, quantity: 6, price: 2, eventTypeName: "Løfte", isExpenseType: false, isHoursEventType: false, isAdditionalHoursEventType: true, isWorkHour: true, isApproved: true, isRejected: false, tasksCount: 3, firstTaskStart: day3, lastTaskEnd: day3 },
        ]
    },

]; 
*/