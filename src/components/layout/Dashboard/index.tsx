import React, {useState, useEffect} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import AppBarComponent from './AppBarComponent'
import MainContainer from 'components/pages/Main'
import routes from 'routing/routes'


import useStyles from './styles'

const Dashboard = () => {
  const classes = useStyles()


  return (
    <div className={classes.wrapper}>
      <AppBarComponent />      
      <Switch>
        <Route exact path={routes.signed.dashboard} component={MainContainer} />
        <Redirect to={routes.signed.dashboard} />
      </Switch>
    </div>
  )
}

export default Dashboard