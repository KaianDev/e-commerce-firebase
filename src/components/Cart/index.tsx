import { useNavigate } from 'react-router-dom'
import { BsCartCheck } from 'react-icons/bs'

// Utilities
import { useCartContext } from '../../context/cart.context'
import { toRealPrice } from '../../helpers/toRealPrice'

// Components
import CustomButton from '../CustomButton'
import CartItem from '../CartItem'

// Styles
import * as C from './styles'

const Cart = () => {
  const navigate = useNavigate()
  const { isVisible, toggleCartVisible, products, productTotalPrice } =
    useCartContext()
  const handleGoToCheckoutClick = () => {
    navigate('/checkout')
    toggleCartVisible()
  }

  return (
    <C.CartContainer $isVisible={isVisible}>
      <C.CartScape onClick={toggleCartVisible} />
      <C.CartContent>
        <C.CartTitle>Seu Carrinho</C.CartTitle>

        <C.CartProductList>
          {products.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </C.CartProductList>

        {products.length > 0 && (
          <>
            <C.CartTotal>Total: {toRealPrice(productTotalPrice)}</C.CartTotal>

            <CustomButton onClick={handleGoToCheckoutClick}>
              <BsCartCheck />
              Ir para o checkout
            </CustomButton>
          </>
        )}

        {products.length === 0 && (
          <p>Seu Carrinho está vazio, vamos as compras?</p>
        )}
      </C.CartContent>
    </C.CartContainer>
  )
}

export default Cart
