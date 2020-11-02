import {UserType} from 'types/user'

export type UserStateType = { 
  loginName: string | null,
  token: string | null,
  image: string | null
}

export type SetActionType = {
  type: 'USER:SET'
  user: UserType
}

export type RemoveActionType = {
  type: 'USER:REMOVE'
}
