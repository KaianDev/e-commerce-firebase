import styled from 'styled-components'

interface CartContainerProps {
  $isVisible: boolean
}

export const CartContainer = styled.div<CartContainerProps>`
  position: fixed;
  inset: 0 0 0 0;
  display: flex;
  flex-direction: row;
  background-color: #00000077;
  visibility: ${(props) => (props.$isVisible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transition: all 300ms;
`

export const CartScape = styled.div`
  flex: 1;
`

export const CartContent = styled.div`
  width: 450px;
  overflow-y: auto;
  background-color: #fff;
  box-shadow: 5px 0 5px #000;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`

export const CartTitle = styled.strong`
  font-size: 1.3125rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const CartProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const CartTotal = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
`
