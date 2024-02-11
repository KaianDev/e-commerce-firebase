import Product from './Product'

interface Category {
  id: string
  name: string
  imageUrl: string
  displayName: string
  products: Product[]
}

export default Category
