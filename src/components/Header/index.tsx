import { BsCart } from 'react-icons/bs'

//Styles
import * as C from './styles'
import { Link } from 'react-router-dom'
import { User, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../config/firebase.config'
import { useState } from 'react'

const Header = () => {
  const [user, setUser] = useState<User | null>()

  onAuthStateChanged(auth, (user) => {
    setUser(user)
  })

  return (
    <C.HeaderContainer>
      <C.HeaderTitle>
        <Link to="/">Club Clothing</Link>
      </C.HeaderTitle>
      <C.HeaderNav>
        <C.HeaderNavContent>
          <C.HeaderNavItem>
            <a href="">Explorar</a>
          </C.HeaderNavItem>
          {!user && (
            <C.HeaderNavItem>
              <Link to="/login">Login</Link>
            </C.HeaderNavItem>
          )}
          {!user && (
            <C.HeaderNavItem>
              <Link to="/sign-up">Criar Conta</Link>
            </C.HeaderNavItem>
          )}
          {user && (
            <C.HeaderNavItem>
              <button onClick={() => signOut(auth)}>Sair</button>
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
