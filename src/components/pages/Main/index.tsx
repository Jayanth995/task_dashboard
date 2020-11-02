import React, {useEffect, useState} from 'react'

import MainContent from './Content'
import * as taskApi from 'api/task'
import {taskType} from 'types/task'
import * as taskActions from 'store/task/actions'
import { DashboardType } from 'types/dashboard'
import {useDispatch,useSelector} from 'store'

const MainContainer = () => {
  const dispatch = useDispatch()
  const [tasks, setTasks] = useState<taskType[] | null>(null)
  const [dashData, setDashData] = useState<DashboardType[] | null>(null)
  const state = useSelector((state) => state);

  function removeTask(removedId: number) {
    setTasks(tasks!.filter(({id}) => id !== removedId))
  }

  useEffect(() => {
      taskApi.getTasks().then((taskData) => {       
        setTasks(taskData.tasks)
        dispatch(taskActions.set(taskData.tasks))
      });
      taskApi.getDashboardData().then((data) => {
        setDashData(data)
        dispatch(taskActions.setDash(data))
      })
  }, [])
  
  return <MainContent tasks={state.task.taskData} dashData={state.task.dashData} removeTask={removeTask} />
}

export default MainContainer
