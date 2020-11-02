import * as userStorage from 'utils/userStorage'
import {TasksType} from 'types/tasks'
import {DashDataType} from 'types/dashData'
import {SetTaskActionType, SetDashDataActionType, SearchTaskActionType} from './types'
import {ThunkResultType} from 'store/types'

export const TASKS_SET = 'TASKS:SET'
export const TASKS_REMOVE = 'TASKS:REMOVE'
export const DASHDATA_SET = 'DASHDATA_SET'
export const TASKS_SEARCH = 'TASKS_SEARCH'

export function set(taskList: TasksType): SetTaskActionType {
  return {
    type: TASKS_SET,
    taskList
  }
}

export function setDash(dashData: DashDataType): SetDashDataActionType {
    return {
      type: DASHDATA_SET,
      dashData
    }
  }

export function searchTask(val :string): SearchTaskActionType {
    return {
        type: TASKS_SEARCH,
        val
    }
}

export function remove(): ThunkResultType<void> {
  return (dispatch) => {
    dispatch({type: TASKS_REMOVE})
    userStorage.clear()
  }
}
