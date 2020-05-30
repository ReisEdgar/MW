import { Task } from './task';

export interface Day{
    firstTaskStart: Date,
    lastTaskEnd: Date,
    date:Date,
    tasks:Task[],
    taskCount: number
}