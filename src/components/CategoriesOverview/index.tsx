import { useEffect } from 'react'

// Components
import CategoryOverview from '../CategoryOverview'

// Styles
import { CategoryOverviewContainer } from './styles'

// Utilities
import { useCategoryContext } from '../../context/category.context'

const CategoriesOverview = () => {
  const { categories, fetchCategories } = useCategoryContext()

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories()
    }
  }, [])

  return (
    <CategoryOverviewContainer>
      {categories.map((category) => (
        <CategoryOverview key={category.id} category={category} />
      ))}
    </CategoryOverviewContainer>
  )
}

export default CategoriesOverview
