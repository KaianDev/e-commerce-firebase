import { useParams } from 'react-router-dom'
import Header from '../../components/Header'

// Components
import CategoryDetails from '../../components/CategoryDetails'

const CategoryDetailsPage = () => {
  const params = useParams()

  if (!params.id) return null

  return (
    <>
      <Header />
      <CategoryDetails categoryId={params.id} />
    </>
  )
}

export default CategoryDetailsPage
