import { FiChevronLeft } from 'react-icons/fi'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'

// Components
import ProductItem from '../ProductItem'
import Loading from '../Loading'

// Styles
import * as C from './styles'

// Utilities
import Category from '../../types/Category'
import { db } from '../../config/firebase.config'
import { categoryConverter } from '../../converters/firestore.converters'
import { useNavigate } from 'react-router-dom'

interface CategoryDetailsProps {
  categoryId: string
}

const CategoryDetails = ({ categoryId }: CategoryDetailsProps) => {
  const [category, setCategory] = useState<Category | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleBackClick = () => navigate('/')

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        setIsLoading(true)
        const querySnapshot = await getDocs(
          query(
            collection(db, 'categories').withConverter(categoryConverter),
            where('id', '==', categoryId),
          ),
        )
        const categoryItem = querySnapshot.docs[0]?.data()
        setCategory(categoryItem)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchCategory()
  }, [])

  return (
    <C.CategoryDetailsContainer>
      {isLoading && <Loading />}
      <C.CategoryDetailsTitleContainer onClick={handleBackClick}>
        <FiChevronLeft size={30} />
        <C.CategoryDetailsTitle>
          Explorar {category?.displayName}
        </C.CategoryDetailsTitle>
      </C.CategoryDetailsTitleContainer>

      <C.ProductContainer>
        {category?.products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </C.ProductContainer>
    </C.CategoryDetailsContainer>
  )
}

export default CategoryDetails
