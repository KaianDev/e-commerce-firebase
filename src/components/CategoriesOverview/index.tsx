/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

// Components
import CategoryOverview from '../CategoryOverview'
import Loading from '../Loading'

// Styles
import { CategoryOverviewContainer } from './styles'

// Utilities
import { fetchCategories } from '../../store/reducers/category/category.actions'
import { useAppSelector } from '../../hooks/redux.hooks'

const CategoriesOverview = () => {
  const { categories, isLoading } = useAppSelector(
    (rootState) => rootState.categoryReducer,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories() as any)
    }
  }, [])

  return (
    <CategoryOverviewContainer>
      {isLoading && <Loading />}
      {categories.map((category) => (
        <CategoryOverview key={category.id} category={category} />
      ))}
    </CategoryOverviewContainer>
  )
}

export default CategoriesOverview
