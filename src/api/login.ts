import axios from 'axios'

import {LoginTokenType} from 'types/loginToken'


const URL = `https://dev.teledirectasia.com:3092/login`

const axiosHeaders = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };
  

export function post(data): Promise<LoginTokenType[]> {
  return axios.post(URL, data, axiosHeaders).then((res) => res.data)
}
