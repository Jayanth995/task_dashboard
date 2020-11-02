import React,{SyntheticEvent, useState} from 'react'
import {Avatar, Button, Card, CardHeader, CardMedia, CardActions, Typography, TextField} from 'components/shared'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import NewTaskDialog from '../New_task'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Pie } from 'react-chartjs-2';
import {taskType} from 'types/task'
import * as taskApi from 'api/task'
import {DashboardType} from 'types/dashboard'
import useStyles from './styles'
import {useDispatch,useSelector} from 'store'
import * as taskActions from 'store/task/actions'
import InputAdornment from '@material-ui/core/InputAdornment';
import Box from '@material-ui/core/Box';
import {withStyles} from '@material-ui/core/styles'
import {ChangeEventType} from 'types/events'
import {ObjectType} from 'types/object'


type Props = {
    tasks: taskType[] | null
    dashData: DashboardType[] | null
    removeTask: (id: number) => void
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

const DashboardContent = ({tasks,dashData,removeTask} : Props) => {
  const dispatch = useDispatch()
  const classes = useStyles()
  let state;

  const [open, setOpen] = useState(false);
  const [task, setTask] = useState('')  
  const [search,setSearch] = useState('')
  const [editSubmit,setEditSubmit] = useState({edit: false, task: null})

    const handleClickOpen = (type,task) => {
        setOpen(true);
        if(type == 'edit') {          
          setEditSubmit({edit: true, task: task})
        } else  {
          setTask('');
          setEditSubmit({edit: false, task: null})
        }        
      };
    
      const handleClose = () => {
        setOpen(false);
        setTask('')
      };

      const changeMap: ObjectType = {    
        task: setTask,   
        search: setSearch
      }
    
    function changeInputState({target: {name, value}}: ChangeEventType) {
      changeMap[name](value);
      if(name == 'search') {        
        dispatch(taskActions.searchTask(value))
      }
    }

  function handleCheckboxChange(task) {       
    let completed = !task.completed
    taskApi.updateTask(task, completed).then((res) => {      
      taskApi.getTasks().then((taskData) => {       
        dispatch(taskActions.set(taskData.tasks))
      });
      taskApi.getDashboardData().then((data) => {
        dispatch(taskActions.setDash(data))
      })
    });
  }

  function handleDelete(task) {
    taskApi.deleteTask(task).then((res) => {
      taskApi.getTasks().then((taskData) => {       
        dispatch(taskActions.set(taskData.tasks))
      });
      taskApi.getDashboardData().then((data) => {
        dispatch(taskActions.setDash(data))
      })
    })
  }

  if(dashData) {
    state = {
        labels: ['Completed Tasks', 'Incompleted Tasks'],
        datasets: [
          {
            label: 'Rainfall',
            backgroundColor: [
              '#E8ECEC',
              '#5285EC'
            ],
            hoverBackgroundColor: [
                '#E8ECEC',
                '#5285EC'
            ],
            data: [dashData.tasksCompleted, parseInt(dashData.totalTasks - dashData.tasksCompleted)]
          }
        ]
      }
  }  
 

  return (
      <React.Fragment>
        
          <Grid item xs={12} md={4} lg={3}>
              <Paper className={classes.paper}>
                  <Typography  variant="h6" style={{padding : "24px 0 0 24px"}} >
                      Tasks Completed
                  </Typography>
                  <Grid style={{display:'flex',margin: '32px 0 0 24px'}}>
                  <Typography style={{color:'#5285EC'}} variant="h2">
                      {dashData && dashData.tasksCompleted}
                  </Typography>
                  <Typography style={{paddingTop:'40px'}} variant="h5">
                          /
                  </Typography>
                  <Typography style={{paddingTop:'40px'}} variant="h5">
                      {dashData && dashData.totalTasks}
                  </Typography>
                  </Grid>
                
              </Paper>
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
              <Paper className={classes.paper}>
                  <Typography variant="h6" style={{padding : "24px 0 0 24px"}}>
                      Latest created Tasks
                  </Typography>
                  <List style={{paddingTop:'0px'}}>
                      {dashData && dashData.latestTasks.map((task) => (
                        <ListItem key={task.name}>
                          &bull;<ListItemText style={{marginLeft:'5px'}} className={task.completed ? classes.striker : ''} primary={task.name} />
                        </ListItem>
                      ))}
                  </List>
              </Paper>
          </Grid>

          <Grid item justify="center" align="center" xs={12} md={4} lg={3}>
            <Paper className={classes.paper}>
              {dashData && 
              <Pie data={state}
                   options={{
                   title:{
                    display:true,              
                    fontSize:20
                  },
                  legend:{
                    display:true,
                    position:'right'
                  }
                }}
              />}
            </Paper>
          </Grid>


          <Box display="flex" p={1} width="100%" className={classes.mobileBox}>
            <Box p={1} flexGrow={1} >
              <Typography variant="h5" >
                  Tasks
              </Typography>
            </Box>
            <Box p={1} >
              <CssTextField                           
                  id="search"
                  name="search"         
                  variant="filled"
                  placeholder="Search"           
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon/>
                      </InputAdornment>
                    ),
                    disableUnderline: true
                  }}
                  value={search}
                  onChange={changeInputState}
              />
            </Box>
            <Box p={1} >
            <Button variant="contained" color="primary" onClick={() => handleClickOpen('new')}>
                  + New Task
              </Button>
            </Box>
          </Box>

          <Grid item xs={12} justify="center" align="center">
            <Paper className={classes.tablePaper}>
              <Table size="small">               
                <TableBody>
                  {tasks.map((task) => (
                      <TableRow key={task._id}>
                      <TableCell style={{width:'25px'}}> 
                      <Checkbox
                        defaultChecked
                        checked={task.completed}  
                        onChange={() => handleCheckboxChange(task)}
                        color="default"                      
                      />                  
                      </TableCell>
                      <TableCell className={task.completed ? classes.striker : ''}>{task.name}</TableCell>
                      <TableCell style={{width:'25px'}}>
                          <IconButton  aria-label="Edit" >
                              <EditIcon onClick={() => handleClickOpen('edit',task)}/>
                          </IconButton>
                      </TableCell>
                      <TableCell style={{width:'25px'}}>
                          <IconButton  aria-label="Delete">
                              <DeleteIcon onClick={() => handleDelete(task._id)}/>
                          </IconButton>
                      </TableCell>                    
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
              </Paper>
            </Grid>
              
            <NewTaskDialog onClose={handleClose} open={open} editSubmit={editSubmit} />

      </React.Fragment>
  )
}

export default DashboardContent
