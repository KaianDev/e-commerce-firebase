import User from '../../../types/User'
import userActionType from './user.action-types'
import { UserActions } from './user.actions'

interface InitialState {
  user: User | null
  isAuthenticated: boolean
}

const initialState: InitialState = {
  isAuthenticated: false,
  user: null,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const userReducer = (
  state = initialState,
  action: UserActions,
): InitialState => {
  switch (action.type) {
    case userActionType.LOGIN:
      return { ...state, user: action.payload, isAuthenticated: true }
    case userActionType.LOGOUT:
      return { ...state, user: null, isAuthenticated: false }
    default:
      return state
  }
}

export default userReducer
