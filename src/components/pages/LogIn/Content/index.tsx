import React, {useState, SyntheticEvent} from 'react'
import {makeStyles, withStyles} from '@material-ui/core/styles'
import {Avatar, Button, Checkbox, FormControlLabel, Icon, Typography, TextField} from 'components/shared'
import {ChangeEventType} from 'types/events'
import {ObjectType} from 'types/object'

import useStyles from './styles'

type Props = {
  authenticate: (loginName: string, loginId: string) => void
}

const CssTextField = withStyles({
    root: {     
      '& .MuiInputBase-root': {
        width: '305px',
        height: '40px',
        opacity: '1',
        background: '#EEF1F8 0% 0% no-repeat padding-box',
        borderRadius: '8px',       
      },
      '& .MuiFilledInput-input': {
        padding: '20px 12px 10px'
       }
    },
  })(TextField);


const LogInContent = ({authenticate}: Props) => {
  const classes = useStyles()  
  const [loginId, setLoginId] = useState('')  
  const [loginName, setLoginName] = useState('')

  const changeMap: ObjectType = {    
    loginId: setLoginId,   
    loginName: setLoginName,
  }

  function changeInputState({target: {name, value}}: ChangeEventType) {
    changeMap[name](value)
  }

  function submit(e: SyntheticEvent) {
    e.preventDefault()
    authenticate(loginName, loginId)
  }

  return (
    <div className={classes.signInWrapper}>
      <Typography component="h1" variant="h5" className={classes.label}>
        Login
      </Typography>
      <form onSubmit={submit} className={classes.signInForm}>
         
        <CssTextField
          autoFocus
          required          
          id="loginId"
          name="loginId"         
          variant="filled"
          placeholder="Id"          
          InputProps={{disableUnderline: true}}
          className={classes.LoginInput}
          value={loginId}
          onChange={changeInputState}
        />
        <CssTextField
          required          
          id="loginName"
          name="loginName"          
          variant="filled"
          placeholder="Name"         
          InputProps={{disableUnderline: true}}
          className={classes.LoginInput}
          value={loginName}
          onChange={changeInputState}
        />

        <Button
          fullWidth
          className={classes.signInSubmit}
          type="submit"
          variant="contained"
          color="primary"
          data-testid="sign-in-button">
          Login
        </Button>
      </form>
    </div>
  )
}

export default LogInContent
