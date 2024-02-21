import { combineReducers } from 'redux'

import userReducer from './reducers/user/user.reducer'
import cartReducer from './reducers/cart/cart.reducer'

const rootReducer = combineReducers({
  userReducer,
  cartReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
