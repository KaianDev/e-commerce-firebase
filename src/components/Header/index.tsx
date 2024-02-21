import { BsCart } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'

// Styles
import * as C from './styles'

// Utilities
import { auth } from '../../config/firebase.config'
import { logoutUser } from '../../store/reducers/user/user.actions'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hooks'
import { toggleVisibility } from '../../store/reducers/cart/cart.actions'
import { selectProductsTotalQuantity } from '../../store/reducers/cart/cart.selector'

const Header = () => {
  const { isAuthenticated } = useAppSelector(
    (rootState) => rootState.userReducer,
  )

  const productTotalQuantity = useAppSelector(selectProductsTotalQuantity)
  const dispatch = useAppDispatch()

  const handleSignOutClick = () => {
    signOut(auth)
    dispatch(logoutUser())
  }

  const handleToggleCartVisible = () => {
    dispatch(toggleVisibility())
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
            <C.HeaderCartButton onClick={handleToggleCartVisible}>
              <BsCart size={25} /> <span>{productTotalQuantity}</span>
            </C.HeaderCartButton>
          </C.HeaderNavItem>
        </C.HeaderNavContent>
      </C.HeaderNav>
    </C.HeaderContainer>
  )
}

export default Header
