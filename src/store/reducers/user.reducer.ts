import User from '../../types/User'

interface InitialState {
  user: User | null
  isAuthenticated: boolean
}

const initialState: InitialState = {
  isAuthenticated: false,
  user: null,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return { ...state, user: action.payload, isAuthenticated: true }
    case 'LOGOUT_USER':
      return { ...state, user: null, isAuthenticated: false }
    default:
      return state
  }
}

export default userReducer
