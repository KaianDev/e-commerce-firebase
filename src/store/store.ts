/* eslint-disable @typescript-eslint/ban-ts-comment */
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import rootReducer from './rootReducer'
// @ts-ignore
import storage from 'redux-persist/lib/storage'
// @ts-ignore
import persistReducer from 'redux-persist/es/persistReducer'
// @ts-ignore
import persistStore from 'redux-persist/es/persistStore'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartReducer'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer, applyMiddleware(logger))
export const persistedStore = persistStore(store)

export type AppDispatch = typeof store.dispatch
export default store
