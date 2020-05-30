import { TaskEvent } from './taskEvent';

export interface Task{
    isApproved:boolean,
    isRejected: boolean,
    events:TaskEvent[]
}