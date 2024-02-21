import { FiPlus, FiMinus, FiX } from 'react-icons/fi'

// Utilities
import CartProduct from '../../types/CartProduct'
import { toRealPrice } from '../../helpers/toRealPrice'
import { useAppDispatch } from '../../hooks/redux.hooks'
import {
  decreaseProductQuantityToCart,
  increaseProductQuantityToCart,
  removeProductToCart,
} from '../../store/reducers/cart/cart.actions'

// Styles
import * as C from './styles'

interface CartItemProps {
  product: CartProduct
}

const CartItem = ({ product }: CartItemProps) => {
  const dispatch = useAppDispatch()

  const handleIncreaseQuantityClick = () => {
    dispatch(increaseProductQuantityToCart(product.id))
  }

  const handleDecreaseQuantityClick = () => {
    dispatch(decreaseProductQuantityToCart(product.id))
  }
  const handleRemoveProductToCartClick = () => {
    dispatch(removeProductToCart(product.id))
  }

  return (
    <C.CartItemContainer>
      <C.CartItemImage src={product.imageUrl} alt={product.imageUrl} />

      <C.CartInfoContainer>
        <C.CartItemTitle>{product.name}</C.CartItemTitle>

        <C.CartItemPrice>{toRealPrice(product.price)}</C.CartItemPrice>

        <C.CartQuantityButtonContainer>
          <C.CartButton onClick={handleDecreaseQuantityClick}>
            <FiMinus size={20} />
          </C.CartButton>

          <p>{product.quantity}</p>

          <C.CartButton onClick={handleIncreaseQuantityClick}>
            <FiPlus size={20} />
          </C.CartButton>
        </C.CartQuantityButtonContainer>
      </C.CartInfoContainer>

      <C.CartButton onClick={handleRemoveProductToCartClick}>
        <FiX size={30} />
      </C.CartButton>
    </C.CartItemContainer>
  )
}

export default CartItem
