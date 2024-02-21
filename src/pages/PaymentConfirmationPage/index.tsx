import { useNavigate, useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineHome,
} from 'react-icons/ai'

// Components
import Header from '../../components/Header'
import CustomButton from '../../components/CustomButton'

// Styles
import * as C from './styles'

// Utilities
import Colors from '../../theme/theme.colors'
import { useAppDispatch } from '../../hooks/redux.hooks'
import { clearCart } from '../../store/reducers/cart/cart.actions'

const PaymentConfirmationPage = () => {
  const [searchParams] = useSearchParams()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const isCanceled = searchParams.get('canceled') === 'true'
  const status = searchParams.get('success')

  const handleGoToHome = () => navigate('/')

  useEffect(() => {
    if (status === 'true') {
      dispatch(clearCart())
    }
  }, [status])

  return (
    <>
      <Header />
      <C.PaymentConfirmationContainer>
        <C.PaymentConfirmationContent>
          {status === 'true' && (
            <>
              <AiOutlineCheckCircle size={120} color={Colors.success} />
              <strong>Sua compra foi finalizada com sucesso!</strong>
            </>
          )}

          {(status === 'false' || isCanceled) && (
            <>
              <AiOutlineCloseCircle size={120} color={Colors.error} />
              <strong>
                Ocorreu um erro ao finalizar sua compra. Por favor, tente
                novamente.
              </strong>
            </>
          )}

          <CustomButton onClick={handleGoToHome}>
            <AiOutlineHome />
            Ir para a Página Inicial
          </CustomButton>
        </C.PaymentConfirmationContent>
      </C.PaymentConfirmationContainer>
    </>
  )
}

export default PaymentConfirmationPage
