import { applyMiddleware, createStore } from 'redux'
import rootReducer from './rootReducer'
import logger from 'redux-logger'

const store = createStore(rootReducer, applyMiddleware(logger))

export type AppDispatch = typeof store.dispatch
export default store
