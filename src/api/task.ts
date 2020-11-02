import axios from 'axios'

import {NewTaskType} from 'types/newTask'
import {taskListType} from 'types/taskList'
import * as userStorage from 'utils/userStorage'
import { DashboardType } from 'types/dashboard';


const user = userStorage.get();

const axiosHeaders = {
    headers: {        
        "Access-Control-Allow-Origin": "*"      
    }
  };


export function addTask(taskData): Promise<NewTaskType[]> {   
    let URL = `https://dev.teledirectasia.com:3092/tasks` 
    const params = new URLSearchParams();
    params.append("name", taskData.name);
    axiosHeaders.headers["Authorization"] = user.token;
    axiosHeaders.headers["Content-Type"] =  'application/x-www-form-urlencoded';
    return axios.post(URL, params, axiosHeaders).then((res) => res.data)
}

export function getTasks() : Promise<taskListType[]> {
    let URL = `https://dev.teledirectasia.com:3092/tasks`;
    axiosHeaders.headers["Authorization"] = user.token;
    return axios.get(URL, axiosHeaders).then((res) => res.data)
  }

  export function getDashboardData() : Promise<DashboardType[]> {
    let URL = `https://dev.teledirectasia.com:3092/dashboard`;
    axiosHeaders.headers["Authorization"] = user.token;
    return axios.get(URL, axiosHeaders).then((res) => res.data)
  }

  export function updateTask(task, completed) : Promise<TaskType[]> {
    let URL = `https://dev.teledirectasia.com:3092/tasks/${task._id}`;
    const params = new URLSearchParams();
    params.append("name", task.name);
    params.append("completed", completed);
    axiosHeaders.headers["Authorization"] = user.token;
    axiosHeaders.headers["Content-Type"] =  'application/x-www-form-urlencoded';
    return axios.put(URL, params, axiosHeaders).then((res) => res.data)
  }

  export function deleteTask(id) : Promise<TaskType[]> {
    let URL = `https://dev.teledirectasia.com:3092/tasks/${id}`;
    axiosHeaders.headers["Authorization"] = user.token;
    return axios.delete(URL, axiosHeaders).then((res) => res.data)
  }

