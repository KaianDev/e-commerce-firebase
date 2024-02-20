import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/rootReducer'
import { AppDispatch } from '../store/store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

type DispatchFunc = () => AppDispatch

export const useAppDispatch: DispatchFunc = useDispatch
