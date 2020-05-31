import { HoursEvent } from './hoursEvent';

export interface HoursEventProperties{
    firstTaskStart:Date;
    lastTaskEnd: Date;
    hoursEvents: HoursEvent[],
}