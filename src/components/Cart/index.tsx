import { useNavigate } from 'react-router-dom'
import { BsCartCheck } from 'react-icons/bs'

// Utilities
import { toRealPrice } from '../../helpers/toRealPrice'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hooks'
import { toggleVisibility } from '../../store/reducers/cart/cart.actions'
import { selectProductsTotalPrice } from '../../store/reducers/cart/cart.selector'

// Components
import CustomButton from '../CustomButton'
import CartItem from '../CartItem'

// Styles
import * as C from './styles'

const Cart = () => {
  const navigate = useNavigate()
  const productTotalPrice = useAppSelector(selectProductsTotalPrice)

  const { isVisible, products } = useAppSelector(
    (rootState) => rootState.cartReducer,
  )

  const dispatch = useAppDispatch()

  const handleGoToCheckoutClick = () => {
    navigate('/checkout')
    dispatch(toggleVisibility())
  }

  const handleToggleCartVisible = () => dispatch(toggleVisibility())

  return (
    <C.CartContainer $isVisible={isVisible}>
      <C.CartScape onClick={handleToggleCartVisible} />
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
