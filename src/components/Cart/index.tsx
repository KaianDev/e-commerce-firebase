import { BsCartCheck } from 'react-icons/bs'

// Utilities
import { useCartContext } from '../../context/cart.context'

// Components
import CustomButton from '../CustomButton'

// Styles
import * as C from './styles'
import CartItem from '../CartItem'

const Cart = () => {
  const { isVisible, toggleCartVisible, products } = useCartContext()

  return (
    <C.CartContainer isVisible={isVisible}>
      <C.CartScape onClick={toggleCartVisible} />
      <C.CartContent>
        <C.CartTitle>Seu Carrinho</C.CartTitle>

        <C.CartProductList>
          {products.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </C.CartProductList>

        <C.CartTotal>R$ 999,00</C.CartTotal>

        <CustomButton>
          <BsCartCheck />
          Ir para o checkout
        </CustomButton>
      </C.CartContent>
    </C.CartContainer>
  )
}

export default Cart
