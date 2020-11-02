import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  taskSubmit: {
    margin: theme.spacing(2, 0, 4),   
    opacity: '1',   
    borderRadius: '8px',
    width: '244px',    
    marginLeft: '24px'
  },
  dialogWrapper: {
    width: '296px',
    height: '193px',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    boxShadow: '0px 3px 6px #00000029',
    borderRadius: '12px',
    opacity: '1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialogContent: {
    width: '244px',    
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    boxShadow: '0px 3px 6px #00000029',
    borderRadius: '12px',
    opacity: '1',
    marginLeft: '24px'
  }
}))




