import { BsCart } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'

// Styles
import * as C from './styles'

// Utilities
import { auth } from '../../config/firebase.config'
import { useUserContext } from '../../context/user.context'

const Header = () => {
  const { isAuthenticated } = useUserContext()

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
              <C.HeaderLogoutButton onClick={() => signOut(auth)}>
                Sair
              </C.HeaderLogoutButton>
            </C.HeaderNavItem>
          )}
          <C.HeaderNavItem>
            <C.HeaderCartButton>
              <BsCart size={25} /> <span>5</span>
            </C.HeaderCartButton>
          </C.HeaderNavItem>
        </C.HeaderNavContent>
      </C.HeaderNav>
    </C.HeaderContainer>
  )
}

export default Header
