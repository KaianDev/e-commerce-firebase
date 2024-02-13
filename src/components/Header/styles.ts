import styled from 'styled-components'
import Colors from '../../theme/theme.colors'

export const HeaderContainer = styled.header`
  display: flex;
  padding: 1.25rem;
  justify-content: space-between;
  align-items: center;
  background-color: ${Colors.primary};
  color: ${Colors.text.light};
`

export const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  text-transform: uppercase;
`

export const HeaderNav = styled.nav``

export const HeaderNavContent = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
`

export const HeaderNavItem = styled.li`
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    filter: brightness(0.8);
  }
`

export const HeaderLogoutButton = styled.button`
  font-size: 1rem;
  font-weight: 600;
  padding: 0rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  background-color: firebrick;
  border-radius: 1rem;
`

export const HeaderCartButton = styled.button`
  font-weight: 600;
  gap: 0.25rem;
  display: flex;
  align-items: center;
`
