import { BsCartCheck } from 'react-icons/bs'

// Utilities
import { useCartContext } from '../../context/cart.context'
import { toRealPrice } from '../../helpers/toRealPrice'

// Components
import CartItem from '../CartItem'
import CustomButton from '../CustomButton'

// Styles
import * as C from './styles'

const Checkout = () => {
  const { productTotalPrice, products } = useCartContext()
  return (
    <C.CheckoutContainer>
      <C.CheckoutTitle>Checkout</C.CheckoutTitle>
      <C.CheckoutProducts>
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </C.CheckoutProducts>
      <C.CheckoutProductsTotalPrice>
        {toRealPrice(productTotalPrice)}
      </C.CheckoutProductsTotalPrice>
      <C.CheckoutButtonContainer>
        <CustomButton>
          <BsCartCheck size={20} />
          Finalizar a Compra
        </CustomButton>
      </C.CheckoutButtonContainer>
    </C.CheckoutContainer>
  )
}

export default Checkout
