import {makeStyles} from '@material-ui/core/styles'

export default makeStyles(() => ({
 header : {
    height: '65px',
    background: '#fff'    
 },
 toolbar: {
     justifyContent: "space-between"
 },
 loginName: {
    letterSpacing: '0px',
    color: '#6D8187',
    marginLeft: '16px'
 },
 logOutButton: {
     float: 'right',
     textTransform: 'unset'
 },
 nameWrapper: {
     display: 'flex'
 }
}))
