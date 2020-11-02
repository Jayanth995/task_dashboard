import React from 'react'
import {Container, Grid} from 'components/shared'
import Empty from './Empty'
import DashboardContent from './dashboardContent'
import Loader from 'components/layout/Loader'

import {taskType} from 'types/task'

import useStyles from './styles'
import { DashboardType } from 'types/dashboard'

type Props = {
  tasks: taskType[] | null
  dashData: DashboardType[] | null
  removeTask: (id: number) => void
}



const MainContent = ({tasks, dashData, removeTask}: Props) => {
  
  const classes = useStyles();  
  function renderContent() {
    if (!tasks) {
      return <Loader />
    } else if(tasks.length == 0) {
      return <Grid container align="center" justify="center"  spacing={2} className={classes.emptyGrid}>
          <Empty />
        </Grid>
    } else {
      return <DashboardContent tasks={tasks} dashData={dashData} removeTask={removeTask}/>
    }
  }

  return (
    <Container navbar component="main">
      <Grid container justify="center" spacing={5}>
        {renderContent()}
      </Grid>
    </Container>
  )
}

export default MainContent
