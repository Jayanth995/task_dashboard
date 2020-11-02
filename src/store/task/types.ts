import {TasksType} from 'types/tasks'
import {DashDataType} from 'types/dashData'

export type taskStateType = {
    taskData: Array<string> | null,
    originalTaskData: Array<string> | null,
    dashData: Array<string> | null
}

export type SetTaskActionType = {
    type: 'TASKS:SET'
    taskList: TasksType
  }

  export type SearchTaskActionType = {
    type: 'TASKS_SEARCH'
    val: string
  }

export type SetDashDataActionType = {
    type: 'DASHDATA_SET'
    dashData: DashDataType
}
  
  export type RemoveTaskActionType = {
    type: 'TASKS:REMOVE'
  }