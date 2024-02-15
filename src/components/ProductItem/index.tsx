import Product from '../../types/Product'
import { BsCartPlusFill } from 'react-icons/bs'

// Components
import CustomButton from '../CustomButton'

// Styles
import * as C from './styles'

// Utilities
import { useCartContext } from '../../context/cart.context'

interface ProductItemProps {
  product: Product
}

const ProductItem = ({ product }: ProductItemProps) => {
  const { addProductToCart } = useCartContext()

  const handleAddProductClick = () => addProductToCart(product)

  return (
    <C.ProductItemContainer>
      <C.ProductImage $imageUrl={product.imageUrl}>
        <C.ButtonContainer>
          <CustomButton onClick={handleAddProductClick}>
            <BsCartPlusFill size={20} />
            Adicionar ao Carrinho
          </CustomButton>
        </C.ButtonContainer>
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
