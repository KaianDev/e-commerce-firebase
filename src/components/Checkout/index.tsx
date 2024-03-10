import { useEffect, useState } from 'react'
import { BsCartCheck } from 'react-icons/bs'
import axios from 'axios'

// Utilities
import { toRealPrice } from '../../helpers/toRealPrice'
import { useAppSelector } from '../../hooks/redux.hooks'
import {
  selectProductsTotalPrice,
  selectProductsTotalQuantity,
} from '../../store/reducers/cart/cart.selector'

// Components
import CartItem from '../CartItem'
import CustomButton from '../CustomButton'
import config from '../../config/env.config'
import Loading from '../Loading'

// Styles
import * as C from './styles'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
  const productTotalPrice = useAppSelector(selectProductsTotalPrice)
  const productTotalQuantity = useAppSelector(selectProductsTotalQuantity)
  const [isLoading, setIsLoading] = useState(false)
  const { products } = useAppSelector((rootState) => rootState.cartReducer)
  const navigate = useNavigate()

  useEffect(() => {
    if (productTotalQuantity === 0) {
      navigate('/')
    }
  }, [products])

  const handleFinishPurchaseClick = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.post(
        `${config.apiUrl}/create-checkout-session`,
        { products },
      )
      console.log(data)
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
