import Product from '../../types/Product'
import { BsCartPlusFill } from 'react-icons/bs'

// Components
import CustomButton from '../CustomButton'

// Styles
import * as C from './styles'

// Utilities
import { useAppDispatch } from '../../hooks/redux.hooks'
import { addProductToCart } from '../../store/reducers/cart/cart.actions'

interface ProductItemProps {
  product: Product
}

const ProductItem = ({ product }: ProductItemProps) => {
  const dispatch = useAppDispatch()
  const handleAddProductClick = () => {
    dispatch(addProductToCart(product))
  }

  return (
    <C.ProductItemContainer>
      <C.ProductImage $imageUrl={product.imageUrl}>
        <CustomButton onClick={handleAddProductClick}>
          <BsCartPlusFill size={20} />
          Adicionar ao Carrinho
        </CustomButton>
      </C.ProductImage>

      <C.ProductInfo>
        <p>{product.name}</p>
        <p>
          {product.price.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'brl',
          })}
        </p>
      </C.ProductInfo>
    </C.ProductItemContainer>
  )
}

export default ProductItem
