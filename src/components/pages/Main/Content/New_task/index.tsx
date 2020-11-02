import React, {SyntheticEvent, useState, useEffect} from 'react';
import {withStyles} from '@material-ui/core/styles'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import * as taskApi from 'api/task';
import { Button,TextField} from 'components/shared'
import {ChangeEventType} from 'types/events'
import {ObjectType} from 'types/object'
import useStyles from './styles'
import {useDispatch,useSelector} from 'store'
import * as taskActions from 'store/task/actions'

type Props = {
    open: boolean;
    editSubmit: any;
    onClose: () => void;
    taskUpdate: () => void;  
  }

  const CssTextField = withStyles({
    root: {     
      '& .MuiInputBase-root': {
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

  


const NewTaskDialog = ({open, editSubmit, onClose, taskUpdate}: Props) => {
    const dispatch = useDispatch()
    const classes = useStyles();
    const [task, setTask] = useState('')  

    useEffect( () => {      
      if(editSubmit.edit)
        setTask(editSubmit.task.name)
    }, [open])

    const changeMap: ObjectType = {    
        task: setTask 
      }
        

    function submit(e: SyntheticEvent) {
        e.preventDefault()
        const taskData = {
            "name": task            
          }
        if(editSubmit.edit) {
          editSubmit.task.name = task;
          taskApi.updateTask(editSubmit.task, editSubmit.task.completed).then((res) => {            
            taskApi.getTasks().then((taskData) => {       
              dispatch(taskActions.set(taskData.tasks))
            });
            taskApi.getDashboardData().then((data) => {
              dispatch(taskActions.setDash(data))
            })
            handleClose();
          });
        } else {
          taskApi.addTask(taskData).then((res) => {            
            taskApi.getTasks().then((taskData) => {       
              dispatch(taskActions.set(taskData.tasks))
            });
            taskApi.getDashboardData().then((data) => {  
              dispatch(taskActions.setDash(data))
            })
            handleClose();
          });  
        }                  
    }
    
      function changeInputState({target: {name, value}}: ChangeEventType) {
        changeMap[name](value)
        taskUpdate(value);
      }
  
    const handleClose = () => {
      onClose();
    };
  
  
    return (
      <Dialog 
      PaperProps={{
        style: {
            width: '296px',
            height: '193px',
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            boxShadow: '0px 3px 6px #00000029',
            borderRadius: '12px',
            opacity: '1',
            justifyContent: 'center',
            alignItems: 'center'
        },
      }}
      onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">{editSubmit.edit ? `Edit Task` : `+ New Task`}</DialogTitle>
        <form onSubmit={submit} style={{'height': '185px'}} >
            <CssTextField
            autoFocus
            required          
            id="task"
            name="task"         
            variant="filled"
            placeholder="New Task"          
            InputProps={{disableUnderline: true}}
            className={classes.dialogContent}
            value={task}
            onChange={changeInputState}
            />
            <Button
            fullWidth
            className={classes.taskSubmit}
            type="submit"
            variant="contained"
            color="primary"
            data-testid="sign-in-button">
            {editSubmit.edit ? `Edit Task` : `+ New Task`}
            </Button>
        </form>
      </Dialog>
    );
  }

  export default NewTaskDialog
  