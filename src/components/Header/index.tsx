import { BsCart } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { useSelector, useDispatch } from 'react-redux'

// Styles
import * as C from './styles'

// Utilities
import { auth } from '../../config/firebase.config'
import { useCartContext } from '../../context/cart.context'

const Header = () => {
  const { isAuthenticated } = useSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (rootState: any) => rootState.userReducer,
  )
  const { toggleCartVisible, productTotalQuantity } = useCartContext()
  const dispatch = useDispatch()
  const handleSignOutClick = () => {
    signOut(auth)
    dispatch({ type: 'LOGOUT_USER' })
  }

  return (
    <C.HeaderContainer>
      <C.HeaderTitle>
        <Link to="/">Club Clothing</Link>
      </C.HeaderTitle>
      <C.HeaderNav>
        <C.HeaderNavContent>
          <C.HeaderNavItem>
            <Link to="/explore">Explorar</Link>
          </C.HeaderNavItem>
          {!isAuthenticated && (
            <>
              <C.HeaderNavItem>
                <Link to="/login">Login</Link>
              </C.HeaderNavItem>
              <C.HeaderNavItem>
                <Link to="/sign-up">Criar Conta</Link>
              </C.HeaderNavItem>
            </>
          )}

          {isAuthenticated && (
            <C.HeaderNavItem>
              <C.HeaderLogoutButton onClick={handleSignOutClick}>
                Sair
              </C.HeaderLogoutButton>
            </C.HeaderNavItem>
          )}
          <C.HeaderNavItem>
            <C.HeaderCartButton onClick={toggleCartVisible}>
              <BsCart size={25} /> <span>{productTotalQuantity}</span>
            </C.HeaderCartButton>
          </C.HeaderNavItem>
        </C.HeaderNavContent>
      </C.HeaderNav>
    </C.HeaderContainer>
  )
}

export default Header
