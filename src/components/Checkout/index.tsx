import { useState } from 'react'
import { BsCartCheck } from 'react-icons/bs'
import axios from 'axios'

// Utilities
import { toRealPrice } from '../../helpers/toRealPrice'
import { useAppSelector } from '../../hooks/redux.hooks'
import { selectProductsTotalPrice } from '../../store/reducers/cart/cart.selector'

// Components
import CartItem from '../CartItem'
import CustomButton from '../CustomButton'
import config from '../../config/env.config'
import Loading from '../Loading'

// Styles
import * as C from './styles'

const Checkout = () => {
  const productTotalPrice = useAppSelector(selectProductsTotalPrice)
  const [isLoading, setIsLoading] = useState(false)
  const { products } = useAppSelector((rootState) => rootState.cartReducer)

  const handleFinishPurchaseClick = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.post(
        `${config.apiUrl}/create-checkout-session`,
        { products },
      )
      window.location.href = data.url
    } catch (error) {
      console.log({ error })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <C.CheckoutContainer>
      {isLoading && <Loading />}
      <C.CheckoutTitle>Checkout</C.CheckoutTitle>
      <C.CheckoutProducts>
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </C.CheckoutProducts>
      <C.CheckoutProductsTotalPrice>
        {toRealPrice(productTotalPrice)}
      </C.CheckoutProductsTotalPrice>
      <CustomButton onClick={handleFinishPurchaseClick}>
        <BsCartCheck size={20} />
        Finalizar a Compra
      </CustomButton>
    </C.CheckoutContainer>
  )
}

export default Checkout
