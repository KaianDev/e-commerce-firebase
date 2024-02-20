import User from '../../../types/User'
import userActionType from './user.action-types'

export const login = (payload: User) => ({
  type: userActionType.LOGIN,
  payload,
})

export const logout = () => ({
  type: userActionType.LOGOUT,
})
