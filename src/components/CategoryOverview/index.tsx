import Category from '../../types/Category'

// Components
import ProductItem from '../ProductItem'

// Styles
import * as C from './styles'

interface CategoryOverviewItemProps {
  category: Category
}

const CategoryOverviewItem = ({ category }: CategoryOverviewItemProps) => {
  return (
    <C.CategoryOverviewContainer>
      <C.CategoryOverviewTitle>{category.displayName}</C.CategoryOverviewTitle>
      <C.ProductList>
        {category.products.slice(0, 4).map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </C.ProductList>
    </C.CategoryOverviewContainer>
  )
}

export default CategoryOverviewItem
