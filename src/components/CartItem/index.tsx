import { FiPlus, FiMinus, FiX } from 'react-icons/fi'

// Utilities
import CartProduct from '../../types/CartProduct'
import { toRealPrice } from '../../helpers/toRealPrice'
import { useCartContext } from '../../context/cart.context'

// Styles
import * as C from './styles'

interface CartItemProps {
  product: CartProduct
}

const CartItem = ({ product }: CartItemProps) => {
  const {
    increaseProductQuantity,
    decreaseProductQuantity,
    removeProductToCart,
  } = useCartContext()

  const handleIncreaseQuantityClick = () => increaseProductQuantity(product.id)
  const handleDecreaseQuantityClick = () => decreaseProductQuantity(product.id)
  const handleRemoveProductToCartClick = () => removeProductToCart(product.id)

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
