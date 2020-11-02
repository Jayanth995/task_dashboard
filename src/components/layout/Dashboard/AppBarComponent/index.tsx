import React, {useState, useRef} from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import * as userActions from 'store/user/actions'
import {useDispatch, useSelector} from 'store'
import {UserStateType} from 'store/types'
import {useSelector} from 'store'

import useStyles from './styles'

const AppBarComponent = () => {
    const dispatch = useDispatch()
    const classes = useStyles()

    const state = useSelector((user: UserStateType) => user);
    const imageSrc = `https://dev.teledirectasia.com:3092${state.user.image}`;
    
    function onLogout() {
      dispatch(userActions.remove())
    }
  
    return (
        <AppBar position="static" className={classes.header}>
          <Toolbar className={classes.toolbar}>
            <div className={classes.nameWrapper}>
                <Avatar alt="Remy Sharp" src={imageSrc} />
              <Typography variant="h6" className={classes.loginName}>
                {state.user.loginName}
              </Typography>
            </div>         
          <Button className={classes.logOutButton} onClick={onLogout} >Logout</Button>
        </Toolbar>
      </AppBar>
    )
  }
  
  export default AppBarComponent