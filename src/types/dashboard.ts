import {TaskType} from './task';

export type DashboardType = {
    msg: string,
    tasksCompleted: number,
    totalTasks: number,
    latestTasks: Array<TaskType>
}