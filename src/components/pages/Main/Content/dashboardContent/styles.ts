import {makeStyles} from '@material-ui/core/styles'


export default makeStyles(() => ({
    paper : {
        height: "195px",
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        boxshadow: "0px 3px 6px #0000000A",
        borderRadius: "12px",
        opacity: 1
    },
    dialogContent: {
        width: '244px',    
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 3px 6px #00000029',
        borderRadius: '12px',
        opacity: '1',
        marginLeft: '24px'
      },
    striker: {
        textDecoration:"line-through"
    }
}))