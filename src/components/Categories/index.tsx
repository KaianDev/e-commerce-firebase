/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Styles
import * as C from './styles'

// Components
import Loading from '../Loading'

// Utilities
import { useDispatch } from 'react-redux'
import { fetchCategories } from '../../store/reducers/category/category.actions'
import { useAppSelector } from '../../hooks/redux.hooks'

const Categories = () => {
  const { categories, isLoading } = useAppSelector(
    (rootState) => rootState.categoryReducer,
  )
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleCategoryExploreClick = (categoryId: string) => {
    navigate(`category/${categoryId}`)
  }

  useEffect(() => {
    dispatch(fetchCategories() as any)
  }, [])

  return (
    <C.CategoriesContainer>
      {isLoading && <Loading />}
      <C.CategoriesContent>
        {categories.map((item) => (
          <C.CategoryItem $imageUrl={item.imageUrl} key={item.id}>
            <C.CategoryItemContent
              onClick={() => handleCategoryExploreClick(item.id)}
            >
              <strong>{item.displayName}</strong>
              <p>Explorar</p>
            </C.CategoryItemContent>
          </C.CategoryItem>
        ))}
      </C.CategoriesContent>
    </C.CategoriesContainer>
  )
}

export default Categories
