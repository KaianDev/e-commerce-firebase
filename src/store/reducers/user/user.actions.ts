import User from '../../../types/User'
import userActionType from './user.action-types'

interface LoginUserAction {
  type: typeof userActionType.LOGIN
  payload: User
}

export const loginUser = (payload: User): LoginUserAction => ({
  type: userActionType.LOGIN,
  payload,
})

interface LogoutUserAction {
  type: typeof userActionType.LOGOUT
}

export const logoutUser = (): LogoutUserAction => ({
  type: userActionType.LOGOUT,
})

export type UserActions = LoginUserAction | LogoutUserAction
