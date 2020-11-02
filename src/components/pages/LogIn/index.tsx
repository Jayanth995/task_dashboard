import React from 'react'

import LogInContent from './Content'
import * as loginApi from 'api/login'
import * as userActions from 'store/user/actions'
import * as userStorage from 'utils/userStorage'
import {useDispatch} from 'store'

const LogInContainer = () => {
  const dispatch = useDispatch()

 function authenticate(loginName: string, loginId: string) {    
    const authData = {
      name: loginName,
      apiKey: loginId
    }

    loginApi.post(authData).then((res) => {        
        const tokenData = {
            loginName: res.token.name,
            token: res.token.token,
            image: res.image
        }
        userStorage.save(tokenData);
        dispatch(userActions.set(tokenData))
    });
}

  return <LogInContent authenticate={authenticate} />
}

export default LogInContainer
