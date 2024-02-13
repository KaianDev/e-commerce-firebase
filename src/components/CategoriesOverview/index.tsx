import { useEffect } from 'react'

// Components
import CategoryOverview from '../CategoryOverview'
import Loading from '../Loading'

// Styles
import { CategoryOverviewContainer } from './styles'

// Utilities
import { useCategoryContext } from '../../context/category.context'

const CategoriesOverview = () => {
  const { categories, fetchCategories, isLoading } = useCategoryContext()

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories()
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
