import {makeStyles, withStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  signInWrapper: {
    //alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(8),
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    boxShadow: '0px 3px 6px #00000029',
    borderRadius: '12px',
    opacity: 1,
    width: '350px'
  },
  signInAvatar: {
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing(1)
  },
  signInForm: {
    marginTop: theme.spacing(1),
    width: '100%',
    textAlign: 'center'
  },
  signInSubmit: {
    margin: theme.spacing(2, 0, 4),
    width: '305px',
    height: '40px',
    opacity: '1',   
    borderRadius: '8px'
  },
  label: {
    textAlign: 'left',
    font: 'normal normal medium 20px/24px Montserrat',
    letterSpacing: '0px',
    color: '#537178',
    opacity: '1',
    margin: '24px 0 0 24px'
  },
  LoginInput: {
    width: '305PX',
    height: '40px',
    background:' #EEF1F8 0% 0% no-repeat padding-box',
    borderRadius: '8px',
    margin: '12px',
    '&[class="MuiFilledInput-root"]': {       
        width: '305px',
        height: '40px',
        opacity: '1',
        background: '#EEF1F8 0% 0% no-repeat padding-box',
        borderRadius: '8px'
    }
  }
}))




