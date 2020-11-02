import React from 'react'
import {Container} from 'components/shared'
import {Route, Switch, Redirect} from 'react-router-dom'

import LogInContainer from 'components/pages/LogIn'
import routes from 'routing/routes'

const UnsignedLayout = () => {
  return (
    <Container maxWidth="xs" style={{height:'100vh'}}>
      <Switch>        
        <Route exact path={routes.unsigned.login} component={LogInContainer} />
        <Redirect to={routes.unsigned.login} />
      </Switch>
    </Container>
  )
}

export default UnsignedLayout
