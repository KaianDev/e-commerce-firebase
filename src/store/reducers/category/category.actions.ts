import { Dispatch } from 'redux'

import Category from '../../../types/Category'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../config/firebase.config'
import { categoryConverter } from '../../../converters/firestore.converters'
import { categoryActionTypes } from './category.action-types'

export const fetchCategories = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: categoryActionTypes.FETCH_START })
    try {
      const categoryFromFirestore: Category[] = []
      const querySnapshot = await getDocs(
        collection(db, 'categories').withConverter(categoryConverter),
      )
      querySnapshot.forEach((doc) => {
        categoryFromFirestore.push(doc.data())
      })

      dispatch({
        type: categoryActionTypes.FETCH_SUCCESS,
        payload: categoryFromFirestore,
      })
    } catch (error) {
      dispatch({ type: categoryActionTypes.FETCH_FAILURE })
    }
  }
}
