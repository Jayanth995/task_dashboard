import React, {useEffect, useState} from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Container, Grid} from 'components/shared'
import NewTaskDialog from '../New_task'
import useStyles from './styles'


const Empty = () => {
    const [open, setOpen] = useState(false);
    const [editSubmit,setEditSubmit] = useState({edit: false, task: null})

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
    const classes = useStyles();     

    return (
        <div className={classes.emptyWrapper}>
            <Typography noWrap component="h2" variant="subtitle2" className={classes.text}>
                You have no task.
            </Typography>
            <Button variant="contained" color="primary" className={classes.newTaskButton} onClick={handleClickOpen}>
                + New Task
            </Button>
            <NewTaskDialog open={open} onClose={handleClose} editSubmit={editSubmit}/>
        </div>
      )  
        
  }
  
  export default Empty
  