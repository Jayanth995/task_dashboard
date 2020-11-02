import * as actions from './actions'
import {taskStateType, RemoveTaskActionType, SetTaskActionType, SetDashDataActionType, SearchTaskActionType} from './types'
import {updateObject} from '../../utils/upDateObject'

const defaultState = {
  taskData: null,
  originalTaskData: null,
  dashData: null
}

export default (state: taskStateType = defaultState, action: RemoveTaskActionType | SetTaskActionType | SetDashDataActionType | SearchTaskActionType) => {
  switch (action.type) {
    case actions.TASKS_SET:
      return updateObject(state, {
       taskData: action.taskList,
       originalTaskData: action.taskList
    })
    case actions.TASKS_REMOVE:
      return {
        ...defaultState
      }
    case actions.DASHDATA_SET:
    return updateObject(state, {
        dashData: action.dashData
     })
     case actions.TASKS_SEARCH:
       let filteredTasks = state.originalTaskData && state.originalTaskData.filter(task => task.name.toLowerCase().includes(action.val.toLowerCase()));
       return updateObject(state, {
        taskData: filteredTasks       
     })
    default:
      return state
  }
}