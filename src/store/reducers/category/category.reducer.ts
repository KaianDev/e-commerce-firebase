/* eslint-disable @typescript-eslint/no-explicit-any */
import Category from '../../../types/Category'
import { categoryActionTypes } from './category.action-types'

interface InitialState {
  categories: Category[]
  isLoading: boolean
}

const initialState: InitialState = {
  categories: [],
  isLoading: false,
}

const categoryReducer = (state = initialState, action: any): InitialState => {
  switch (action.type) {
    case categoryActionTypes.FETCH_START:
      return { ...state, isLoading: true }

    case categoryActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        isLoading: false,
      }

    case categoryActionTypes.FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
      }

    default:
      return state
  }
}

export default categoryReducer
