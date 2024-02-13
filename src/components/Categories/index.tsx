import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Styles
import * as C from './styles'

// Components
import Loading from '../Loading'

// Utilities
import { useCategoryContext } from '../../context/category.context'

const Categories = () => {
  const { fetchCategories, isLoading, categories } = useCategoryContext()
  const navigate = useNavigate()

  const handleCategoryExploreClick = (categoryId: string) => {
    navigate(`category/${categoryId}`)
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <C.CategoriesContainer>
      {isLoading && <Loading />}
      <C.CategoriesContent>
        {categories.map((item) => (
          <C.CategoryItem imageurl={item.imageUrl} key={item.id}>
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
