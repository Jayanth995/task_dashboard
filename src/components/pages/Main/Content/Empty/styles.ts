import {makeStyles} from '@material-ui/core/styles'


export default makeStyles(() => ({
    noTaskGrid: {
        width: '304px',
        height: '158px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 3px 6px #0000000A',
        borderRadius: '12px',
        justifyContent: 'center'
    },
    emptyWrapper: {
        display: 'block'
    },
    newTaskButton: {
        fontSize: '12px',
        marginTop: '10px'
    },
    text: {
        fontSize: "18px"
    }
}))