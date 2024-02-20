import { combineReducers } from 'redux'

import userReducer from './reducers/user/user.reducer'

const rootReducer = combineReducers({
  userReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
