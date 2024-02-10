import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  padding: 1.25rem;
  justify-content: space-between;
  align-items: center;
  background-color: #212529;
  color: #f8f9fa;
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
`

export const HeaderCartButton = styled.button`
  font-weight: 600;
  gap: 0.25rem;
  display: flex;
  align-items: center;
`
