import { BsCart } from 'react-icons/bs'

//Styles
import * as C from './styles'

const Header = () => {
  return (
    <C.HeaderContainer>
      <C.HeaderTitle>Club Clothing</C.HeaderTitle>
      <C.HeaderNav>
        <C.HeaderNavContent>
          <C.HeaderNavItem>
            <a href="">Explorar</a>
          </C.HeaderNavItem>
          <C.HeaderNavItem>
            <a href="">Login</a>
          </C.HeaderNavItem>
          <C.HeaderNavItem>
            <a href="">Criar Conta</a>
          </C.HeaderNavItem>
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
