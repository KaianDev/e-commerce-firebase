import { useEffect } from 'react'

// Styles
import * as C from './styles'

// Components
import Loading from '../Loading'

// Utilities
import { useCategoryContext } from '../../context/category.context'

const Categories = () => {
  const { fetchCategories, isLoading, categories } = useCategoryContext()

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <C.CategoriesContainer>
      {isLoading && <Loading />}
      <C.CategoriesContent>
        {categories.map((item) => (
          <C.CategoryItem imageUrl={item.imageUrl} key={item.id}>
            <C.CategoryItemContent>
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
