import { FiPlus, FiMinus, FiX } from 'react-icons/fi'

// Utilities
import CartProduct from '../../types/CartProduct'

// Styles
import * as C from './styles'

interface CartItemProps {
  product: CartProduct
}

const CartItem = ({ product }: CartItemProps) => {
  return (
    <C.CartItemContainer>
      <C.CartItemImage src={product.imageUrl} alt={product.imageUrl} />

      <C.CartInfoContainer>
        <C.CartItemTitle>{product.name}</C.CartItemTitle>

        <C.CartItemPrice>
          {(product.price * product.quantity).toLocaleString('pt-br', {
            currency: 'brl',
            style: 'currency',
          })}
        </C.CartItemPrice>

        <C.CartQuantityButtonContainer>
          <C.CartButton>
            <FiMinus size={20} />
          </C.CartButton>

          <p>{product.quantity}</p>

          <C.CartButton>
            <FiPlus size={20} />
          </C.CartButton>
        </C.CartQuantityButtonContainer>
      </C.CartInfoContainer>

      <C.CartButton>
        <FiX size={30} />
      </C.CartButton>
    </C.CartItemContainer>
  )
}

export default CartItem
