import {TaskType} from './task';

export type DashDataType = {
    tasksCompleted: number,
    totalTasks: number,
    latestTasks: Array<TaskType>
}