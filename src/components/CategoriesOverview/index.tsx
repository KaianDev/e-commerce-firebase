import { useEffect } from 'react'
import { useCategoryContext } from '../../context/category.context'
import { CategoryOverviewContainer } from './styles'

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
        <p key={category.id}>{category.displayName}</p>
      ))}
    </CategoryOverviewContainer>
  )
}

export default CategoriesOverview
